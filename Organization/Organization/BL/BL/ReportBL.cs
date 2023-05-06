using Microsoft.AspNetCore.Mvc;
using Organization.BL.Interfaces;
using Organization.Controllers;
using Organization.Models;
using Organization.Services.Interfaces;
using System.Reflection;

namespace Organization.BL.BL
{
    public class ReportBL : IReportBL
    {
        #region Fields
        private readonly IReportService _reportSerivce;
        private readonly ILogger<ReportBL> _logger;
        #endregion

        #region Constructor
        public ReportBL(IReportService reportSerivce, ILogger<ReportBL> logger)
        {
            _reportSerivce = reportSerivce;
            _logger = logger;
        }
        #endregion

        #region Methods
        public async Task<List<Report>> GetAllReportsRelatedToManager(int managerId)
        {
            try
            {
                _logger.LogInformation($"Start - {MethodBase.GetCurrentMethod().Name}");
                return await _reportSerivce.GetAllReportsRelatedToManager(managerId);
            }
            catch (Exception ex)
            {
                _logger.LogError(!string.IsNullOrWhiteSpace(ex.InnerException?.Message) ? ex.InnerException.Message : ex.Message);
                throw;
            }
        }

        public async Task<bool> AddReport(Report report)
        {
            try
            {
                _logger.LogInformation($"Start - {MethodBase.GetCurrentMethod().Name}");
                return await _reportSerivce.AddReportAsync(report);
            }
            catch (Exception ex)
            {
                _logger.LogError(!string.IsNullOrWhiteSpace(ex.InnerException?.Message) ? ex.InnerException.Message : ex.Message);
                throw;
            }
        }

        public async Task<bool> RemoveReport(int reportId)
        {
            try
            {
                _logger.LogInformation($"Start - {MethodBase.GetCurrentMethod().Name}");
                return await _reportSerivce.RemoveReportAsync(reportId);
            }
            catch (Exception ex)
            {
                _logger.LogError(!string.IsNullOrWhiteSpace(ex.InnerException?.Message) ? ex.InnerException.Message : ex.Message);
                throw;
            }
        }

        #endregion
    }
}
