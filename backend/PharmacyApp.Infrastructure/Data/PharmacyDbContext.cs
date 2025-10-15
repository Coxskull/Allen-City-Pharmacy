using Microsoft.EntityFrameworkCore;
using PharmacyApp.Core.Domain.Entities;  // ✅ important!

namespace PharmacyApp.Infrastructure.Data
{
    public class PharmacyDbContext : DbContext
    {
        public PharmacyDbContext(DbContextOptions<PharmacyDbContext> options)
            : base(options)
        {
        }

        public DbSet<Product> Products { get; set; }  // ✅ Entity from Core

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Optional: configure Product entity if needed
            modelBuilder.Entity<Product>().HasKey(p => p.Id);
        }
    }
}
