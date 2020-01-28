using Infrastructure.Models.Models.Ingredients;
using System;
using System.Collections.Generic;
using System.Text;

namespace Infrastructure.Models.Contracts
{
    public interface IReportable
    {
        //string Id { get; set; }
        ICollection<Report> Reports { get; set; }
    }
}
