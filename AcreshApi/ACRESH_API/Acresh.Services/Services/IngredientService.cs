﻿using Acresh.Services.DBRepository.Contracts;
using Acresh.Services.Services.Contracts;
using AutoMapper;
using Common.AutomapperConfigurations;
using DataTransferObjects.Cauldron;
using DataTransferObjects.Ingredients;
using DataTransferObjects.Recipes.Details;
using Infrastructure.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

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
        {//deleted are displayed also
            var result = await this.ingRepo.All().Where(x => x.Id == id).To<IngredientDetailsDTOout>().FirstOrDefaultAsync();
            return result;
        }

        public async Task<bool> IsNameUsedAsync(string name, int ingId = -1) => await ingRepo.All().AnyAsync(x => !x.IsDeleted && x.Name.ToLower() == name.ToLower() && x.Id != ingId);

        public async Task<Ingredient> CreateAsync(IngredientCreateDTOin input)
        {
            Ingredient ing = this.mapper.Map<Ingredient>(input);
            await this.ingRepo.AddAssync(ing);
            await this.ingRepo.SaveChangesAsync();
            return ing;
        }

        public async Task<IngredientEditDTO> GetIngredientEditDataAsync(int id)
        {
            var ingFd = await this.ingRepo.All().FirstOrDefaultAsync(x => x.Id == id && !x.IsDeleted);
            if (ingFd is null) return null;
            return this.mapper.Map<IngredientEditDTO>(ingFd);
        }

        public async Task<bool> UpdateAsync(IngredientEditDTO editIng)
        {
            var ingFd = await this.ingRepo.All().FirstOrDefaultAsync(x => x.Id == editIng.Id && !x.IsDeleted);
            if (ingFd is null) return false;
            ingFd.Name = editIng.Name;
            ingFd.IsEssential = editIng.IsEssential;
            ingFd.MeasureType = editIng.MeasureType;
            ingFd.Origin = editIng.Origin;
            ingFd.PicUrl = editIng.PicUrl;
            ingFd.Description = editIng.Description;
            ingFd.DateOfLastEdit = DateTime.UtcNow;
            await this.ingRepo.SaveChangesAsync();
            return true;
        }

        public async Task<string[]> GetNamesByIdsAsync(string ids)
        {
            var ingIds = ids.Split("|", StringSplitOptions.RemoveEmptyEntries).Select(int.Parse).ToArray();
            return await this.ingRepo.All().Where(x => !x.IsDeleted && ingIds.Contains(x.Id)).Select(x => x.Name).ToArrayAsync();
        }

        public async Task DeleteAsync(int id, string userId, bool isAdmin)
        {
            var ingFd = await ingRepo.All().FirstOrDefaultAsync(x => x.Id == id);
            if (ingFd.AuthorId != userId && !isAdmin) throw new InvalidOperationException("User is not authorized to delete ingredient!");
            if (ingFd.IsDeleted) throw new InvalidOperationException("Ingredient is already deleted!");
            ingFd.IsDeleted = true;
            await ingRepo.SaveChangesAsync();
        }

        public async Task<int> GetCauldronIngsCount(string phrase) =>
               await GetCauldronIngs(phrase).CountAsync();

        public IQueryable<CauldronIngredientDTOout> GetCauldronIngs(string phrase) =>
               ingRepo.All().Where(x =>
               !x.IsDeleted
               //&& x.IsEssential 
               && x.Name.ToLower().StartsWith(phrase.ToLower())).To<CauldronIngredientDTOout>();

    }
}