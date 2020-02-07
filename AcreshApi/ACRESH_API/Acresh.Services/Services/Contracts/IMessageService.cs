using DataTransferObjects.Messages;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Acresh.Services.Services.Contracts
{
    public interface IMessageService
    {
        Task<bool> SubmitMessage(MessageDTOin message);
        Task<int> UnreadMessagesCount(string userId);
        Task<ICollection<MessageDTOout>> GetSentMessages(string userId);
        Task<ICollection<MessageDTOout>> GetUserRecievedMessages(string userId);
    }
}