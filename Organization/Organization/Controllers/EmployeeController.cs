using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Organization.BL.BL;
using Organization.BL.Interfaces;
using Organization.Dtos.Employee;
using Organization.Models;
using Organization.Services.Interfaces;
using Organization.Services.Services;
using System.Reflection;

namespace Organization.Controllers
{
    [Route("api/organization/employee")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        #region Fields
        private readonly IEmployeeBL _employeeBL;
        #endregion

        #region Constructor
        public EmployeeController(IEmployeeBL employeeBL)
        {
            _employeeBL = employeeBL;
        }
        #endregion

        [HttpGet("allEmployees")]
        public async Task<List<Employee>> GetAllEmployees()
        {
            return await _employeeBL.GetAllEmployeesAsync();
        }

        [HttpGet("{employeeId}")]
        public async Task<EmployeeDto> GetEmployeeById(int employeeId)
        {
            return await _employeeBL.GetEmployeeByIdAsync(employeeId);
        }

        [HttpGet("getEmployeesByManagerId")]
        public async Task<List<Employee>> GetEmployeesByManagerId([FromQuery] int managerId)
        {
            return await GetEmployeesByManagerId(managerId);
        }

        [HttpPost]
        public async Task<bool> AddEmployee(Employee employee)
        {
            return await _employeeBL.AddEmployeeAsync(employee);
        }

        [HttpDelete]
        public async Task<bool> RemoveEmployee(int employeeId)
        {
            return await _employeeBL.RemoveEmployeeAsync(employeeId);
        }
    }
}
