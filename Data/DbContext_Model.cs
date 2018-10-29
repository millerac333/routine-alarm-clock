using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RoutineAlarmClockAPI.Models
{

    public class RoutineAlarmClockAPI_Context : DbContext
    {
        public RoutineAlarmClockAPI_Context(DbContextOptions<RoutineAlarmClockAPI_Context> options)
            : base(options)
        { }

        public DbSet<ApplicationUser> ApplicationUser { get; set; }
        public DbSet<Routine> Routine { get; set; }
        public DbSet<Task> Task { get; set; }

    }

}
