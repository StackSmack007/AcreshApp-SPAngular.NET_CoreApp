using Infrastructure.Models;
using Infrastructure.Models.Enumerations;

namespace Acresh.Services.InitialSeed
{
    using AutoMapper;
    using Common.Interfaces.Contracts.Automapper;
    using Infrastructure.Data;
    using Infrastructure.Models;
    using Infrastructure.Models.Enumerations;
    using Microsoft.AspNetCore.Identity;
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;

    public class DataBaseSeeder
    {
        private readonly ApplicationDbContext db;
        private readonly IMapper mapper;
        private readonly UserManager<AcUser> um;
        private readonly RoleManager<IdentityRole> rm;

        public DataBaseSeeder(IMapper mapper, UserManager<AcUser> userManager, RoleManager<IdentityRole> roleManager, ApplicationDbContext dbContext)
        {
            this.rm = roleManager;
            this.mapper = mapper;
            this.um = userManager;
            this.db = dbContext;
        }

        public async Task SeedData()
        {
            if (!db.Roles.Any())
            {
                await db.Database.EnsureDeletedAsync();
                await db.Database.EnsureCreatedAsync();
                await SeedRoles();
                await SeedUsers();
                await SeedUserMessages();
                await SeedUserBlockings();
                await SeedCategories();
                await SeedTags();
                await SeedIngredients();
                //        await SeedManufacturers();
                //        await SeedProducts();
                //        await SeedProductCharacteristics();
                //        await SeedProductPicture();
                //        await SeedProductCommentsWithAttitude();
                //        await SeedProductGrading();
                //        await SeedOrders();
            }
        }

        private async Task SeedRoles()
        {
            foreach (var role in Constants.RolesUsersCount.Keys)
            {
                await rm.CreateAsync(new IdentityRole(role));
            }
        }

        private async Task SeedUsers()
        {
            foreach (var kvp in Constants.RolesUsersCount)
            {
                for (int i = 1; i <= kvp.Value; i++)
                {
                    string userName = kvp.Key + i;
                    Gender gender = (Gender)(i % 3);
                    CookRank cookRank = (CookRank)(1 + i % 7);
                    var user = new AcUser()
                    {
                        FirstName = Constants.PersonNames[gender][0],
                        LastName = Constants.PersonNames[gender][1],
                        UserName = userName,
                        Gender = gender,
                        Email = userName + "@gmail.com",
                        AvatarPicture = Constants.AvatarPictures[gender],
                        Description = Constants.UserDescription,
                        CookRank = cookRank,
                        SecurityStamp = Guid.NewGuid().ToString()
                    };
                    var res = await um.CreateAsync(user, Constants.UserPassword);
                    if (res.Succeeded) await um.AddToRoleAsync(user, kvp.Key);
                }
            }
        }

        private async Task<string[]> GetUserIds(string role = "User")
        {
            return (await um.GetUsersInRoleAsync(role)).Select(x => x.Id).ToArray();
        }

        private async Task SeedUserBlockings()
        {
            string[] userIds = await GetUserIds();
            var count = userIds.Length;
            if (count < 4) throw new IndexOutOfRangeException("Not enough users to make blockings");
            var ublockings = new[] {new UserBlocking { DefenderId= userIds [1], IrritatorId = userIds[2] },
            new UserBlocking { DefenderId= userIds [3], IrritatorId = userIds[2] },
            new UserBlocking { DefenderId= userIds [2], IrritatorId = userIds[3] }};
            //0 index has no restrictions!
            // 1st blocks 2nd , 2nd blocks 3d and  3d blocks 2nd
            //1st can send to all
            //2nd cant send to 1st and 3d
            //3rd can send to 1st
            await db.UserBlockings.AddRangeAsync(ublockings);
            await db.SaveChangesAsync();
        }

        private async Task SeedUserMessages()
        {
            string[] userIds = await GetUserIds();
            var count = userIds.Length;
            if (count < 4) throw new IndexOutOfRangeException("Not enough users to make messages");

            var newMessages = new[] {new Message { RecieverId= userIds [1], SenderId = userIds[2] ,Content=Constants.BadContentMessage,Status=MessageStatus.Read},
            new Message {  RecieverId= userIds [3], SenderId = userIds[2],Content=Constants.BadContentMessage,Status=MessageStatus.Read },
            new Message {  RecieverId= userIds [0], SenderId = userIds[1],Content=Constants.OkMessage },
            new Message {  RecieverId= userIds [0], SenderId = userIds[2],Content=Constants.OkMessage,Status=MessageStatus.Read },
            new Message {  RecieverId= userIds [0], SenderId = userIds[2],Content=Constants.OkMessage },
            new Message {  RecieverId= userIds [0], SenderId = userIds[2],Content=Constants.OkMessage+"spam1" }
            };

            foreach (var item in newMessages)
            {
                item.DateOfCreation = DateTime.Now.AddMinutes(-157);
            }
            await db.Messages.AddRangeAsync(newMessages);
            await db.SaveChangesAsync();
        }

        private async Task SeedCategories()
        {
            string adminId = (await GetUserIds("Admin")).First();
            List<Category> categories = new List<Category>();

            foreach (var cat in Constants.Categories)
            {
                var category = FlattenCategory(cat, adminId);
                categories.Add(category);
            }
            await db.Categories.AddRangeAsync(categories);
            await db.SaveChangesAsync();
        }
        private Category FlattenCategory(CategoryInfo cat, string authorId)
        {
            var newCat = new Category
            {
                Name = cat.Name,
                Description = cat.Description,
                AuthorId = authorId,
            };
            foreach (CategoryInfo item in cat.InnerCategories)
            {
                Category inCat = FlattenCategory(item, authorId);
                newCat.ChildrenCategories.Add(inCat);
            }
            return newCat;
        }

        private async Task SeedTags()
        {
            var tags = new List<Tag>();
            foreach (string tag in Constants.Tags)
            {
                tags.Add(new Tag(tag));
            }
            await db.Tags.AddRangeAsync(tags);
            await db.SaveChangesAsync();
        }

        private async Task SeedIngredients()
        {
            string[] userIds = await GetUserIds();
            var newIngredientss = new List<Ingredient>();
            for (int i = 0; i < Constants.Ingredients.Length; i++)
            {
                var ing = this.mapper.Map<Ingredient>(Constants.Ingredients[i]);
                newIngredientss.Add(ing);
                ing.AuthorId = userIds[i % Constants.Ingredients.Length];
            }
            await db.Ingredients.AddRangeAsync(newIngredientss);
            await db.SaveChangesAsync();
        }


        #region OldStuff

        //private async Task SeedManufacturers()
        //{
        //    for (int i = 0; i < Constants.ManufacturerNames.Length; i++)
        //    {
        //        string manufacturerName = Constants.ManufacturerNames[i];
        //        await db.Manufacturers.AddAsync(new Manufacturer
        //        {
        //            Name = manufacturerName,
        //            Email = string.Format(Constants.ManufacturerEmail, i + 1),
        //            PhoneNumber = Constants.ManufacturerPhoneNumber,
        //            WebAddress = Constants.ManufacturerWebAddress
        //        });
        //    }
        //    await db.SaveChangesAsync();
        //}

        //private async Task SeedProductCategories()
        //{
        //    List<Category> categories = new List<Category>();

        //    foreach (var kvp in Constants.HeadCategories)
        //    {
        //        categories.Add(new Category
        //        {
        //            Title = kvp.Key,
        //            Description = kvp.Value,
        //        });
        //    }
        //    int i = 0;
        //    foreach (var kvp in Constants.MiddleCategories)
        //    {
        //        Category headcategory;
        //        try
        //        {
        //            headcategory = categories[(i++) / 2];
        //        }
        //        catch
        //        {
        //            headcategory = categories.First();
        //        }
        //        categories.Add(new Category
        //        {
        //            Title = kvp.Key,
        //            Description = kvp.Value,
        //            OuterCategory = headcategory
        //        });
        //    }
        //    i = 0;
        //    foreach (var kvp in Constants.BottomCategories)
        //    {
        //        Category middleCategory;
        //        try
        //        {
        //            middleCategory = categories.Where(x => x.OuterCategory != null).ToArray()[(i++) / 2];
        //        }
        //        catch
        //        {
        //            middleCategory = categories.Where(x => x.OuterCategory != null).First();
        //        }

        //        categories.Add(new Category
        //        {
        //            Title = kvp.Key,
        //            Description = kvp.Value,
        //            OuterCategory = middleCategory
        //        });
        //    }
        //    await db.AddRangeAsync(categories);
        //    await db.SaveChangesAsync();
        //}

        //private async Task SeedProducts()
        //{
        //    var categoryIds = db.Categories.Select(x => x.Id).ToArray();
        //    var manufacturerIds = db.Manufacturers.Select(x => x.Id).ToArray();
        //    for (int i = 1; i <= Constants.NumberOfProductsToSeed; i++)
        //    {
        //        decimal price = random.Next(1, 100) + random.Next(1, 100) / 100m;
        //        decimal discount = random.Next(0, 4) <= 2 ? 0m : random.Next(1, 50) / 100m;
        //        double weight = random.Next(1, 50) + random.Next(1, 100) / 100d; ;
        //        uint quantity = (uint)(random.Next(0, 4) == 1 ? 0 : random.Next(1, 101));

        //        uint? warranty = random.Next(0, 4) == 2 ? null : (uint?)random.Next(6, 25);

        //        var newProduct = new Product
        //        {
        //            Name = GetRandom(Constants.ProductNames),
        //            Description = GetRandom(Constants.ProductDescription),
        //            Price = price,
        //            Discount = discount,
        //            Quantity = quantity,
        //            ReviewURL = Constants.ProductReviewURL,
        //            MainPicURL = GetRandom(Constants.ProductMainPicUrls),
        //            MonthsWarranty = warranty,
        //            Weight = weight,
        //            ManufacturerId = GetRandom(manufacturerIds),
        //            CategoryId = GetRandom(categoryIds)
        //        };
        //        await db.Products.AddAsync(newProduct);
        //    }
        //    await db.SaveChangesAsync();
        //}

        //private async Task SeedProductCharacteristics()
        //{
        //    Product[] products = db.Products.ToArray();

        //    for (int i = 0; i < products.Length; i++)
        //    {
        //        if (i == 5) continue;
        //        var product = products[i];
        //        Stack<ProductCharacteristic> characteristics = new Stack<ProductCharacteristic>();
        //        characteristics.Push(new ProductCharacteristic
        //        {
        //            Title = "Material",
        //            TextValue = GetRandom(Constants.Colors),
        //            NumericValue = null
        //        });
        //        if (i % 3 != 0 && i != 0)
        //        {
        //            characteristics.Push(new ProductCharacteristic
        //            {
        //                Title = "Width",
        //                NumericValue = random.Next(12, 45),
        //            });
        //            characteristics.Push(new ProductCharacteristic
        //            {
        //                Title = "Length",
        //                NumericValue = random.Next(15, 75),
        //            });
        //        }
        //        product.Characteristics = new HashSet<ProductCharacteristic>(characteristics);
        //    }
        //    await db.SaveChangesAsync();
        //}

        //private async Task SeedProductPicture()
        //{
        //    var products = db.Products.ToArray();
        //    for (int i = 0; i < products.Length; i++)
        //    {
        //        if (i == 4) continue;
        //        var product = products[i];
        //        HashSet<string> pictureUrls = new HashSet<string>();
        //        while (pictureUrls.Count < 2)
        //        {
        //            pictureUrls.Add(GetRandom(Constants.ProductContentPictureURLs));
        //        }
        //        foreach (var url in pictureUrls)
        //        {
        //            product.ProductPictures.Add(new ProductPicture
        //            {
        //                PictureURL = url,
        //            });
        //        }
        //    }
        //    await db.SaveChangesAsync();
        //}

        //private async Task SeedProductCommentsWithAttitude()
        //{
        //    Product[] products = db.Products.ToArray();
        //    var usersIds = db.Users.Select(x => x.Id).ToArray();
        //    for (int i = 0; i < products.Length; i++)
        //    {
        //        Product currentProduct = products[i];
        //        var randomUsersCommentorsIds = usersIds.OrderBy(x => random.Next()).Take(random.Next(0, (int)(usersIds.Length / 1.5))).ToArray();
        //        foreach (var id in randomUsersCommentorsIds)
        //        {
        //            var comment = new ProductComment
        //            {
        //                AuthorId = id,
        //                Comment = GetRandom(Constants.ProductComments)
        //            };
        //            var randomAttitudeGivvers = usersIds.Where(x => x != id).OrderBy(x => random.Next()).Take(random.Next(0, 4)).ToArray();
        //            foreach (var attitudeGiver in randomAttitudeGivvers)
        //            {
        //                comment.UsersAttitude.Add(new CommentSympathy
        //                {
        //                    SympathiserId = attitudeGiver,
        //                    Attitude = (Attitude)random.Next(1, 3)
        //                });
        //            }
        //            currentProduct.ProductComments.Add(comment);
        //        }
        //    }
        //    await db.SaveChangesAsync();
        //}

        //private async Task SeedProductGrading()
        //{
        //    Product[] products = db.Products.ToArray();
        //    var usersIds = db.Users.Select(x => x.Id).ToArray();
        //    for (int i = 0; i < products.Length; i++)
        //    {
        //        if (i % 7 == 0) continue;
        //        Product currentProduct = products[i];
        //        var randomEvaluatorsUsersIds = usersIds.OrderBy(x => random.Next()).Take(random.Next(0, usersIds.Length / 3)).ToArray();
        //        foreach (var id in randomEvaluatorsUsersIds)
        //        {
        //            var grade = new ProductVote
        //            {
        //                UserId = id,
        //                Grade = (Grade)random.Next(2, 7)
        //            };
        //            currentProduct.Votes.Add(grade);
        //        }
        //    }
        //    await db.SaveChangesAsync();
        //}

        //private async Task SeedOrders()
        //{
        //    var products = db.Products.Select(x => new { x.Id, x.DiscountedPrice }).ToArray();
        //    var userIds = db.Users.Select(x => x.Id).ToArray();
        //    var newOrders = new Stack<Order>();
        //    for (int i = 0; i < userIds.Length; i += 2)
        //    {
        //        string currentUserId = userIds[i];
        //        for (int j = 0; j < 4; j++)
        //        {
        //            int countOfProductTypes = random.Next(1, 4);
        //            var selectedProductIds = products.OrderBy(x => random.Next()).Take(countOfProductTypes).ToArray();

        //            var order = new Order
        //            {
        //                CustomerId = currentUserId,
        //                DeliveryFee = random.Next(1, 10) + random.Next(1, 100) / 100m,
        //                Status = (Status)random.Next(0, 6),
        //            };


        //            foreach (var product in selectedProductIds)
        //            {
        //                var newProductOrder = new ProductOrder
        //                {
        //                    ProductId = product.Id,
        //                    Quantity = random.Next(1, 4),
        //                    CurrentPrice = product.DiscountedPrice
        //                };
        //                order.OrderProducts.Add(newProductOrder);
        //            }
        //            order.DateOfCreation.AddDays(random.Next(-150, 1));
        //            newOrders.Push(order);
        //        }
        //    }
        //    db.Orders.AddRange(newOrders);
        //    await db.SaveChangesAsync();
        //}

        //private T GetRandom<T>(IEnumerable<T> collection)
        //{
        //    int index = this.random.Next(0, collection.Count());
        //    return collection.ToArray()[index];
        //}
        #endregion

        private class CategoryInfo
        {
            public CategoryInfo(string name, string description, params CategoryInfo[] innerCat) : this(name, description)
            {
                InnerCategories = innerCat;
            }

            public CategoryInfo(string name, string description)
            {
                Name = name;
                Description = description;
                InnerCategories = new CategoryInfo[0];
            }

            public string Name { get; }
            public string Description { get; }
            public CategoryInfo[] InnerCategories { get; }
        }

        private class IngredientDBS : IMapTo<Ingredient>
        {
            public IngredientDBS(
                string name,
    OriginType origin,
    UnitMeasurmentType mType = UnitMeasurmentType.WeightUnits,
    bool isEssential = false,
    string desc = "",
    string picUrl = "https://sciences.ucf.edu/psychology/wp-content/uploads/sites/63/2019/09/No-Image-Available.png",
    ApprovalStatus stat = ApprovalStatus.Awaiting)
            {
                Name = name;
                Origin = origin;
                MeasureType = mType;
                IsEssential = isEssential;
                Description = desc;
                PicUrl = picUrl;
                Status = stat;
            }

            public string Name { get; set; }
            public OriginType Origin { get; set; }
            public virtual UnitMeasurmentType MeasureType { get; set; }
            public bool IsEssential { get; set; }
            public string Description { get; set; }
            public string PicUrl { get; set; }
            public virtual ApprovalStatus Status { get; set; }
        }

        private class Constants
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
            public static CategoryInfo[] Categories = new[]
            {
                new CategoryInfo("BreakFast","A meal eaten in the morning as the first meal of the day",new CategoryInfo("Sandwiches","Two pieces of bread with cheese, salad, or meat, usually cold, between them")),
                new CategoryInfo("Salads","A mixture of uncooked vegetables, eaten either as a separate dish or with other food"),
                new CategoryInfo("Apetizers","A small amount of food eaten before a meal"),
                new CategoryInfo("Side Dishes","An extra dish of food, for example vegetables or salad, that is served with the main dish, sometimes on a separate plate",new CategoryInfo("Breads","A food made from flour, water, and usually yeast, mixed together and baked")),
                new CategoryInfo("Soups","A usually hot, liquid food made from vegetables, meat, or fish"),
                new CategoryInfo("Snacks","A small amount of food that is eaten between meals, or a very small meal"),
                new CategoryInfo("Main Dish","The main food prepared for a meal"),
                new CategoryInfo("Deserts","Sweet food eaten at the end of a meal"),
            };
            #endregion

            #region Tags
            public static string[] Tags = new[]
            {
             "crispy","baked","minty","sweet","cold","hot","spicy","juicy"
            };
            #endregion

            #region Ingredients
            public static IngredientDBS[] Ingredients = new[]{
                new IngredientDBS(
                    name:"Salt",
                    origin:OriginType.NonOrganic,
                    isEssential:true,
                    desc:"A common white substance found in sea water and in the ground, used especially to add flavour to food or to preserve it",
                    picUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCh_aGmMFlLzmMPfFJW_KrHFUNV625TZCWc7VkeXAZGbH9eLmpOA&s",
                    stat:ApprovalStatus.Accepted),
                new IngredientDBS(
                    name:"Eggs",
                    origin:OriginType.Animal,
                    mType:UnitMeasurmentType.Count,
                    isEssential:false,
                    desc:"The oval object with a hard shell that is produced by female birds, especially chickens, eaten as food",
                    picUrl:"https://d2ebzu6go672f3.cloudfront.net/media/content/images/p8_ML0818_gi476879984.jpg",
                    stat:ApprovalStatus.Accepted),
                new IngredientDBS(
                    name:"Chease",
                    origin:OriginType.Animal,
                    mType:UnitMeasurmentType.WeightUnits,
                    isEssential:false,
                    desc:"A food made from milk, that can be either firm or soft and is usually yellow or white in colour",
                    picUrl:"https://d2ebzu6go672f3.cloudfront.net/media/content/images/p8_ML0818_gi476879984.jpg",
                    stat:ApprovalStatus.Accepted),
                new IngredientDBS(
                    name:"Water",
                    origin:OriginType.NonOrganic,
                    mType:UnitMeasurmentType.VolumeUnits,
                    isEssential:true,
                    desc:"A clear liquid, without colour or taste, that falls from the sky as rain and is necessary for animal and plant life",
                    picUrl:"https://images.agoramedia.com/everydayhealth/gcms/The-Health-Benefits-of-Water-722x406.jpg?width=722",
                    stat:ApprovalStatus.Accepted),
                new IngredientDBS(
                    name:"Pepper",
                    origin:OriginType.Plant,
                    mType:UnitMeasurmentType.VolumeUnits,
                    isEssential:true,
                    desc:"A grey or white powder produced by crushing dry peppercorns, used to give a spicy, hot taste to food",
                    picUrl:"https://dictionary.cambridge.org/images/full/pepper_noun_002_27125.jpg?version=5.0.69",
                    stat:ApprovalStatus.Accepted),
                new IngredientDBS(
                    name:"Milk",
                    origin:OriginType.Animal,
                    mType:UnitMeasurmentType.VolumeUnits,
                    isEssential:false,
                    desc:"The white liquid produced by cows, goats, and sheep and used by humans as a drink or for making butter, cheese, etc",
                    picUrl:"https://dictionary.cambridge.org/images/full/milk_noun_002_23322.jpg?version=5.0.69",
                    stat:ApprovalStatus.Awaiting),
                new IngredientDBS(
                    name:"Musthache",
                    origin:OriginType.Animal,
                    mType:UnitMeasurmentType.VolumeUnits,
                    isEssential:false,
                    desc:"Not good for any recipe",
                    picUrl:"https://dictionary.cambridge.org/images/full/mousta_noun_002_24080.jpg?version=5.0.69",
                    stat:ApprovalStatus.Denied),
                };
            #endregion


            #region Manufacturers
            public static string[] ManufacturerNames = { "Mazniq", "Kitaeca", "Beliq vojd", "Mazuta", "Marko Polo" };
            public static string ManufacturerEmail = "testov{0}Mail@mail.com";
            public static string ManufacturerPhoneNumber = "0883387849";
            public static string ManufacturerWebAddress = "somehomesite.ru";
            #endregion

            #region ProductCharacteristics
            public static string[] Colors = { "Black", "Blue", "White", "Metalic" };
            #endregion

            #region ProductComments
            public static string[] ProductComments = { "It is very nice", "I like this item allot", "I ll recomend it to everyone I know", "I want my money back", "This one is broken I want another", "There is no manual for use", "It is useless", "But It is made in china damn it", "I dont know what to say", "Commenting something", "Lorem ipsum" };
            #endregion

            #region ProductPictures
            public static string[] ProductContentPictureURLs = { "http://i.imgur.com/nif7ztU.jpg", "http://rockinsider.com/wp-content/uploads/2011/11/BadPanda105-Visiol-EP-500x500.jpg"
                                                 ,"https://getsocial.nz/wp-content/uploads/2014/12/Evolution_by_will_yen-500x500.png"
                                                 ,"https://forums.crackberry.com/attachments/blackberry-q10-f272/171886d1371181552t-bbm-display-picture-limitations-423341110329_qy737vid_l.jpg"
                                                 ,"https://www.newcastlewildflower.com.au/wp-content/uploads/2013/05/The-catalyst-single-cover-500x500.png"
                                                 ,"https://data.whicdn.com/images/1484820/original.jpg",
                                                 "http://welde-lessocenter.com/wp-content/uploads/2017/07/welde-lessocenter-3-500x500.jpg"};
            #endregion
        }
    }
}


//Select* from AspNetUsers
//Select* from AspNetRoles
//Select* from aspNetUserRoles
//Select* from UserBlockings
//Select* from Categories
//Select* from[Messages]
//Select* from Ingredients





//Delete from AspNetRoles

//Delete from AspNetUsers
//Delete from AspNetRoles
//Delete from aspNetUserRoles
//Delete from UserBlockings
//Delete from Categories
//Delete from[Messages]
//Delete from Ingredients