using Microsoft.AspNetCore.Mvc;
using Organization.Models;

namespace Organization.BL.Interfaces
{
    public interface IReportBL
    {
        Task<List<Report>> GetAllReportsRelatedToManager(int managerId);
        Task<bool> AddReport(Report report);
        Task<bool> RemoveReport(int reportId);
    }
}
