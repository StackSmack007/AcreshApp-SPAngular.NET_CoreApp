using DataTransferObjects.Recipes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Acresh.Services.Services.Contracts
{
    public interface IRecipesService
    {
        IQueryable<RecipeCardDTOout> GetRecipeCarts(string criteria);
    }
}
