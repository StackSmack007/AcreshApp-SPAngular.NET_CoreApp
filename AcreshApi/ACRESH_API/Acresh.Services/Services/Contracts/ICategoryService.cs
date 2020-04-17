using DataTransferObjects.Categories;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Acresh.Services.Services.Contracts
{
    public interface ICategoryService
    {
        IQueryable<CategoryDTOout> GetAllMini();
        Task<ICollection<CategoryTreeDTOout>> GetThreeAsync();
        Task<CategoryDetailsDTOout> GetCategoryDetailsAsync(int id);
        Task<bool> IsNameUsedAsync(string name, int catId = -1);
        Task<int> CreateNewAsync(CategoryCreateDTOin cat, bool isAdmin, string userId);
        Task DeleteAsync(int id, bool isAdmin, string userId);
        Task<CategoryEditDetailsDTOout> GetEditDetailsAsync(int id, bool isAdmin, string userId);
        Task EditDetailsAsync(CategoryEditDetailsDTOin category, bool isAdmin, string userId);
    }
}