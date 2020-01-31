using Acresh.Services.JWT;
using Infrastructure.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;

namespace ACRESH_API.Controllers
{
    public class UsersController : BaseController
    {
        private readonly ServiceJWT jwtService;
        private readonly UserManager<AcUser> um;

        public UsersController(ServiceJWT jwtService, UserManager<AcUser> um)
        {
            this.jwtService = jwtService;
            //this.um = um;
        }

        [HttpGet("Vzemi")]
        public Object Get()
        {
            return new { Animal = "chupakabra", Kopita = false };
        }


        [HttpGet("au")]
        public object UserData()
        {
            return "And The winner Is..." + this.User.Identity.Name + "\n | IsAdmin:" + this.User.IsInRole("Admin");
        }

        [Authorize(Roles="Admin")]
        [HttpGet("dai")]
        public object AuthorisedRequest()
        {
            return "Lognat si bate, bate";
        }


        [HttpGet("getToken")]
        public async Task<string> UserDataInput(string userName, string firstName, string lastName)
        {
            var u = new AcUser()
            {
                Id = "sa",
                UserName = userName,
                FirstName = firstName,
                LastName = lastName,
                Email = "test@test",
                AvatarPicture = "https://stackoverflow.com/questions/59254247/difference-between-createtoken-and-createjwtsecuritytoken-in-net-core-3"
            };


            //string password = "12345aA";


            //IdentityResult result;
            //try
            //{
            //     result = await um.CreateAsync(u, password);

            //}
            //catch (Exception e)
            //{

            //    return e.Message;
            //}


            //if (result.Succeeded)
            //{
            string token = await jwtService.CreateJWT(u);
            return $"Bearer {token}";
            //}

        }


    }
}
