﻿using Infrastructure.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infrastructure.Data.Configurations
{
    public class RecipeCommentCFG : IEntityTypeConfiguration<RecipeComment>
    {
        public void Configure(EntityTypeBuilder<RecipeComment> builder)
        {
            builder.HasKey(e => e.Id);
            builder.HasOne(e => e.Author).WithMany(a => a.Comments).HasForeignKey(e => e.AuthorId);
            builder.HasOne(e => e.Recipe).WithMany(c => c.Comments).HasForeignKey(e => e.RecipeId).OnDelete(DeleteBehavior.NoAction);
            builder.HasOne(e => e.Recipe).WithMany(a => a.Comments).HasForeignKey(e => e.RecipeId);
        }
    }
}