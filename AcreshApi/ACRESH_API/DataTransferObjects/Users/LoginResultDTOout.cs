using System.Collections.Generic;

namespace DataTransferObjects.Users
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