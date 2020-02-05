using System.Threading.Tasks;
using Acresh.Services.Services.Contracts;
using ACRESH_API.DTO.UserData;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace ACRESH_API.Controllers
{
    public class UserDataController : BaseController
    {
        private readonly IUserDataService userDataService;

        public UserDataController(IUserDataService userDataService)
        {
            this.userDataService = userDataService;
        }

        [Authorize]
        [HttpGet("profileInfo")]
        public async Task<ActionResult<UserProfileData>> GetProfileInfo(string userName)
        {
            var userData = await this.userDataService.GetUserByUserName(userName);
            if (userData is null)
            {
                return NotFound();
            }
            return userData;
        }
        

        [Authorize]
        [HttpPost("setUserBlocking")]
        public async Task<ActionResult<UserProfileData>> SetBlocking(object userName)
        {
            //var userData = await this.userDataService.GetUserByUserName(userName);
            //if (userData is null)
            //{
            //    return NotFound();
            //}
            //return userData;
            return null;
        }
    }
}
