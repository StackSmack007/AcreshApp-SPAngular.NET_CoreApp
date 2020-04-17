using ACRESH_API.DTO.UserData;
using DataTransferObjects.UserData;
using System.Linq;
using System.Threading.Tasks;

namespace Acresh.Services.Services.Contracts
{
    public interface IUserDataService
    {
        Task<UserProfileData> GetUserByUserName(string userName);
        Task<bool> SetRemoveBlocking(SetBlockingDTOIn blockData);
        Task<string> GetIdByUserName(string userName);
        Task<ProfileDataForEditDTOout> GetProfileDataForEditAsync(string userId);
        Task<bool> EditUserData(ProfileDataForEditDTOin userData);
        IQueryable<BlockedByMeDTOout> GetBlockers(string v);
        IQueryable<BlockedByMeDTOout> GetOnesIblock(string myId);
        IQueryable<BlockedUserInfoDTOout> GetBlockedUserInfos(string userId);
        IQueryable<BlockerUserInfoDTOout> GetBlockerUserInfos(string userId);
        Task<string> GetUserDataStringAsync(string userId);
    }
}
