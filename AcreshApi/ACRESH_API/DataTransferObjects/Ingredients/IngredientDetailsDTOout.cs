namespace DataTransferObjects.Ingredients
{
    public class IngredientDetailsDTOout: IngredientCardDTOout
    {
        public string MeasureType { get; set; }
        public string Description { get; set; }
        public double LastModified { get; set; }
    }

}
