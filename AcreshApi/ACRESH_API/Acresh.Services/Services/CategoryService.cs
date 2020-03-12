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
    public class CategoryService : ICategoryService
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

        public async Task<ICollection<CategoryTreeDTOout>> GetThreeAsync()
        {
            CategoryLeafFlat[] categoriesAll = await this.categoryRepo.All().Where(x => !x.IsDeleted)
                .Select(x => new CategoryLeafFlat
                {
                    Name = x.Name,
                    Id = x.Id,
                    AuthorId = x.AuthorId,
                    ParentCategoryId = x.ParentCategoryId,
                    HasRecipes = x.Recipes.Any(r => !r.IsDeleted)
                }).ToArrayAsync();

            int[] ids = categoriesAll.Select(x => x.Id).ToArray();
            List<CategoryTreeDTOout> result = categoriesAll.Where(x => x.ParentCategoryId is null || !ids.Contains(x.ParentCategoryId.Value))
                .Select(x => Map_CategoryLeafFlat_CategoryTreeDtoOut(x)).ToList();

            for (int i = 0; i < result.Count(); i++)
            {
                var currentBaseCategory = result[i];
                currentBaseCategory.Children = PopulateChildren(categoriesAll, currentBaseCategory);
            }

            return result;
        }

        private ICollection<CategoryTreeDTOout> PopulateChildren(ICollection<CategoryLeafFlat> pool, CategoryTreeDTOout reciever)
        {
            IList<CategoryTreeDTOout> result = new List<CategoryTreeDTOout>();
            foreach (var item in pool.Where(x => x.ParentCategoryId == reciever.Id))
            {
                var newChild = Map_CategoryLeafFlat_CategoryTreeDtoOut(item);
                newChild.Children = PopulateChildren(pool, newChild);
                result.Add(newChild);
            }
            return result;
        }
        private CategoryTreeDTOout Map_CategoryLeafFlat_CategoryTreeDtoOut(CategoryLeafFlat leaf)
        {
            return new CategoryTreeDTOout
            {
                Name = leaf.Name,
                Id = leaf.Id,
                AuthorId = leaf.AuthorId,
                HasRecipes = leaf.HasRecipes
            };
        }

        public async Task<CategoryDetailsDTOout> GetCategoryDetailsAsync(int id) => 
               await this.categoryRepo.All().Where(x => x.Id == id && !x.IsDeleted).To<CategoryDetailsDTOout>().FirstOrDefaultAsync();
    }
}
