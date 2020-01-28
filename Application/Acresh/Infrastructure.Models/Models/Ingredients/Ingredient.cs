using Infrastructure.Models.Contracts;
using Infrastructure.Models.Enumerations;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Infrastructure.Models
{
    public class Ingredient : BaseEntity<int>,IReportable
    {
        public Ingredient()
        {
            Status = ApprovalStatus.Awaiting;
            Essential = false;
            Recipes = new HashSet<Recipe>();
            Reports = new HashSet<Report>();
        }

        [Required, MaxLength(128)]
        public string Name { get; set; }
        [MaxLength(10240)]
        public string Description { get; set; }
        public OriginType Origin { get; set; }
        [NotMapped]
        public virtual bool IsVegan => Origin != OriginType.Animal;
        public bool Essential { get; set; }
        public virtual ICollection<Recipe> Recipes { get; set; }
        public virtual ICollection<Report> Reports { get; set; }

        public virtual UnitMeasurmentType MeasureType { get; set; }

        public virtual ApprovalStatus Status { get; set; }
    }
}