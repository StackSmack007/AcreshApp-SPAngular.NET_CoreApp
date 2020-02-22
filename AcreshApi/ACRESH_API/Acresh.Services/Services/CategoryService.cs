using Acresh.Services.DBRepository.Contracts;
using Acresh.Services.Services.Contracts;
using Common.AutomapperConfigurations;
using DataTransferObjects.Categories;
using Infrastructure.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Acresh.Services.Services
{
    public class CategoryService:ICategoryService
    {
        private readonly IRepository<Category> categoryRepo;

        public CategoryService(IRepository<Category> categoryRepo)
        {
            this.categoryRepo = categoryRepo;
        } 
     
        public async Task<ICollection<CategoryDTOout>> GetAllCategories()
        {
            var result = await this.categoryRepo.All().To<CategoryDTOout>().ToArrayAsync();
            return result;
        }


    }
}
