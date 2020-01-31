using Infrastructure.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infrastructure.Data.Configurations
{
    public class RecipeRecomendationCFG : IEntityTypeConfiguration<RecipeRecomendation>
    {
        public void Configure(EntityTypeBuilder<RecipeRecomendation> builder)
        {
            builder.HasKey(e => e.Id);
            builder.HasOne(e => e.Author).WithMany(a => a.RecipesRecomendations).HasForeignKey(e => e.AuthorId);
        }
    }
}
