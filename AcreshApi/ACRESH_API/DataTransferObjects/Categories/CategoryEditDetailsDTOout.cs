using Common.Interfaces.Contracts.Automapper;
using Infrastructure.Models;

namespace DataTransferObjects.Categories
{
    public class CategoryEditDetailsDTOout : IMapFrom<Category>
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int? ParentCategoryId { get; set; }
    }
}
