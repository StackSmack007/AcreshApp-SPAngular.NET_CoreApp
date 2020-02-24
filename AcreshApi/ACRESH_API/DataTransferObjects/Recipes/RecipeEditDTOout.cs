using Infrastructure.Models.Enumerations;
using System.Collections.Generic;

namespace DataTransferObjects.Recipes.Details
{
    public class RecipeEditDTOout
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public ICollection<string> Pictures { get; set; }
        public string VideoLink { get; set; }
        public string MainPicture { get; set; }
        public ICollection<string> Tags { get; set; }
        public ICollection<RecipeIngredientDTOin> Ingredients { get; set; }
        public int CategoryId { get; set; }
        public RecipeDifficulty Difficulty { get; set; }
            }
}
