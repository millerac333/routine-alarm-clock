using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
//using RoutineAlarmClockAPI.AspNetCore.NewDb.Models;
using Microsoft.EntityFrameworkCore;
using RoutineAlarmClockAPI.Models;
using Microsoft.AspNetCore.Http;
using RoutineAlarmClockAPI.Data;

namespace RoutineAlarmClockAPI
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.Configure<CookiePolicyOptions>(options =>
            {
                // This lambda determines whether user consent for non-essential cookies is needed for a given request.
                options.CheckConsentNeeded = context => true;
                options.MinimumSameSitePolicy = SameSiteMode.None;
            });

            services.AddDbContext<RoutineAlarmClockAPI_Context>(options =>
                options.UseSqlServer(
                    Configuration.GetConnectionString("RoutineAlarmClockAPIContext")));
            services.AddDefaultIdentity<AppUser>()
                .AddEntityFrameworkStores<RoutineAlarmClockAPI_Context>();

            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_1);
            var connection = "RoutineAlarmClockAPIContext";
            services.AddDbContext<RoutineAlarmClockAPI_Context>
                (options => options.UseSqlServer(connection));
      
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseMvc();
        }
    }
}
