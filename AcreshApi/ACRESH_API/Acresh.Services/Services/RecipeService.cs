using Acresh.Services.DBRepository.Contracts;
using Acresh.Services.Services.Contracts;
using AutoMapper;
using Common.AutomapperConfigurations;
using DataTransferObjects.Cauldron;
using DataTransferObjects.Recipes;
using DataTransferObjects.Recipes.Details;
using Infrastructure.Models;
using Infrastructure.Models.Enumerations;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Acresh.Services.Services
{
    public class RecipeService : IRecipesService
    {
        private readonly IRepository<Recipe> recipeRepo;

        private readonly IMapper mapper;
        private readonly IRepository<Tag> tagRepo;

        public RecipeService(IRepository<Recipe> recipeRepo, IMapper mapper, IRepository<Tag> tagRepo)
        {
            this.recipeRepo = recipeRepo;
            this.mapper = mapper;
            this.tagRepo = tagRepo;
        }

        public async Task<bool> FavUnfav(string id, string userId)
        {
            Recipe recipeFd = await recipeRepo.All().Include(x => x.RecipeFavorisers).FirstOrDefaultAsync(r => r.Id == id);
            if (recipeFd is null) throw new ArgumentException("Recipe with given id not found in database!");

            UserFavouriteRecipe recipeFavFd = recipeFd.RecipeFavorisers.FirstOrDefault(f => f.UserId == userId);
            if (recipeFavFd is null)
            {
                recipeFd.RecipeFavorisers.Add(new UserFavouriteRecipe { UserId = userId });
                await recipeRepo.SaveChangesAsync();
                return true;
            }
            recipeFavFd.DateOfLastEdit = DateTime.UtcNow;
            recipeFavFd.IsDeleted = !recipeFavFd.IsDeleted;
            await recipeRepo.SaveChangesAsync();
            return !recipeFavFd.IsDeleted;
        }

        public IQueryable<RecipeCardDTOout> GetPrivateRecipeCarts(string criteria, string myId)
        {
            Dictionary<string, Func<IQueryable<Recipe>, IQueryable<Recipe>>> sortCriteria = new Dictionary<string, Func<IQueryable<Recipe>, IQueryable<Recipe>>>
            {
                ["my-favourite"] = (x) => x.Where(x => x.RecipeFavorisers.Any(rf => !rf.IsDeleted && rf.UserId == myId))
                .OrderByDescending(x => x.RecipeFavorisers.Where(rf => rf.UserId == myId).First().DateOfLastEdit),
                ["my-commented"] = (x) => x.Where(x => x.Comments.Any(rc => !rc.IsDeleted && rc.AuthorId == myId))
                                         .OrderByDescending(x => x.Comments.Where(rc => !rc.IsDeleted && rc.AuthorId == myId).Select(rc => rc.DateOfCreation)
                                         .OrderByDescending(d => d).First()),
            };
            if (sortCriteria.ContainsKey(criteria))
            {
                return sortCriteria[criteria](recipeRepo.All()).Where(x => !x.IsDeleted).To<RecipeCardDTOout>();
            }
            return null;
        }

        public IQueryable<RecipeCardDTOout> GetRecipeCards(string criteria, string val)
        {
            Func<IQueryable<Recipe>, IQueryable<Recipe>> tagNameMatches = (x) =>
            {
                var phrases = val.ToLower().Split(new[] { ',', ' ', ';', '_', '\t' }, StringSplitOptions.RemoveEmptyEntries);
                HashSet<IQueryable<string>> ids = new HashSet<IQueryable<string>>();
                foreach (var phrase in phrases)
                {
                    ids.Add(x.Where(x => !x.IsDeleted && (x.Name.ToLower().Contains(phrase) || x.RecipeTags.Any(t => t.Tag.Name.ToLower() == phrase))).Select(x => x.Id));
                }
                var allowdIds = ids.SelectMany(x => x).Distinct();
                return x.Where(x => allowdIds.Contains(x.Id));
            };

            Dictionary<string, Func<IQueryable<Recipe>, IQueryable<Recipe>>> sortCriteria = new Dictionary<string, Func<IQueryable<Recipe>, IQueryable<Recipe>>>
            {
                ["search"] = tagNameMatches,
                ["ingredients"] = (x) => this.GetIngredientMatches(x, ParseIngIdsFromString(val)),
                ["all"] = (x) => x,
                ["category"] = (x) => x.Where(x => x.CategoryId == int.Parse(val)),
                ["recent"] = (x) => x.Where(x => x.DateOfCreation > DateTime.UtcNow.AddDays(-61)).OrderByDescending(x => x.DateOfCreation),
                ["commented"] = (x) => x.OrderByDescending(x => x.Comments.Count(c => !c.IsDeleted)),
                ["commented-recently"] = (x) => x.Where(x => x.Comments.Any(c => !c.IsDeleted))
                .OrderByDescending(r => r.Comments.Where(c => !c.IsDeleted).Select(c => c.DateOfCreation).OrderByDescending(d => d).First()),
                ["highly-rated"] = (x) => x.OrderByDescending(x => x.Votes.Sum(v => (int)v.Score) / x.Votes.Count()),
                ["most-rated"] = (x) => x.OrderByDescending(x => x.Votes.Count()),
                ["most-favoured"] = (x) => x.OrderByDescending(x => x.RecipeFavorisers.Count(rf => rf.IsDeleted)),
                ["user"] = (x) => x.Where(x => x.Author.UserName == val).OrderByDescending(x => x.DateOfCreation),
            };

            if (sortCriteria.ContainsKey(criteria)) return sortCriteria[criteria](recipeRepo.All()).Where(x => !x.IsDeleted).To<RecipeCardDTOout>();
            return null;
        }

        public async Task<RecipeDetailsDTOout> GetRecipeDetailsByIdAsync(string recipeId)
        {
            var recipeFd = await recipeRepo.All().Where(x => !x.IsDeleted)
                .Include(x => x.Author)
                .Include(x => x.Category)
                .Include(x => x.Pictures)
                .Include(x => x.RecipeFavorisers)
                    .ThenInclude(x => x.User)
                .Include(x => x.RecipeTags)
                    .ThenInclude(x => x.Tag)
                .Include(x => x.RecipeIngredients)
                    .ThenInclude(x => x.Ingredient)
                 .Include(x => x.Votes)
                    .ThenInclude(x => x.Voter)
                .FirstOrDefaultAsync(x => x.Id == recipeId);
            if (recipeId is null) return null;
            var result = mapper.Map<RecipeDetailsDTOout>(recipeFd);
            return result;
        }

        public async Task<bool> IsNameUsed(string name) => await this.recipeRepo.All().AnyAsync(x => x.Name.ToLower() == name.ToLower());

        public async Task<Recipe> CreateAsync(RecipeCreateDTOin rec)
        {
            var result = await MakeRecipe(rec);
            await this.recipeRepo.AddAssync(result);
            await this.recipeRepo.SaveChangesAsync();
            return result;
        }

        public async Task VoteForRecipeAsync(string recipeId, string userId, RecipeRating score)
        {
            if (score == RecipeRating.noVotes) throw new ArgumentException("Score is Invalid 0 not allowed");
            var recipeFd = await recipeRepo.All().Include(r => r.Votes).FirstOrDefaultAsync(r => r.Id == recipeId);
            if (recipeFd is null) throw new ArgumentException("Unfound Recipe with given Id");
            var voteFd = recipeFd.Votes.Where(x => !x.IsDeleted).FirstOrDefault(x => x.VoterId == userId);
            if (voteFd != null)
            {
                if (score == voteFd.Score) throw new ArgumentException("Same vote can not be given!");
                voteFd.Score = score;
                voteFd.DateOfLastEdit = DateTime.UtcNow;
                await recipeRepo.SaveChangesAsync();
                return;
            }
            recipeFd.Votes.Add(new RecipeVote
            {
                VoterId = userId,
                Score = score,
                RecipeId = recipeId
            });
            await recipeRepo.SaveChangesAsync();
        }
        public async Task<RecipeEditDTOout> GetRecipeEditInfoAsync(string recipeId, string userId, bool isAdmin)
        {

            Recipe recipeFd = await this.recipeRepo.All()
                                                   .Include(x => x.RecipeIngredients).ThenInclude(i => i.Ingredient)
                                                   .Include(x => x.RecipeTags).ThenInclude(t => t.Tag)
                                                   .Include(x => x.Pictures)
                                                   .FirstOrDefaultAsync(x => x.Id == recipeId);
            if (recipeFd is null) throw new NullReferenceException("Recipe not found!");

            if (recipeFd.AuthorId != userId && !isAdmin) throw new InvalidOperationException("Not allowed to get edit info!");

            return this.mapper.Map<RecipeEditDTOout>(recipeFd);

        }

        private IQueryable<Recipe> GetIngredientMatches(IQueryable<Recipe> all, int[] ingIds)
        {
            var idsChosen = all.Where(x => !x.IsDeleted).Select(x => new
            {
                recId = x.Id,
                ingIds = x.RecipeIngredients.Where(ri => !ri.IsDeleted && !ri.Ingredient.IsDeleted).Select(ri => ri.IngredientId)
            });
            foreach (int id in ingIds)
            {
                idsChosen = idsChosen.Where(x => x.ingIds.Contains(id));
            }
            return all.Where(x => idsChosen.Select(i => i.recId).Contains(x.Id));
        }

        private int[] ParseIngIdsFromString(string ids) => ids.Split("|", StringSplitOptions.RemoveEmptyEntries).Select(int.Parse).ToArray();
        public async Task<Recipe> EditRecipeAsync(RecipeEditDTOin recipe, string userId, bool isAdmin)
        {
            Recipe recipeFd = await this.recipeRepo.All()
                                                 .Include(x => x.RecipeIngredients).ThenInclude(i => i.Ingredient)
                                                 .Include(x => x.RecipeTags).ThenInclude(t => t.Tag)
                                                 .Include(x => x.Pictures)
                                                 .FirstOrDefaultAsync(x => x.Id == recipe.Id);
            if (recipeFd is null) throw new NullReferenceException("Recipe not found!");
            if (recipeFd.AuthorId != userId && !isAdmin) throw new InvalidOperationException("Not allowed to get edit info!");

            var editedRecipe = await MakeRecipe(recipe);

            recipeFd.RecipeIngredients.Clear();
            recipeFd.Pictures.Clear();
            recipeFd.RecipeTags.Clear();
            await recipeRepo.SaveChangesAsync();

            recipeFd.Name = editedRecipe.Name;
            recipeFd.CategoryId = editedRecipe.CategoryId;
            recipeFd.Description = editedRecipe.Description;
            recipeFd.VideoLink = editedRecipe.VideoLink;
            recipeFd.Difficulty = editedRecipe.Difficulty;
            recipeFd.MainPicture = editedRecipe.MainPicture;

            recipeFd.RecipeIngredients = editedRecipe.RecipeIngredients;
            recipeFd.RecipeTags = editedRecipe.RecipeTags;
            recipeFd.Pictures = editedRecipe.Pictures;

            await this.recipeRepo.SaveChangesAsync();
            return recipeFd;
        }
        private async Task<Recipe> MakeRecipe(RecipeCreateDTOin rec)
        {
            var tagsU = rec.Tags.Select(x => x.ToUpper());
            var result = mapper.Map<Recipe>(rec);

            var dbTags = await this.tagRepo.All().Where(x => tagsU.Contains(x.NormalizedName)).Select(x => new { x.Id, x.NormalizedName }).ToArrayAsync();
            foreach (string tag in rec.Tags)
            {
                var tagFd = dbTags.FirstOrDefault(x => x.NormalizedName == tag.ToUpper());
                if (tagFd != null)
                {
                    result.RecipeTags.Add(new RecipeTag
                    {
                        TagId = tagFd.Id
                    });
                    continue;
                }
                result.RecipeTags.Add(new RecipeTag
                {
                    Tag = new Tag
                    {
                        Name = tag,
                        NormalizedName = tag.ToUpper(),
                    }
                });
            }
            return result;
        }
        public async Task DeleteAsync(string id, string userId, bool isAdmin)
        {
            var recipeFd = await recipeRepo.All().FirstOrDefaultAsync(x => x.Id == id);
            if (recipeFd.AuthorId != userId && !isAdmin) throw new InvalidOperationException("User is not authorized to delete recipe!");
            if (recipeFd.IsDeleted) throw new InvalidOperationException("Recipe is already deleted!");
            recipeFd.IsDeleted = true;
            await recipeRepo.SaveChangesAsync();
        }
        public IQueryable<CauldronRecipeDTOout> GetCauldronCards(string ids) =>
                this.GetIngredientMatches(this.recipeRepo.All(), ParseIngIdsFromString(ids))
                    .Where(x => !x.IsDeleted)
                    .OrderBy(x => x.RecipeIngredients.Count(i => !i.IsDeleted))
                    .To<CauldronRecipeDTOout>();
    }
}
