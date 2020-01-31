using Infrastructure.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infrastructure.Data.Configurations
{
    public class RecipeTagCFG : IEntityTypeConfiguration<RecipeTag>
    //MappingTable
    {
        public void Configure(EntityTypeBuilder<RecipeTag> builder)
        {
            builder.HasKey(e => new { e.RecipeId, e.TagId });
            builder.HasOne(e => e.Recipe).WithMany(r => r.RecipeTags).HasForeignKey(e => e.RecipeId).OnDelete(DeleteBehavior.Restrict); ;
            builder.HasOne(e => e.Tag).WithMany(t => t.TagRecipes).HasForeignKey(e => e.TagId);
        }
    }
}
