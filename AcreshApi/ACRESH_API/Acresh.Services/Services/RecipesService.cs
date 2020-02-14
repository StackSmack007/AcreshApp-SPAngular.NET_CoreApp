using Acresh.Services.DBRepository.Contracts;
using Acresh.Services.Services.Contracts;
using Common.AutomapperConfigurations;
using DataTransferObjects.Recipes;
using Infrastructure.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Acresh.Services.Services
{
    public class RecipesService : IRecipesService
    {
        private readonly IRepository<Recipe> recipeRepo;

        public RecipesService(IRepository<Recipe> recipeRepo)
        {
            this.recipeRepo = recipeRepo;
        }

        public IQueryable<RecipeCardDTOout> GetRecipeCarts(string criteria, string val)
        {
            string[] phrases = val.ToLower().Split(new[] { ',', ' ', ';', '_', '\t' }, StringSplitOptions.RemoveEmptyEntries).ToArray();
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
                //  ["search"] = (x) => x.Where(x => phrases.Any(ph => x.Name.Contains(ph)))// || x.RecipeTags.Any(t => t.Tag.Name.ToLower() == ph)))
                ["search"] = (x) => x.Where(x => x.Name.ToLower().Contains(val.ToLower())),// || x.RecipeTags.Any(t => t.Tag.Name.ToLower() == ph)))
                ["user"] = (x) => x.Where(x => !x.IsDeleted && x.Author.UserName == val).OrderByDescending(x => x.DateOfCreation)
            };

            //var omlett = sortCriteria["search"](recipeRepo.All()).To<RecipeCardDTOout>().ToArray();
            if (sortCriteria.ContainsKey(criteria))
            {
                return sortCriteria[criteria](recipeRepo.All()).To<RecipeCardDTOout>();
            }
            return null;
        }
    }
}
