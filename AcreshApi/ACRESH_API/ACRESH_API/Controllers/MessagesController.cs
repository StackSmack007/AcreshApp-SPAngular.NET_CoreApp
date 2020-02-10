using System.Collections.Generic;
using System.Threading.Tasks;
using Acresh.Services.Services.Contracts;
using DataTransferObjects.Messages;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

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
                return Ok(new { Message = "Message Sent" });
            }
            return BadRequest("UserBlocking prevents messaging!");
        }

        [HttpPost("setRead")]
        public async Task<ActionResult> SetToRead([FromBody]int messageId)
        {
            if (await messageService.SetToRead(messageId))
            {
                return Ok(new { message = $"Message with {messageId} was read!" });
            }
            return BadRequest(new { message = $"Message with {messageId} was not read!" });
        }

        [HttpGet()]
        public async Task<ActionResult<ICollection<MessageDTOout>>> GetRecievedMessages()
        {
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
