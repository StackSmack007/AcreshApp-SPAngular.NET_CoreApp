using Common.Interfaces.Contracts.Automapper;
using Infrastructure.Models;
using Infrastructure.Models.Enumerations;
using System;

namespace DataTransferObjects.UserData
{
    public class BlockedByMeDTOout : IMapFrom<UserBlocking>
    {
        public string DateOfCreation { get; set; }
        public string UserName { get; set; }

        public CookRank CookRank { get; set; }

        public string AvatarPicture { get; set; }
    }
}
