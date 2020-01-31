using AutoMapper;
using Common.Interfaces.Contracts.Automapper;
using System;
using System.Linq;

namespace Common.AutomapperConfigurations
{
    public class MaProfile : Profile
    {
        //private readonly string confName = "con";
        //private StringBuilder sb = new StringBuilder();
        //public string MappingsAsString => sb.ToString().Trim();
        public MaProfile()
        {
            var allTypes = AppDomain.CurrentDomain.GetAssemblies().SelectMany(x => x.GetTypes());

            CreateMapToMappings(allTypes);
            CreateMapFromMappings(allTypes);

            //CreateMap<Product, ProductMinifiedOutDto>()
            //    .ForMember(d => d.IsAvailable, opt => opt.MapFrom(s => s.Quantity > 0))
            //    .ForMember(d => d.ComentsCount, opt => opt.MapFrom(s => s.ProductComments.Count))
            //    .ForMember(d => d.Grade, opt => opt.MapFrom(s =>
            //     s.Votes.Any() ? (Grade)(int)Math.Round((double)s.Votes.Sum(x => (int)x.Grade) / s.Votes.Count()) : Grade.NotRated))
            //    .ForMember(d => d.OrdersCount, opt => opt.MapFrom(s => s.ProductOrders.Count));

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
                    //string txt = $"{confName}.CreateMap<{sType.FullName},{targetType.FullName}>();";
                    //sb.AppendLine(txt);
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
                    //string txt = $"{confName}.CreateMap<{sType.FullName},{dType.FullName}>();";
                    //sb.AppendLine(txt);
                }
            }
        }

    }
}
