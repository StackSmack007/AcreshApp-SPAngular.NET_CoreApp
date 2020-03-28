using Common.Interfaces.Contracts.Automapper;
using Infrastructure.Models;

namespace DataTransferObjects.Cauldron
{
    public class ICaudronRecipeIngredientDTOout : IMapFrom<Ingredient>
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }
}