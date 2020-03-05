using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using DataTransferObjects.Ingredients;
using Acresh.Services.Services.Contracts;
using DataTransferObjects.Recipes.Details;
using Microsoft.EntityFrameworkCore;

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
        public async Task<ActionResult<IngredientCountsDTOout>> GetCardsCount(string index = "-", string phrase = "") => await ingService.GetCardsCountAsync(index, phrase, CARDS_PER_FETCH);

        [HttpGet("cards")]
        public async Task<ActionResult<IngredientCardDTOout[]>> GetCards(int page, string index, string phrase, bool essential)
        {
            var result=   await ingService.GetCards(index, phrase, essential).Skip((page-1) * CARDS_PER_FETCH).Take(CARDS_PER_FETCH).ToArrayAsync();
            return result;
        }
        
        [HttpGet("details/{id}")]
        public async Task<ActionResult<IngredientDetailsDTOout>> GetDetails(int id)
        {
            IngredientDetailsDTOout result = await ingService.GetDetailsAsync(id);
            if (result is null) return BadRequest();
            return result;
        }

    }
}