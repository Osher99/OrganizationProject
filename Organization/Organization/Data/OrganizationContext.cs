using Microsoft.EntityFrameworkCore;
using Organization.Models;

namespace Organization.Data
{
    public class OrganizationContext : DbContext
    {
        public OrganizationContext(DbContextOptions<OrganizationContext> options) : base(options)
        {

        }

        public DbSet<Employee> Employees => Set<Employee>();
        public DbSet<EmployeeTask> Tasks => Set<EmployeeTask>();
        public DbSet<Report> Reports => Set<Report>();
    }
}
