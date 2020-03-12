using DataTransferObjects.Categories;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Acresh.Services.Services.Contracts
{
    public interface ICategoryService
    {
                Task<ICollection<CategoryDTOout>> GetAllCategories();
        Task<ICollection<CategoryTreeDTOout>> GetThreeAsync();
        Task<CategoryDetailsDTOout> GetCategoryDetailsAsync(int id);
    }
}
