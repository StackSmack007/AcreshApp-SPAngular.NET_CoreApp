using Infrastructure.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infrastructure.Data.Configurations
{
    public class UserBlockingCFG : IEntityTypeConfiguration<UserBlocking>
    //Mapping Table
    {
        public void Configure(EntityTypeBuilder<UserBlocking> builder)
        {
            builder.HasKey(e => new { e.DefenderId, e.IrritatorId });
            builder.HasOne(e => e.Defender).WithMany(u => u.UsersIBlocked).HasForeignKey(e => e.DefenderId).OnDelete(DeleteBehavior.Restrict);
            builder.HasOne(e => e.Irritator).WithMany(u => u.UsersWhoBlockedMe).HasForeignKey(e => e.IrritatorId);
        }
    }
}
