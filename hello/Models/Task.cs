using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace hello.Models
{
    public class Task
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string FormattedStartTime { get; set; }
        public string FormattedEndTime { get; set; }

        public int UserId { get; set; }
    }
}
