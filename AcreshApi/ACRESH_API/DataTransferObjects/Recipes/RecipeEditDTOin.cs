using System.ComponentModel.DataAnnotations;

namespace DataTransferObjects.Recipes
{
    public class RecipeEditDTOin : RecipeCreateDTOin
    {
        [Required]
        public string Id { get; set; }
    }
}
