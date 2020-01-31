using Infrastructure.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infrastructure.Data.Configurations
{
    public class AcUserCFG : IEntityTypeConfiguration<AcUser>
    {
        public void Configure(EntityTypeBuilder<AcUser> builder)
        {
            builder.HasKey(x => x.Id);
            builder.HasIndex(e => e.Email).IsUnique();
        }
    }
}
