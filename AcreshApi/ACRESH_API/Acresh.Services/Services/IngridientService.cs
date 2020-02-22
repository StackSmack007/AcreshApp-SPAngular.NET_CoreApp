using Acresh.Services.DBRepository.Contracts;
using Acresh.Services.Services.Contracts;
using Common.AutomapperConfigurations;
using DataTransferObjects.Ingredients;
using Infrastructure.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Acresh.Services.Services
{
    public class IngridientService : IIngridientService
    {
        private readonly IRepository<Ingredient> ingRepo;

        public IngridientService(IRepository<Ingredient> ingRepo)
        {
            this.ingRepo = ingRepo;
        }

        public async Task<ICollection<IngridientDTOout>> GetAllIngridientsMini() => this.ingRepo.All().To<IngridientDTOout>().ToArray();
    }
}
