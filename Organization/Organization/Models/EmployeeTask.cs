using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace Organization.Models
{
    public class EmployeeTask
    {
        [Key]
        public int Id { get; set; }
        [Required, MaxLength(255)]
        public string TaskDescription { get; set; }
        public DateTime? AssignDate { get; set; }
        public DateTime? DueDate { get; set; }
        public int? EmployeeId { get; set; }
        public string? ManagerName { get; set; }
    }
}
