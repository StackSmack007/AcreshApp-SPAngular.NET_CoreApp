using Infrastructure.Models.Contracts;
using Infrastructure.Models.Enumerations;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;

namespace Infrastructure.Models
{
    public class Recipe : BaseEntity<string>,IReportable
    {       
        public Recipe()
        {
            Status = ApprovalStatus.Awaiting;
            Difficulty = RecipeDifficulty.Easy;
            Pictures = new HashSet<RecipePicture>();
            RecipeIngredients = new HashSet<RecipeIngredient>();
            Votes = new HashSet<RecipeVote>();
            RecipeFavorisers = new HashSet<UserFavouriteRecipe>();
            RecipeRecomendations = new HashSet<RecipeRecomendation>();
            RecipeTags = new HashSet<RecipeTag>();
            Comments = new HashSet<RecipeComment>();
            Reports = new HashSet<Report>();
        }

        [Required, MaxLength(256)]
        public string Name { get; set; }
        [Required, MaxLength(25600)]
        public string Description { get; set; }
        [Required]
        public string AuthorId { get; set; }
        [ForeignKey(nameof(AuthorId))]
        public virtual AcUser Author { get; set; }
        public int? Portions { get; set; }
        public int CategoryId { get; set; }
        [ForeignKey(nameof(CategoryId))]
        public virtual Category Category { get; set; }
        [Url]
        public string VideoLink { get; set; }
        [Url]
        public string MainPicture { get; set; }
        public RecipeDifficulty Difficulty { get; set; }
        public virtual ApprovalStatus Status { get; set; }
        public ICollection<RecipePicture> Pictures { get; set; }
        public virtual ICollection<RecipeIngredient>RecipeIngredients { get; set; } 
        public virtual ICollection<RecipeVote> Votes { get; set; } //*
        [NotMapped]
        public virtual bool IsVegan => RecipeIngredients.Any(x => !x.Ingredient.IsVegan);
        [NotMapped]
        public virtual RecipeRating AverageRating => (RecipeRating)(Votes.Any() ? 0 : Math.Round(((double)Votes.Sum(x => (int)x.Score)) / Votes.Count()));
        public virtual ICollection<UserFavouriteRecipe> RecipeFavorisers { get; set; } //*
        public virtual ICollection<RecipeRecomendation> RecipeRecomendations { get; set; } //*
        public ICollection<RecipeTag> RecipeTags { get; set; }
        public virtual ICollection<RecipeComment> Comments { get; set; } //*
        public ICollection<Report> Reports { get; set; } //*
                     
    }
}