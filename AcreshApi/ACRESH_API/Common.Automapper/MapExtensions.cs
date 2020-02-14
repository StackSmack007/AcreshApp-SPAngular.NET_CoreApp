namespace Common.AutomapperConfigurations
{
    using AutoMapper;
    using AutoMapper.QueryableExtensions;
    using System.Collections.Generic;
    using System.Linq;

    public static class MapExtensions
    {
        private static IMapper mapper;
        private static MapperConfiguration mapcfg;
        static MapExtensions()
        {
            mapcfg = new MapperConfiguration(mc =>
            {
                mc.AddProfile(new MaProfile());
            });
            mapper = new Mapper(mapcfg);

        }
        public static IQueryable<TDestination> To<TDestination>(this IQueryable<object> query)
        {
           
            //return query.Select(x => mapper.Map<TDestination>(x));
            
            
            return query.ProjectTo<TDestination>(mapcfg);
        }

    }
}
