using DataTransferObjects.Messages;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Acresh.Services.Services.Contracts
{
    public interface IMessageService
    {
        Task<bool> SubmitMessage(MessageDTOin message);
    }
}
