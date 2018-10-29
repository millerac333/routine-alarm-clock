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

        [Required]
        public int RoutineId { get; set; }
        
        [Required]
        public virtual ICollection<AppTask> RoutineTasks { get; set; }


    }
}
