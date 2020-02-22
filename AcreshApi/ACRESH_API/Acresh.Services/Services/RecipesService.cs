using Acresh.Services.DBRepository.Contracts;
using Acresh.Services.Services.Contracts;
using AutoMapper;
using Common.AutomapperConfigurations;
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
    public class RecipesService : IRecipesService
    {
        private readonly IRepository<Recipe> recipeRepo;

        private readonly IMapper mapper;

        public RecipesService(IRepository<Recipe> recipeRepo, IMapper mapper)
        {
            this.recipeRepo = recipeRepo;
            this.mapper = mapper;
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
                ["my-favourite"] = (x) => x.Where(x => !x.IsDeleted && x.RecipeFavorisers.Any(rf => !rf.IsDeleted && rf.UserId == myId))
                .OrderByDescending(x => x.RecipeFavorisers.Where(rf => rf.UserId == myId).First().DateOfLastEdit),
                ["my-commented"] = (x) => x.Where(x => !x.IsDeleted && x.Comments.Any(rc => !rc.IsDeleted && rc.AuthorId == myId))
                                         .OrderByDescending(x => x.Comments.Where(rc => !rc.IsDeleted && rc.AuthorId == myId).Select(rc => rc.DateOfCreation)
                                         .OrderByDescending(d => d).First()),
            };
            if (sortCriteria.ContainsKey(criteria))
            {
                return sortCriteria[criteria](recipeRepo.All()).To<RecipeCardDTOout>();
            }
            return null;
        }

        public IQueryable<RecipeCardDTOout> GetRecipeCarts(string criteria, string val)
        {
            var phrases = val.Split(new[] { ',', ' ', ';', '_', '\t' }, StringSplitOptions.RemoveEmptyEntries);
            Func<IQueryable<Recipe>, IQueryable<Recipe>> tagNameMatches = (x) =>
            {
                HashSet<IQueryable<string>> ids = new HashSet<IQueryable<string>>();
                foreach (var phrase in phrases)
                {
                    ids.Add(x.Where(x => !x.IsDeleted && (x.Name.Contains(phrase) || x.RecipeTags.Any(t => t.Tag.Name == phrase))).Select(x => x.Id));
                }
                var allowdIds = ids.SelectMany(x => x).Distinct();
                return x.Where(x => allowdIds.Contains(x.Id));
            };
            Dictionary<string, Func<IQueryable<Recipe>, IQueryable<Recipe>>> sortCriteria = new Dictionary<string, Func<IQueryable<Recipe>, IQueryable<Recipe>>>
            {
                ["all"] = (x) => x,
                ["recent"] = (x) => x.Where(x => x.DateOfCreation > DateTime.UtcNow.AddDays(-61)).OrderByDescending(x => x.DateOfCreation),
                ["commented"] = (x) => x.OrderByDescending(x => x.Comments.Count(c => !c.IsDeleted)),
                ["commented-recently"] = (x) => x.Where(x => x.Comments.Any(c => !c.IsDeleted))
                .OrderByDescending(r => r.Comments.Where(c => !c.IsDeleted).Select(c => c.DateOfCreation).OrderByDescending(d => d).First()),
                ["highly-rated"] = (x) => x.OrderByDescending(x => x.Votes.Sum(v => (int)v.Score) / x.Votes.Count()),
                ["most-rated"] = (x) => x.OrderByDescending(x => x.Votes.Count()),
                ["favourized"] = (x) => x.OrderByDescending(x => x.RecipeFavorisers.Count(rf => rf.IsDeleted)),
                ["search"] = tagNameMatches,
                ["user"] = (x) => x.Where(x => !x.IsDeleted && x.Author.UserName == val).OrderByDescending(x => x.DateOfCreation)
            };

            if (sortCriteria.ContainsKey(criteria))
            {
                return sortCriteria[criteria](recipeRepo.All()).To<RecipeCardDTOout>(); ;
            }
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
    }
}
