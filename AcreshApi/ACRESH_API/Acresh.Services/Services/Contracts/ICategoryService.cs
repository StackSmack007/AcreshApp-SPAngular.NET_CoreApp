using DataTransferObjects.Categories;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Acresh.Services.Services.Contracts
{
    public interface ICategoryService
    {
                Task<ICollection<CategoryDTOout>> GetAllCategories();
        Task<ICollection<CategoryTreeDTOout>> GetThreeAsync();
        Task<CategoryDetailsDTOout> GetCategoryDetailsAsync(int id);
        Task<bool> IsNameUsedAsync(string name, int catId = -1);
        Task<int> CreateNewAsync(CategoryCreateDTOin cat, bool isAdmin, string userId);
        Task DeleteAsync(int id, bool isAdmin, string userId);
    }
}
