using Acresh.Services.Services.Contracts;
using Infrastructure.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.SignalR;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ACRESH_API.Hubs
{
    public class RecievedMessagesHub : BaseHub
    {
        private readonly IMessageService messageService;
        private readonly UserManager<AcUser> userManager;

        public static IDictionary<string, ICollection<string>> EnlistedMembersConections { get; set; }

        static RecievedMessagesHub()
        {
            EnlistedMembersConections = new Dictionary<string, ICollection<string>>();
        }

        public RecievedMessagesHub(IMessageService messageService, UserManager<AcUser> userManager)
        {
            this.messageService = messageService;
            this.userManager = userManager;
        }


        public void RegisterUserConnection(string userName)
        {
            if (!EnlistedMembersConections.ContainsKey(userName))
            {
                EnlistedMembersConections[userName] = new HashSet<string>();
            }
            if (EnlistedMembersConections[userName].Contains(ConId)) return;
            EnlistedMembersConections[userName].Add(ConId);
        }

        public void RemoveUserConnection()
        {
            var key = EnlistedMembersConections.FirstOrDefault(x => x.Value.Contains(ConId)).Key;
            if (key is null) return;//Nothing to remove...
            EnlistedMembersConections[key].Remove(ConId);
        }

        public async Task UpdateUserUnreadCount(string userName)
        {
            if (!EnlistedMembersConections.ContainsKey(userName)) return; //Noone monitors update of count...
            AcUser userFound = await userManager.Users.FirstOrDefaultAsync(x => x.UserName == userName);
            int unreadCount = await messageService.UnreadMessagesCountAsync(userFound.Id);
            List<string> userConIds = EnlistedMembersConections[userName].ToList();
            await Clients.Clients(userConIds).SendAsync("updateUnrCount", unreadCount);
        }
    }
}