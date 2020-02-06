using Common.Interfaces.Contracts.Automapper;
using Infrastructure.Models;

namespace DataTransferObjects.UserData
{
    public class ProfileDataForEditDTOout
    {
        public string UserName { get; set; }
        public string Gender { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string AvatarPicture { get; set; }
        public string Email { get; set; }
        public string Description { get; set; }
    }
}
