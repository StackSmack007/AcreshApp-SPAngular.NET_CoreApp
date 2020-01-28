using System.ComponentModel.DataAnnotations.Schema;

namespace Infrastructure.Models
{
    public class UserFavouriteRecepy : BaseEntityData
    {
        public string UserId { get; set; }
        [ForeignKey(nameof(UserId))]
        public virtual AcUser User { get; set; }

        public string RecipeId { get; set; }
        [ForeignKey(nameof(RecipeId))]
        public virtual Recipe Recipe { get; set; }
    }
}