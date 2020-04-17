using Common.Interfaces.Contracts.Automapper;
using Infrastructure.Models;
using Infrastructure.Models.Enumerations;
using System.ComponentModel.DataAnnotations;

namespace DataTransferObjects.Ingredients
{
    public class IngredientCreateDTOin : IMapTo<Ingredient>//,IMapFrom<Ingredient>
    {
        [Required, MaxLength(32)]
        public string Name { get; set; }

        [Required]
        public string AuthorId { get; set; }

        [Url]
        public string PicUrl { get; set; }

        [MaxLength(10240)]
        public string Description { get; set; }
        public OriginType Origin { get; set; }
        public bool IsEssential { get; set; }

        public virtual UnitMeasurmentType MeasureType { get; set; }
    }

}