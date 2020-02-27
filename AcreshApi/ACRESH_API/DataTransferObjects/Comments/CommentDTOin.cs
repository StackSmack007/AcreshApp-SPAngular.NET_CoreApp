using Common.Interfaces.Contracts.Automapper;
using Infrastructure.Models;
using System.ComponentModel.DataAnnotations;

namespace DataTransferObjects.Comments
{
    public class CommentDTOin : IMapTo<RecipeComment>
    {
        [Required]
        public string AuthorId { get; set; }
        [Required]
        public string RecipeId { get; set; }

        [Required, MaxLength(1024 * 8), MinLength(4)]
        public string Content { get; set; }
    }
}
