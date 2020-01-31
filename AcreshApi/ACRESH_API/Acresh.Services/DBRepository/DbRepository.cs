﻿using Acresh.Services.DBRepository.Contracts;
using Infrastructure.Data;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Acresh.Services.DBRepository
{
    public class DbRepository<TEntity> : IRepository<TEntity>
        where TEntity : class, new()
    {
        private ApplicationDbContext context;
        private DbSet<TEntity> dbSet;

        public DbRepository(ApplicationDbContext context)
        {
            this.context = context;
            dbSet = context.Set<TEntity>();
        }

        public async Task AddAssync(TEntity entity)
        {
            await dbSet.AddAsync(entity);
        }

        public async Task AddRangeAssync(IEnumerable<TEntity> entities)
        {
            await dbSet.AddRangeAsync(entities);
        }

        public IQueryable<TEntity> All()
        {
            return dbSet;
        }

        public void Remove(TEntity entity)
        {
            dbSet.Remove(entity);
        }

        public void RemoveRange(IEnumerable<TEntity> entities)
        {
            dbSet.RemoveRange(entities);
        }

        public Task<int> SaveChangesAsync()
        {
            return context.SaveChangesAsync();
        }

        public int SaveChanges()
        {
            return context.SaveChanges();
        }
        
        public void Dispose()
        {
            context.Dispose();
        }
    }
}