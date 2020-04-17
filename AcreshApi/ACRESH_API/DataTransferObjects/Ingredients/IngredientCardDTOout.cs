namespace DataTransferObjects.Ingredients
{
    public class IngredientCardDTOout
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string PicUrl { get; set; }
        public int UsageCount { get; set; }
        public bool IsVegan { get; set; }
        public string Origin { get; set; }
        public string AuthorUserName { get; set; }


    }

}
