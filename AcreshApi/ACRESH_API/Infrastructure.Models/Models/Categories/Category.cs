using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Infrastructure.Models
{
    public class Category : BaseEntity<int>
    {
        public Category(string name, string description, params Category[] innerCat) : this(name, description)
        {
            ChildrenCategories = innerCat;
        }

        public Category(string name, string description) : this()
        {
            Name = name;
            Description = description;
        }

        public Category()
        {
            Recipes = new HashSet<Recipe>();
            ChildrenCategories = new HashSet<Category>();
        }

        [Required, MaxLength(128)]
        public string Name { get; set; }
        [Required]
        public string AuthorId { get; set; }
        [ForeignKey(nameof(AuthorId))]
        public virtual AcUser Author { get; set; }

        [Required, MaxLength(1024)]
        public string Description { get; set; }
        public virtual ICollection<Recipe> Recipes { get; set; }

        public int? ParentCategoryId { get; set; }
        [ForeignKey(nameof(ParentCategoryId))]
        public Category ParentCategory { get; set; }
        public ICollection<Category> ChildrenCategories { get; set; }

    }
}