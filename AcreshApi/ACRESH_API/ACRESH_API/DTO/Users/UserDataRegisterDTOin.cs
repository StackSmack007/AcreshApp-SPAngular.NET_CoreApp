using Common.Interfaces.Contracts.Automapper;
using Infrastructure.Models;
using Infrastructure.Models.Enumerations;
using System.ComponentModel.DataAnnotations;

namespace ACRESH_API.DTO.Users
{
    public class UserDataRegisterDTOin : IMapTo<AcUser>
    {
        [Required, MaxLength(64)]
        public string UserName { get; set; }

        [Required, MaxLength(64)]
        public string FirstName { get; set; }
        [MaxLength(64)]
        public string LastName { get; set; }
        [Required]
        public string Password { get; set; }
        public Gender Gender { get; set; }

        [Url]
        public string AvatarPicture { get; set; }

        [MaxLength(512)]
        public string Description { get; set; }

        [Required, EmailAddress]
        public string Email { get; set; }

    }
}
