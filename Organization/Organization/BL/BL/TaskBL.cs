using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Organization.BL.Interfaces;
using Organization.Models;
using Organization.Services.Interfaces;
using System.Reflection;

namespace Organization.BL.BL
{
    public class TaskBL : ITaskBL
    {
        #region Fields
        private readonly ITaskService _taskService;
        private readonly ILogger<EmployeeBL> _logger;
        #endregion

        #region Constructor
        public TaskBL(
                ITaskService taskService,
                ILogger<EmployeeBL> logger
            )
        {
            _taskService = taskService;
            _logger = logger;
        }
        #endregion


        public async Task<List<EmployeeTask>> GetAllTasksRelatedToEmployee(int employeeId)
        {
            try
            {
                _logger.LogInformation($"Start - {MethodBase.GetCurrentMethod().Name}");
                return await _taskService.GetAllTasksRelatedToEmployee(employeeId);
            }
            catch (Exception ex)
            {
                _logger.LogError(!string.IsNullOrWhiteSpace(ex.InnerException?.Message) ? ex.InnerException.Message : ex.Message);
                throw;
            }
        }

        public async Task<bool> AddTask(EmployeeTask task)
        {
            try
            {
                _logger.LogInformation($"Start - {MethodBase.GetCurrentMethod().Name}");
                return await _taskService.AddTaskAsync(task);
            }
            catch (Exception ex)
            {
                _logger.LogError(!string.IsNullOrWhiteSpace(ex.InnerException?.Message) ? ex.InnerException.Message : ex.Message);
                throw;
            }
        }

        public async Task<bool> RemoveTask(int taskId)
        {
            try
            {
                _logger.LogInformation($"Start - {MethodBase.GetCurrentMethod().Name}");
                return await _taskService.RemoveTaskAsync(taskId);
            }
            catch (Exception ex)
            {
                _logger.LogError(!string.IsNullOrWhiteSpace(ex.InnerException?.Message) ? ex.InnerException.Message : ex.Message);
                throw;
            }
        }
    }
}
