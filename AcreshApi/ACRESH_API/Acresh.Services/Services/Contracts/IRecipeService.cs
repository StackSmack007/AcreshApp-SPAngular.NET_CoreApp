using DataTransferObjects.Recipes;
using DataTransferObjects.Recipes.Details;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Acresh.Services.Services.Contracts
{
    public interface IRecipesService
    {
        IQueryable<RecipeCardDTOout> GetRecipeCarts(string criteria, string val);
        IQueryable<RecipeCardDTOout> GetPrivateRecipeCarts(string criteria, string userId);
        Task<RecipeDetailsDTOout> GetRecipeDetailsByIdAsync(string recipeId);
        Task<bool> FavUnfav(string id, string v);
    }
}
