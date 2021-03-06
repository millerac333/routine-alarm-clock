﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RoutineAlarmClockAPI.Data;
using RoutineAlarmClockAPI.Models;

namespace RoutineAlarmClockAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("RAC-Policy")]
    public class RoutinesController : ControllerBase
    {
        private readonly RoutineAlarmClockAPI_Context _context;

        public RoutinesController(RoutineAlarmClockAPI_Context context)
        {
            _context = context;
        }

        // GET: api/Routines
        [HttpGet]
        [Authorize]
        public IEnumerable<Routine> GetRoutine()
        {
            var user = _context.AppUser.SingleOrDefault(u => u.UserName == User.Identity.Name);

            return _context.Routine
                .Where(t => t.AppUserId == user.Id); 
        }

        // GET: api/Routines/5
        [HttpGet("{id}")]
        [Authorize]
        public async Task<IActionResult> GetRoutine([FromRoute] int id)
        {
            var user = _context.AppUser.SingleOrDefault(u => u.UserName == User.Identity.Name);

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var routine = await _context.Routine
                            .Include(t => t.AppUser)
                            .FirstOrDefaultAsync(t => t.AppUser == user);

            if (routine == null)
            {
                return NotFound();
            }

            return Ok(routine);
        }

        // PUT: api/Routines/5
        [HttpPut("{id}")]
        [Authorize]

        public async Task<IActionResult> ToggleActive([FromRoute] int id)
        {
			// Gets the user and the routine to toggle active status
            var user = _context.AppUser.SingleOrDefault(u => u.UserName == User.Identity.Name);
            Routine toggledRoutine = _context.Routine.SingleOrDefault(r => r.RoutineId == id);

		    // user authorize check
			if (toggledRoutine.AppUserId != user.Id)
			{
				return Unauthorized();
            }

            // Toggles the routine status and saves to DB
            toggledRoutine.IsActive = !(toggledRoutine.IsActive);
			_context.Entry(toggledRoutine).State = EntityState.Modified;

			try
			{
				await _context.SaveChangesAsync();

            } catch (DbUpdateConcurrencyException) {

				if (!RoutineExists(id))
				{
					return NotFound();
				} else {
					throw;
				}
			}
			return NoContent();
		}

        // POST: api/Routines
        [HttpPost]
        [Authorize]
        public async Task<IActionResult> PostRoutine([FromBody] Routine routine)
        {
            var user = _context.AppUser.SingleOrDefault(u => u.UserName == User.Identity.Name);

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            routine.AppUserId = user.Id;
            _context.Routine.Add(routine);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetRoutine", new { id = routine.RoutineId });
        }



        // DELETE: api/Routines/5
        [HttpDelete("{id}")]
        [Authorize]
        public async Task<IActionResult> DeleteRoutine([FromRoute] int id)
        {
            var user = _context.AppUser.SingleOrDefault(u => u.UserName == User.Identity.Name);

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var routine = await _context.Routine.FindAsync(id);
            if (routine == null)
            {
                return NotFound();
            }

            _context.Routine.Remove(routine);
            await _context.SaveChangesAsync();

            return Ok(routine);
        }

        private bool RoutineExists(int id)
        {
            return _context.Routine.Any(e => e.RoutineId == id);
        }
    }
}