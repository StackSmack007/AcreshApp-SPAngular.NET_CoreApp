using Acresh.Services.DBRepository.Contracts;
using Acresh.Services.Services.Contracts;
using Common.Tools.Extensions;
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

        public IQueryable<RecipeCardDTOout> GetRecipeCarts(string criteria)
        {
            Dictionary<string, Func<IQueryable<Recipe>, IQueryable<Recipe>>> sortCriteria = new Dictionary<string, Func<IQueryable<Recipe>, IQueryable<Recipe>>>
            {
                ["all"] = (x) => x,
                ["recent"] = (x) => x.OrderByDescending(x => x.DateOfCreation),
                ["commented"] = (x) => x.OrderByDescending(x => x.Comments.Count(c=>!c.IsDeleted)),
                ["commented-recently"] = (x) => x.Where(x=>x.Comments.Any(c=>!c.IsDeleted))
                .OrderByDescending(r=>r.Comments.Where(c=>!c.IsDeleted).Select(c=>c.DateOfCreation).OrderByDescending(d=>d).First()),
               
                ["highly-rated"] = (x) => x.OrderByDescending(x => x.Votes.Sum(v => (int)v.Score) / x.Votes.Count()),
                ["most-rated"] = (x) => x.OrderByDescending(x => x.Votes.Count()),
                ["favourized"] = (x) => x.OrderByDescending(x=>x.RecipeFavorisers.Count(rf=>rf.IsDeleted)),



            };
  

           if (sortCriteria.ContainsKey(criteria))
            {
                return sortCriteria[criteria](recipeRepo.All()).To<RecipeCardDTOout>();
            }
            return null;
        }
    }
}
