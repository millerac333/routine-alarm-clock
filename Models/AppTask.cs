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

        // [Required]
        public AppUser AppUser { get; set; }

        // [Required]
        // public string AppUserId { get; set; }

        [Required]
        [StringLength(75)]
        public string TaskTitle { get; set; }

        [StringLength(150)]
        public string Description { get; set; }

        [Required]
        [DataType(DataType.Duration)]
        public int AllotedTime { get; set; }

        // [Required]
        public int Rating { get; set; }

        // [Required]
        public virtual ICollection<RoutineTask> RoutineTasks { get; set; } 
        }
}
