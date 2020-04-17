using Common.Interfaces.Contracts.Automapper;
using Infrastructure.Models;

namespace DataTransferObjects.Cauldron
{
    public class CauldronIngredientDTOout : IMapFrom<Ingredient>
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string PicUrl { get; set; }

    }
}
