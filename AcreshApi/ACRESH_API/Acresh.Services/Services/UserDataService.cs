using Acresh.Services.DBRepository.Contracts;
using Acresh.Services.Services.Contracts;
using ACRESH_API.DTO.UserData;
using Infrastructure.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading.Tasks;


namespace Acresh.Services.Services
{
    public  class UserDataService:IUserDataService
    {
        private readonly IRepository<Recipe> recipeRepo;
        private readonly UserManager<AcUser> uManager;

        public UserDataService(IRepository<Recipe> recipeRepo,UserManager<AcUser> uManager)
        {
            this.recipeRepo = recipeRepo;
            this.uManager = uManager;
        }

        public async Task<UserProfileData> GetUserByUserName(string userName)
        {
            UserProfileData userInfo = await uManager.Users.Where(x => x.UserName.ToLower() == userName.ToLower())
                .Select(x => new UserProfileData
                {
                    UserName = x.UserName,
                    Gender = x.Gender.ToString(),
                    CookRank = x.CookRank.ToString(),
                    FirstName=x.FirstName,
                    LastName=x.LastName,
                    AvPic=x.AvatarPicture,
                    Email=x.Email,
                    Description=x.Description,
                    RecipesShared=x.SharedRecipes.Count(),
                    BlockedUserNames=x.UsersIBlocked.Select(x=>x.Irritator.UserName).ToArray()
                }).FirstOrDefaultAsync();
            return userInfo;
        }




    }
}
