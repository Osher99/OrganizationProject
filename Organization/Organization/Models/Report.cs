using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace Organization.Models
{
    public class Report
    {
        [Key]
        public int Id { get; set; }
        [Required, MaxLength(255)]
        public string ReportText { get; set; }
        [Required, MaxLength(32)]
        public string ReportStatus { get; set; }
        public DateTime? ReportDate { get; set; }
        public int? ManagerId { get; set; }
        public string? EmployeeName { get; set; }
    }
}
