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

namespace ACRESH_API
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();
            services.AddDbContext<ApplicationDbContext>(options => options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));
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

            //services.AddCors(options =>
            //{
            //    options.AddPolicy("CorsPolicy", builder => builder
            //           .WithOrigins("http://localhost:4200")
            //           .AllowAnyMethod()
            //           .AllowAnyHeader()
            //           //.AllowCredentials()
            //           );
            //});

            services.AddSignalR();

            //Configuring OfJWTHappensHere
            ServiceJWT.ConfigureJWTAUth(services, jwtSettings.Secret, jwtSettings.Issuer);

            services.AddSingleton<Random>();
            IMapper mapper = mappingConfig.CreateMapper();
            services.AddSingleton(mapper);

            services.AddScoped<DataBaseSeeder>();

            services.AddScoped<ServiceJWT>();
            services.AddTransient<IUserDataService, UserDataService>();
            services.AddTransient<IMessageService, MessageService>();
            services.AddTransient<IRecipesService, RecipesService>();

            services.AddResponseCompression(opt => opt.EnableForHttps = true);
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.EnvironmentName == EnvironmentName.Development)
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseStaticFiles();
            app.UseHttpsRedirection();
            app.UseRouting();

            app.UseCors(builder => builder
                       .WithOrigins("http://localhost:4200")
                       .AllowAnyMethod()
                       .AllowAnyHeader()
                       .AllowCredentials()
                       );

            app.UseAuthentication();
            app.UseAuthorization();

            app.UseHsts();
            app.UseResponseCompression();
            //app.UseSession();

            app.UseMiddleware<Middlewares.SeederMiddleware>();


            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
                endpoints.MapHub<RecievedMessagesHub>("/unread-messages");
            });
        }
    }
}
