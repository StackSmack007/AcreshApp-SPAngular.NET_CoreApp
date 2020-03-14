using Acresh.Services.DBRepository.Contracts;
using Acresh.Services.Services.Contracts;
using AutoMapper;
using Common.AutomapperConfigurations;
using DataTransferObjects.Categories;
using Infrastructure.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Acresh.Services.Services
{
    public class CategoryService : ICategoryService
    {
        private readonly IRepository<Category> categoryRepo;
        private readonly IMapper mapper;

        public CategoryService(IRepository<Category> categoryRepo, IMapper mapper)
        {
            this.categoryRepo = categoryRepo;
            this.mapper = mapper;
        }

        public IQueryable<CategoryDTOout> GetAllMini() => categoryRepo.All().Where(x => !x.IsDeleted).OrderBy(x => x.Name).To<CategoryDTOout>();

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

        public async Task<bool> IsNameUsedAsync(string name, int catId = -1) =>
               await categoryRepo.All().AnyAsync(x => !x.IsDeleted && x.Name.ToLower() == name.ToLower() && x.Id != catId);

        public async Task<int> CreateNewAsync(CategoryCreateDTOin cat, bool isAdmin, string userId)
        {
            if (cat.AuthorId != userId && !isAdmin) throw new InvalidOperationException("User is not authorized to create category!");
            if (await IsNameUsedAsync(cat.Name)) throw new InvalidOperationException($"Category name {cat.Name} is already used!");
            Category newCat = mapper.Map<Category>(cat);
            await this.categoryRepo.AddAssync(newCat);
            await this.categoryRepo.SaveChangesAsync();
            return newCat.Id;
        }

        public async Task DeleteAsync(int id, bool isAdmin, string userId)
        {
            var catFd = await categoryRepo.All().Include(x => x.Recipes).FirstOrDefaultAsync(x => x.Id == id);
            if (catFd is null) throw new InvalidOperationException("Category not found!");
            if (await categoryRepo.All().AnyAsync(x => !x.IsDeleted && x.ParentCategoryId == id)) throw new InvalidOperationException("Category has sub-categories and can not be deleted!");
            if (catFd.AuthorId != userId && !isAdmin) throw new InvalidOperationException("User is not authorized to delete category!");
            if (catFd.Recipes.Any(x => !x.IsDeleted)) throw new InvalidOperationException("Category has recipes belonging and can not be deleted!");
            if (catFd.IsDeleted) throw new InvalidOperationException("Category is already deleted!");
            catFd.IsDeleted = true;
            await categoryRepo.SaveChangesAsync();
        }

        public async Task<CategoryEditDetailsDTOout> GetEditDetailsAsync(int id, bool isAdmin, string userId)
        {
            var categoryFd = await categoryRepo.All().FirstOrDefaultAsync(x => !x.IsDeleted && x.Id == id);
            if (categoryFd is null) throw new InvalidOperationException("Category not found");
            if (categoryFd.AuthorId != userId && !isAdmin) throw new InvalidOperationException("User not authorized to edit!");
            return mapper.Map<CategoryEditDetailsDTOout>(categoryFd);
        }

        public async Task EditDetailsAsync(CategoryEditDetailsDTOin cat, bool isAdmin, string userId)
        {
            var categoryFd = await categoryRepo.All().FirstOrDefaultAsync(x => !x.IsDeleted && x.Id == cat.Id);
            if (categoryFd is null) throw new InvalidOperationException("Category not found");
            if (categoryFd.AuthorId != userId && !isAdmin) throw new InvalidOperationException("User not authorized to edit!");
            categoryFd.Name = cat.Name;
            categoryFd.ParentCategoryId = cat.ParentCategoryId;
            categoryFd.Description = cat.Description;
            categoryFd.DateOfLastEdit = DateTime.UtcNow;
            await categoryRepo.SaveChangesAsync();
        }
    }
}
