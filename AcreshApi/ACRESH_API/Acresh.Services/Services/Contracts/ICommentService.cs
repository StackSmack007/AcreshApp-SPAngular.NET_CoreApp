using DataTransferObjects.Comments;
using System.Linq;
using System.Threading.Tasks;

namespace Acresh.Services.Services.Contracts
{
    public interface ICommentService
    {
        IQueryable<CommentDTOout> GetCommentsForRecipe(string recipeId, bool allComments = false);
        Task<int> SubmitComment(CommentDTOin comment);
    }
}
