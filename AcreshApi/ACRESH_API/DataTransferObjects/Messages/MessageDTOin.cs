using Common.Interfaces.Contracts.Automapper;
using Infrastructure.Models;
using System.ComponentModel.DataAnnotations;

namespace DataTransferObjects.Messages
{
    public class MessageDTOin : IMapTo<Message>
    {
        [Required]
        public string SenderId { get; set; }
        [Required]
        public string RecieverId { get; set; }
        [Required, MaxLength(1024 * 8)]
        public string Content { get; set; }
    }
}