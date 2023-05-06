using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Organization.BL.Interfaces;
using Organization.Models;
using Organization.Services.Interfaces;
using Organization.Services.Services;
using System.Reflection;

namespace Organization.Controllers
{
    [Route("api/organization/report")]
    [ApiController]
    public class ReportController : ControllerBase
    {
        #region Fields
        private readonly IReportBL _reportBL;
        #endregion

        #region Constructor
        public ReportController(IReportBL reportBL)
        {
            _reportBL = reportBL;
        }
        #endregion

        [HttpGet("allReportsRelatedToManager")]
        public async Task<List<Report>> GetAllReportsRelatedToManager([FromQuery] int managerId)
        {
            return await _reportBL.GetAllReportsRelatedToManager(managerId);
        }

        [HttpPost]
        public async Task<bool> AddReport([FromBody] Report report)
        {
            return await _reportBL.AddReport(report);
        }

        [HttpDelete("{reportId}")]
        public async Task<bool> RemoveReport(int reportId)
        {
            return await _reportBL.RemoveReport(reportId);
        }
    }
}
