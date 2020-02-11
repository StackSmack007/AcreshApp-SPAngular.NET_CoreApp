using Acresh.Services.DBRepository.Contracts;
using Acresh.Services.Services.Contracts;
using ACRESH_API.DTO.UserData;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using Common.Tools.Extensions;
using DataTransferObjects.UserData;
using Infrastructure.Models;
using Infrastructure.Models.Enumerations;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace Acresh.Services.Services
{
    public class UserDataService : IUserDataService
    {
        private readonly IRepository<Recipe> recipeRepo;
        private readonly UserManager<AcUser> uManager;
        private readonly IRepository<UserBlocking> blockingsRepository;
        private readonly IMapper mapper;

        public UserDataService(IRepository<Recipe> recipeRepo, UserManager<AcUser> uManager, IRepository<UserBlocking> blockingsRepository, IMapper mapper)
        {
            this.recipeRepo = recipeRepo;
            this.uManager = uManager;
            this.blockingsRepository = blockingsRepository;
            this.mapper = mapper;
        }

        public async Task<UserProfileData> GetUserByUserName(string userName)
        {
            UserProfileData userInfo = await uManager.Users.Where(x => x.UserName.ToLower() == userName.ToLower())
                .Select(x => new UserProfileData
                {
                    Id = x.Id,
                    UserName = x.UserName,
                    Gender = x.Gender.ToString(),
                    CookRank = x.CookRank.ToString(),
                    FirstName = x.FirstName,
                    LastName = x.LastName,
                    AvPic = x.AvatarPicture,
                    Email = x.Email,
                    Description = x.Description,
                    RecipesShared = x.SharedRecipes.Count(),
                    BlockedUserNames = x.UsersIBlocked.Where(x => !x.IsDeleted).Select(x => x.Irritator.UserName).ToArray()
                }).FirstOrDefaultAsync();
            return userInfo;
        }

        public async Task<string> GetIdByUserName(string userName)
        {
            return await this.uManager.Users.Where(x => x.NormalizedUserName == userName.ToUpper()).Select(x => x.Id).FirstOrDefaultAsync();
        }

        public async Task<bool> SetRemoveBlocking(SetBlockingDTOIn blockData)
        {
            IDictionary<string, string> roleIds = uManager.Users.Where(x => x.UserName == blockData.DefendorUserName || x.UserName == blockData.IrritatorUserName).Select(x => new
            {
                Role = x.UserName == blockData.IrritatorUserName ? "Irritator" : "Defender",
                x.Id
            }).ToDictionary(x => x.Role, x => x.Id);

            var blocking = await blockingsRepository.All().FirstOrDefaultAsync(x => x.IrritatorId == roleIds["Irritator"] && x.DefenderId == roleIds["Defender"]);
            if (blocking is null)
            {
                await blockingsRepository.AddAssync(new UserBlocking
                {
                    DefenderId = roleIds["Defender"],
                    IrritatorId = roleIds["Irritator"]
                });
            }
            else
            {
                blocking.DateOfCreation = DateTime.UtcNow;
                blocking.IsDeleted = !blocking.IsDeleted;
            }
            await blockingsRepository.SaveChangesAsync();
            return true;
        }

        public async Task<ProfileDataForEditDTOout> GetProfileDataForEditAsync(string userId)
        {
            var userFound = await this.uManager.Users.FirstOrDefaultAsync(x => x.Id == userId);
            if (userFound is null) return null;
            ProfileDataForEditDTOout result;
            try
            {
                result = mapper.Map<ProfileDataForEditDTOout>(userFound);
            }
            catch (System.Exception e)
            {

                throw;
            }
            return result;
        }

        public async Task<bool> EditUserData(ProfileDataForEditDTOin userData)
        {
            var foundUser = await this.uManager.FindByNameAsync(userData.UserName);
            if (foundUser is null) return false;
            if (await uManager.CheckPasswordAsync(foundUser, userData.Password))
            {
                foundUser.Gender = Enum.Parse<Gender>(userData.Gender[0].ToString().ToUpper() + userData.Gender.Substring(1));
                foundUser.FirstName = userData.FirstName;
                foundUser.LastName = userData.LastName;
                foundUser.Email = userData.Email;
                foundUser.AvatarPicture = userData.AvatarPicture;
                foundUser.Description = userData.Description;
                await uManager.UpdateAsync(foundUser);
                return true;
            }
            return false;
        }
        //TODO
        public IQueryable<BlockedByMeDTOout> GetBlockers(string myId)
        {
            var result = this.blockingsRepository.All().Where(x => !x.IsDeleted && x.IrritatorId == myId).To<BlockedByMeDTOout>();
            return result;
        }


        public IQueryable<BlockedByMeDTOout> GetOnesIblock(string myId)
        {
            var result = this.blockingsRepository.All().Where(x => !x.IsDeleted && x.DefenderId == myId).To<BlockedByMeDTOout>();
            return result;
        }

        public IQueryable<BlockedUserInfoDTOout> GetBlockedUserInfos(string userId)
        {
                var result = this.blockingsRepository.All().Where(x => !x.IsDeleted && x.DefenderId == userId).OrderByDescending(x => x.DateOfCreation).To<BlockedUserInfoDTOout>();
                return result;
        }


        public IQueryable<BlockerUserInfoDTOout> GetBlockerUserInfos(string userId)
        {
            var result = this.blockingsRepository.All().Where(x => !x.IsDeleted && x.IrritatorId == userId).OrderByDescending(x => x.DateOfCreation).To<BlockerUserInfoDTOout>();
            return result;
        }
    }
}
