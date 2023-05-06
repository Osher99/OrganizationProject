using AutoMapper;

namespace Organization.Dtos.Employee.Profiles
{
    public class EmployeeProfile : Profile
    {
        public EmployeeProfile()
        {
            CreateMap<Organization.Models.Employee, EmployeeDto>();
        }
    }
}
