using Acresh.Services.Services.Contracts;
using DataTransferObjects.Ingredients;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
using System.Threading.Tasks;

namespace ACRESH_API.Controllers
{
    public class IngridientsController : BaseController
    {
        private readonly IIngridientService ingService;

        public IngridientsController(IIngridientService ingService)
        {
            this.ingService = ingService;
        }

        [HttpGet("all-mini")]
        public async Task<ActionResult<IngridientDTOout[]>> GetAllMini()
        {
            var result = (await ingService.GetAllIngridientsMini()).ToArray();
            return result;
        }
    }
}