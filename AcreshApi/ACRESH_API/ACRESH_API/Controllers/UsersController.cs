using Acresh.Services.JWT;
using AutoMapper;
using DataTransferObjects.Users;
using Infrastructure.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
using System.Threading.Tasks;

namespace ACRESH_API.Controllers
{
    public class UsersController : BaseController
    {
        private readonly ServiceJWT jwtService;
        private readonly SignInManager<AcUser> sm;
        private readonly RoleManager<IdentityRole> rm;
        private readonly IMapper mapper;
        private readonly UserManager<AcUser> um;

        public UsersController(ServiceJWT jwtService, UserManager<AcUser> um, SignInManager<AcUser> sm, RoleManager<IdentityRole> rm, IMapper mapper)
        {
            this.jwtService = jwtService;
            this.sm = sm;
            this.rm = rm;
            this.mapper = mapper;
            this.um = um;
        }

        [HttpPost("is-singIn-data-free")]
        public UseDataTakenDTOout IsNameFree(UserDataTakenDTOin userData)
        {
            var result = new UseDataTakenDTOout(um.Users.Any(x => x.UserName == userData.UserName), um.Users.Any(x => x.Email == userData.Email));
            return result;
        }

        [HttpPost("register")]
        public async Task<ActionResult<LoginResultDTOout>> Register(UserDataRegisterDTOin userData)
        {
            var newUser = mapper.Map<AcUser>(userData);
            var regResult = await um.CreateAsync(newUser, userData.Password);
            var roleAssignResult = await um.AddToRoleAsync(newUser, "User");

            if (regResult.Succeeded && roleAssignResult.Succeeded)
            {
                var loginData = new UserLoginDataDTOin { UserNameOrEmail = userData.UserName, Password = userData.Password };
                return await Login(loginData);
            }

            var reasons = regResult.Errors.Select(e => e.Description).ToArray();
            return StatusCode(401, new { error = reasons });
            //  return new LoginResultDTOout { isSuccessfull = false, Errors = reasons };
        }

        [HttpPost("login")]
        public async Task<ActionResult<LoginResultDTOout>> Login(UserLoginDataDTOin data)
        {
            AcUser user = um.Users.FirstOrDefault(x => x.UserName == data.UserNameOrEmail || x.Email == data.UserNameOrEmail);
            if (user == null) return StatusCode(401, new { error = "username or password mismatch!" });

            await sm.SignInAsync(user, false, data.Password);
            if (sm.IsSignedIn(User)) return StatusCode(401, new { error = "username or password mismatch!" });

            await sm.SignOutAsync();
            string token = await jwtService.CreateJWT(user);
            var result = new LoginResultDTOout { authToken = token };
            return result;
        }

        [Authorize]
        [HttpPost("update-my-token")]
        public async Task<ActionResult<LoginResultDTOout>> UpdateMyToken()
        {
            var user = await jwtService.GetUserFromRequestTokenAsync(Request);
            string newToken = await jwtService.CreateJWT(user);
            if (newToken is null)
            {
                return this.BadRequest();
            }
            return new LoginResultDTOout { authToken = newToken };
        }
    }
}
