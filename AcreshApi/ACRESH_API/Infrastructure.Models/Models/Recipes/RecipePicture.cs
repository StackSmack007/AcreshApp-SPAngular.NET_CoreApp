using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Infrastructure.Models
{
    public class RecipePicture : BaseEntity<string>
    {
        [Required]
        public string RecipeId { get; set; }
        [ForeignKey(nameof(RecipeId))]
        public virtual Recipe Recipe { get; set; }

        [Required, Url] 
        public string UrlPath { get; set; }
    }
}