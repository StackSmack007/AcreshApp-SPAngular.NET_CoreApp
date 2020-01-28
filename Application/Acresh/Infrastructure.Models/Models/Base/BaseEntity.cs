using System.ComponentModel.DataAnnotations;

namespace Infrastructure.Models
{
    public abstract class BaseEntity<T>:BaseEntityData
    {
        [Key]
        //[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public T Id { get; set; }
    }
}