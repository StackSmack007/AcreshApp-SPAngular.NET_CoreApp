using System.Collections.Generic;

namespace DataTransferObjects.Comments
{
    public class CommentLikeStatusDTOout
    {
        public int Id { get; set; }
        public ICollection<string> Likers { get; set; }
        public ICollection<string> DisLikers { get; set; }
    }
}
