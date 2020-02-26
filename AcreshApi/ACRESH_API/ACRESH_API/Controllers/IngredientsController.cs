using Acresh.Services.Services.Contracts;
using DataTransferObjects.Ingredients;
using DataTransferObjects.Recipes.Details;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading.Tasks;

namespace ACRESH_API.Controllers
{
    public class IngredientsController : BaseController
    {
        private readonly IIngredientService ingService;

        public IngredientsController(IIngredientService ingService)
        {
            this.ingService = ingService;
        }

        [HttpGet("all-mini")]
        public async Task<ActionResult<IngredientDTOout[]>> GetAllMini()
        {
            var result = (await ingService.GetAllIngridientsMini()).ToArray();
            return result;
        }


        [HttpGet("recipe")]
        public async Task<ActionResult<IngredientRecipeDetailsDTOout[]>> GetRecipeIngridients(string id) => await ingService.GetRecipeIngridients(id).ToArrayAsync();

    }
}