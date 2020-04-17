using Infrastructure.Models.Enumerations;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace DataTransferObjects.Recipes
{
    public class RecipeCreateDTOin
    {
        [Required]
        public string AuthorId { get; set; }

        [Required, MaxLength(256)]
        public string Name { get; set; }
        [Required, MaxLength(25600), MinLength(100)]
        public string Description { get; set; }
        public ICollection<string> Pictures { get; set; }

        public string VideoLink { get; set; }
        [Required, Url]
        public string MainPicture { get; set; }

        public ICollection<string> Tags { get; set; }
        public ICollection<RecipeIngredientDTOin> Ingredients { get; set; }
        [Range(1, 100)]
        public int CategoryId { get; set; }
        public RecipeDifficulty Difficulty { get; set; }
    }
}
