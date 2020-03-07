using DataTransferObjects.Recipes;
using DataTransferObjects.Recipes.Details;
using Infrastructure.Models;
using Infrastructure.Models.Enumerations;
using System.Linq;
using System.Threading.Tasks;

namespace Acresh.Services.Services.Contracts
{
    public interface IRecipesService
    {
        IQueryable<RecipeCardDTOout> GetRecipeCarts(string criteria, string val);
        IQueryable<RecipeCardDTOout> GetPrivateRecipeCarts(string criteria, string userId);
        Task<RecipeDetailsDTOout> GetRecipeDetailsByIdAsync(string recipeId);
        Task<bool> FavUnfav(string recipeId, string userId);
        Task VoteForRecipeAsync(string recipeId, string userId, RecipeRating score);
        Task<bool> IsNameUsed(string name);
        Task<Recipe> CreateAsync(RecipeCreateDTOin recipe);
        Task<RecipeEditDTOout> GetRecipeEditInfoAsync(string recipeId, string userId, bool isAdmin);
        Task<Recipe> EditRecipeAsync(RecipeEditDTOin recipe, string userId, bool isAdmin);
    }
}
