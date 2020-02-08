using AutoMapper;
using Common.Interfaces.Contracts.Automapper;
using Infrastructure.Models;
using Infrastructure.Models.Enumerations;
using System;
using System.ComponentModel.DataAnnotations;

namespace DataTransferObjects.Messages
{
    //[AutoMap(typeof(Message))]
    public class MessageDTOout : IMapFrom<Message>
    {
        public int Id { get; set; }
        public DateTime DateOfCreation { get; set; }
        public bool IsDeleted { get; set; }
        [Required]
        public string SenderUserName { get; set; }
        public string SenderAvatarPicture { get; set; }
        [Required, MaxLength(1024 * 8)]
        public string Content { get; set; }
        public string Status { get; set; }
    }
}
