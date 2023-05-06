using System.ComponentModel.DataAnnotations;

namespace Organization.Dtos
{
    public class ReportDto
    {
        public string ReportId { get; set; }
        public string ReportText { get; set; }
        public string ReportStatus { get; set; }
        public DateTime? ReportDate { get; set; }
        public string? EmployeeId { get; set; }
        public string? ManagerId { get; set; }
    }
}
