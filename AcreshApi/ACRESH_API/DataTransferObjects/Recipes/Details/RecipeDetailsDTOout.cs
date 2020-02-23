using Infrastructure.Models.Enumerations;
using System;
using System.Collections.Generic;

namespace DataTransferObjects.Recipes.Details
{
    public class RecipeDetailsDTOout
    {
        public string Id { get; set; }
        public DateTime DateOfLastEdit { get; set; }
        public string Name { get; set; }
        public string CategoryName { get; set; }
        public CookRank AuthorCookRank { get; set; }
        public string AuthorUserName { get; set; }
        public string Description { get; set; }
        public string VideoLink { get; set; }
        public int Difficulty { get; set; }
        public ICollection<VoteRecipeDetailsDTOout> Votes { get; set; }
        public ICollection<IngredientRecipeDetailsDTOout> Ingredients { get; set; }
        public ICollection<string> Pictures { get; set; }
        public ICollection<string> Tags { get; set; }
        public ICollection<string> Favorizers { get; set; }
    }
}
