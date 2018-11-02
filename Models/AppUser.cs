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

// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiSG90QERpZ2l0eURvZy5jb20iLCJuYmYiOiIxNTQxMTA3MjIwIiwiZXhwIjoiMTU0MTE5MzYyMCJ9.66PgCg-I3FcGddbH6E28aSTEPBFmnKlq7cLMeTaj2T8"
// { 
//	"Username" : "Hot@DigityDog.com",
//	"Password" : "Gigity",
//	"Name" : "Jewel"
// }

// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiQWFyb25NaWxsZXJAZ21haWwuY29tIiwibmJmIjoiMTU0MTEwNzg4MiIsImV4cCI6IjE1NDExOTQyODIifQ.YBCtS2WNdgGN41EU2R5F1zVXJRO_B8PL0uM0exhEFms"
// {
//	"Username" : "AaronMiller@gmail.com",
//	"Password" : "FalconPunch",
//	"Name" : "Aaron"
//}

