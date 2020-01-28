using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Infrastructure.Models
{
    public class UserBlocking : BaseEntityData
    {
        public UserBlocking()
        {
            IsActive = true;
        }

        public bool IsActive { get; set; }
        [Required]
        public string DefenderId { get; set; }
        [ForeignKey(nameof(DefenderId))]
        public AcUser Defender { get; set; }

        [Required]
        public string IrritatorId { get; set; }
        [ForeignKey(nameof(DefenderId))]
        public AcUser Irritator { get; set; }
    }
}