namespace Acresh.Services.InitialSeed
{
    using Common.Tools;
    using Infrastructure.Data;
    using Infrastructure.Models;
    using Infrastructure.Models.Enumerations;
    using Microsoft.AspNetCore.Identity;
    using Microsoft.EntityFrameworkCore;
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;

    public partial class DataBaseSeeder
    {
        private readonly ApplicationDbContext db;
        private readonly UserManager<AcUser> um;
        private readonly RoleManager<IdentityRole> rm;

        private static bool migrated = false;
        public DataBaseSeeder(UserManager<AcUser> userManager, RoleManager<IdentityRole> roleManager, ApplicationDbContext dbContext)
        {
            this.rm = roleManager;
            this.um = userManager;
            this.db = dbContext;
        }
        public async Task SeedData()
        {
            if (migrated) { return; }
            await this.db.Database.MigrateAsync();
            migrated = true;
            if (!db.Roles.Any())
            {
                //await db.Database.EnsureDeletedAsync();
                //await db.Database.EnsureCreatedAsync();
                await SeedRoles();
                await SeedUsers();
                await SeedUserMessages();
                await SeedUserBlockings();
                await SeedCategories();
                await SeedTags();
                await SeedIngredients();
                await SeedRecipes();
                await SeedRecipeVotes();
                await SeedRecipeComments();
                await SeedRecipeCommentsAttitude();
                await SeedUserFavouriteRecipes();
                await SeedRecipeRecomendations();
            }
        }
        private async Task SeedRoles()
        {
            foreach (var role in SeederConstants.RolesUsersCount.Keys)
            {
                await rm.CreateAsync(new IdentityRole(role));
            }
        }
        private async Task SeedUsers()
        {
            foreach (var kvp in SeederConstants.RolesUsersCount)
            {
                for (int i = 1; i <= kvp.Value; i++)
                {
                    string userName = kvp.Key + i;
                    Gender gender = (Gender)(i % 3);
                    CookRank cookRank = (CookRank)(1 + i % 7);
                    var user = new AcUser()
                    {
                        FirstName = SeederConstants.PersonNames[gender][0],
                        LastName = SeederConstants.PersonNames[gender][1],
                        UserName = userName,
                        Gender = gender,
                        Email = userName + "@gmail.com",
                        AvatarPicture = SeederConstants.AvatarPictures[gender],
                        Description = SeederConstants.UserDescription,
                        CookRank = cookRank,
                        SecurityStamp = Guid.NewGuid().ToString()
                    };
                    var res = await um.CreateAsync(user, SeederConstants.UserPassword);
                    if (res.Succeeded) await um.AddToRoleAsync(user, kvp.Key);
                }
            }
        }
        private async Task SeedUserBlockings()
        {
            string[] userIds = await GetUserIds();
            var count = userIds.Length;
            if (count < 4) throw new IndexOutOfRangeException("Not enough users to make blockings");
            var ublockings = new[] {new UserBlocking { DefenderId= userIds [1], IrritatorId = userIds[2] },
            new UserBlocking { DefenderId= userIds [3], IrritatorId = userIds[2] },
            new UserBlocking { DefenderId= userIds [2], IrritatorId = userIds[3] }};
            //0 index has no restrictions!
            // 1st blocks 2nd , 2nd blocks 3d and  3d blocks 2nd
            //1st can send to all
            //2nd cant send to 1st and 3d
            //3rd can send to 1st
            await db.UserBlockings.AddRangeAsync(ublockings);
            await db.SaveChangesAsync();
        }
        private async Task SeedUserMessages()
        {
            string[] userIds = await GetUserIds();
            var count = userIds.Length;
            if (count < 4) throw new IndexOutOfRangeException("Not enough users to make messages");

            var newMessages = new[] {new Message { RecieverId= userIds [1], SenderId = userIds[2] ,Content=SeederConstants.BadContentMessage,Status=MessageStatus.Read},
            new Message {  RecieverId= userIds [3], SenderId = userIds[2],Content=SeederConstants.BadContentMessage,Status=MessageStatus.Read },
            new Message {  RecieverId= userIds [0], SenderId = userIds[1],Content=SeederConstants.OkMessage },
            new Message {  RecieverId= userIds [0], SenderId = userIds[2],Content=SeederConstants.OkMessage,Status=MessageStatus.Read },
            new Message {  RecieverId= userIds [0], SenderId = userIds[2],Content=SeederConstants.OkMessage },
            new Message {  RecieverId= userIds [0], SenderId = userIds[2],Content=SeederConstants.OkMessage+"spam1" }
            };

            foreach (var item in newMessages)
            {
                item.DateOfCreation = DateTime.Now.AddMinutes(-157);
            }
            await db.Messages.AddRangeAsync(newMessages);
            await db.SaveChangesAsync();
        }
        private async Task SeedCategories()
        {
            string adminId = (await GetUserIds("Admin")).First();
            foreach (var cat in SeederConstants.Categories)
            {
                AssignAuthorToCategoryRecursively(cat, adminId);
            }
            await db.Categories.AddRangeAsync(SeederConstants.Categories);
            await db.SaveChangesAsync();
        }
        private async Task SeedTags()
        {
            var tags = new List<Tag>();
            foreach (string tag in SeederConstants.Tags)
            {
                tags.Add(new Tag(tag));
            }
            await db.Tags.AddRangeAsync(tags);
            await db.SaveChangesAsync();
        }
        private async Task SeedIngredients()
        {
            string[] userIds = await GetUserIds();
            var newIngredientss = new List<Ingredient>();
            for (int i = 0; i < SeederConstants.Ingredients.Length; i++)
            {
                var ing = SeederConstants.Ingredients[i];
                newIngredientss.Add(ing);
                ing.AuthorId = userIds[i % userIds.Length];
            }
            await db.Ingredients.AddRangeAsync(newIngredientss);
            await db.SaveChangesAsync();
        }
        private async Task SeedRecipes()
        {
            var userIds = await GetUserIds();
            var recipesNew = new HashSet<Recipe>();
            int recCounter = 0;
            for (int j = 0; j < SeederConstants.RecipesMultiplier; j++)
            {
                for (int i = 0; i < SeederConstants.Recipes.Length; i++)
                {
                    var rec = SeederConstants.Recipes[i];
                    Recipe newRec = new Recipe
                    {
                        Id = Guid.NewGuid().ToString(),
                        Name = rec.Name + (++recCounter),
                        Description = rec.Description,
                        Portions = rec.Portions,
                        CategoryId = await getCategoryIdAsync(rec.CategoryName),
                        MainPicture = rec.MainPicture,
                        VideoLink = rec.VideoLink,
                        Status = rec.Status,
                        RecipeTags = rec.TagNames.Select(t =>
                        {
                            var tagId = GetTagIdAsync(t).GetAwaiter().GetResult();
                            if (tagId == -1)
                            {
                                return new RecipeTag
                                {
                                    Tag = new Tag(t)
                                };
                            }
                            return new RecipeTag
                            {
                                TagId = tagId
                            };
                        }).ToHashSet(),
                        RecipeIngredients = rec.IngredientNameQuantity.Select(kvp =>
                        {
                            var ingId = GetIngredientIdAsync(kvp.Key).GetAwaiter().GetResult();
                            return new RecipeIngredient
                            {
                                IngredientId = ingId,
                                Ammount = kvp.Value
                            };
                        }).ToHashSet(),
                        Pictures = rec.Pictures.Distinct().Select(url => new RecipePicture { UrlPath = url }).ToHashSet(),
                        AuthorId = userIds[i % userIds.Length],
                    };
                    recipesNew.Add(newRec);
                }
            }
            await db.Recipes.AddRangeAsync(recipesNew);
            db.SaveChanges();
        }
        private async Task SeedRecipeVotes()
        {
            string[] userIds = await GetUserIds();
            var newVotes = new HashSet<RecipeVote>();
            int scoreCounter = 0;
            var recipeIds = await db.Recipes.Select(x => x.Id).ToArrayAsync();
            for (int i = 0; i < recipeIds.Length; i++)
            {
                string recipeId = recipeIds[i];
                for (int j = i % 2; j < userIds.Length; j += 2)
                {
                    newVotes.Add(new RecipeVote
                    {
                        RecipeId = recipeId,
                        VoterId = userIds[j],
                        Score = (RecipeRating)(scoreCounter++ % 7)
                    });
                }
            }
            await db.RecipeVotes.AddRangeAsync(newVotes);
            await db.SaveChangesAsync();
        }
        private async Task SeedRecipeComments()
        {
            string[] userIds = await GetUserIds();
            var newComments = new HashSet<RecipeComment>();
            int commentGoodCounter = 0;
            int commentBadCounter = 0;

            var recipeIds = await db.Recipes.Select(x => x.Id).ToArrayAsync();
            for (int i = 0; i < recipeIds.Length; i++)
            {
                string recipeId = recipeIds[i];
                for (int j = i % 2; j < userIds.Length; j += 2)
                {
                    newComments.Add(new RecipeComment
                    {
                        RecipeId = recipeId,
                        AuthorId = userIds[j],
                        Content = (j == 2) ? SeederConstants.RecipeCommentsBad[commentBadCounter++ % SeederConstants.RecipeCommentsBad.Length] :
                       SeederConstants.RecipeCommentsGood[commentGoodCounter++ % SeederConstants.RecipeCommentsGood.Length]
                    });
                }
            }

            await db.RecipeComments.AddRangeAsync(newComments);
            await db.SaveChangesAsync();
        }
        private async Task SeedRecipeCommentsAttitude()
        {
            string[] userIds = await GetUserIds();
            var allComments = await db.RecipeComments.ToArrayAsync();
            int attitudeCount = 0;
            for (int i = 0; i < allComments.Length; i++)
            {
                var comment = allComments[i];
                for (int j = i % 2; j < userIds.Length; j += 3)
                {
                    comment.UsersAttitudes.Add(new CommentAttitude
                    {
                        ShitGiverId = userIds[j],
                        Attitude = (Attitude)(attitudeCount++ % 2)
                    });
                }
            }
            await db.SaveChangesAsync();
        }
        private async Task SeedUserFavouriteRecipes()
        {
            string[] userIds = await GetUserIds();
            var recipeIds = await db.Recipes.Select(x => x.Id).ToArrayAsync();
            var newFavourings = new HashSet<UserFavouriteRecipe>();
            for (int i = 0; i < recipeIds.Length; i++)
            {
                var recipeId = recipeIds[i];
                for (int j = 0; j < userIds.Length; j++)
                {
                    if (j % 2 != i % 2) continue;
                    var userId = userIds[j];
                    newFavourings.Add(new UserFavouriteRecipe
                    {
                        RecipeId = recipeId,
                        UserId = userId
                    });
                }
            }
            await db.UserFavouriteRecepies.AddRangeAsync(newFavourings);
            await db.SaveChangesAsync();
        }
        private async Task SeedRecipeRecomendations()
        {
            string[] userIds = await GetUserIds();
            var recipeIds = await db.Recipes.Select(x => x.Id).ToArrayAsync();
            var newRecomendations = new HashSet<RecipeRecomendation>();
            int c = 0;
            for (int i = 0; i < recipeIds.Length; i++)
            {
                var recipeId = recipeIds[i];
                for (int j = i % 2; j < userIds.Length; j += 2)
                {
                    var userId = userIds[j];
                    newRecomendations.Add(new RecipeRecomendation
                    {
                        RecipeId = recipeId,
                        AuthorId = userId,
                        Content = (j != 2) ? SeederConstants.RecipeRecomendationsGood[c++ % SeederConstants.RecipeRecomendationsGood.Length] :
                        SeederConstants.RecipeRecomendationsBad[c++ % SeederConstants.RecipeRecomendationsBad.Length]
                    });
                }
            }
            await db.RecipeRecomendations.AddRangeAsync(newRecomendations);
            await db.SaveChangesAsync();
        }
        private Category AssignAuthorToCategoryRecursively(Category cat, string authorId)
        {
            cat.AuthorId = authorId;
            foreach (Category incat in cat.ChildrenCategories)
            {
                AssignAuthorToCategoryRecursively(incat, authorId);
            }
            return cat;
        }
        private async Task<string[]> GetUserIds(string role = "User")
        {
            return (await um.GetUsersInRoleAsync(role)).Select(x => x.Id).ToArray();
        }
        public async Task<int> getCategoryIdAsync(string name)
        {
            int categoryId = await db.Categories.Where(x => x.Name.ToLower() == name.ToLower()).Select(x => x.Id).FirstOrDefaultAsync();
            if (categoryId == default(int)) categoryId = await db.Categories.Where(x => x.Name == GlobalConstants.UnfoundItem).Select(x => x.Id).FirstAsync();
            return categoryId;
        }
        public async Task<int> GetTagIdAsync(string name)
        {
            int categoryId = await db.Tags.Where(x => x.Name.ToLower() == name.ToLower()).Select(x => x.Id).FirstOrDefaultAsync();
            if (categoryId == default(int)) return -1;
            return categoryId;
        }
        public async Task<int> GetIngredientIdAsync(string name)
        {
            int ingId = await db.Ingredients.Where(x => x.Name.ToLower() == name.ToLower()).Select(x => x.Id).FirstOrDefaultAsync();
            if (ingId == default(int)) await db.Ingredients.Where(x => x.Name == GlobalConstants.UnfoundItem).Select(x => x.Id).FirstAsync();
            return ingId;
        }
    }
}