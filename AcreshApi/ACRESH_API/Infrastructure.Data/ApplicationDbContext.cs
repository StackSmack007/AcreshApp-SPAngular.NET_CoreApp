using Infrastructure.Data.Configurations;
using Infrastructure.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Data
{
    public class ApplicationDbContext : IdentityDbContext<AcUser>
    {
        //public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        //{ }

        public ApplicationDbContext(DbContextOptions options) : base(options)
        { }

        public ApplicationDbContext()
        { }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseMySql("Server=localhost;port=3306;Database=JunjuriaDB;Uid=root;Pwd=nevermind;");
                //optionsBuilder.UseSqlServer("Server=DESKTOP-FETTQ2O\\SQLEXPRESS;Database=T34;Trusted_Connection=True;MultipleActiveResultSets=true");
            }
            base.OnConfiguring(optionsBuilder);
        }

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
        public DbSet<UserFavouriteRecipe> UserFavouriteRecepies { get; set; }
        public DbSet<RecipeIngredient> RecipeIngredients { get; set; }

        protected override void OnModelCreating(ModelBuilder mb)
        {
            mb.ApplyConfiguration(new CategoryCFG());
            mb.ApplyConfiguration(new IngredientCFG());
            mb.ApplyConfiguration(new RecipeCFG());
            mb.ApplyConfiguration(new RecipeCommentCFG());
            mb.ApplyConfiguration(new RecipePictureCFG());
            mb.ApplyConfiguration(new RecipeRecomendationCFG());
            mb.ApplyConfiguration(new RecipeTagCFG());
            mb.ApplyConfiguration(new RecipeVoteCFG());
            mb.ApplyConfiguration(new TagCFG());
            mb.ApplyConfiguration(new CommentAttitudeCFG());
            mb.ApplyConfiguration(new MessageCFG());
            mb.ApplyConfiguration(new ReportCFG());
            mb.ApplyConfiguration(new UserBlockingCFG());
            mb.ApplyConfiguration(new UserFavouriteRecipeCFG());
            mb.ApplyConfiguration(new RecipeIngredientCFG());
            base.OnModelCreating(mb);
        }
    }
}
//class DBContextFactory :IDesignTimeDbContextFactory<ApplicationDbContext>
////public class BloggingContextFactory : IDesignTimeDbContextFactory<BloggingContext>
//{
//    public ApplicationDbContext CreateDbContext(string[] args)
//    {
//        var optionsBuilder = new DbContextOptionsBuilder<ApplicationDbContext>();
//        optionsBuilder.UseSqlServer("Server=DESKTOP-FETTQ2O\\SQLEXPRESS;Database=T34;Trusted_Connection=True;MultipleActiveResultSets=true");

//        var te = new OperationalStoreOptions();


//        var dbC=new ApplicationDbContext(optionsBuilder.Options);
//        return dbC;
//    }
//}