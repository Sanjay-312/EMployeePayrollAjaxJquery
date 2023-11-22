using EmpPayrollAjax.Entities;
using Microsoft.EntityFrameworkCore;

namespace EmpPayrollAjax.Context
{
    public class EmpDbContext:DbContext
    {
        public EmpDbContext()
        {
        }

        public EmpDbContext(DbContextOptions options) : base(options)
        { 

        }

       public DbSet<EmployeeModel> EmployeesTable { get; set; }
    }
}
