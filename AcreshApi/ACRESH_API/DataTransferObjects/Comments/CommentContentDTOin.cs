using System.ComponentModel.DataAnnotations;

namespace DataTransferObjects.Comments
{
    public   class CommentContentDTOin
    {
        public int Id { get; set; }
        [Required, MaxLength(1024 * 8)]
        public string Content { get; set; }

        public long DateModified { get; set; }
    }
}