using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Linq;

namespace ACRESH_API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class BaseController : ControllerBase
    {

        [Authorize]
        public string getUserId()
        {
            var userId = this.User.Claims.FirstOrDefault(x => x.Type == "_id").Value;
            return userId;
        }

    }
}
