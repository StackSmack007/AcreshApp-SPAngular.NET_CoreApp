using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Infrastructure.Models
{
    public class RecipePicture : BaseEntityData
    {
        //KeyIs Composite of RecipeId and UrlPath preventing same picture uploading twice
        [Required]
        public string RecipeId { get; set; }
        [ForeignKey(nameof(RecipeId))]
        public virtual Recipe Recipe { get; set; }

        [Required, Url,] //TODO This path must be unique in order to never upload same picture for two meals if it happens same picture must be uploaded!
        public string UrlPath { get; set; }
    }
}