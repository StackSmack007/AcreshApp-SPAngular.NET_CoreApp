using Common.Interfaces.Contracts.Automapper;
using Infrastructure.Models;

namespace DataTransferObjects.Ingredients
{
    public class IngredientEditDTO : IngredientCreateDTOin, IMapFrom<Ingredient>
    {
        public int Id { get; set; }
    }

}