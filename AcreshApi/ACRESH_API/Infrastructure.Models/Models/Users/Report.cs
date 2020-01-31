using Infrastructure.Models.Enumerations;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Infrastructure.Models
{
    public class Report : BaseEntity<int>
    {
        public ReportType ReportType { get; set; }
        public int? IngredientId { get; set; }
        [ForeignKey(nameof(IngredientId))]
        public virtual Ingredient Ingredient { get; set; }

        public string RecipeId { get; set; }
        [ForeignKey(nameof(RecipeId))]
        public virtual Recipe Recipe { get; set; }

        public int? CommentId { get; set; }
        [ForeignKey(nameof(CommentId))]
        public virtual RecipeComment Comment { get; set; }

        public int? RecomendationId { get; set; }
        [ForeignKey(nameof(RecomendationId))]
        public virtual RecipeRecomendation Recomendation { get; set; }
        public int? MessageId { get; set; }
        [ForeignKey(nameof(MessageId))]
        public virtual Message Message { get; set; }

        [Required, MaxLength(256)]
        public string Reason { get; set; }
    }
}