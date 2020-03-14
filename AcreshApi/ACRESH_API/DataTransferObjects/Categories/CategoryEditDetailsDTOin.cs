using System.ComponentModel.DataAnnotations;

namespace DataTransferObjects.Categories
{
    public class CategoryEditDetailsDTOin 
    {
        public int Id { get; set; }
        [Required, MaxLength(128)]
        public string Name { get; set; }
        [Required, MaxLength(1024)]
        public string Description { get; set; }
        public int? ParentCategoryId { get; set; }
    }
}