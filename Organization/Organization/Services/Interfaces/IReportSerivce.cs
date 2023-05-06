using Organization.Models;

namespace Organization.Services.Interfaces
{
    public interface IReportService
    {
        Task<List<Report>> GetAllReportsRelatedToManager(int managerId);
        Task<bool> AddReportAsync(Report reportToAdd);
        Task<bool> RemoveReportAsync(int reportId);
    }
}
