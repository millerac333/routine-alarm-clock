using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace RoutineAlarmClockAPI.Models
{
    public class AppTask
    {
        [Key]
        public int AppTaskId { get; set; }

        [Required]
        public string TaskTitle { get; set; }

        [Required]
        public string Description { get; set; }

        [Required]
        public int AllotedTime { get; set; }

        // [Required]
        public int Rating { get; set; }

        // [Required]
        public virtual ICollection<RoutineTask> RoutineTasks { get; set; } 
        }
}
