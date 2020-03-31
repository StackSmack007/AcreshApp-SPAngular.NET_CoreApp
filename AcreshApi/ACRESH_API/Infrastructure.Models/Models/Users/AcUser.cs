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
            UsersIBlocked = new HashSet<UserBlocking>();
            UsersWhoBlockedMe = new HashSet<UserBlocking>();
            RecipesRecomendations = new HashSet<RecipeRecomendation>();
            Comments = new HashSet<RecipeComment>();
            CommentsAttitudes = new HashSet<CommentAttitude>();
            MeassagesSent = new HashSet<Message>();
            MeassagesRecieved = new HashSet<Message>();
            FavouriteRecepies = new HashSet<UserFavouriteRecipe>();
            VotedRecipes = new HashSet<RecipeVote>();
            SharedRecipes = new HashSet<Recipe>();
            IngredientsAdded = new HashSet<Ingredient>();
            CategoriesAdded = new HashSet<Category>();
        }
        [Required,MaxLength(64)]
        public string FirstName { get; set; }
        [MaxLength(64)]
        public string LastName { get; set; }
        public CookRank CookRank { get; set; }
        public Gender Gender { get; set; }

        [Required]
        public string AvatarPicture { get; set; }

        [MaxLength(512)]
        public string Description { get; set; }

        [Required, EmailAddress]
        public string Email { get; set; }

        public virtual ICollection<UserBlocking> UsersIBlocked { get; set; }
        public virtual ICollection<UserBlocking> UsersWhoBlockedMe { get; set; }
        public virtual ICollection<RecipeRecomendation> RecipesRecomendations { get; set; }
        public virtual ICollection<RecipeComment> Comments { get; set; }
        public virtual ICollection<CommentAttitude> CommentsAttitudes { get; set; }
        public virtual ICollection<Message> MeassagesSent { get; set; }
        public virtual ICollection<Message> MeassagesRecieved { get; set; }
        public virtual ICollection<UserFavouriteRecipe> FavouriteRecepies { get; set; }
        public virtual ICollection<RecipeVote> VotedRecipes { get; set; }
        public virtual ICollection<Recipe> SharedRecipes { get; set; }
        public virtual ICollection<Ingredient> IngredientsAdded { get; set; }
        public virtual ICollection<Category> CategoriesAdded { get; set; }
    }
}
