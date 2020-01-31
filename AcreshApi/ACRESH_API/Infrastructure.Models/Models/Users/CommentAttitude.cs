using System.ComponentModel.DataAnnotations.Schema;
namespace Infrastructure.Models
{
    public class CommentAttitude : BaseEntityData
    {
        public int CommentId { get; set; }
        [ForeignKey(nameof(CommentId))]
        public virtual RecipeComment Comment { get; set; }

        public string ShitGiverId { get; set; }
        [ForeignKey(nameof(ShitGiverId))]
        public virtual AcUser ShitGiver { get; set; }
    }
}