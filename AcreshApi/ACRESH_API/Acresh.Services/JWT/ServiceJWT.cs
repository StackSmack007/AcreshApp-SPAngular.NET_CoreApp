using Common.Tools;
using Common.Tools.Extensions;
using Infrastructure.Models;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Threading.Tasks;

namespace Acresh.Services.JWT
{
    public class ServiceJWT
    {
        private readonly UserManager<AcUser> um;
        private readonly RoleManager<IdentityRole> rManager;
        private readonly JWTSettings jwtSettings;
               private static bool validateIssuer=true;     
        public ServiceJWT(IOptions<JWTSettings> jwtSettings, UserManager<AcUser> um, RoleManager<IdentityRole> rManager)
        {
            this.um = um;
            this.rManager = rManager;
            this.jwtSettings = jwtSettings.Value;
        }
        public static void ConfigureJWTAUth(IServiceCollection services, string secret,string issuer)
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
            var roles = await um.GetClaimsAsync(u);

            List<Claim> claims = new List<Claim>(){
                new Claim(ClaimTypes.Name,$"{u.FirstName} {u.LastName}"),
                new Claim(ClaimTypes.Role, $"Admin"),
                new Claim("FullName", $"{u.FirstName} {u.LastName}"),
                new Claim("CookRank", u.CookRank.ToString()),
                new Claim("Id", u.Id),
                new Claim("AvatarPicture", u.AvatarPicture),
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


        public ClaimsPrincipal GetPrincipal(string token)
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
