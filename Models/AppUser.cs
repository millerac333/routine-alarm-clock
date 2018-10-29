using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Identity;

namespace RoutineAlarmClockAPI.Models
{
    public class AppUser : IdentityUser
    {
        [Required]
        public int Name { get; set; }

        //[Required]
        //public string UserEmail { get; set; }

        //[Required]
        //public string UserPassword { get; set; }
    }
}
