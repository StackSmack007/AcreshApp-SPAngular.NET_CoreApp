namespace DataTransferObjects.UserData
{
    using AutoMapper.Configuration.Annotations;
    using Infrastructure.Models;
    using System;
    public class BlockedUserInfoDTOout 
    {
        public string UserName { get; set; }
        public string CookRank { get; set; }
        [SourceMember(nameof(UserBlocking.Irritator.AvatarPicture))]
        public string AvatarPicture { get; set; }
        public DateTime DateOfCreation { get; set; }
    }
}