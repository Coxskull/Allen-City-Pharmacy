using Microsoft.EntityFrameworkCore;
using PharmacyApp.Core.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<PharmacyApp.Infrastructure.Data.PharmacyDbContext>(options =>
    options.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection"))
);

builder.Services.AddScoped(typeof(PharmacyApp.Core.Interfaces.IGenericRepository<>), typeof(PharmacyApp.Infrastructure.Repositories.GenericRepository<>));
builder.Services.AddScoped<PharmacyApp.Core.Interfaces.IProductService, ProductService>();
builder.Services.AddScoped<PharmacyApp.Core.Interfaces.IOrderService, OrderService>();
builder.Services.AddScoped<PharmacyApp.Core.Interfaces.IAuthService, AuthService>();
builder.Services.AddScoped<PharmacyApp.Core.Interfaces.IReportService, ReportService>();

// ✅ MOVE THIS ABOVE app = builder.Build()
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend", policy =>
    {
        policy
            .WithOrigins("https://urban-space-goggles-g4v7qv6g79x7fw49p-5173.app.github.dev")
            .AllowAnyHeader()
            .AllowAnyMethod();
    });
});

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// ✅ Enable CORS before controllers
app.UseCors("AllowFrontend");

app.UseAuthorization();
app.MapControllers();

app.Run();
