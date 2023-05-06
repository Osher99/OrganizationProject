using AutoMapper;
using Organization.BL.Interfaces;
using Organization.Controllers;
using Organization.Dtos.Employee;
using Organization.Models;
using Organization.Services.Interfaces;
using System.Reflection;

namespace Organization.BL.BL
{
    public class EmployeeBL : IEmployeeBL
    {
        #region Fields
        private readonly IEmployeeService _employeeService;
        private readonly ITaskBL _taskBL;
        private readonly IReportBL _reportBL;
        private readonly ILogger<EmployeeBL> _logger;
        private readonly IMapper _mapper;
        #endregion

        #region Constructor
        public EmployeeBL(
                IEmployeeService employeeService,
                ILogger<EmployeeBL> logger,
                IMapper mapper,
                IReportBL reportBL,
                ITaskBL taskBL
            )
        {
            _employeeService = employeeService;
            _logger = logger;
            _mapper = mapper;
            _reportBL = reportBL;
            _taskBL = taskBL;
        }
        #endregion

        #region Methods
        public async Task<List<Employee>> GetAllEmployeesAsync()
        {
            try
            {
                _logger.LogInformation($"Start - {MethodBase.GetCurrentMethod().Name}");
                return await _employeeService.GetAllEmployeesAsync();
            }
            catch (Exception ex)
            {
                _logger.LogError(!string.IsNullOrWhiteSpace(ex.InnerException?.Message) ? ex.InnerException.Message : ex.Message);
                throw;
            }
        }

        public async Task<EmployeeDto> GetEmployeeByIdAsync(int employeeId)
        {
            try
            {
                var employee = await _employeeService.GetEmployeeByIdAsync(employeeId);

                if (employee != null)
                {
                    // Map the employee
                    var mappedDto = _mapper.Map<EmployeeDto>(employee);

                    // Get all lists related to employee
                    await GetEmployeeRelatedLists(employeeId, mappedDto);

                    // Get Manager name
                    await GetManagerName(mappedDto);
                    return mappedDto;
                }

                return new EmployeeDto();
            }
            catch (Exception ex)
            {
                _logger.LogError(!string.IsNullOrWhiteSpace(ex.InnerException?.Message) ? ex.InnerException.Message : ex.Message);
                throw;
            }
        }

        public async Task<bool> AddEmployeeAsync(Employee employee)
        {
            try
            {
                _logger.LogInformation($"Start - {MethodBase.GetCurrentMethod().Name}");
                return await _employeeService.AddEmployeeAsync(employee);
            }
            catch (Exception ex)
            {
                _logger.LogError(!string.IsNullOrWhiteSpace(ex.InnerException?.Message) ? ex.InnerException.Message : ex.Message);
                throw;
            }
        }
        public async Task<bool> RemoveEmployeeAsync(int employeeId)
        {
            try
            {
                _logger.LogInformation($"Start - {MethodBase.GetCurrentMethod().Name}");
                return await _employeeService.RemoveEmployeeAsync(employeeId);
            }
            catch (Exception ex)
            {
                _logger.LogError(!string.IsNullOrWhiteSpace(ex.InnerException?.Message) ? ex.InnerException.Message : ex.Message);
                throw;
            }
        }
        #endregion


        #region Private Methods 
        private async Task GetEmployeeRelatedLists(int employeeId, EmployeeDto mappedDto)
        {
            mappedDto.SubEmployees = await _employeeService.GetEmployeesByManagerIdAsync(employeeId);
            mappedDto.Reports = await _reportBL.GetAllReportsRelatedToManager(employeeId);
            mappedDto.Tasks = await _taskBL.GetAllTasksRelatedToEmployee(employeeId);
        }
        private async Task GetManagerName(EmployeeDto mappedDto)
        {
            if (mappedDto.ManagerId != null)
            {
                var manager = await _employeeService.GetEmployeeByIdAsync((int)mappedDto.ManagerId);
                if (manager != null)
                {
                    mappedDto.ManagerName = $"{manager.FirstName} {manager.LastName}";
                }
            }

        }
        #endregion
    }
}
