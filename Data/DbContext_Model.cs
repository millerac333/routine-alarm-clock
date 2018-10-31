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
            // Customize the ASP.NET Identity model and override the defaults if needed.
            // For example, you can rename the ASP.NET Identity table names and more.
            // Add your customizations after calling base.OnModelCreating(builder);

        //    AppUser user = new AppUser
        //    {
        //        Name = "Aaron",
        //        UserName = "Aaron@gmail.com",
        //        NormalizedUserName = "AARON",
        //        Email = "Aaron@gmail.com",
        //        NormalizedEmail = "AARON@GMAIL.COM",
        //        EmailConfirmed = true,
        //        LockoutEnabled = false,
        //        SecurityStamp = Guid.NewGuid().ToString("D")
        //    };
        //    var passwordHash = new PasswordHasher<AppUser>();
        //    user.PasswordHash = passwordHash.HashPassword(user, "FalconPunch");
        //    modelBuilder.Entity<AppUser>().HasData(user);


        //    modelBuilder.Entity<AppTask>().HasData(
        //        new AppTask()
        //        {
        //            AppUserId = user.Id,
        //            AppTaskId = 1,
        //            TaskTitle = "Brush Teeth",
        //            Description = "Brush and floss teeth",
        //            AllotedTime = 5,
        //            Rating = 4
        //        },
        //        new AppTask()
        //        {
        //            AppUserId = user.Id,
        //            AppTaskId = 2,
        //            TaskTitle = "Feed and Dress Baby",
        //            Description = "Feed Olvia prunes and oatmeal; Dress her in embarrasing outfit",
        //            AllotedTime = 20,
        //            Rating = 5
        //        },
        //        new AppTask()
        //        {
        //            AppUserId = user.Id,
        //            AppTaskId = 3,
        //            TaskTitle = "Get Dressed",
        //            Description = "Outfit: Red Kilt and green sleeveless shirt",
        //            AllotedTime = 2,
        //            Rating = 3
        //        },
        //        new AppTask()
        //        {
        //            AppUserId = user.Id,
        //            AppTaskId = 4,
        //            TaskTitle = "Defrost Car",
        //            Description = "Defrost ice off or winshield and warm car",
        //            AllotedTime = 5,
        //            Rating = 1
        //        },
        //        new AppTask()
        //        {
        //            AppUserId = user.Id,
        //            AppTaskId = 5,
        //            TaskTitle = "Shower",
        //            Description = "wash the stench off",
        //            AllotedTime = 10,
        //            Rating = 2
        //        }
        //        );

        //    modelBuilder.Entity<Routine>().HasData(
        //        new Routine()
        //        {
        //            AppUserId = user.Id,
        //            RoutineId = 1,
        //            Title = "Work Solo",
        //            Destination = "Nashville Software School",
        //            ArrivalTime = ,
        //            AllotedTime = 30
        //        },
        //        new Routine()
        //        {
        //            AppUserId = user.Id,
        //            RoutineId = 1,
        //            Title = "Work Baby",
        //            Destination = "Nashville Software School",
        //            ArrivalTime =,
        //            AllotedTime = 45
        //        }
        //        );
        //}
    }
}








