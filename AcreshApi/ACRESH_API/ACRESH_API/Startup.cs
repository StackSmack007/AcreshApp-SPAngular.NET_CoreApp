using Acresh.Services.DBRepository;
using Acresh.Services.DBRepository.Contracts;
using Acresh.Services.InitialSeed;
using Acresh.Services.JWT;
using Acresh.Services.Services;
using Acresh.Services.Services.Contracts;
using ACRESH_API.Hubs;
using AutoMapper;
using Common.AutomapperConfigurations;
using Common.Tools;
using Infrastructure.Data;
using Infrastructure.Models;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.IO;

namespace ACRESH_API
{
    public class Startup
    {
        private readonly IWebHostEnvironment env;

        public Startup(IConfiguration configuration, IWebHostEnvironment env)
        {
            Configuration = configuration;
            this.env = env;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();

            // services.AddDbContext<ApplicationDbContext>(options => options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));
            if (env.EnvironmentName == "Development")
            {
                services.AddDbContext<ApplicationDbContext>(options => options.UseMySql(Configuration.GetConnectionString("DevelopmentMySQL")));
            }
            else
            {
                services.AddDbContext<ApplicationDbContext>(options => options.UseMySql(Configuration.GetConnectionString("ProductionMySQL")));
            }

            services.AddScoped(typeof(IRepository<>), typeof(DbRepository<>));
            services.AddIdentity<AcUser, IdentityRole>(opt =>
{
    opt.Password.RequireDigit = false;
    opt.Password.RequireNonAlphanumeric = false;
    opt.Password.RequireLowercase = false;
    opt.Password.RequireUppercase = false;
    opt.Password.RequiredLength = 4;
    opt.Password.RequiredUniqueChars = 2;
    opt.Lockout.MaxFailedAccessAttempts = 10;
    opt.Lockout.DefaultLockoutTimeSpan = TimeSpan.FromMinutes(10);
})
    .AddRoles<IdentityRole>()
    .AddEntityFrameworkStores<ApplicationDbContext>();

            services.AddScoped<IUserClaimsPrincipalFactory<AcUser>, UserClaimsPrincipalFactory<AcUser, IdentityRole>>();

            var mappingConfig = new MapperConfiguration(mc =>
            {
                mc.AddMaps(new[] { "DataTransferObjects", "Infrastructure.Models" });
                mc.AddProfile(new MaProfile());
            });

            var JWTsettingsSection = Configuration.GetSection("JwtSettings");
            services.Configure<JWTSettings>(JWTsettingsSection);
            var jwtSettings = JWTsettingsSection.Get<JWTSettings>();

            services.AddSignalR();
            services.AddControllers().AddNewtonsoftJson();

            //Configuring OfJWTHappensHere
            ServiceJWT.ConfigureJWTAUth(services, jwtSettings.Secret, jwtSettings.Issuer);
            services.AddSingleton<Random>();
            IMapper mapper = mappingConfig.CreateMapper();
            services.AddSingleton(mapper);
            services.AddScoped<DataBaseSeeder>();
            services.AddScoped<ServiceJWT>();
            services.AddTransient<IUserDataService, UserDataService>();
            services.AddTransient<IMessageService, MessageService>();
            services.AddTransient<IRecipesService, RecipeService>();
            services.AddTransient<ICategoryService, CategoryService>();
            services.AddTransient<IIngredientService, IngredientService>();
            services.AddTransient<ICommentService, CommentService>();
            services.AddResponseCompression(opt => opt.EnableForHttps = true);
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.EnvironmentName == Microsoft.Extensions.Hosting.Environments.Development)
            {
                app.UseDeveloperExceptionPage();
            }

            app.Use(async (context, next) =>
            {
                await next();
                if (context.Response.StatusCode == 404 && !Path.HasExtension(context.Request.Path.Value))
                {
                    context.Response.StatusCode = 200;
                    context.Request.Path = "/index.html";
                    await next();
                }
            });

         //   if (env.EnvironmentName == Microsoft.Extensions.Hosting.Environments.Development) app.UseHttpsRedirection();

            app.UseRouting();

            if (env.EnvironmentName == Microsoft.Extensions.Hosting.Environments.Development)
            {
                app.UseCors(builder => builder
                           .WithOrigins("http://localhost:4200")
                           .AllowAnyMethod()
                           .AllowAnyHeader()
                           .AllowCredentials()
                           );
            }
            else
            {
                app.UseStaticFiles();
                app.UseDefaultFiles();
            }


            app.UseAuthentication();
            app.UseAuthorization();

            app.UseHsts();
            app.UseResponseCompression();

            app.UseMiddleware<Middlewares.SeederMiddleware>();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
                endpoints.MapHub<RecievedMessagesHub>("/unread-messages");
                endpoints.MapHub<RecipeDetailsTrackHub>("/recipe-details");
            });
        }
    }
}
