using System.Collections.Generic;

namespace ACRESH_API.DTO.UserData
{
    public class UserProfileData
    {
        public string Id { get; set; }
        public string UserName { get; set; }
        public string Gender { get; set; }
        public string CookRank { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string AvPic { get; set; }
        public string Email { get; set; }
        public string Description { get; set; }
        public int RecipesShared { get; set; }
        public ICollection<string> BlockedUserNames { get; set; }
    }
}