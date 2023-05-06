using Organization.Models;

namespace Organization.Services.Interfaces
{
    public interface IEmployeeService
    {
        Task<List<Employee>> GetAllEmployeesAsync();
        Task<Employee> GetEmployeeByIdAsync(int employeeId);
        Task<List<Employee>> GetEmployeesByManagerIdAsync(int managerId);
        Task<bool> AddEmployeeAsync(Employee employeeToAdd);
        Task<bool> RemoveEmployeeAsync(int employeeId);
    }
}
