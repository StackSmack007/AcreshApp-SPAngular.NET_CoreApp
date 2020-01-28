using IdentityServer4.EntityFramework.Options;
using Infrastructure.Models;
using Microsoft.AspNetCore.ApiAuthorization.IdentityServer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;

namespace Infrastructure.Data
{
    public class ApplicationDbContext : ApiAuthorizationDbContext<AcUser>
    {
        public ApplicationDbContext(DbContextOptions options, IOptions<OperationalStoreOptions> operationalStoreOptions) : base(options, operationalStoreOptions)
        { }
        public ApplicationDbContext(DbContextOptions options) : base(options,default(IOptions<OperationalStoreOptions>))
        { }

        public DbSet<Category> Categories { get; set; }
        public DbSet<Ingredient> Ingredients { get; set; }
        public DbSet<Recipe> Recipes { get; set; }
        public DbSet<RecipeComment> RecipeComments { get; set; }
        public DbSet<RecipePicture> RecipePictures { get; set; }
        public DbSet<RecipeRecomendation> RecipeRecomendations { get; set; }
        public DbSet<RecipeTag> RecipeTags { get; set; }
        public DbSet<RecipeVote> RecipeVotes { get; set; }
        public DbSet<Tag> Tags { get; set; }
        public DbSet<CommentAttitude> CommentAttitudes { get; set; }
        public DbSet<Message> Messages { get; set; }
        public DbSet<Report> Reports { get; set; }
        public DbSet<UserBlocking> UserBlockings { get; set; }
        public DbSet<UserFavouriteRecepy> UserFavouriteRecepies { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            //TODO
        }
    }
}