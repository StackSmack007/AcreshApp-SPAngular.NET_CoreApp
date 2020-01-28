using Infrastructure.Models.Contracts;
using Infrastructure.Models.Enumerations;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Infrastructure.Models
{
    public class Message : BaseEntity<int>, IReportable
    {
        public Message()
        {
            Reports = new HashSet<Report>();
            Status = MessageStatus.UnRead;
        }

        [Required]
        public string SenderId { get; set; }
        [ForeignKey(nameof(SenderId))]
        public virtual AcUser Sender { get; set; }

        [Required]
        public string RecieverId { get; set; }
        [ForeignKey(nameof(RecieverId))]
        public virtual AcUser Reciever { get; set; }

        [Required, MaxLength(1024 * 8)]
        public string Content { get; set; }
        public virtual MessageStatus Status { get; set; }
        public virtual ICollection<Report> Reports { get; set; }
    }
}