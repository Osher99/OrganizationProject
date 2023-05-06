using Organization.Models;

namespace Organization.BL.Interfaces
{
    public interface ITaskBL
    {
        Task<List<EmployeeTask>> GetAllTasksRelatedToEmployee(int employeeId);
        Task<bool> AddTask(EmployeeTask task);
        Task<bool> RemoveTask(int taskId);
    }
}
