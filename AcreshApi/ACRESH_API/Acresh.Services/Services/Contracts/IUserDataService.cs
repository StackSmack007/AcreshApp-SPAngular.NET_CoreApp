using ACRESH_API.DTO.UserData;
using DataTransferObjects.UserData;
using System.Threading.Tasks;

namespace Acresh.Services.Services.Contracts
{
    public interface IUserDataService
    {
        Task<UserProfileData> GetUserByUserName(string userName);
        Task<bool> SetRemoveBlocking(SetBlockingDTOIn blockData);
        Task<string> GetIdByUserName(string userName);
        Task<ProfileDataForEditDTOout> GetProfileDataForEdit(string userId);
        Task<bool> EditUserData(ProfileDataForEditDTOin userData);
    }
}
