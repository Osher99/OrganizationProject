using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Organization.BL.Interfaces;
using Organization.Models;
using Organization.Services.Interfaces;
using Organization.Services.Services;
using System.Reflection;

namespace Organization.Controllers
{
    [Route("api/organization/task")]
    [ApiController]
    public class TaskController : ControllerBase
    {
        #region Fields
        private readonly ITaskBL _taskBL;
        #endregion

        #region Constructor
        public TaskController(ITaskBL taskBL)
        {
            _taskBL = taskBL;
        }
        #endregion

        [HttpGet("allTasksRelatedToEmployee")]
        public async Task<List<EmployeeTask>> GetAllTasksRelatedToEmployee([FromQuery] int employeeId)
        {
            return await _taskBL.GetAllTasksRelatedToEmployee(employeeId);
        }

        [HttpPost]
        public async Task<bool> AddTask(EmployeeTask task)
        {
            return await _taskBL.AddTask(task);
        }

        [HttpDelete("{taskId}")]
        public async Task<bool> RemoveTask(int taskId)
        {
            return await _taskBL.RemoveTask(taskId);
        }
    }
}
