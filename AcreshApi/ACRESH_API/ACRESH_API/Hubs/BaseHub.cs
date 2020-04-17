using Microsoft.AspNetCore.SignalR;

namespace ACRESH_API.Hubs
{
    public class BaseHub : Hub
    {
        protected string ConId => Context.ConnectionId;
    }
}
