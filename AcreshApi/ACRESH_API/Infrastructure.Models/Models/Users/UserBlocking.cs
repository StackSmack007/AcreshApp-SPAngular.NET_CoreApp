using Infrastructure.Models.Models.Validators;
using System.ComponentModel.DataAnnotations;

namespace Infrastructure.Models
{
    public class UserBlocking : BaseEntityData
    {
        [Required]

        public string DefenderId { get; set; }
        //[ForeignKey(nameof(DefenderId))]
        public AcUser Defender { get; set; }

        [Required]
        [NotEqual(nameof(DefenderId))]
        public string IrritatorId { get; set; }
        //[ForeignKey(nameof(DefenderId))]
        public AcUser Irritator { get; set; }
    }
}