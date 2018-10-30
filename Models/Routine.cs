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

        [Required]
        public int UserId { get; set; }

        [Required]
        public string Title { get; set; }

        // [Required]
        public string Destination { get; set; }

        [Required]
        [DataType(DataType.Time)]
        public DateTime ArrivalTime { get; set; }

        [Required]
        public int AllotedTime { get; set; }

        // [Required]
        public virtual ICollection<RoutineTask> RoutineTasks { get; set; }

        [NotMapped]
        public List<AppTask> AppTasks { get; set; }

    }
}