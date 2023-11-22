using System;

namespace EmpPayrollAjax.Models
{
    public class EmpRegModel
    {
        public int EmpId { get; set; }
        public string EmpName { get; set; }
        public string Gender { get; set; }

        public string Department { get; set; }

        public int Salary { get; set; }

        public DateTime StartDate { get; set; }

        public string Image { get; set; }

        public string Notes { get; set; }
    }
}
