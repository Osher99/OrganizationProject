using Microsoft.EntityFrameworkCore;
using Organization.Data;
using Organization.Models;
using Organization.Services.Interfaces;

namespace Organization.Services.Services
{
    public class TaskService : ITaskService
    {
        #region Fields
        private readonly OrganizationContext _organizationContext;
        #endregion

        #region Constructor
        public TaskService(OrganizationContext organizationContext)
        {
            _organizationContext = organizationContext;
        }
        #endregion

        #region Methods

        public async Task<List<EmployeeTask>> GetAllTasksRelatedToEmployee(int employeeId)
        {
            return await _organizationContext.Tasks.Where((task) => task.EmployeeId == employeeId)?.ToListAsync();
        }

        public async Task<bool> AddTaskAsync(EmployeeTask taskToAdd)
        {
            await _organizationContext.Tasks.AddAsync(taskToAdd);
            return await _organizationContext.SaveChangesAsync() > 0;
        }

        public async Task<bool> RemoveTaskAsync(int taskId)
        {
            var taskToRemove = await _organizationContext.Tasks.Where((task) => task.Id == taskId).FirstOrDefaultAsync();
            if (taskToRemove != null)
            {
                _organizationContext.Tasks.Remove(taskToRemove);
                return await _organizationContext.SaveChangesAsync() > 0;
            }
            return false;
        }

        #endregion
    }
}
