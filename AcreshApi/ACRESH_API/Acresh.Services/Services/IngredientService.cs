using Acresh.Services.DBRepository.Contracts;
using Acresh.Services.Services.Contracts;
using Common.AutomapperConfigurations;
using DataTransferObjects.Ingredients;
using DataTransferObjects.Recipes.Details;
using Infrastructure.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Acresh.Services.Services
{
    public class IngredientService : IIngredientService
    {
        private readonly IRepository<Ingredient> ingRepo;
        private readonly IRepository<RecipeIngredient> ingRecipeRepo;

        public IngredientService(IRepository<Ingredient> ingRepo, IRepository<RecipeIngredient> ingRecipeRepo)
        {
            this.ingRepo = ingRepo;
            this.ingRecipeRepo = ingRecipeRepo;
        }

        public async Task<ICollection<IngredientDTOout>> GetAllIngridientsMini() => await this.ingRepo.All().To<IngredientDTOout>().ToArrayAsync();

        public IQueryable<IngredientRecipeDetailsDTOout> GetRecipeIngridients(string id) => ingRecipeRepo.All().Where(x => x.RecipeId == id && !x.IsDeleted).To<IngredientRecipeDetailsDTOout>();
    }
}
