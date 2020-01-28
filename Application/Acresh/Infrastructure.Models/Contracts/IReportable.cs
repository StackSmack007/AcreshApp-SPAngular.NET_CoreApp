using System.Collections.Generic;

namespace Infrastructure.Models.Contracts
{
    public interface IReportable
    {
        //string Id { get; set; }
        ICollection<Report> Reports { get; set; }
    }
}
