using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Infrastructure.Models
{
    public class Tag : BaseEntity<int>
    {
        public Tag(string name)
        {
            Name = name;
            NormalizedName = name.ToUpper();
            TagRecipes = new HashSet<RecipeTag>();
        }
        [Required, MaxLength(32)]
        public string Name { get; set; }
        [Required, MaxLength(32)]
        public string NormalizedName { get; set; }//Unique!!!
        public ICollection<RecipeTag> TagRecipes { get; set; }
    }
}