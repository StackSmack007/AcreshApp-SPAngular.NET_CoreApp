using Infrastructure.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infrastructure.Data.Configurations
{
    public class ReportCFG : IEntityTypeConfiguration<Report>
    {
        public void Configure(EntityTypeBuilder<Report> builder)
        {
            builder.HasKey(e => e.Id);
            builder.HasOne(e => e.Ingredient).WithMany(i => i.Reports).HasForeignKey(e => e.IngredientId).IsRequired(false);
            builder.HasOne(e => e.Recipe).WithMany(r => r.Reports).HasForeignKey(e => e.RecipeId).IsRequired(false);
            builder.HasOne(e => e.Comment).WithMany(c => c.Reports).HasForeignKey(e => e.CommentId).IsRequired(false);
            builder.HasOne(e => e.Recomendation).WithMany(rec => rec.Reports).HasForeignKey(e => e.RecomendationId).IsRequired(false);
            builder.HasOne(e => e.Message).WithMany(m => m.Reports).HasForeignKey(e => e.CommentId).IsRequired(false);
        }
    }
}
