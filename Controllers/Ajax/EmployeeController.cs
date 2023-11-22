using EmpPayrollAjax.Context;
using EmpPayrollAjax.Entities;
using EmpPayrollAjax.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using System.Linq;
//using System.Web.Mvc;

namespace EmpPayrollAjax.Controllers.Ajax
{
    public class EmployeeController : Controller
    {
        private readonly EmpDbContext dbContext;

        public EmployeeController(EmpDbContext dbContext)
        {
           
            this.dbContext = dbContext;
        }


        

        [HttpGet]
        public JsonResult GetAllEmployees()
        {
            var data = dbContext.EmployeesTable.ToList();
            return new JsonResult(data);
        }
        public IActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public JsonResult AddEmployee(EmployeeModel model)
        {
            var emp = new EmployeeModel()
            {
                EmpName = model.EmpName,
                Gender = model.Gender,
                Department = model.Department,
                Salary = model.Salary,
                StartDate = model.StartDate,
                Image = model.Image,
                Notes = model.Notes,

            };
            dbContext.EmployeesTable.Add(emp);  
            dbContext.SaveChanges();    
            return new JsonResult("data saved");

        }

        public JsonResult DeleteEmp(int id)
        {
            var result = dbContext.EmployeesTable.Where(x => x.EmpId == id).SingleOrDefault();
            dbContext.Remove(result);
            dbContext.SaveChanges();
            return new JsonResult("data deleted");

        }

        public JsonResult EditEmp(int id)
        {
            var result=dbContext.EmployeesTable.Where(x=>x.EmpId == id).SingleOrDefault();
            
            return new JsonResult(result);
        }

        public JsonResult UpdateEmployee(EmployeeModel model)
        {
            dbContext.EmployeesTable.Update(model);
            dbContext.SaveChanges();
            return new JsonResult("record updated");

        }
    }
}
