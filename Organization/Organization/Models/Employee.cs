using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Diagnostics.CodeAnalysis;

namespace Organization.Models
{
    public class Employee
    {
        [Key]
        public int Id { get; set; }
        [Required, MaxLength(32)]
        public string FirstName { get; set; }
        [Required, MaxLength(32)]
        public string LastName { get; set; }
        [Required, MaxLength(32)]
        public string Position { get; set; }
        [Required, MaxLength(255)]
        public string Address { get; set; }
        [Required, MaxLength(10)]
        public string Phone { get; set; }
        [AllowNull]
        public byte[]? EmployeeImage { get; set; }
        [AllowNull]
        public int? ManagerId { get; set; }
    }
}
