using DataTransferObjects.Ingredients;
using DataTransferObjects.Recipes.Details;
using Infrastructure.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Acresh.Services.Services.Contracts
{
    public interface IIngredientService
    {
        Task<ICollection<IngredientOptionDTOout>> GetAllIngridientsMini();
        IQueryable<IngredientRecipeDetailsDTOout>  GetRecipeIngridients(string id);
        Task<IngredientCountsDTOout> GetCardsCountAsync(string index, string phrase, int pageCappacity);
        IQueryable<IngredientCardDTOout> GetCards(string index, string phrase, bool essential);
        Task<IngredientDetailsDTOout> GetDetailsAsync(int id);
        Task<bool> IsNameUsedAsync(string name);
        Task<Ingredient> CreateAsync(IngredientCreateDTOin newIng);
        Task<IngredientEditDTOout> GetIngredientEditDataAsync(int id);
    }
}
