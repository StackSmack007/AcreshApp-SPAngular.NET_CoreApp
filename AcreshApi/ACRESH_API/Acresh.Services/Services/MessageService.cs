using Acresh.Services.DBRepository.Contracts;
using Acresh.Services.Services.Contracts;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using Common.AutomapperConfigurations;
using DataTransferObjects.Messages;
using Infrastructure.Models;
using Infrastructure.Models.Enumerations;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
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
            if (blockingPresent != null) return false; //not allowed to recieve messages from blocked users!
            Message newMsg = mapper.Map<Message>(message);

            await messageRepo.AddAssync(newMsg);
            await messageRepo.SaveChangesAsync();
            return true;
        }
        public async Task<int> UnreadMessagesCountAsync(string userId)
        {
            int unreadCount = await messageRepo.All().Where(x => !x.IsDeleted && x.RecieverId == userId && x.Status == MessageStatus.UnRead).CountAsync();
            return unreadCount;
        }
        public IQueryable<MessageDTOout> GetUserRecievedMessages(string userId)
        {
            //DeletedAndNotDeleted
            var userMessages = messageRepo.All().Where(x => x.RecieverId == userId).OrderByDescending(x => x.DateOfCreation).To<MessageDTOout>();
            return userMessages;
        }

        public IQueryable<MessageDTOout> GetSentMessages(string userId)
        {
            //DeletedAndNotDeleted

            //try
            //{
            //    var test1 = messageRepo.All().Where(x => x.SenderId == userId).OrderByDescending(x => x.DateOfCreation)
            //        .Include(x=>x.Sender)
            //        .Include(x=>x.Reciever)
            //        .First();

            //    var res2 = mapper.Map<MessageDTOout>(test1);

            //    var test = messageRepo.All().Where(x => x.SenderId == userId).OrderByDescending(x => x.DateOfCreation).Select(x=>mapper.Map<MessageDTOout>(x));
            //}
            //catch (System.Exception e)
            //{

            //    throw;
            //}

            var userMessages = messageRepo.All().Where(x => x.SenderId == userId).OrderByDescending(x => x.DateOfCreation).To<MessageDTOout>();

            return userMessages;
        }

        public async Task<bool> SetToRead(int messageId)
        {
            var messageFd = await messageRepo.All().FirstOrDefaultAsync(x => x.Id == messageId);
            if (messageFd is null) return false;
            messageFd.Status = MessageStatus.Read;
            await messageRepo.SaveChangesAsync();
            return true;
        }

        public async Task<bool> DeleteMessageAsync(int messageId)
        {
            var messageFd = await messageRepo.All().FirstOrDefaultAsync(x => x.Id == messageId);
            if (messageFd is null) return false;
            messageFd.IsDeleted = true;
            await messageRepo.SaveChangesAsync();
            return true;
        }
    }
}
