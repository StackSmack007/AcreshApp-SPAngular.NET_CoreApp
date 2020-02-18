using System;

namespace DataTransferObjects.Recipes
{
    public class RecipeCardDTOout
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string MainPicture { get; set; }
        public string AuthorUserName { get; set; }
        public string AuthorCookRank { get; set; }
        public DateTime DateOfCreation { get; set; }
        public RecipeSubInfoDTOout SubInfo { get; set; }
    }

    public class RecipeSubInfoDTOout
    {
        public int Rating { get; set; }
        public string Category { get; set; }
        public int CommentsCount { get; set; }
        public int IngredientsCount { get; set; }
        public string Difficulty { get; set; }
        public int Fans { get; set; }
    }
}
