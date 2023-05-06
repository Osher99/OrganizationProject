using Organization.Dtos.Employee;
using Organization.Models;

namespace Organization.BL.Interfaces
{
    public interface IEmployeeBL
    {
        Task<List<Employee>> GetAllEmployeesAsync();
        Task<EmployeeDto> GetEmployeeByIdAsync(int employeeId);
        Task<bool> AddEmployeeAsync(Employee employee);
        Task<bool> RemoveEmployeeAsync(int employeeId);
    }
}
