using Infrastructure.Models.Enumerations;
using System.Collections.Generic;

namespace DataTransferObjects.Cauldron
{
    public class CauldronRecipeDTOout
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public CookRank AuthorCookRank { get; set; }
        public string AuthorUserName { get; set; }
        public int CategoryId { get; set; }
        public string CategoryName { get; set; }
        public string MainPicture { get; set; }
        public ICollection<ICaudronRecipeIngredientDTOout> Ingredients { get; set; }
    }
}