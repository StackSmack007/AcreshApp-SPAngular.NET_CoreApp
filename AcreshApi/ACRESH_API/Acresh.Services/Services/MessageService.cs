using Acresh.Services.DBRepository.Contracts;
using Acresh.Services.Services.Contracts;
using AutoMapper;
using Common.Tools.Extensions;
using DataTransferObjects.Messages;
using Infrastructure.Models;
using Infrastructure.Models.Enumerations;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Acresh.Services.Services
{
    public class MessageService : IMessageService
    {
        private readonly IRepository<Message> messageRepo;
        private readonly UserManager<AcUser> userManager;
        private readonly IUserDataService userDataService;
        private readonly IRepository<UserBlocking> blockingRepo;
        private readonly IMapper mapper;

        public MessageService(IRepository<Message> messageRepo, UserManager<AcUser> um, IUserDataService userDataService, IRepository<UserBlocking> blockingRepo, IMapper mapper)
        {
            this.messageRepo = messageRepo;
            this.userManager = um;
            this.userDataService = userDataService;
            this.blockingRepo = blockingRepo;
            this.mapper = mapper;
        }

        public async Task<bool> SubmitMessage(MessageDTOin message)
        {
            var blockingPresent = await blockingRepo.All().FirstOrDefaultAsync(x => !x.IsDeleted && x.DefenderId == message.RecieverId && x.IrritatorId == message.SenderId);
            if (blockingPresent != null) return false;

            Message newMsg;
            try
            {
                newMsg = mapper.Map<Message>(message);
            }
            catch (Exception e)
            {

                throw;
            }

            await messageRepo.AddAssync(newMsg);
            await messageRepo.SaveChangesAsync();
            return true;
        }
        public async Task<int> UnreadMessagesCount(string userId)
        {
            int unreadCount = await messageRepo.All().Where(x => !x.IsDeleted && x.RecieverId == userId && x.Status == MessageStatus.UnRead).CountAsync();
            return unreadCount;
        }
        public async Task<ICollection<MessageDTOout>> GetUserRecievedMessages(string userId)
        {
            MessageDTOout[] userMessages = await messageRepo.All().Where(x => !x.IsDeleted && x.RecieverId == userId).To<MessageDTOout>().ToArrayAsync();
            return userMessages;
        }

        public async Task<ICollection<MessageDTOout>> GetSentMessages(string userId)
        {
            MessageDTOout[] userMessages = await messageRepo.All().Where(x => !x.IsDeleted && x.SenderId == userId).To<MessageDTOout>().ToArrayAsync();
            return userMessages;
        }
    }
}
