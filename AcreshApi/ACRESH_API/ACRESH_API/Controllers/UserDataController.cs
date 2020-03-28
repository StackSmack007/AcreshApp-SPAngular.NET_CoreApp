using System.Threading.Tasks;
using Acresh.Services.JWT;
using Acresh.Services.Services.Contracts;
using ACRESH_API.DTO.UserData;
using DataTransferObjects.UserData;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ACRESH_API.Controllers
{
    [Authorize]
    public class UserDataController : BaseController
    {
        private readonly IUserDataService userDataService;
        private readonly ServiceJWT jwtService;

        public UserDataController(IUserDataService userDataService, ServiceJWT jwtService)
        {
            this.userDataService = userDataService;
            this.jwtService = jwtService;
        }
        
        [AllowAnonymous]
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
                
        [HttpPost("setUserBlocking")]
        public async Task<ActionResult<UserProfileData>> SetBlocking(SetBlockingDTOIn blockData)
        {
            await this.userDataService.SetRemoveBlocking(blockData);
            return NoContent();
        }

        [HttpGet("profile")]
        public async Task<ActionResult<ProfileDataForEditDTOout>> GetMyProfileDataForEdit()
        {
            ProfileDataForEditDTOout result = await this.userDataService.GetProfileDataForEditAsync(UserId);
            if (result is null) return BadRequest();
            return result;
        }

        [HttpGet("blocked")]
        public async Task<ActionResult<BlockedUserInfoDTOout[]>> GetBlocked()
        {
            BlockedUserInfoDTOout[] result = await this.userDataService.GetBlockedUserInfos(UserId).ToArrayAsync();
            if (result is null) return BadRequest();
            return result;
        }

        [HttpGet("my-blockers")]
        public async Task<ActionResult<BlockerUserInfoDTOout[]>> GetBlockers()
        {
            BlockerUserInfoDTOout[] result = await this.userDataService.GetBlockerUserInfos(UserId).ToArrayAsync();
            if (result is null) return BadRequest();
            return result;
        }

        [HttpPost("profile")]
        public async Task<ActionResult> UpdateProfileInfo(ProfileDataForEditDTOin userData)
        {
            if (await this.userDataService.EditUserData(userData))
            {
                return NoContent();
            }
            return BadRequest();
        }

        //[HttpGet("blockers")]
        //public async Task<ActionResult<ICollection<BlockedByMeDTOout>>> GetMyBlockers()
        //{
        //    var usersWhoBlockMe = this.userDataService.GetBlockers(getUserId());




        //    return BadRequest();
        //}



    }
}
