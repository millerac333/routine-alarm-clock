using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Identity;

namespace RoutineAlarmClockAPI.Models
{
    public class AppUser : IdentityUser
    {
        // public AppUser (){}

        [Required]
        public string Name { get; set; }

        public virtual ICollection<Routine> Routines { get; set; }

        public virtual ICollection<AppTask> AppTasks { get; set; }

    }
}


