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
                    mType:UnitMeasurmentType.Weight_Units,
                    isEssential:false,
                    desc:"A food made from milk, that can be either firm or soft and is usually yellow or white in colour",
                    picUrl:"https://d2ebzu6go672f3.cloudfront.net/media/content/images/p8_ML0818_gi476879984.jpg",
                    stat:ApprovalStatus.Accepted),
                new Ingredient(
                    name:"Water",
                    origin:OriginType.NonOrganic,
                    mType:UnitMeasurmentType.Volume_Units,
                    isEssential:true,
                    desc:"A clear liquid, without colour or taste, that falls from the sky as rain and is necessary for animal and plant life",
                    picUrl:"https://images.agoramedia.com/everydayhealth/gcms/The-Health-Benefits-of-Water-722x406.jpg?width=722",
                    stat:ApprovalStatus.Accepted),
                new Ingredient(
                    name:"Pepper",
                    origin:OriginType.Plant,
                    mType:UnitMeasurmentType.Volume_Units,
                    isEssential:true,
                    desc:"A grey or white powder produced by crushing dry peppercorns, used to give a spicy, hot taste to food",
                    picUrl:"https://dictionary.cambridge.org/images/full/pepper_noun_002_27125.jpg?version=5.0.69",
                    stat:ApprovalStatus.Accepted),
                new Ingredient(
                    name:"Milk",
                    origin:OriginType.Animal,
                    mType:UnitMeasurmentType.Volume_Units,
                    isEssential:false,
                    desc:"The white liquid produced by cows, goats, and sheep and used by humans as a drink or for making butter, cheese, etc",
                    picUrl:"https://dictionary.cambridge.org/images/full/milk_noun_002_23322.jpg?version=5.0.69",
                    stat:ApprovalStatus.Awaiting),
                new Ingredient(
                    name:"Musthache",
                    origin:OriginType.Animal,
                    mType:UnitMeasurmentType.Volume_Units,
                    isEssential:false,
                    desc:"Not good for any recipe",
                    picUrl:"https://dictionary.cambridge.org/images/full/mousta_noun_002_24080.jpg?version=5.0.69",
                    stat:ApprovalStatus.Denied),
                 new Ingredient(
                    name:"SunflowerOil",
                    origin:OriginType.Plant,
                    mType:UnitMeasurmentType.Volume_Units,
                    isEssential:true,
                    desc:"Oil from seeds of a plant, usually having a very tall stem and a single large, round, flat, yellow flower, with many long, thin, narrow petals close together",
                    picUrl:"https://dictionary.cambridge.org/images/full/sunflo_noun_002_36645.jpg?version=5.0.69",
                    stat:ApprovalStatus.Accepted),
                new Ingredient(
                    name:"Butter",
                    origin:OriginType.Animal,
                    mType:UnitMeasurmentType.Volume_Units,
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
                videoLink:"https://www.youtube.com/watch?v=v4xZUr0BEfE",
                portions: 1,
                categoryName: "BreakFast",
                mainPicture: "https://www.godairyfree.org/wp-content/uploads/2011/10/pics-Scrambled-eggs-creamy-feature.jpg",
                pictures: "https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--1201452_12.jpg?itok=sEzruvF_|https://i.ytimg.com/vi/PPLa3yIAoUo/maxresdefault.jpg|data:image/jpeg;base64,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",
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