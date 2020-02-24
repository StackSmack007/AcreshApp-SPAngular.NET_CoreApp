using Microsoft.AspNetCore.Mvc;
using System.Linq;

namespace ACRESH_API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class BaseController : ControllerBase
    {
        protected string UserId
        {
            get
            {
                if (!User.Identity.IsAuthenticated) return null;
                var userId = this.User.Claims.FirstOrDefault(x => x.Type == "_id").Value;
                return userId;
            }
        }
        protected bool IsAdmin
        {
            get
            {
                if (!User.Identity.IsAuthenticated) return false;
                var result = this.User.Claims.FirstOrDefault(x => x.Type == "http://schemas.microsoft.com/ws/2008/06/identity/claims/role").Value.Split("|").Contains("Admin");
                return result;
            }
        }
    }
}
