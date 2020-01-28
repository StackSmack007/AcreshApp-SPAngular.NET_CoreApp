using Infrastructure.Models.Enumerations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Infrastructure.Models
{
    public class RecipeVote:BaseEntityData
    {
        public string VoterId { get; set; }
        [ForeignKey(nameof(VoterId))]
        public virtual AcUser Voter { get; set; }
        public int RecipeId { get; set; }
        [ForeignKey(nameof(RecipeId))]
        public virtual Recipe Recipe { get; set; }
        public RecipeRating Score { get; set; }
    }
}