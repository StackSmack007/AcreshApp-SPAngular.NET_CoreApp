namespace Acresh.Services.InitialSeed
{
    using Common.Interfaces.Contracts.Automapper;
    using Infrastructure.Models;
    using Infrastructure.Models.Enumerations;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.Linq;

    public partial class DataBaseSeeder
    {
        public class RecipeDBS : IMapTo<Recipe>
        {
            public RecipeDBS()
            {
                Status = ApprovalStatus.Awaiting;
                Pictures = new HashSet<string>();
                IngredientNameQuantity = new Dictionary<string, string>();
                TagNames = new HashSet<string>();
            }

            public RecipeDBS(
                string name,
                string description,
                int? portions,
                string categoryName,
                string mainPicture,
                string pictures,
                string tagNames,
                IDictionary<string, string> ingredients,
                string videoLink = null,
                ApprovalStatus status = ApprovalStatus.Awaiting) : this()
            {
                Name = name;
                Description = description;
                Portions = portions;
                CategoryName = categoryName;
                VideoLink = videoLink;
                MainPicture = mainPicture;
                Status = status;
                Pictures = pictures.Split("|").ToArray();
                IngredientNameQuantity = ingredients;
                TagNames = tagNames.Split("|").ToArray();
            }

            [Required, MaxLength(256)]
            public string Name { get; set; }
            [Required, MaxLength(25600)]
            public string Description { get; set; }
            public int? Portions { get; set; }
            public string CategoryName { get; set; }

            public string VideoLink { get; set; }
            [Url]
            public string MainPicture { get; set; }
            public virtual ApprovalStatus Status { get; set; }
            public ICollection<string> Pictures { get; set; }
            public virtual IDictionary<string, string> IngredientNameQuantity { get; set; }
            public ICollection<string> TagNames { get; set; }
        }
    }
}