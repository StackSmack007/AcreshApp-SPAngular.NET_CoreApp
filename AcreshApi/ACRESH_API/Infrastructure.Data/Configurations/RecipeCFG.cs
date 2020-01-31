using Infrastructure.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infrastructure.Data.Configurations
{
    public class RecipeCFG : IEntityTypeConfiguration<Recipe>
    {
        public void Configure(EntityTypeBuilder<Recipe> builder)
        {
            builder.HasKey(e => e.Id);
            builder.HasOne(e => e.Category).WithMany(c => c.Recipes).HasForeignKey(e => e.CategoryId).OnDelete(DeleteBehavior.Restrict);
            builder.HasOne(e => e.Author).WithMany(c => c.SharedRecipes).HasForeignKey(e => e.AuthorId);
        }
    }
}