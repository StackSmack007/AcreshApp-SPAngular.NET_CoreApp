using Infrastructure.Models.Enumerations;
using System.Collections.Generic;

namespace DataTransferObjects.Comments
{
    public class CommentDTOout
    {
        public int Id { get; set; }
        public double DateAdded { get; set; }
        public double DateModified { get; set; }
        public CookRank AuthorCookRank { get; set; }
        public ICollection<string> Likers { get; set; }
        public ICollection<string> DisLikers { get; set; }
        public string Content { get; set; }
        public string AuthorUserName { get; set; }
        public string AuthorAvatarPicture { get; set; }
    }
}
