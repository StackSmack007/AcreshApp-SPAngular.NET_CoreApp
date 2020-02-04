namespace Infrastructure.Data.Configurations
{
    using Infrastructure.Models;
    using Microsoft.EntityFrameworkCore;
    using Microsoft.EntityFrameworkCore.Metadata.Builders;
    public class RecipeRecomendationCFG : IEntityTypeConfiguration<RecipeRecomendation>
    {
        public void Configure(EntityTypeBuilder<RecipeRecomendation> builder)
        {
            builder.HasKey(e => e.Id);
            builder.HasOne(e => e.Author).WithMany(a => a.RecipesRecomendations).HasForeignKey(e => e.AuthorId);
            builder.HasOne(e => e.Recipe).WithMany(a => a.RecipeRecomendations).HasForeignKey(e => e.RecipeId);
        }
    }
}