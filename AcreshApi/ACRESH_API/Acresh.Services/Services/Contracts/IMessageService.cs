using DataTransferObjects.Messages;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Acresh.Services.Services.Contracts
{
    public interface IMessageService
    {
        Task<bool> SubmitMessage(MessageDTOin message);
        Task<int> UnreadMessagesCountAsync(string userId);
        IQueryable<MessageDTOout> GetSentMessages(string userId);
        IQueryable<MessageDTOout> GetUserRecievedMessages(string userId);
        Task<bool> SetToRead(int messageId);
    }
}