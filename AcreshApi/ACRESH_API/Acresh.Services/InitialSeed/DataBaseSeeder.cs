namespace Acresh.Services.InitialSeed
{
    using Infrastructure.Data;
    using Infrastructure.Models;
    using Microsoft.AspNetCore.Identity;
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;

    public class DataBaseSeeder
    {
        //private readonly ApplicationDbContext db;
        //private readonly Random random;
        //private readonly UserManager<AcUser> _UserManager;
        //private readonly RoleManager<IdentityRole> _RoleManager;

        //public DataBaseSeeder(Random random, UserManager<AcUser> userManager, RoleManager<IdentityRole> roleManager, ApplicationDbContext dbContext)
        //{
        //    this._RoleManager = roleManager;
        //    this.random = random;
        //    this._UserManager = userManager;
        //    this.db = dbContext;
        //}

        //public async Task SeedData()
        //{
        //    if (!db.Roles.Any())
        //    {
        //        await db.Database.EnsureDeletedAsync();
        //        await db.Database.EnsureCreatedAsync();
        //        await SeedRoles();
        //        await SeedUsers();
        //        await SeedManufacturers();
        //        await SeedProductCategories();
        //        await SeedProducts();
        //        await SeedProductCharacteristics();
        //        await SeedProductPicture();
        //        await SeedProductCommentsWithAttitude();
        //        await SeedProductGrading();
        //        await SeedOrders();
        //    }
        //}

        //private async Task SeedRoles()
        //{
        //    foreach (var role in Constants.RolesUsersCount.Keys)
        //    {
        //        await _RoleManager.CreateAsync(new IdentityRole(role));
        //    }
        //}

        //private async Task SeedUsers()
        //{
        //    foreach (var kvp in Constants.RolesUsersCount)
        //    {
        //        for (int i = 1; i <= kvp.Value; i++)
        //        {
        //            string userName = kvp.Key + i;
        //            var user = new AppUser()
        //            {
        //                FirstName = "TestUserFirstName",
        //                LastName = "TestUserLastName",
        //                UserName = userName,
        //                Address = Constants.UserAddress + i,
        //                Email = userName + "@gmail.com",
        //                Town = userName + "'s HomeTown",
        //                SecurityStamp = Guid.NewGuid().ToString()
        //            };
        //            var res = await _UserManager.CreateAsync(user, Constants.UserPassword);
        //            await _UserManager.AddToRoleAsync(user, kvp.Key);
        //        }
        //    }
        //}

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

        //private class Constants
        //{
        //    #region Users & Roles
        //    public static string UserAddress { get; } = "Sesam street N=";
        //    public static string UserPassword { get; } = "123456a";
        //    public static IDictionary<string, int> RolesUsersCount { get; } = new Dictionary<string, int> { ["Admin"] = 2, ["User"] = 5, ["Assistance"] = 2 };
        //    #endregion

        //    #region Products
        //    public static readonly int NumberOfProductsToSeed = 75;
        //    public static string[] ProductNames = { "Tooth brush", "StereoSystem", "Pc Mouse", "Keyboard", "Toy", "Weapon", "Nuke", "Bomb", "Spider Web", "Lolipop", "Projector" };
        //    public static string[] ProductDescription = { "light and fast", "heavy and expensive", "with cool design", "for every pocket", "best purchase of year 2001" };
        //    public static string ProductReviewURL = "https://youtu.be/GRxofEmo3HA";
        //    public static string[] ProductMainPicUrls = { "https://www.buildabear.co.uk/dw/image/v2/BBNG_PRD/on/demandware.static/-/Sites-buildabear-master/default/dw5430adaa/26613x.jpg?sw=600&sh=600&sm=fit&q=70"
        //                                                 ,"https://www.buildabear.co.uk/dw/image/v2/BBNG_PRD/on/demandware.static/-/Sites-buildabear-master/default/dw5430adaa/26613x.jpg?sw=600&sh=600&sm=fit&q=70"
        //                                                ,"https://cdn.shopify.com/s/files/1/0725/9041/products/butler_411_1024x1024.jpg?v=1527557112","https://www.karatemart.com/images/products/large/traditional-japanese-katana.jpg"};
        //    #endregion

        //    #region Categories
        //    public static Dictionary<string, string> HeadCategories = new Dictionary<string, string> { ["For House"] = "every home must have it", ["For the car"] = "to move faster", ["For the wife"] = "Cosmetics all colours", ["Fishing"] = "worms every fish want to eat" };
        //    public static Dictionary<string, string> MiddleCategories = new Dictionary<string, string> { ["For the bath"] = "having a bath is good do it often!", ["For Kitchen"] = "Pankake making is easier now", ["Amortisiori"] = "soft and smooth", ["Exhaust Pipe"] = "best sound ever", ["Grim"] = "Juzepe Nacapoti", ["Jewelery"] = "Not from china relax", ["Nothing"] = "void emptiness of the hallow spaces" };
        //    public static Dictionary<string, string> BottomCategories = new Dictionary<string, string> { ["Sink"] = "for washing", ["Hanger"] = "for hanging clothes and other hangable stuff" };
        //    #endregion

        //    #region Manufacturers
        //    public static string[] ManufacturerNames = { "Mazniq", "Kitaeca", "Beliq vojd", "Mazuta", "Marko Polo" };
        //    public static string ManufacturerEmail = "testov{0}Mail@mail.com";
        //    public static string ManufacturerPhoneNumber = "0883387849";
        //    public static string ManufacturerWebAddress = "somehomesite.ru";
        //    #endregion

        //    #region ProductCharacteristics
        //    public static string[] Colors = { "Black", "Blue", "White", "Metalic" };
        //    #endregion

        //    #region ProductComments
        //    public static string[] ProductComments = { "It is very nice", "I like this item allot", "I ll recomend it to everyone I know", "I want my money back", "This one is broken I want another", "There is no manual for use", "It is useless", "But It is made in china damn it", "I dont know what to say", "Commenting something", "Lorem ipsum" };
        //    #endregion

        //    #region ProductPictures
        //    public static string[] ProductContentPictureURLs = { "http://i.imgur.com/nif7ztU.jpg", "http://rockinsider.com/wp-content/uploads/2011/11/BadPanda105-Visiol-EP-500x500.jpg"
        //                                 ,"https://getsocial.nz/wp-content/uploads/2014/12/Evolution_by_will_yen-500x500.png"
        //                                 ,"https://forums.crackberry.com/attachments/blackberry-q10-f272/171886d1371181552t-bbm-display-picture-limitations-423341110329_qy737vid_l.jpg"
        //                                 ,"https://www.newcastlewildflower.com.au/wp-content/uploads/2013/05/The-catalyst-single-cover-500x500.png"
        //                                 ,"https://data.whicdn.com/images/1484820/original.jpg",
        //                                 "http://welde-lessocenter.com/wp-content/uploads/2017/07/welde-lessocenter-3-500x500.jpg"};
        //    #endregion
        //}
    }
}