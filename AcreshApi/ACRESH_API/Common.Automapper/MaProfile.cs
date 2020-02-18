using AutoMapper;
using Common.Interfaces.Contracts.Automapper;
using DataTransferObjects.Recipes;
using DataTransferObjects.Recipes.Details;
using DataTransferObjects.UserData;
using Infrastructure.Models;
using System;
using System.Linq;

namespace Common.AutomapperConfigurations
{
    public class MaProfile : Profile
    {
        public MaProfile()
        {
            var allTypes = AppDomain.CurrentDomain.GetAssemblies().SelectMany(x => x.GetTypes());
                CreateMapToMappings(allTypes);
                CreateMapFromMappings(allTypes);
            
            CreateMap<AcUser, ProfileDataForEditDTOout>()
                .ForMember(d => d.Gender, opt => opt.MapFrom(s => s.Gender.ToString().ToLower()));

            CreateMap<UserBlocking, BlockedUserInfoDTOout>()
                .ForMember(d => d.UserName, opt => opt.MapFrom(x => x.Irritator.UserName))
                .ForMember(d => d.CookRank, opt => opt.MapFrom(x => x.Irritator.CookRank.ToString()))
                .ForMember(d => d.AvatarPicture, opt => opt.MapFrom(x => x.Irritator.AvatarPicture));

            CreateMap<UserBlocking, BlockerUserInfoDTOout>()
                .ForMember(d => d.UserName, opt => opt.MapFrom(x => x.Defender.UserName))
                .ForMember(d => d.CookRank, opt => opt.MapFrom(x => x.Defender.CookRank.ToString()))
                .ForMember(d => d.AvatarPicture, opt => opt.MapFrom(x => x.Defender.AvatarPicture));

            CreateMap<Recipe, RecipeSubInfoDTOout>()
                .ForMember(d => d.Category, opt => opt.MapFrom(x => x.Category.Name))
                .ForMember(d => d.Fans, opt => opt.MapFrom(x => x.RecipeFavorisers.Count()))
                .ForMember(d => d.IngredientsCount, opt => opt.MapFrom(x => x.RecipeIngredients.Count()))
                .ForMember(d => d.Rating, opt => opt.MapFrom(x => x.Votes.Sum(v => (int)v.Score) / x.Votes.Count()));

            CreateMap<Recipe, RecipeCardDTOout>()
                .ForMember(d => d.SubInfo, opt => opt.MapFrom(x => x))
                .ForMember(d => d.Description, opt => opt.MapFrom(x => x.Description.Substring(0, 600)));


            CreateMap<Recipe, RecipeDetailsDTOout>()
                .ForMember(d => d.Ingridients, opt => opt.MapFrom(s => s.RecipeIngredients.Where(s=>!s.IsDeleted)))
                .ForMember(d => d.Pictures, opt => opt.MapFrom(s => s.Pictures.Where(s => !s.IsDeleted).Select(p => p.UrlPath)))
                .ForMember(d => d.Tags, opt => opt.MapFrom(s => s.RecipeTags.Where(s => !s.IsDeleted && !s.Tag.IsDeleted).Select(t => t.Tag.Name.ToLower())))
                .ForMember(d => d.Favorizers, opt => opt.MapFrom(s => s.RecipeFavorisers.Where(s => !s.IsDeleted).Select(f => f.User.UserName)));

            CreateMap<RecipeIngredient, IngridientRecipeDetailsDTOout>()
                 .ForMember(d => d.Id, opt => opt.MapFrom(s => s.Ingredient.Id))
                 .ForMember(d => d.Name, opt => opt.MapFrom(s => s.Ingredient.Name))
                 .ForMember(d => d.PicURL, opt => opt.MapFrom(s => s.Ingredient.PicUrl))
                 .ForMember(d => d.IsVegan, opt => opt.MapFrom(s => s.Ingredient.IsVegan))
                 .ForMember(d => d.IsEssential, opt => opt.MapFrom(s => s.Ingredient.IsEssential));

            CreateMap<RecipeVote, VoteRecipeDetailsDTOout>()
                 .ForMember(d => d.Name, opt => opt.MapFrom(s => s.Voter.UserName))
                 .ForMember(d => d.Vote, opt => opt.MapFrom(s => s.Score));
        }

        private void CreateMapToMappings(System.Collections.Generic.IEnumerable<Type> allTypes)
        {
            Type[] sourseTypes = allTypes.Where(x => x.GetInterfaces()
                                         .Any(i => i.IsGenericType && i.GetGenericTypeDefinition() == typeof(IMapTo<>)))
                                         .ToArray();
            foreach (Type sType in sourseTypes)
            {
                Type[] targetTypes = sType.GetInterfaces()
                                          .Where(i => i.IsGenericType && i.GetGenericTypeDefinition() == typeof(IMapTo<>))
                                          .Select(x => x.GetGenericArguments().First())
                                          .ToArray();

                foreach (Type targetType in targetTypes)
                {
                    CreateMap(sType, targetType);
                }
            }
        }
        private void CreateMapFromMappings(System.Collections.Generic.IEnumerable<Type> allTypes)
        {
            Type[] destTypes = allTypes.Where(x => x.GetInterfaces()
                                       .Any(i => i.IsGenericType && i.GetGenericTypeDefinition() == typeof(IMapFrom<>)))
                                       .ToArray();

            foreach (Type dType in destTypes)
            {
                Type[] sourceTypes = dType.GetInterfaces()
                                          .Where(i => i.IsGenericType && i.GetGenericTypeDefinition() == typeof(IMapFrom<>))
                                          .Select(x => x.GetGenericArguments().First())
                                          .ToArray();

                foreach (Type sType in sourceTypes)
                {
                    CreateMap(sType, dType);
                }
            }
        }

        private class DateTimeEpochConverter : ITypeConverter<DateTime, String>
        {
            string ITypeConverter<DateTime, string>.Convert(DateTime date, string destination, ResolutionContext context)
            {
                TimeSpan span = date.Subtract(new DateTime(1970, 1, 1, 0, 0, 0));
                return span.TotalSeconds.ToString();
            }
        }
    }
}