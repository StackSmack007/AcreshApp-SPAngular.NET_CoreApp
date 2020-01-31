using Infrastructure.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;



namespace Infrastructure.Data.Configurations
{
    public class RecipeCommentCFG : IEntityTypeConfiguration<RecipeComment>
    {
        public void Configure(EntityTypeBuilder<RecipeComment> builder)
        {
            builder.HasKey(e => e.Id);
            builder.HasOne(e => e.Author).WithMany(a => a.Comments).HasForeignKey(e => e.AuthorId);
        }
    }
}
