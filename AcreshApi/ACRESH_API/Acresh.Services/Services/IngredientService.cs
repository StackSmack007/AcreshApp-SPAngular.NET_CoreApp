using System.Linq;
using Infrastructure.Models;
using System.Threading.Tasks;
using Acresh.Services.DBRepository.Contracts;
using Acresh.Services.Services.Contracts;
using Common.AutomapperConfigurations;
using DataTransferObjects.Ingredients;
using DataTransferObjects.Recipes.Details;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System;
using AutoMapper;

namespace Acresh.Services.Services
{
    public class IngredientService : IIngredientService
    {
        private readonly IRepository<Ingredient> ingRepo;
        private readonly IRepository<RecipeIngredient> ingRecipeRepo;
        private readonly IMapper mapper;

        public IngredientService(IRepository<Ingredient> ingRepo, IRepository<RecipeIngredient> ingRecipeRepo, IMapper mapper)
        {
            this.ingRepo = ingRepo;
            this.ingRecipeRepo = ingRecipeRepo;
            this.mapper = mapper;
        }

        public async Task<ICollection<IngredientOptionDTOout>> GetAllIngridientsMini() => await this.ingRepo.All().To<IngredientOptionDTOout>().ToArrayAsync();

        public IQueryable<IngredientRecipeDetailsDTOout> GetRecipeIngridients(string id) =>
            ingRecipeRepo.All().Where(x => x.RecipeId == id && !x.IsDeleted).To<IngredientRecipeDetailsDTOout>();

        public async Task<IngredientCountsDTOout> GetCardsCountAsync(string index, string phrase, int pageCappacity) =>
             new IngredientCountsDTOout
             {
                 pageCappacity = pageCappacity,
                 Essentials = await FilterIngredients(ingRepo.All(), index, phrase, true).CountAsync(),
                 NonEssentials = await FilterIngredients(ingRepo.All(), index, phrase, false).CountAsync(),
             };

        public IQueryable<IngredientCardDTOout> GetCards(string index, string phrase, bool essential) =>
            FilterIngredients(ingRepo.All(), index, phrase, essential).To<IngredientCardDTOout>();

        private static IQueryable<Ingredient> FilterIngredients(IQueryable<Ingredient> ings, string index, string phrase, bool isEssential, bool isDeleted = false)
        {
            var result = ings;
            var indexU = index is null ? "-" : index.ToUpper();
            var phraseU = phrase is null ? "" : phrase.ToUpper();
            int ind = indexU[0];
            if (ind >= 65 && ind <= 90)
            {
                result = ings.Where(x => x.Name.ToUpper().StartsWith(indexU));
            }
            return result.Where(x => x.IsEssential == isEssential && x.IsDeleted == isDeleted && x.Name.ToUpper().Contains(phraseU));
        }

        public async Task<IngredientDetailsDTOout> GetDetailsAsync(int id)
        {
            var result = await this.ingRepo.All().Where(x => x.Id == id).To<IngredientDetailsDTOout>().FirstOrDefaultAsync();
            return result;
        }

        public async Task<bool> IsNameUsedAsync(string name) => await ingRepo.All().AnyAsync(x => !x.IsDeleted && x.Name.ToLower() == name.ToLower());

        public async Task<Ingredient> CreateAsync(IngredientCreateDTOin input)
        {
            try
            {
                Ingredient ing = this.mapper.Map<Ingredient>(input);

                await this.ingRepo.AddAssync(ing);
                await this.ingRepo.SaveChangesAsync();
                return ing;
            }
            catch (Exception ex)
            {
                throw;
            }
        }

        public async Task<IngredientEditDTOout> GetIngredientEditDataAsync(int id)
        {
            var ingFd =await this.ingRepo.All().FirstOrDefaultAsync(x => x.Id == id && !x.IsDeleted);
            if (ingFd is null) return null;
            return this.mapper.Map<IngredientEditDTOout>(ingFd);
        }

        //public IQueryable<IngredientRecipeDetailsDTOout> GetRecipeIngridients(string id) => ingRecipeRepo.All().Where(x => x.RecipeId == id && !x.IsDeleted).To<IngredientRecipeDetailsDTOout>();
    }

}
