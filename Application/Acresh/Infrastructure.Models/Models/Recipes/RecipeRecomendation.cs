using Infrastructure.Models.Contracts;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Infrastructure.Models
{
    public class RecipeRecomendation : BaseEntity<int>, IReportable
    {
        public RecipeRecomendation()
        {
            Reports = new HashSet<Report>();
        }

        [Required]
        public string AuthorId { get; set; }
        [ForeignKey(nameof(AuthorId))]
        public virtual AcUser Author { get; set; }

        [Required, MaxLength(2048)]
        public string Content { get; set; }

        public ICollection<Report> Reports { get; set; }
    }
}