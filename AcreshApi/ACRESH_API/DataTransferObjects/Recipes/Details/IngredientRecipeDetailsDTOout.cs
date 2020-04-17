namespace DataTransferObjects.Recipes.Details
{
    public class IngredientRecipeDetailsDTOout
    {
        public int Id { get; set; }
        public string Name { get; set; }//TODO
        public string Ammount { get; set; }
        public string PicURL { get; set; }//ToDo
        public bool IsVegan { get; set; }
        public string Description { get; set; }
        public bool IsEssential { get; set; }
    }
}
