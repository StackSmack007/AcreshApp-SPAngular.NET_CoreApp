using Acresh.Services.Services.Contracts;
using DataTransferObjects.Cauldron;
using DataTransferObjects.Ingredients;
using DataTransferObjects.Recipes.Details;
using Infrastructure.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace ACRESH_API.Controllers
{
    public class IngredientsController : BaseController
    {
        private const int CARDS_PER_FETCH = 2;
        private const int FIRST_BATCH_ADDUP = 1;
        private const int CAULD_CARDS_PER_FETCH = 8;
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

        [HttpGet("name-used")]
        public async Task<ActionResult<bool>> IsNameUsed(string name) => await ingService.IsNameUsedAsync(name);

        [HttpGet("recipe")]
        public async Task<ActionResult<IngredientRecipeDetailsDTOout[]>> GetRecipeIngridients(string id) => await ingService.GetRecipeIngridients(id).ToArrayAsync();


        [HttpGet("cards-count")]
        public async Task<ActionResult<IngredientCountsDTOout>> GetCardsCount(string index = "-", string phrase = "") => await ingService.GetCardsCountAsync(index, phrase, CARDS_PER_FETCH);

        [HttpGet("cards")]
        public async Task<ActionResult<IngredientCardDTOout[]>> GetCards(int page, string index, string phrase, bool essential)
        {
            var result = await ingService.GetCards(index, phrase, essential).Skip((page - 1) * CARDS_PER_FETCH + (page > 1 ? FIRST_BATCH_ADDUP : 0))
                                                                            .Take(page == 1 ? CARDS_PER_FETCH + FIRST_BATCH_ADDUP : CARDS_PER_FETCH).ToArrayAsync();
            return result;
        }

        [HttpGet("details/{id}")]
        public async Task<ActionResult<IngredientDetailsDTOout>> GetDetails(int id)
        {
            IngredientDetailsDTOout result = await ingService.GetDetailsAsync(id);
            if (result is null) return BadRequest();
            return result;
        }

        [Authorize]
        [HttpPost]
        public async Task<ActionResult<int>> Create(IngredientCreateDTOin newIng)
        {
            if (await this.ingService.IsNameUsedAsync(newIng.Name)) return BadRequest("Ingredient Name is already in Use");
            if (this.UserId != newIng.AuthorId) return BadRequest("UserId and AuthorId missmatch!");
            Ingredient result = await this.ingService.CreateAsync(newIng);
            if (result is null) return BadRequest("Ingredient was not created!");
            return result.Id;
        }

        [Authorize]
        [HttpGet("edit")]
        public async Task<ActionResult<IngredientEditDTO>> GetForEdit(int id)
        {
            IngredientEditDTO result = await this.ingService.GetIngredientEditDataAsync(id);
            if (result is null) return BadRequest("Recipe was not found!");
            return result;
        }

        [Authorize]
        [HttpPut]
        public async Task<ActionResult<int>> Edit(IngredientEditDTO editIng)
        {
            if (editIng.AuthorId != UserId && !IsAdmin) return BadRequest("Not authorized to edit this ingredient!");
            if (await this.ingService.IsNameUsedAsync(editIng.Name, editIng.Id)) return BadRequest("Ingredient Name is already in Use");
            if (!await this.ingService.UpdateAsync(editIng)) return BadRequest("Ingredient with given Id was not found!");
            return editIng.Id;
        }

        [HttpGet("get-names")]
        public async Task<ActionResult<string[]>> GetNamesByIds(string ids)
        {
            string[] result = await this.ingService.GetNamesByIdsAsync(ids);
            return result;
        }

        [HttpGet("get-cauld-cards-count")]
        public async Task<ActionResult<int>> GetCauldronIngsCount(string phrase) =>
               await this.ingService.GetCauldronIngsCount(phrase is null ? "" : phrase);

        [HttpGet("get-cauld-cards")]
        public async Task<CauldronIngredientDTOout[]> GetCauldronIngs(string phrase, int page) =>
               await ingService.GetCauldronIngs(phrase is null ? "" : phrase).Skip((page - 1) * CAULD_CARDS_PER_FETCH).Take(CAULD_CARDS_PER_FETCH).ToArrayAsync();

        [Authorize]
        [HttpDelete]
        public async Task<ActionResult> Delete(int id)
        {
            try
            {
                await this.ingService.DeleteAsync(id, UserId, IsAdmin);
                return NoContent();
            }
            catch (InvalidOperationException ex)
            {
                return BadRequest(new { reason = ex.Message });
            }
        }
    }
}