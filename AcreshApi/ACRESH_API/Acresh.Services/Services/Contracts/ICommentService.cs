using DataTransferObjects.Comments;
using System.Linq;
using System.Threading.Tasks;

namespace Acresh.Services.Services.Contracts
{
    public interface ICommentService
    {
        IQueryable<CommentDTOout> GetCommentsForRecipe(string recipeId, bool allComments = false);
        Task<int> SubmitCommentAsync(CommentDTOin comment);
        Task<CommentLikeStatusDTOout> SetVoteAsync(CommentVoteDTOin commentVote, string userId);
        Task SetDeleteAsync(int comId, string userId, bool isAdmin);
    }
}
