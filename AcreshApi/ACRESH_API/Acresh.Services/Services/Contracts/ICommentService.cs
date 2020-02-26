using DataTransferObjects.Comments;
using System.Linq;

namespace Acresh.Services.Services.Contracts
{
    public interface ICommentService
    {
        IQueryable<CommentDTOout> GetCommentsForRecipe(string recipeId, bool allComments = false);
    }
}
