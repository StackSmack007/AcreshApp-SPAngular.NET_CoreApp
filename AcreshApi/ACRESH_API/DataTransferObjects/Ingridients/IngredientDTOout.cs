using Common.Interfaces.Contracts.Automapper;
using DataTransferObjects.Base;
using Infrastructure.Models;

namespace DataTransferObjects.Ingredients
{
    public class IngredientDTOout:BaseMiniClass<int>,IMapFrom<Ingredient>
    {    }
}