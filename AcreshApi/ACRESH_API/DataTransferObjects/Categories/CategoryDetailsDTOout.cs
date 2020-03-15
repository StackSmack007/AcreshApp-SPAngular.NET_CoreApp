namespace DataTransferObjects.Categories
{
    public class CategoryDetailsDTOout
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string AuthorUserName { get; set; }
        public int RecipesCount { get; set; }
        public int? ParentCategoryId { get; set; }
        public string ParentCategoryName { get; set; }
        public double DateOfCreation { get; set; }
        public double DateOfLastEdit { get; set; }
        public bool HasChildren { get; set; }
    }
}