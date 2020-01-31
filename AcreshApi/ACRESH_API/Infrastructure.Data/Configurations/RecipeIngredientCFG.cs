using Infrastructure.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infrastructure.Data.Configurations
{
    public class RecipeIngredientCFG : IEntityTypeConfiguration<RecipeIngredient>
    //Mapping Table
    {
        public void Configure(EntityTypeBuilder<RecipeIngredient> builder)
        {
            builder.HasKey(e => new { e.RecipeId, e.IngredientId });
            builder.HasOne(e => e.Recipe).WithMany(u => u.RecipeIngredients).HasForeignKey(e => e.RecipeId).OnDelete(DeleteBehavior.Restrict);
            builder.HasOne(e => e.Ingredient).WithMany(u => u.IngredientRecipes).HasForeignKey(e => e.IngredientId);
        }
    }
}
