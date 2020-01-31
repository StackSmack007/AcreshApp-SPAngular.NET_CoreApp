using Infrastructure.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infrastructure.Data.Configurations
{
    public class RecipePictureCFG : IEntityTypeConfiguration<RecipePicture>
    {
        public void Configure(EntityTypeBuilder<RecipePicture> builder)
        {
            builder.HasKey(e => new { e.RecipeId, e.UrlPath });
            builder.HasOne(e => e.Recipe).WithMany(r => r.Pictures).HasForeignKey(e => e.RecipeId);
            builder.HasIndex(e => e.UrlPath).IsUnique();
        }
    }
}
