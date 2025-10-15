using Microsoft.EntityFrameworkCore;
using PharmacyApp.Infrastructure.Data;
using PharmacyApp.Core.Application.Interfaces;
using PharmacyApp.Core.Application.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Configure EF Core - InMemory database (change to SQL Server later)
builder.Services.AddDbContext<PharmacyDbContext>(options =>
    options.UseInMemoryDatabase("PharmacyDb"));

// Register application services
builder.Services.AddScoped<IProductService, ProductService>();

var app = builder.Build();

// Seed sample data (optional)
using (var scope = app.Services.CreateScope())
{
    var db = scope.ServiceProvider.GetRequiredService<PharmacyDbContext>();
    if (!db.Products.Any())
    {
        db.Products.AddRange(new[]
        {
            new PharmacyApp.Core.Domain.Entities.Product { Name = "Paracetamol 500mg", SKU = "PRC500", Description = "Pain reliever", Price = 2.99m, StockQuantity = 150 },
            new PharmacyApp.Core.Domain.Entities.Product { Name = "Vitamin C 1000mg", SKU = "VITC1000", Description = "Immune support", Price = 6.50m, StockQuantity = 200 }
        });
        db.SaveChanges();
    }
}

// Configure middleware
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
