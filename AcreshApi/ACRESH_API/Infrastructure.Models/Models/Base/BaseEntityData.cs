using System;
namespace Infrastructure.Models
{
    public abstract class BaseEntityData
    {
        public DateTime DateOfCreation { get; set; }
        public DateTime DateOfLastEdit { get; set; }
        public bool IsDeleted { get; set; }
        protected BaseEntityData()
        {
            DateOfCreation = DateTime.UtcNow;
            DateOfLastEdit = DateTime.UtcNow;
            IsDeleted = false;
        }
    }
}