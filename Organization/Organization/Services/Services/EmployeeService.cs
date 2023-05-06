using Microsoft.EntityFrameworkCore;
using Organization.Data;
using Organization.Models;
using Organization.Services.Interfaces;

namespace Organization.Services.Services
{
    public class EmployeeService : IEmployeeService
    {
        #region Fields
        private readonly OrganizationContext _organizationContext;
        #endregion

        #region Constructor
        public EmployeeService(OrganizationContext organizationContext)
        {
            _organizationContext = organizationContext;
        }
        #endregion

        #region Methods

        public async Task<List<Employee>> GetAllEmployeesAsync()
        {
            return await _organizationContext.Employees.ToListAsync();
        }

        public async Task<Employee> GetEmployeeByIdAsync(int employeeId)
        {
            return await _organizationContext.Employees.Where((employee) => employee.Id == employeeId)?.FirstOrDefaultAsync();
        }

        public async Task<List<Employee>> GetEmployeesByManagerIdAsync(int managerId)
        {
            return await _organizationContext?.Employees.Where((employee) => employee.ManagerId == managerId)?.ToListAsync();
        }

        public async Task<bool> AddEmployeeAsync(Employee employeeToAdd)
        {
            await _organizationContext.Employees.AddAsync(employeeToAdd);
            return await _organizationContext.SaveChangesAsync() > 0;
        }

        public async Task<bool> RemoveEmployeeAsync(int employeeId)
        {
            var employeeToRemove = await GetEmployeeByIdAsync(employeeId);
            _organizationContext.Employees.Remove(employeeToRemove);
            return await _organizationContext.SaveChangesAsync() > 0;
        }

        #endregion
    }
}
