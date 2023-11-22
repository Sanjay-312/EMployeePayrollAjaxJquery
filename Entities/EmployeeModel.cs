using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace EmpPayrollAjax.Entities
{
    public class EmployeeModel
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int EmpId { get; set; }

        [Required]
        
        public string EmpName { get; set; }
        
        public string Gender { get; set; }
        

        public string Department { get; set; }
        

        public int Salary { get; set; }
        

        public DateTime StartDate { get; set; }
        

        public string Image { get; set; }
        

        public string Notes { get; set; }
    }
}
