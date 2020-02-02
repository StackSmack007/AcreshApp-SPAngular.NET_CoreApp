using System.Collections.Generic;

namespace ACRESH_API.DTO.Users
{
    public class LoginResultDTOout
    {
        public LoginResultDTOout()
        {
            Errors = new HashSet<string>();
            isSuccessfull = true;
        }
        public string authToken { get; set; }

        public bool isSuccessfull { get; set; }

        public ICollection<string> Errors { get; set; }
    }
}
