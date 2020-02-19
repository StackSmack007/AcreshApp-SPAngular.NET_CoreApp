namespace DataTransferObjects.Recipes.Details
{
    public class RecipeVoteDTOin
    {
        public string Id { get; set; }
        public Infrastructure.Models.Enumerations.RecipeRating Score { get; set; }
    }
}