using System.ComponentModel.DataAnnotations.Schema;
namespace Infrastructure.Models
{
    public class CommentAttitude : BaseEntityData
    {
        public int CommentId { get; set; }
        [ForeignKey(nameof(CommentId))]
        public virtual RecipeComment Comment { get; set; }

        public int shitGiverId { get; set; }
        [ForeignKey(nameof(shitGiverId))]
        public virtual AcUser ShitGiver { get; set; }
    }
}