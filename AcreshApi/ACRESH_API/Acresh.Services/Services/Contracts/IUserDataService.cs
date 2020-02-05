using ACRESH_API.DTO.UserData;
using System.Threading.Tasks;

namespace Acresh.Services.Services.Contracts
{
    public interface IUserDataService
    {
        Task<UserProfileData> GetUserByUserName(string userName);


      



    }
}
