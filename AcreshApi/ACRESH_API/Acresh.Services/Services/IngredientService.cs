using Acresh.Services.DBRepository.Contracts;
using Acresh.Services.Services.Contracts;
using Common.AutomapperConfigurations;
using DataTransferObjects.Ingredients;
using DataTransferObjects.Ingridients;
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

        public async Task<ICollection<IngredientOptionDTOout>> GetAllIngridientsMini() => await this.ingRepo.All().To<IngredientOptionDTOout>().ToArrayAsync();


        public IQueryable<IngredientRecipeDetailsDTOout> GetRecipeIngridients(string id) => ingRecipeRepo.All().Where(x => x.RecipeId == id && !x.IsDeleted).To<IngredientRecipeDetailsDTOout>();


        public async Task<IngredientCountsDTOout> GetCardsCountAsync(string index, string phrase)
        {
            var result = new IngredientCountsDTOout();
            try
            {
                result.Essentials = await FilterIngredients(ingRepo.All(), index, phrase, true).CountAsync();
                result.NonEssentials = await FilterIngredients(ingRepo.All(), index, phrase, false).CountAsync();
            }
            catch (System.Exception ex)
            {

                throw;
            }
            return result;
        }

        private static IQueryable<Ingredient> FilterIngredients(IQueryable<Ingredient> ings, string index, string phrase, bool isEssential, bool isDeleted = false)
        {
            var result = ings;
            var indexU = index is null ? "-" : index.ToUpper();
            var phraseU = phrase is null ? "" : phrase.ToUpper();
            int ind = indexU[0];
            if (ind >= 65 && ind <= 90)
            {
                result = ings.Where(x => x.Name.ToUpper().StartsWith(indexU));
            }
            return result.Where(x => x.IsEssential == isEssential && x.IsDeleted == isDeleted && x.Name.ToUpper().Contains(phraseU));
        }
        //public IQueryable<IngredientRecipeDetailsDTOout> GetRecipeIngridients(string id) => ingRecipeRepo.All().Where(x => x.RecipeId == id && !x.IsDeleted).To<IngredientRecipeDetailsDTOout>();
    }
}
