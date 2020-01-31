using Infrastructure.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infrastructure.Data.Configurations
{
    public class CommentAttitudeCFG : IEntityTypeConfiguration<CommentAttitude>
    //MappingTable
    {
        public void Configure(EntityTypeBuilder<CommentAttitude> builder)
        {
            builder.HasKey(e => new { e.CommentId, e.ShitGiverId });
            builder.HasOne(e => e.Comment).WithMany(c => c.UsersAttitudes).HasForeignKey(e => e.CommentId).OnDelete(DeleteBehavior.Restrict);
            builder.HasOne(e => e.ShitGiver).WithMany(u => u.CommentsAttitudes).HasForeignKey(e => e.ShitGiverId);
        }
    }
}
