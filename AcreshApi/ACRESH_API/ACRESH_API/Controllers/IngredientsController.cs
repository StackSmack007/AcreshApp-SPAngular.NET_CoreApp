using Acresh.Services.Services.Contracts;
using DataTransferObjects.Ingredients;
using DataTransferObjects.Ingridients;
using DataTransferObjects.Recipes.Details;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading.Tasks;

namespace ACRESH_API.Controllers
{
    public class IngredientsController : BaseController
    {
        private const int CARDS_PER_FETCH = 2;
        private readonly IIngredientService ingService;

        public IngredientsController(IIngredientService ingService)
        {
            this.ingService = ingService;
        }

        [HttpGet("all-mini")]
        public async Task<ActionResult<IngredientOptionDTOout[]>> GetAllMini()
        {
            var result = (await ingService.GetAllIngridientsMini()).ToArray();
            return result;
        }

        [HttpGet("recipe")]
        public async Task<ActionResult<IngredientRecipeDetailsDTOout[]>> GetRecipeIngridients(string id) => await ingService.GetRecipeIngridients(id).ToArrayAsync();


        [HttpGet("cards-count")]
        public async Task<ActionResult<IngredientCountsDTOout>> GetCardsCount(string index = "-", string phrase = "") => await ingService.GetCardsCountAsync(index, phrase);

        [HttpGet("cards")]
        public async Task<ActionResult<IngredientOptionDTOout[]>> GetCards(int page, string index, string phrase, bool essential)
        {
            var result = (await ingService.GetAllIngridientsMini()).ToArray();
            return result;
        }
    }
}