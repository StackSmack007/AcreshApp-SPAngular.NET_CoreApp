using Acresh.Services.DBRepository.Contracts;
using Acresh.Services.Services.Contracts;
using Common.AutomapperConfigurations;
using DataTransferObjects.Ingredients;
using Infrastructure.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Acresh.Services.Services
{
    public class IngredientService : IIngredientService
    {
        private readonly IRepository<Ingredient> ingRepo;

        public IngredientService(IRepository<Ingredient> ingRepo)
        {
            this.ingRepo = ingRepo;
        }

        public async Task<ICollection<IngredientDTOout>> GetAllIngridientsMini() =>await this.ingRepo.All().To<IngredientDTOout>().ToArrayAsync();
    }
}
