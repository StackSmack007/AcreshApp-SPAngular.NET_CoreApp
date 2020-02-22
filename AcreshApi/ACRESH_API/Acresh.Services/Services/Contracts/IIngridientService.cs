using DataTransferObjects.Ingredients;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Acresh.Services.Services.Contracts
{
    public interface IIngridientService
    {
        Task<ICollection<IngridientDTOout>> GetAllIngridientsMini();
    }
}
