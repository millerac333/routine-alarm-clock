using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using RoutineAlarmClockAPI.Models;

namespace RoutineAlarmClockAPI.Data
{

    public class RoutineAlarmClockAPI_Context : IdentityDbContext<AppUser>
    {
        public RoutineAlarmClockAPI_Context(DbContextOptions<RoutineAlarmClockAPI_Context> options)
            : base(options)
        { }

        public DbSet<AppUser> AppUser { get; set; }
        public DbSet<Routine> Routine { get; set; }
        public DbSet<AppTask> AppTask { get; set; }
        public DbSet<RoutineTask> RoutineTask { get; set; }


        //protected override void OnModelCreating(ModelBuilder modelBuilder)
        //{
        //    base.OnModelCreating(modelBuilder);
        //    // Customize the ASP.NET Identity model and override the defaults if needed.
        //    // For example, you can rename the ASP.NET Identity table names and more.
        //    // Add your customizations after calling base.OnModelCreating(builder);

        //    AppUser user = new AppUser
        //    {
        //        Name = "test",
        //        Email = "test@test.com",
        //        NormalizedEmail = "TEST@TEST.COM",
        //        EmailConfirmed = true,
        //        LockoutEnabled = false,
        //        SecurityStamp = Guid.NewGuid().ToString("D")
        //    };
        //}
    }
}




