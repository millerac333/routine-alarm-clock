using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RoutineAlarmClockAPI.Data;
using RoutineAlarmClockAPI.Models;

namespace RoutineAlarmClockAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AppTasksController : ControllerBase
    {
        private readonly RoutineAlarmClockAPI_Context _context;

        public AppTasksController(RoutineAlarmClockAPI_Context context)
        {
            _context = context;
        }

        // GET: api/AppTasks
        [HttpGet]
        [Authorize]
        public IEnumerable<AppTask> GetAppTask()
        {
            return _context.AppTask;
        }

        // GET: api/AppTasks/5
        [HttpGet("{id}")]
        [Authorize]
        public async Task<IActionResult> GetAppTask([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var appTask = await _context.AppTask.FindAsync(id);

            if (appTask == null)
            {
                return NotFound();
            }

            return Ok(appTask);
        }

        // PUT: api/AppTasks/5
        //[HttpPut("{id}")]
        //public async Task<IActionResult> PutAppTask([FromRoute] int id, [FromBody] AppTask appTask)
        //{
        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest(ModelState);
        //    }

        //    if (id != appTask.AppTaskId)
        //    {
        //        return BadRequest();
        //    }

        //    _context.Entry(appTask).State = EntityState.Modified;

        //    try
        //    {
        //        await _context.SaveChangesAsync();
        //    }
        //    catch (DbUpdateConcurrencyException)
        //    {
        //        if (!AppTaskExists(id))
        //        {
        //            return NotFound();
        //        }
        //        else
        //        {
        //            throw;
        //        }
        //    }

        //    return NoContent();
        //}

        // POST: api/AppTasks
        [HttpPost]
        [Authorize]
        public async Task<IActionResult> PostAppTask([FromBody] AppTask appTask)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.AppTask.Add(appTask);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetAppTask", new { id = appTask.AppTaskId }, appTask);
        }

        // DELETE: api/AppTasks/5
        [HttpDelete("{id}")]
        [Authorize]
        public async Task<IActionResult> DeleteAppTask([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var appTask = await _context.AppTask.FindAsync(id);
            if (appTask == null)
            {
                return NotFound();
            }

            _context.AppTask.Remove(appTask);
            await _context.SaveChangesAsync();

            return Ok(appTask);
        }

        private bool AppTaskExists(int id)
        {
            return _context.AppTask.Any(e => e.AppTaskId == id);
        }
    }
}