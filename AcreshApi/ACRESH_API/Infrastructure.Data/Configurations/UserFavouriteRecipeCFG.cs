using Infrastructure.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infrastructure.Data.Configurations
{
    public class UserFavouriteRecipeCFG : IEntityTypeConfiguration<UserFavouriteRecipe>
    //Mapping Table
    {
        public void Configure(EntityTypeBuilder<UserFavouriteRecipe> builder)
        {
            builder.HasKey(e => new { e.UserId, e.RecipeId });
            builder.HasOne(e => e.User).WithMany(u => u.FavouriteRecepies).HasForeignKey(e => e.UserId).OnDelete(DeleteBehavior.Restrict);
            builder.HasOne(e => e.Recipe).WithMany(r => r.RecipeFavorisers).HasForeignKey(e => e.RecipeId);
        }
    }
}