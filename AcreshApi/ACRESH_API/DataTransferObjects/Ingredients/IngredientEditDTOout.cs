using Common.Interfaces.Contracts.Automapper;
using Infrastructure.Models;

namespace DataTransferObjects.Ingredients
{
    public class IngredientEditDTOout : IngredientCreateDTOin, IMapFrom<Ingredient>
    {
        public int Id { get; set; }
    }

}