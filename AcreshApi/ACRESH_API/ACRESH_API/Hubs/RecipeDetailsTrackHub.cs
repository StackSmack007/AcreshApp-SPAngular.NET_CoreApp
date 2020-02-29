using Microsoft.AspNetCore.SignalR;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ACRESH_API.Hubs
{
    public class RecipeDetailsTrackHub : BaseHub
    {
        public static IDictionary<string, ICollection<string>> RecipeDetailsViewerConections { get; set; }
        static RecipeDetailsTrackHub()
        {
            RecipeDetailsViewerConections = new Dictionary<string, ICollection<string>>();
        }
        public void RegisterUserConnection(string recipeId)
        {
            if (!RecipeDetailsViewerConections.ContainsKey(recipeId))
            {
                RecipeDetailsViewerConections[recipeId] = new HashSet<string>();
            }
            if (RecipeDetailsViewerConections[recipeId].Contains(ConId)) return;
            RecipeDetailsViewerConections[recipeId].Add(ConId);
        }
        public async Task ChangeDetailsProp(string recId, object newFragment)
        {
            if (!RecipeDetailsViewerConections.ContainsKey(recId)) return;
            var recievers = RecipeDetailsViewerConections[recId].Where(x => x != ConId).ToArray();
            await Clients.Clients(recievers).SendAsync("updateRecipeData", newFragment);
        }

        public void RemoveUserConnection()
        {
            var key = RecipeDetailsViewerConections.FirstOrDefault(x => x.Value.Contains(ConId)).Key;
            if (key is null) return;//Nothing to remove...
            RecipeDetailsViewerConections[key].Remove(ConId);
        }

        public async Task AddComment(string recId, object comment)
        {
            if (!RecipeDetailsViewerConections.ContainsKey(recId)) return;
            var recievers = RecipeDetailsViewerConections[recId].Where(x => x != ConId).ToArray();
            await Clients.Clients(recievers).SendAsync("addNewComment", comment);
        }

        public async Task ChangeCommentVote(string recId, object votes)
        {
            if (!RecipeDetailsViewerConections.ContainsKey(recId)) return;
            var recievers = RecipeDetailsViewerConections[recId].Where(x => x != ConId).ToArray();
            await Clients.Clients(recievers).SendAsync("updateCommentVotes", votes);
        }

        public async Task ChangeCommentContent(string recId, object content)
        {
            if (!RecipeDetailsViewerConections.ContainsKey(recId)) return;
            var recievers = RecipeDetailsViewerConections[recId].Where(x => x != ConId).ToArray();
            await Clients.Clients(recievers).SendAsync("updateCommentContent", content);
        }
        public async Task DeleteComment(string recId, int commentId)
        {
            if (!RecipeDetailsViewerConections.ContainsKey(recId)) return;
            var recievers = RecipeDetailsViewerConections[recId].Where(x => x != ConId).ToArray();
            await Clients.Clients(recievers).SendAsync("deleteComment", commentId);
        }
    }
}