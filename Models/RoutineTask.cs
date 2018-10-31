using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace RoutineAlarmClockAPI.Models
{
    public class RoutineTask
    {
        [Key]
        public int RoutineTaskId { get; set; }

        // [Required]
        public int RoutineId { get; set; }

        public Routine Routines { get; set; }

        // [Required]
        public int AppTaskId { get; set; }

        public AppTask AppTasks { get; set; }


    }
}
