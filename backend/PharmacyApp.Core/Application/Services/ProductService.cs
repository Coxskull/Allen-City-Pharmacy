using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Collections.Concurrent;
using PharmacyApp.Core.Application.DTOs;
using PharmacyApp.Core.Application.Interfaces;
using PharmacyApp.Core.Domain.Entities;

namespace PharmacyApp.Core.Application.Services;

public class ProductService : IProductService
{
    // Simple in-memory store to keep Core project free of external dependencies.
    private static readonly ConcurrentDictionary<int, Product> _store = new();
    private static int _nextId = 1;

    public Task<IEnumerable<ProductDto>> GetAllAsync()
    {
        var list = _store.Values.Select(p => MapToDto(p));
        return Task.FromResult<IEnumerable<ProductDto>>(list);
    }

    public Task<ProductDto?> GetByIdAsync(int id)
    {
        if (_store.TryGetValue(id, out var p)) return Task.FromResult<ProductDto?>(MapToDto(p));
        return Task.FromResult<ProductDto?>(null);
    }

    public Task<ProductDto> CreateAsync(ProductDto dto)
    {
        var p = new Product
        {
            Id = System.Threading.Interlocked.Increment(ref _nextId),
            Name = dto.Name ?? string.Empty,
            SKU = dto.SKU ?? string.Empty,
            Description = dto.Description ?? string.Empty,
            Price = dto.Price,
            StockQuantity = dto.StockQuantity
        };

        _store[p.Id] = p;
        dto.Id = p.Id;
        return Task.FromResult(dto);
    }

    public Task<ProductDto> UpdateAsync(ProductDto dto)
    {
        if (!_store.TryGetValue(dto.Id, out var existing)) throw new KeyNotFoundException("Product not found");

        existing.Name = dto.Name ?? string.Empty;
        existing.SKU = dto.SKU ?? string.Empty;
        existing.Description = dto.Description ?? string.Empty;
        existing.Price = dto.Price;
        existing.StockQuantity = dto.StockQuantity;
        existing.UpdatedAt = System.DateTime.UtcNow;

        return Task.FromResult(MapToDto(existing));
    }

    public Task<bool> DeleteAsync(int id)
    {
        return Task.FromResult(_store.TryRemove(id, out _));
    }

    private static ProductDto MapToDto(Product p) => new ProductDto
    {
        Id = p.Id,
        Name = p.Name,
        SKU = p.SKU,
        Description = p.Description,
        Price = p.Price,
        StockQuantity = p.StockQuantity
    };
}
