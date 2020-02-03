
using Acresh.Services.InitialSeed;
using Microsoft.AspNetCore.Http;
using System.Threading.Tasks;

namespace ACRESH_API.Middlewares
{
    public class SeederMiddleware
    {
        private readonly RequestDelegate _next;

        public SeederMiddleware(RequestDelegate next)
        {
            _next = next;
        }

        // IMyScopedService is injected into Invoke
        public async Task Invoke(HttpContext httpContext, DataBaseSeeder seeder)
        {
            await _next(httpContext);
           await seeder.SeedData();
        }
    }
}
