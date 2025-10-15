using System.Collections.Generic;
using System.Threading.Tasks;
using PharmacyApp.Core.Application.DTOs;

namespace PharmacyApp.Core.Application.Interfaces
{
    public interface IProductService
    {
        Task<IEnumerable<ProductDto>> GetAllAsync();
        Task<ProductDto?> GetByIdAsync(int id);
        Task<ProductDto> CreateAsync(ProductDto dto);
        Task<ProductDto> UpdateAsync(ProductDto dto);
        Task<bool> DeleteAsync(int id);
    }
}
