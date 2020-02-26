using DataTransferObjects.Ingredients;
using DataTransferObjects.Recipes.Details;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Acresh.Services.Services.Contracts
{
    public interface IIngredientService
    {
        Task<ICollection<IngredientDTOout>> GetAllIngridientsMini();
        IQueryable<IngredientRecipeDetailsDTOout>  GetRecipeIngridients(string id);
    }
}
