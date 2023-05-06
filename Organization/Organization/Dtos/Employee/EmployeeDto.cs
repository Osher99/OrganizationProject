using Organization.Models;

namespace Organization.Dtos.Employee
{
    public class EmployeeDto : Organization.Models.Employee
    {
        public string ManagerName { get; set; }
        public List<Organization.Models.Employee> SubEmployees { get; set; }
        public List<EmployeeTask> Tasks { get; set; }
        public List<Report> Reports { get; set; }
    }
}
