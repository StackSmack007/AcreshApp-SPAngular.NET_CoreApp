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
            await Clients.Clients(recievers).SendAsync("updateFavs", newFragment);
        }

        public void RemoveUserConnection()
        {
            var key = RecipeDetailsViewerConections.FirstOrDefault(x => x.Value.Contains(ConId)).Key;
            if (key is null) return;//Nothing to remove...
            RecipeDetailsViewerConections[key].Remove(ConId);
        }
    }
}