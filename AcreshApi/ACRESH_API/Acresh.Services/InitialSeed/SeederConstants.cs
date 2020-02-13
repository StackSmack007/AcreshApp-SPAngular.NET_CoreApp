namespace Acresh.Services.InitialSeed
{
    using Common.Tools;
    using Infrastructure.Models;
    using Infrastructure.Models.Enumerations;
    using System.Collections.Generic;

    public partial class DataBaseSeeder
    {
        private class SeederConstants
        {
            #region Users & Roles & Message
            public static IDictionary<Gender, string> AvatarPictures { get; } = new Dictionary<Gender, string>()
            {
                [Gender.Female] = "https://cdn1.vectorstock.com/i/1000x1000/32/20/woman-chef-doing-flambe-vector-20453220.jpg",
                [Gender.Male] = "https://previews.123rf.com/images/freehandz/freehandz1209/freehandz120900316/15344503-shef-flash.jpg",
                [Gender.Ufo] = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzwKDSrXuOwRo5rVLXPuLe0KOI1kd_4XeEm3v0uhYl79Yb9aek&s"
            };

            public static IDictionary<Gender, string[]> PersonNames { get; } = new Dictionary<Gender, string[]>()
            {
                [Gender.Female] = new[] { "Jane", "Jameson" },
                [Gender.Male] = new[] { "John", "Doe" },
                [Gender.Ufo] = new[] { "Michael", "Jackson" }
            };

            public static string UserDescription { get; } = "Lorem Ipsum Dolor Sit Amet...";
            public static string OkMessage { get; } = "I just want to ask you what do you think about ...";
            public static string BadContentMessage { get; } = "Mean deep stuff to make you block me ...";
            public static string UserPassword { get; } = "123456a";
            public static IDictionary<string, int> RolesUsersCount { get; } = new Dictionary<string, int> { ["Admin"] = 1, ["User"] = 10 };//Users >=4!
            #endregion

            #region Categories
            public static Category[] Categories = new[]
            {
                new Category("BreakFast","A meal eaten in the morning as the first meal of the day",new Category("Sandwiches","Two pieces of bread with cheese, salad, or meat, usually cold, between them")),
                new Category("Salads","A mixture of uncooked vegetables, eaten either as a separate dish or with other food"),
                new Category("Apetizers","A small amount of food eaten before a meal"),
                new Category("Side Dishes","An extra dish of food, for example vegetables or salad, that is served with the main dish, sometimes on a separate plate",new Category("Breads","A food made from flour, water, and usually yeast, mixed together and baked")),
                new Category("Soups","A usually hot, liquid food made from vegetables, meat, or fish"),
                new Category("Snacks","A small amount of food that is eaten between meals, or a very small meal"),
                new Category("Main Dish","The main food prepared for a meal"),
                new Category("Deserts","Sweet food eaten at the end of a meal"),
                new Category(GlobalConstants.UnfoundItem,"When category cant be found this one is assigned"),
            };
            #endregion

            #region Tags
            public static string[] Tags = new[]
            {
             "crispy","baked","minty","sweet","cold","hot","spicy","juicy","fried"
            };
            #endregion

            #region Ingredients
            public static Ingredient[] Ingredients = {
                new Ingredient(
                    name:GlobalConstants.UnfoundItem,
                    origin:OriginType.NonOrganic,
                    isEssential:true,
                    desc:"When ingredient cant be found this one is assigned",
                    picUrl:"https://zenit.org/wp-content/uploads/2018/05/no-image-icon.png",
                    stat:ApprovalStatus.Accepted),
                new Ingredient(
                    name:"Salt",
                    origin:OriginType.NonOrganic,
                    isEssential:true,
                    desc:"A common white substance found in sea water and in the ground, used especially to add flavour to food or to preserve it",
                    picUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCh_aGmMFlLzmMPfFJW_KrHFUNV625TZCWc7VkeXAZGbH9eLmpOA&s",
                    stat:ApprovalStatus.Accepted),
                new Ingredient(
                    name:"Eggs",
                    origin:OriginType.Animal,
                    mType:UnitMeasurmentType.Count,
                    isEssential:false,
                    desc:"The oval object with a hard shell that is produced by female birds, especially chickens, eaten as food",
                    picUrl:"https://d2ebzu6go672f3.cloudfront.net/media/content/images/p8_ML0818_gi476879984.jpg",
                    stat:ApprovalStatus.Accepted),
                new Ingredient(
                    name:"Chease",
                    origin:OriginType.Animal,
                    mType:UnitMeasurmentType.WeightUnits,
                    isEssential:false,
                    desc:"A food made from milk, that can be either firm or soft and is usually yellow or white in colour",
                    picUrl:"https://d2ebzu6go672f3.cloudfront.net/media/content/images/p8_ML0818_gi476879984.jpg",
                    stat:ApprovalStatus.Accepted),
                new Ingredient(
                    name:"Water",
                    origin:OriginType.NonOrganic,
                    mType:UnitMeasurmentType.VolumeUnits,
                    isEssential:true,
                    desc:"A clear liquid, without colour or taste, that falls from the sky as rain and is necessary for animal and plant life",
                    picUrl:"https://images.agoramedia.com/everydayhealth/gcms/The-Health-Benefits-of-Water-722x406.jpg?width=722",
                    stat:ApprovalStatus.Accepted),
                new Ingredient(
                    name:"Pepper",
                    origin:OriginType.Plant,
                    mType:UnitMeasurmentType.VolumeUnits,
                    isEssential:true,
                    desc:"A grey or white powder produced by crushing dry peppercorns, used to give a spicy, hot taste to food",
                    picUrl:"https://dictionary.cambridge.org/images/full/pepper_noun_002_27125.jpg?version=5.0.69",
                    stat:ApprovalStatus.Accepted),
                new Ingredient(
                    name:"Milk",
                    origin:OriginType.Animal,
                    mType:UnitMeasurmentType.VolumeUnits,
                    isEssential:false,
                    desc:"The white liquid produced by cows, goats, and sheep and used by humans as a drink or for making butter, cheese, etc",
                    picUrl:"https://dictionary.cambridge.org/images/full/milk_noun_002_23322.jpg?version=5.0.69",
                    stat:ApprovalStatus.Awaiting),
                new Ingredient(
                    name:"Musthache",
                    origin:OriginType.Animal,
                    mType:UnitMeasurmentType.VolumeUnits,
                    isEssential:false,
                    desc:"Not good for any recipe",
                    picUrl:"https://dictionary.cambridge.org/images/full/mousta_noun_002_24080.jpg?version=5.0.69",
                    stat:ApprovalStatus.Denied),
                 new Ingredient(
                    name:"SunflowerOil",
                    origin:OriginType.Plant,
                    mType:UnitMeasurmentType.VolumeUnits,
                    isEssential:true,
                    desc:"Oil from seeds of a plant, usually having a very tall stem and a single large, round, flat, yellow flower, with many long, thin, narrow petals close together",
                    picUrl:"https://dictionary.cambridge.org/images/full/sunflo_noun_002_36645.jpg?version=5.0.69",
                    stat:ApprovalStatus.Accepted),
                new Ingredient(
                    name:"Butter",
                    origin:OriginType.Animal,
                    mType:UnitMeasurmentType.VolumeUnits,
                    isEssential:false,
                    desc:"A pale yellow solid food containing a lot of fat that is made from cream and is spread on bread or used in cooking",
                    picUrl:"https://dictionary.cambridge.org/images/full/butter_noun_002_05056.jpg?version=5.0.69",
                    stat:ApprovalStatus.Accepted),
            };
                        #endregion

            #region Recipes
            public static RecipeDBS[] Recipes = new[]
           {
            new RecipeDBS(
                name: "Basic omelette",
                description:@"Season the beaten eggs well with salt and pepper. Heat the oil and butter in a non-stick frying pan over a medium-low heat until the butter has melted and is foaming. 
                              Pour the eggs into the pan, tilt the pan ever so slightly from one side to another to allow the eggs to swirl and cover the surface of the pan completely. Let the mixture cook for about 20 seconds then scrape a line through the middle with a spatula.
                              Tilt the pan again to allow it to fill back up with the runny egg. Repeat once or twice more until the egg has just set. 
                              At this point you can fill the omelette with whatever you like – some grated cheese, sliced ham, fresh herbs, sautéed mushrooms or smoked salmon all work well. Scatter the filling over the top of the omelette and fold gently in half with the spatula. Slide onto a plate to serve.",
                portions: 1,
                categoryName: "BreakFast",
                mainPicture: "https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/cheeseomelette_80621_16x9.jpg",
                pictures: "https://media.foodnetwork.ca/recipetracker/b8975cf1-88ec-4fbd-8a32-630b08723135_the-perfect-omelette_WebReady.jpg|https://assets.kraftfoods.com/recipe_images/opendeploy/91429_MXM_K47355V0_OR1_OH_640x428.jpg",
                tagNames: "fried",
                ingredients: new Dictionary<string,string>() { ["Eggs"]="3", ["Salt"]="per Taste", ["Butter"]="1 tsp", ["SunflowerOil"]="1 tsp",["Pepper"]="per Taste" }),
            new RecipeDBS(
                name: "Scrambled eggs",
                description:@"Lightly whisk 2 large eggs, 6 tbsp single cream or full cream milk and a pinch of salt together until the mixture has just one consistency.
                              Heat a small non-stick frying pan for a minute or so, then add a knob of butter and let it melt. Don’t allow the butter to brown or it will discolour the eggs.
                              Pour in the egg mixture and let it sit, without stirring, for 20 seconds. Stir with a wooden spoon, lifting and folding it over from the bottom of the pan.
                              Let it sit for another 10 seconds then stir and fold again.
                              Repeat until the eggs are softly set and slightly runny in places. Remove from the heat and leave for a moment to finish cooking.
                              Give a final stir and serve the velvety scramble without delay.",
                videoLink:"https://youtu.be/s9r-CxnCXkg",
                portions: 1,
                categoryName: "BreakFast",
                mainPicture: "https://www.godairyfree.org/wp-content/uploads/2011/10/pics-Scrambled-eggs-creamy-feature.jpg",
                pictures: "https://www.thespruceeats.com/thmb/NCvH1nmLr9Crg8f5bIgCnyJszXM=/5000x2812/smart/filters:no_upscale()/scrambled-eggs-58a701ac5f9b58a3c91cbebd.jpg|data:image/jpeg;base64,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",
                tagNames: "fried",
                ingredients: new Dictionary<string,string>() { ["Eggs"]="2", ["Milk"]="6 tsp", ["Butter"]="1 knob", ["SunflowerOil"]="1 tsp",["Pepper"]="per Taste" }),
            };
            public static int RecipesMultiplier { get; } = 15;//it will multiply recipes provided in the array to generate more data...

            public static int RecipesCount => RecipesMultiplier * Recipes.Length;

            public static string[] RecipeCommentsGood = { "I have tried it, It is very nice", "Cant find the ingredients", "Is this possible to achieve!", "Where is my pan", "What temperature do I cook it on?" };
            public static string[] RecipeCommentsBad = { "I hate you all", "UVENTUS FOREVER" };

            public static string[] RecipeRecomendationsGood = { "Add more flower", "Add more sugar", "Cinamon should not be added!" };
            public static string[] RecipeRecomendationsBad = { "Your recipe sux", "UVENTUS FOREVER" };

            #endregion
        }
    }
}