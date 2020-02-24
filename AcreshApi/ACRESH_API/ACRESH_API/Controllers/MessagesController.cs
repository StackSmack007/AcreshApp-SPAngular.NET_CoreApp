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

        [HttpPost]
        public async Task<ActionResult> Post(MessageDTOin message)
        {
            if (await messageService.SubmitMessage(message))
            {
                return Ok(new { Message = "Message Sent" });
            }
            return BadRequest("UserBlocking prevents messaging!");
        }

        [HttpPut()]
        public async Task<ActionResult> SetToRead([FromBody]int messageId)
        {
            if (await messageService.SetToRead(messageId))
            {
                return Ok(new { message = $"Message with {messageId} was read!" });
            }
            return BadRequest(new { message = $"Message with {messageId} was not read!" });
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            if (await messageService.DeleteMessageAsync(id))
            {
                return Ok(new { message = $"Message with {id} was soft deleted!" });
            }
            return BadRequest(new { message = $"Message with {id} was not deleted!" });
        }

        [HttpGet()]
        public async Task<ActionResult<ICollection<MessageDTOout>>> GetRecievedMessages()
        {
            var result = await messageService.GetUserRecievedMessages(UserId).ToArrayAsync();
            return result;
        }

        [HttpGet("sent")]
        public async Task<ICollection<MessageDTOout>> GetSentMessages()
        {
            var result = await messageService.GetSentMessages(UserId).ToArrayAsync();
            return result;
        }
    }
}
