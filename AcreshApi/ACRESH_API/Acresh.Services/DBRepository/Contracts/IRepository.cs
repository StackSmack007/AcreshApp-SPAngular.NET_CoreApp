namespace Acresh.Services.DBRepository.Contracts
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    public interface IRepository<TEntity> : IDisposable
        where TEntity : class, new()
    {
        Task AddAssync(TEntity entity);
        Task AddRangeAssync(IEnumerable<TEntity> entities);

        void Remove(TEntity entity);
        void RemoveRange(IEnumerable<TEntity> entities);

        IQueryable<TEntity> All();
        int SaveChanges();
        Task<int> SaveChangesAsync();
    }
}
