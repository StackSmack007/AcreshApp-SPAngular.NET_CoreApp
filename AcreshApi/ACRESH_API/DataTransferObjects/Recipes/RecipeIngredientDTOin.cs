using AutoMapper;
using AutoMapper.Configuration.Annotations;
using Infrastructure.Models;

namespace DataTransferObjects.Recipes
{
    //[AutoMap(typeof(RecipeIngredient))]
    public class RecipeIngredientDTOin
    {
        public string Ammount { get; set; }

        //[SourceMember(nameof(RecipeIngredient.IngredientId))]
          public int Id { get; set; }
    }
}
