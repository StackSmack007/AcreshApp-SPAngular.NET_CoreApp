using Infrastructure.Models.Contracts;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Infrastructure.Models
{
    public class RecipeComment : BaseEntity<int>, IReportable
    {
        public RecipeComment()
        {
            UsersAttitudes = new HashSet<CommentAttitude>();
            Reports = new HashSet<Report>();
        }

        [Required]
        public string AuthorId { get; set; }
        [ForeignKey(nameof(AuthorId))]
        public virtual AcUser Author { get; set; }

        [Required]
        public string RecipeId { get; set; }
        [ForeignKey(nameof(RecipeId))]
        public virtual Recipe Recipe { get; set; }

        [Required, MaxLength(1024 * 8)]
        public string Content { get; set; }
        public virtual ICollection<CommentAttitude> UsersAttitudes { get; set; }
        public virtual ICollection<Report> Reports { get; set; }
    }
}