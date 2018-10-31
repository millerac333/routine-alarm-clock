using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace RoutineAlarmClockAPI.Models
{
    public class Routine
    {
        [Key]
        public int RoutineId { get; set; }

        public AppUser AppUser { get; set; }

        // [Required]
        public string AppUserId { get; set; }

        [Required]
        [StringLength(75)]
        public string Title { get; set; }

        [StringLength(150)]
        public string Destination { get; set; }

        [Required]
        [DataType(DataType.DateTime)]
        public DateTime ArrivalTime { get; set; }

        [Required]
        [DataType(DataType.Time)]
        public int AllotedTime { get; set; }

        // [Required]
        public virtual ICollection<RoutineTask> RoutineTasks { get; set; }

        [NotMapped]
        public List<AppTask> AppTasks { get; set; }

    }
}