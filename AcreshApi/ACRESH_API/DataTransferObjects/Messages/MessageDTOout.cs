using Common.Interfaces.Contracts.Automapper;
using Infrastructure.Models;
using Infrastructure.Models.Enumerations;
using System.ComponentModel.DataAnnotations;

namespace DataTransferObjects.Messages
{
    public class MessageDTOout:IMapFrom<Message>
    {
        [Required]
        public string SenderUserName { get; set; }
        [Required, MaxLength(1024 * 8)]
        public string Content { get; set; }
        public MessageStatus Status { get; set; }
        public int ReportsCount { get; set; }
    }
}
