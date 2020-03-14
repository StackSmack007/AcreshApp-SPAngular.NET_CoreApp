using Acresh.Services.Services.Contracts;
using DataTransferObjects.Categories;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace ACRESH_API.Controllers
{
    public class CategoriesController : BaseController
    {
        private readonly ICategoryService categoryService;

        public CategoriesController(ICategoryService categoryService)
        {
            this.categoryService = categoryService;
        }

        [HttpGet("all-mini")]
        public async Task<ActionResult<CategoryDTOout[]>> GetAllMini()
        {
            var result = await categoryService.GetAllMini().ToArrayAsync();
            return result;
        }

        [HttpGet("three")]
        public async Task<ActionResult<CategoryTreeDTOout[]>> GetStructure()
        {
            CategoryTreeDTOout[] result = (await categoryService.GetThreeAsync()).ToArray();
            return result;
        }

        [HttpGet("details")]
        public async Task<ActionResult<CategoryDetailsDTOout>> GetDetails(int id)
        {
            CategoryDetailsDTOout result = await categoryService.GetCategoryDetailsAsync(id);
            if (result is null) return BadRequest(new { reason = "Category was not found!" });
            return result;
        }
        [Authorize]
        [HttpGet("name-used")]
        public async Task<ActionResult<bool>> IsNameUsed(string name) => await categoryService.IsNameUsedAsync(name);

        [Authorize]
        [HttpPost]
        public async Task<ActionResult<int>> Create(CategoryCreateDTOin cat)
        {
            try
            {
                int newId = await categoryService.CreateNewAsync(cat, IsAdmin, UserId);
                return newId;
            }
            catch (InvalidOperationException ex)
            {
                return BadRequest(new { reason = ex.Message });
            }
        }

        [Authorize]
        [HttpDelete]
        public async Task<ActionResult> Delete(int id)
        {
            try
            {
                await categoryService.DeleteAsync(id, IsAdmin, UserId);
                return NoContent();
            }
            catch (InvalidOperationException ex)
            {
                return BadRequest(new { reason = ex.Message });
            }
        }

        [Authorize]
        [HttpGet("edit-details")]
        public async Task<ActionResult<CategoryEditDetailsDTOout>> GetEditDetails(int id)
        {
            try
            {
                return await categoryService.GetEditDetailsAsync(id, IsAdmin, UserId);
            }
            catch (InvalidOperationException ex)
            {
                return BadRequest(new { reason = ex.Message });
            }
        }

        [Authorize]
        [HttpPut]
        public async Task<ActionResult> EditDetails(CategoryEditDetailsDTOin category)
        {
            try
            {
                await categoryService.EditDetailsAsync(category, IsAdmin, UserId);
                return NoContent();
            }
            catch (InvalidOperationException ex)
            {
                return BadRequest(new { reason = ex.Message });
            }
        }

    }
}
