using Infrastructure.Models.Enumerations;
using System.Collections.Generic;

namespace DataTransferObjects.Comments
{
    public class CommentDTOout    {

        public double DateAdded { get; set; }
        public double DateModified { get; set; }
        public CookRank AuthorCookRank { get; set; }
        public ICollection<string> Likers { get; set; }//todo
        public ICollection<string> DisLikers { get; set; }//todo

        public string Content { get; set; }

        public string AuthorUserName { get; set; }
        public string AuthorAvatarPicture { get; set; }
    }
}
