using Infrastructure.Models.Enumerations;
using Microsoft.AspNetCore.Identity;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Infrastructure.Models
{
    public class AcUser : IdentityUser
    {
        public AcUser()
        {
            CookRank = CookRank.Newbie;
            BlockedUsers = new HashSet<UserBlocking>();
            RecipesRecomendations = new HashSet<RecipeRecomendation>();
            Comments = new HashSet<RecipeComment>();
            CommentsAttitudes = new HashSet<CommentAttitude>();
            Meassages = new HashSet<Message>();
            FavouriteRecepies = new HashSet<UserFavouriteRecepy>();
            VotedRecipes = new HashSet<RecipeVote>();
            SharedRecipes = new HashSet<Recipe>();
            IngredientsAdded = new HashSet<Ingredient>();
        }

        public string FirstName { get; set; }
        public string LastName { get; set; }
        public CookRank CookRank { get; set; }

        [Url]
        public string AvatarPicture { get; set; }

        [Required, EmailAddress]
        public string Email { get; set; }

        public virtual ICollection<UserBlocking> BlockedUsers { get; set; }
        public virtual ICollection<RecipeRecomendation> RecipesRecomendations { get; set; }
        public virtual ICollection<RecipeComment> Comments { get; set; }
        public virtual ICollection<CommentAttitude> CommentsAttitudes { get; set; }
        public virtual ICollection<Message> Meassages { get; set; }
        public virtual ICollection<UserFavouriteRecepy> FavouriteRecepies { get; set; }
        public virtual ICollection<RecipeVote> VotedRecipes { get; set; }
        public virtual ICollection<Recipe> SharedRecipes { get; set; }
        public virtual ICollection<Ingredient> IngredientsAdded { get; set; }
    }
}
