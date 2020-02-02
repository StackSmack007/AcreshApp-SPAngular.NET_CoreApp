using System.ComponentModel.DataAnnotations;

namespace ACRESH_API.DTO.Users
{
    public class UserLoginDataDTOin
    {
        [Required, MaxLength(64)]
        public string UserNameOrEmail { get; set; }
       
        [Required]
        public string Password { get; set; }
    }
}
