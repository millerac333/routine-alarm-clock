using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RoutineAlarmClockAPI.Models
{
    public class Task
    {
        // [Required]
        public int TaskId { get; set; }

        // [Required]
        public string TaskTitle { get; set; }

        // [Required]
        public string Description { get; set; }

        // [Required]
        public int AllotedTime { get; set; }

        // [Required]
        public int Rating { get; set; }
    }
}
