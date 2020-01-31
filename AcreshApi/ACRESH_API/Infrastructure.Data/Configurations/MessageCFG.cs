using Infrastructure.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infrastructure.Data.Configurations
{
    public class MessageCFG : IEntityTypeConfiguration<Message>
    {
        public void Configure(EntityTypeBuilder<Message> builder)
        {
            builder.HasKey(e => e.Id);
            builder.HasOne(e => e.Sender).WithMany(c => c.MeassagesSent).HasForeignKey(e => e.SenderId).OnDelete(DeleteBehavior.Restrict);
            builder.HasOne(e => e.Reciever).WithMany(c => c.MeassagesRecieved).HasForeignKey(e => e.RecieverId);
        }
    }
}
