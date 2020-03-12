using Common.Interfaces.Contracts.Automapper;
using DataTransferObjects.Base;
using Infrastructure.Models;

namespace DataTransferObjects.Categories
{
    public class CategoryDTOout : BaseMiniClass<int>, IMapFrom<Category>
    { }
}
