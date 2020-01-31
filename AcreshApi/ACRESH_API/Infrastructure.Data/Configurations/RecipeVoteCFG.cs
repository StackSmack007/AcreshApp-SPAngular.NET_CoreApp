using Infrastructure.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infrastructure.Data.Configurations
{
    public class RecipeVoteCFG : IEntityTypeConfiguration<RecipeVote>
    //MappingTable
    {
        public void Configure(EntityTypeBuilder<RecipeVote> builder)
        {
            builder.HasKey(e => new { e.RecipeId, e.VoterId });
            builder.HasOne(e => e.Recipe).WithMany(r => r.Votes).HasForeignKey(e => e.RecipeId).OnDelete(DeleteBehavior.Restrict); ;
            builder.HasOne(e => e.Voter).WithMany(v => v.VotedRecipes).HasForeignKey(e => e.VoterId);
        }
    }
}
