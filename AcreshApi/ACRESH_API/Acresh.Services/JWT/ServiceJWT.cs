using Acresh.Services.DBRepository.Contracts;
using Common.Tools;
using Common.Tools.Extensions;
using Infrastructure.Models;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace Acresh.Services.JWT
{
    public class ServiceJWT
    {
        private readonly UserManager<AcUser> um;
        private readonly IRepository<UserBlocking> userBlockingsRepository;
        private readonly JWTSettings jwtSettings;
        private static bool validateIssuer = true;
        public ServiceJWT(IOptions<JWTSettings> jwtSettings, UserManager<AcUser> um, IRepository<UserBlocking> userBlockingsRepository)
        {
            this.um = um;
            this.userBlockingsRepository = userBlockingsRepository;
            this.jwtSettings = jwtSettings.Value;
        }
        public static void ConfigureJWTAUth(IServiceCollection services, string secret, string issuer)
        {
            var tokenValParams = new TokenValidationParameters
            {
                ValidateIssuerSigningKey = true,
                IssuerSigningKey = new SymmetricSecurityKey(secret.ToByteArray()),
                ValidateIssuer = validateIssuer,
                ValidIssuer = issuer,
                ValidateAudience = false,
                RequireSignedTokens = true,
                // ClockSkew=TimeSpan.FromMinutes(30)
            };
            services.AddAuthentication(x =>
            {
                x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                x.DefaultSignInScheme = JwtBearerDefaults.AuthenticationScheme;
                x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            })

            .AddJwtBearer(opt =>
             {
                 opt.TokenValidationParameters = tokenValParams;
                 opt.IncludeErrorDetails = true;
             });
        }
        public async Task<string> CreateJWT(AcUser u)
        {
            //Preferences here
            var blockedUserNames = userBlockingsRepository.All().Where(x =>!x.IsDeleted && x.DefenderId == u.Id).Select(x => x.Irritator.UserName).ToArray();
            var roles = await um.GetRolesAsync(u);
            
            List<Claim> claims = new List<Claim>(){
                new Claim(ClaimTypes.Name,u.UserName),
                new Claim("roles", string.Join("|", roles)),
                new Claim("fullName", $"{u.FirstName} {u.LastName}"),
                new Claim("cookRank", u.CookRank.ToString()),
                new Claim("_id", u.Id),
                new Claim("avPic", u.AvatarPicture),
                new Claim("blocked",string.Join("|", blockedUserNames))
            };

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.UtcNow.AddDays(GlobalConstants.TokenExpirationDays),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(this.jwtSettings.Secret.ToByteArray()),
                                                             SecurityAlgorithms.HmacSha256Signature),
                Issuer = this.jwtSettings.Issuer
            };

            var tokenHandler = new JwtSecurityTokenHandler();
            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }

         public async Task<AcUser> GetUserFromRequestTokenAsync(HttpRequest request)
        {
            string token = (request.Headers["Authorization"]).ToString().Replace("Bearer ", "");
            var userData = this.GetPrincipal(token);
            return await um.Users.FirstOrDefaultAsync(x => x.Id == userData.FindFirst("_id").Value);
        }

        private  ClaimsPrincipal GetPrincipal(string token)
        {
            try
            {
                JwtSecurityTokenHandler tokenHandler = new JwtSecurityTokenHandler();
                JwtSecurityToken jwtToken = (JwtSecurityToken)tokenHandler.ReadToken(token);
                if (jwtToken == null) return null;
                byte[] key = this.jwtSettings.Secret.ToByteArray();
                TokenValidationParameters parameters = new TokenValidationParameters()
                {
                    RequireExpirationTime = true,
                    ValidateIssuer = validateIssuer,
                    ValidIssuer = this.jwtSettings.Issuer,
                    ValidateAudience = false,
                    IssuerSigningKey = new SymmetricSecurityKey(key),
                };
                SecurityToken securityToken;
                ClaimsPrincipal principal = tokenHandler.ValidateToken(token, parameters, out securityToken);
                return principal;
            }
            catch
            {
                return null;
            }
        }
    }
}
