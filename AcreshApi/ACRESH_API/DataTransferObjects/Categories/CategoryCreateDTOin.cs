using Common.Interfaces.Contracts.Automapper;
using Infrastructure.Models;
using System.ComponentModel.DataAnnotations;

namespace DataTransferObjects.Categories
{
    public class CategoryCreateDTOin : IMapTo<Category>
    {
        [Required, MaxLength(128)]
        public string Name { get; set; }
        [Required]
        public string AuthorId { get; set; }

        [Required, MaxLength(1024)]
        public string Description { get; set; }
        public int? ParentCategoryId { get; set; }
    }
}