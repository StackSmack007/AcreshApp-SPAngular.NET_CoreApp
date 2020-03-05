using Common.Interfaces.Contracts.Automapper;
using DataTransferObjects.Base;
using Infrastructure.Models;

namespace DataTransferObjects.Ingredients
{
    public class IngredientOptionDTOout:BaseMiniClass<int>,IMapFrom<Ingredient>
    {    }
}