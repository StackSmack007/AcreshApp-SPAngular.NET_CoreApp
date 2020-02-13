using Acresh.Services.Services.Contracts;
using DataTransferObjects.Recipes;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ACRESH_API.Controllers
{
    public class RecipesController : BaseController
    {

        private const int REC_COUNT_PER_FETCH = 3;
        private readonly IRecipesService recipeService;

        public RecipesController(IRecipesService recipeService)
        {
            this.recipeService = recipeService;
        }

        
        // GET: api/Recipes
        [HttpGet]
        public async Task<ActionResult<ICollection<RecipeCardDTOout>>> GetCarts(string criteria, int pageNum)
        {
            IQueryable<RecipeCardDTOout> sqlReq = this.recipeService.GetRecipeCarts(criteria);
            if (sqlReq is null) return BadRequest(new { reason = "Criteria is invalid!" });

            var result = await sqlReq.Skip(REC_COUNT_PER_FETCH * (pageNum - 1)).Take(REC_COUNT_PER_FETCH).ToArrayAsync();
            //if (result.Length == 0) return NoContent();
            return result;
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
