﻿using Acresh.Services.Services.Contracts;
using DataTransferObjects.Cauldron;
using DataTransferObjects.Recipes;
using DataTransferObjects.Recipes.Details;
using Infrastructure.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ACRESH_API.Controllers
{
    [Authorize]
    public partial class RecipesController : BaseController
    {
        private const int REC_COUNT_PER_FETCH = 3;
        private const int FIRST_BATCH_ADDUP = 1;
        private readonly IRecipesService recipeService;

        public RecipesController(IRecipesService recipeService)
        {
            this.recipeService = recipeService;
        }
        [AllowAnonymous]
        [HttpGet("{id}")]
        public async Task<ActionResult<RecipeDetailsDTOout>> GetRecipeDetails(string id)
        {
            var result = await this.recipeService.GetRecipeDetailsByIdAsync(id);
            if (result is null) return NotFound();
            return result;
        }

        [AllowAnonymous]
        [HttpGet]
        public async Task<ActionResult<ICollection<RecipeCardDTOout>>> GetCards(string criteria, int pageNum, string val = "")
        {
            IQueryable<RecipeCardDTOout> sqlReq = this.recipeService.GetRecipeCards(criteria, val);
            if (sqlReq is null) return BadRequest(new { reason = "Criteria is invalid!" });

            return await sqlReq.Skip(REC_COUNT_PER_FETCH * (pageNum - 1) + (pageNum > 1 ? FIRST_BATCH_ADDUP : 0))
                               .Take(pageNum == 1 ? REC_COUNT_PER_FETCH + 1 : REC_COUNT_PER_FETCH).ToArrayAsync();
        }

        [HttpGet("private")]
        public async Task<ActionResult<ICollection<RecipeCardDTOout>>> GetPrivateCards(string criteria, int pageNum)
        {
            IQueryable<RecipeCardDTOout> sqlReq = this.recipeService.GetPrivateRecipeCarts(criteria, UserId);
            if (sqlReq is null) return BadRequest(new { reason = "Criteria is invalid!" });
            var result = await sqlReq.Skip(REC_COUNT_PER_FETCH * (pageNum - 1)).Take(pageNum == 1 ? REC_COUNT_PER_FETCH + 1 : REC_COUNT_PER_FETCH).ToArrayAsync();
            return result;
        }

        [HttpPut("fav-unfav")]
        public async Task<ActionResult<bool>> FavUnfav([FromBody]string id)
        {
            try
            {
                var result = await this.recipeService.FavUnfav(id, UserId);
                return Ok(result);
            }
            catch (ArgumentException ex)
            {
                return BadRequest(new { reason = ex.Message });
                throw ex;
            }
        }

        [HttpPut("set-rating")]
        public async Task<ActionResult> SetRecipeRating(RecipeVoteDTOin recipeVote)
        {
            try
            {
                await recipeService.VoteForRecipeAsync(recipeVote.Id, UserId, recipeVote.Score);
                return NoContent();
            }
            catch (ArgumentException ex)
            {
                return BadRequest(new { reason = ex.Message });
                throw ex;
            }
        }

        [HttpGet("name-used")]
        public async Task<ActionResult<bool>> CheckNameUsed(string name)
        {
            if (await this.recipeService.IsNameUsed(name))
            {
                return true;
            }
            return false;
        }

        [HttpPost]
        public async Task<ActionResult<string>> Create(RecipeCreateDTOin recipe)
        {
            if (this.UserId != recipe.AuthorId) return BadRequest("UserId and AuthorId missmatch!");
            Recipe newRecipe = await this.recipeService.CreateAsync(recipe);
            if (newRecipe is null) return BadRequest("Recipe was not created!");
            return newRecipe.Id;
        }

        [HttpGet("edit")]
        public async Task<ActionResult<RecipeEditDTOout>> GetInfoForEdit(string id)
        {
            RecipeEditDTOout result;
            try
            {
                result = await this.recipeService.GetRecipeEditInfoAsync(id, UserId, IsAdmin);
            }
            catch (NullReferenceException err)
            {
                return BadRequest(new { reason = err.Message });
            }
            catch (InvalidOperationException err)
            {
                return Unauthorized(new { reason = err.Message });
            }
            return result;
        }

        [HttpPut]
        public async Task<ActionResult<string>> EditRecipe(RecipeEditDTOin recipe)
        {
            try
            {
                Recipe result = await this.recipeService.EditRecipeAsync(recipe, UserId, IsAdmin);
                if (result != null) return recipe.Id;
                return BadRequest(new { reason = "Something went wrong!" });
            }
            catch (NullReferenceException err)
            {
                return BadRequest(new { reason = err.Message });
            }
            catch (InvalidOperationException err)
            {
                return Unauthorized(new { reason = err.Message });
            }
        }

        [HttpDelete]
        public async Task<ActionResult> DeleteRecipe(string id)
        {
            try
            {
                await this.recipeService.DeleteAsync(id, UserId, IsAdmin);
                return NoContent();
            }
            catch (InvalidOperationException ex)
            {
                return BadRequest(new { reason = ex.Message });
            }
        }

        [AllowAnonymous]
        [HttpGet("caulron-cards")]
        public async Task<ActionResult<CauldronRecipeDTOout[]>> GetCauldronCards(string ids, int page)
        {
            var result = await recipeService.GetCauldronCards(ids)
                               .Skip((page - 1) * REC_COUNT_PER_FETCH).Take(REC_COUNT_PER_FETCH).ToArrayAsync();
            return result;
        }

        //// GET: api/Recipes/5
        //[HttpGet("{id}", Name = "Get")]
        //public string Get(int id)
        //{
        //    return "value";
        //}

        //// POST: api/Recipes

        //// PUT: api/Recipes/5
        //[HttpPut("{id}")]
        //public void Put(int id, [FromBody] string value)
        //{
        //}

        //// DELETE: api/ApiWithActions/5
        //[HttpDelete("{id}")]
        //public void Delete(int id)
        //{
        //}
    }
}
