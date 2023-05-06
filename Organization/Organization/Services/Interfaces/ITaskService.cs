using Organization.Models;

namespace Organization.Services.Interfaces
{
    public interface ITaskService
    {
        Task<List<EmployeeTask>> GetAllTasksRelatedToEmployee(int employeeId);
        Task<bool> AddTaskAsync(EmployeeTask taskToAdd);
        Task<bool> RemoveTaskAsync(int taskId);
    }
}
