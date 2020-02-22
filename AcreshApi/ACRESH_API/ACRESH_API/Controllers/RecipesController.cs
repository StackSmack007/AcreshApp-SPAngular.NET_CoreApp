﻿using Acresh.Services.Services.Contracts;
using DataTransferObjects.Recipes;
using DataTransferObjects.Recipes.Details;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ACRESH_API.Controllers
{
    public partial class RecipesController : BaseController
    {
        private const int REC_COUNT_PER_FETCH = 3;
        private readonly IRecipesService recipeService;

        public RecipesController(IRecipesService recipeService)
        {
            this.recipeService = recipeService;
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<RecipeDetailsDTOout>> GetRecipeDetails(string id)
        {
            var result = await this.recipeService.GetRecipeDetailsByIdAsync(id);
            if (result is null) return NotFound();
            return result;
        }

        // GET: api/Recipes
        [HttpGet]
        public async Task<ActionResult<ICollection<RecipeCardDTOout>>> GetCards(string criteria, int pageNum, string val = "")
        {
            IQueryable<RecipeCardDTOout> sqlReq = this.recipeService.GetRecipeCarts(criteria, val);
            if (sqlReq is null) return BadRequest(new { reason = "Criteria is invalid!" });

            var result = await sqlReq.Skip(REC_COUNT_PER_FETCH * (pageNum - 1)).Take(REC_COUNT_PER_FETCH).ToArrayAsync();
            //if (result.Length == 0) return NoContent();
            return result;
        }

        [Authorize]
        [HttpGet("private")]
        public async Task<ActionResult<ICollection<RecipeCardDTOout>>> GetPrivateCards(string criteria, int pageNum)
        {
            IQueryable<RecipeCardDTOout> sqlReq = this.recipeService.GetPrivateRecipeCarts(criteria, getUserId());
            if (sqlReq is null) return BadRequest(new { reason = "Criteria is invalid!" });

            var result = await sqlReq.Skip(REC_COUNT_PER_FETCH * (pageNum - 1)).Take(REC_COUNT_PER_FETCH).ToArrayAsync();
            //if (result.Length == 0) return NoContent();
            return result;
        }

        [Authorize]
        [HttpPut("fav-unfav")]
        public async Task<ActionResult<bool>> FavUnfav([FromBody]string id)
        {
            try
            {
               var result=await this.recipeService.FavUnfav(id, getUserId());
                return Ok(result);
            }
            catch (ArgumentException ex)
            {
                return BadRequest(new { reason = ex.Message });
                throw ex;
            }
        }

        [Authorize]
        [HttpPut("set-rating")]
        public async Task<ActionResult> SetRecipeRating(RecipeVoteDTOin recipeVote)
        {
            try
            {
                await recipeService.VoteForRecipeAsync(recipeVote.Id, getUserId(),recipeVote.Score );
                return NoContent();
            }
            catch (ArgumentException ex)
            {
                return BadRequest(new { reason = ex.Message });
                throw ex;
            }
        }
                            
                    [Authorize]
        [HttpGet("name-used")]
        public async Task<ActionResult<bool>> CheckNameUsed(string name)
        {
           if(await this.recipeService.IsNameUsed(name))
            {
                return true;
            }
            return false;
        }




        //// GET: api/Recipes/5
        //[HttpGet("{id}", Name = "Get")]
        //public string Get(int id)
        //{
        //    return "value";
        //}

        //// POST: api/Recipes
        //[HttpPost]
        //public void Post([FromBody] string value)
        //{
        //}

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
