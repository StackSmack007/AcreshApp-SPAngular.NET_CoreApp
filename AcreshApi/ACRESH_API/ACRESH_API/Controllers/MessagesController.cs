using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Acresh.Services.Services.Contracts;
using DataTransferObjects.Messages;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ACRESH_API.Controllers
{
    [Authorize]
    public class MessagesController : BaseController
    {
        private readonly IMessageService messageService;

        public MessagesController(IMessageService ms)
        {
            this.messageService = ms;

        }

        // POST: /Messages
        [HttpPost]
        public async Task<ActionResult> Post(MessageDTOin message)
        {
            if (await messageService.SubmitMessage(message))
            {
                return NoContent();
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
            var result = await messageService.GetUserRecievedMessages(getUserId());
            return result.ToArray();
        }

        [HttpGet("sent")]
        public async Task<ICollection<MessageDTOout>> GetSentMessages()
        {
            var result = await messageService.GetSentMessages(getUserId());
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
