using System.ComponentModel.DataAnnotations.Schema;

namespace Infrastructure.Models
{
    public class RecipeIngredient : BaseEntityData
    {
        public string RecipeId { get; set; }
        [ForeignKey(nameof(RecipeId))]
        public virtual Recipe Recipe { get; set; }

        public int IngredientId { get; set; }
        [ForeignKey(nameof(IngredientId))]
        public virtual Ingredient Ingredient { get; set; }

        public string Ammount { get; set; }

    }
}
