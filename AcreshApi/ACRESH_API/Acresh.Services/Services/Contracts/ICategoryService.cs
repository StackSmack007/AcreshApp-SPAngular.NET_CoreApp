using DataTransferObjects.Categories;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Acresh.Services.Services.Contracts
{
    public interface ICategoryService
    {

        Task<ICollection<CategoryDTOout>> GetAllCategories();

    }
}
