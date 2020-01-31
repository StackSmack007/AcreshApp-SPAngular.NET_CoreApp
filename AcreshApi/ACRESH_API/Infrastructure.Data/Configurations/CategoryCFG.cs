using Infrastructure.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infrastructure.Data.Configurations
{
    public class CategoryCFG : IEntityTypeConfiguration<Category>
    {
        public void Configure(EntityTypeBuilder<Category> builder)
        {
            builder.HasKey(e => e.Id);
            builder.HasOne(e => e.Author).WithMany(a => a.CategoriesAdded).HasForeignKey(e => e.AuthorId);
            builder.HasOne(e => e.ParentCategory)
            .WithMany(p => p.ChildrenCategories)
            .HasForeignKey(e => e.ParentCategoryId)
            .IsRequired(false);
        }
    }
}
