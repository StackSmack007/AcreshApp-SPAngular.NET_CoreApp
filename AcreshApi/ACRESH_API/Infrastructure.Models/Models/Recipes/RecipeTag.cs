using System.ComponentModel.DataAnnotations.Schema;

namespace Infrastructure.Models
{
    public class RecipeTag : BaseEntityData
    {
        public string RecipeId { get; set; }

        [ForeignKey(nameof(RecipeId))]
        public virtual Recipe Recipe { get; set; }

        public int TagId { get; set; }
        [ForeignKey(nameof(TagId))]
        public virtual Tag Tag { get; set; }
    }
}