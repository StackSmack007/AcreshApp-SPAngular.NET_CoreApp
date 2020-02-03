using Infrastructure.Models.Contracts;
using Infrastructure.Models.Enumerations;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Infrastructure.Models
{
    public class Ingredient : BaseEntity<int>, IReportable
    {
        public Ingredient()
        {
            Status = ApprovalStatus.Awaiting;
            IsEssential = false;
            IngredientRecipes = new HashSet<RecipeIngredient>();
            Reports = new HashSet<Report>();
        }

        [Required]
        public string AuthorId { get; set; }
        [ForeignKey(nameof(AuthorId))]
        public virtual AcUser Author { get; set; }

        [Required, MaxLength(128)]
        public string Name { get; set; }


        [Url]
        public string PicUrl { get; set; }


        [MaxLength(10240)]
        public string Description { get; set; }
        public OriginType Origin { get; set; }
        [NotMapped]
        public virtual bool IsVegan => Origin != OriginType.Animal;
        public bool IsEssential { get; set; }
        public virtual ICollection<RecipeIngredient> IngredientRecipes { get; set; }
        public virtual ICollection<Report> Reports { get; set; }

        public virtual UnitMeasurmentType MeasureType { get; set; }

        public virtual ApprovalStatus Status { get; set; }
    }
}