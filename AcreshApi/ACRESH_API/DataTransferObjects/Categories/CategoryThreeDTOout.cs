using System.Collections.Generic;

namespace DataTransferObjects.Categories
{
    public class BaseCategoryData
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string AuthorId { get; set; }
        public bool HasRecipes { get; set; }
    }

    public class CategoryTreeDTOout : BaseCategoryData
    {
        public ICollection<CategoryTreeDTOout> Children { get; set; } = new HashSet<CategoryTreeDTOout>();
    }

    public class CategoryLeafFlat : BaseCategoryData
    {
        public int? ParentCategoryId { get; set; }
    }

}