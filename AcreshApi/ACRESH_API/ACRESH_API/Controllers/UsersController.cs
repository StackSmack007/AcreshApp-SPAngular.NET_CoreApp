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
            string pastToken = (Request.Headers["Authorization"]).ToString().Replace("Bearer ", "");
            string newToken = await jwtService.UpdateToken(pastToken);
            if (newToken is null)
            {
                return this.BadRequest();
            }
            return new LoginResultDTOout { authToken = newToken };
        }




        [Authorize]
        [HttpGet("Vzemi")]
        public object Get()
        {
            return new { Animal = "chupakabra", Kopita = false };
        }

        [Authorize]
        [HttpGet("info")]
        public object GetUserNameInfo(string userName)
        {
            return new { Animal = "chupakabra", Kopita = false };
        }
        #region obsolete
        //[HttpGet("au")]
        //public object UserData()
        //{
        //    return "And The winner Is..." + this.User.Identity.Name + "\n | IsAdmin:" + this.User.IsInRole("Admin");
        //}

        //[Authorize(Roles = "Admin")]
        //[HttpGet("dai")]
        //public object AuthorisedRequest()
        //{
        //    return "Lognat si bate, bate";
        //}


        //[HttpGet("getToken")]
        //public async Task<string> UserDataInput(string userName, string firstName, string lastName)
        //{
        //    var u = new AcUser()
        //    {
        //        Id = "sa",
        //        UserName = userName,
        //        FirstName = firstName,
        //        LastName = lastName,
        //        Email = "test@test",
        //        AvatarPicture = "https://stackoverflow.com/questions/59254247/difference-between-createtoken-and-createjwtsecuritytoken-in-net-core-3"
        //    };


        //    //string password = "12345aA";


        //    //IdentityResult result;
        //    //try
        //    //{
        //    //     result = await um.CreateAsync(u, password);

        //    //}
        //    //catch (Exception e)
        //    //{

        //    //    return e.Message;
        //    //}


        //    //if (result.Succeeded)
        //    //{
        //    string token = await jwtService.CreateJWT(u);
        //    return $"Bearer {token}";
        //    //}

        //}

        #endregion
    }
}
