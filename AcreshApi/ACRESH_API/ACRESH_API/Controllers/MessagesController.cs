using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Acresh.Services.Services.Contracts;
using ACRESH_API.Hubs;
using DataTransferObjects.Messages;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using Microsoft.EntityFrameworkCore;

namespace ACRESH_API.Controllers
{
    [Authorize]
    public class MessagesController : BaseController
    {
        private readonly IMessageService messageService;
        private readonly IHubContext<RecievedMessagesHub> messagesHub;

        public MessagesController(IMessageService ms, IHubContext<RecievedMessagesHub> messagesHub)
        {
            this.messageService = ms;
            this.messagesHub = messagesHub;
        }

        // POST: /Messages
        [HttpPost]
        public async Task<ActionResult> Post(MessageDTOin message)
        {
            if (await messageService.SubmitMessage(message))
            {
                await this.messagesHub.Clients.All.SendAsync("incrementUnread", message.RecieverId);
                return Ok(new { Message = "Message Sent" });
            }
            return BadRequest("UserBlocking prevents messaging!");
        }


        [HttpGet("unread-count")]
        public async Task<ActionResult<int>> GetUnreadCount()
        {
            return await messageService.UnreadMessagesCount(getUserId());
        }

        [HttpGet()]
        public async Task<ActionResult<ICollection<MessageDTOout>>> GetRecievedMessages()
        {
            await messagesHub.Clients.All.SendAsync("resetUnread", getUserId());
            var result = await messageService.GetUserRecievedMessages(getUserId()).ToArrayAsync();
            return result;
        }

        [HttpGet("sent")]
        public async Task<ICollection<MessageDTOout>> GetSentMessages()
        {
            var result = await messageService.GetSentMessages(getUserId()).ToArrayAsync();
            return result;
        }


        //// GET: api/Messages/5
        //[HttpGet("{id}", Name = "Get")]
        //public string Get(int id)
        //{
        //    return "value";
        //}


        //// PUT: api/Messages/5
        //[HttpPut("{id}")]
        //public void Put(int id, [FromBody] string value)
        //{
        //}

        //// DELETE: api/ApiWithActions/5
        //[HttpDelete("{id}")]
        //public void Delete(int id)
        //{
        //}
    }
}
