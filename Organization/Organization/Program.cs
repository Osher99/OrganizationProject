using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Organization.BL.BL;
using Organization.BL.Interfaces;
using Organization.Data;
using Organization.Services.Interfaces;
using Organization.Services.Services;

var builder = WebApplication.CreateBuilder(args);
var connString = builder.Configuration.GetConnectionString("OrganizationConnection");
var clientUrl = builder.Configuration.GetSection("ClientUrl");

// Add services to the container.
builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Add DB Context
builder.Services.AddDbContext<OrganizationContext>(options => options.UseSqlServer(connString));

// Add BL
builder.Services.AddScoped<IEmployeeBL, EmployeeBL>();
builder.Services.AddScoped<ITaskBL, TaskBL>();
builder.Services.AddScoped<IReportBL, ReportBL>();

// Add Services
builder.Services.AddScoped<IEmployeeService, EmployeeService>();
builder.Services.AddScoped<ITaskService, TaskService>();
builder.Services.AddScoped<IReportService, ReportService>();

// Add Controllers
builder.Services.AddControllersWithViews();

// Add Auto-Mapper
builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());

// Add Logging
builder.Logging.AddLog4Net("log4net.config");

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.UseCors(builder =>
builder.WithOrigins("http://localhost:3000")
.AllowAnyHeader()
.AllowAnyMethod());

app.UseAuthentication();

app.Run();
