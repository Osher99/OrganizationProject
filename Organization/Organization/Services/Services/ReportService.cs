using Microsoft.EntityFrameworkCore;
using Organization.Data;
using Organization.Models;
using Organization.Services.Interfaces;

namespace Organization.Services.Services
{
    public class ReportService : IReportService
    {
        #region Fields
        private readonly OrganizationContext _organizationContext;
        #endregion

        #region Constructor
        public ReportService(OrganizationContext organizationContext)
        {
            _organizationContext = organizationContext;
        }
        #endregion

        #region Methods

        public async Task<List<Report>> GetAllReportsRelatedToManager(int managerId)
        {
            return await _organizationContext.Reports.Where((report) => report.ManagerId == managerId)?.ToListAsync();
        }

        public async Task<bool> AddReportAsync(Report reportToAdd)
        {
            await _organizationContext.Reports.AddAsync(reportToAdd);
            return await _organizationContext.SaveChangesAsync() > 0;
        }

        public async Task<bool> RemoveReportAsync(int reportId)
        {
            var reportToRemove = await _organizationContext.Reports.Where((report) => report.Id == reportId).FirstOrDefaultAsync();
            if (reportToRemove != null)
            {
                _organizationContext.Reports.Remove(reportToRemove);
                return await _organizationContext.SaveChangesAsync() > 0;
            }
            return false;
        }

        #endregion
    }
}
