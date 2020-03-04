﻿using DataTransferObjects.Ingredients;
using DataTransferObjects.Ingridients;
using DataTransferObjects.Recipes.Details;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Acresh.Services.Services.Contracts
{
    public interface IIngredientService
    {
        Task<ICollection<IngredientOptionDTOout>> GetAllIngridientsMini();
        IQueryable<IngredientRecipeDetailsDTOout>  GetRecipeIngridients(string id);
        Task<IngredientCountsDTOout> GetCardsCountAsync(string index, string phrase);
    }
}
