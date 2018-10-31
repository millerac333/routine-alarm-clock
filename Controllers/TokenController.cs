﻿using System;
using System.Linq;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using RoutineAlarmClockAPI.Data;
using RoutineAlarmClockAPI.Models;

namespace RoutineAlarmClockAPI.Controllers
{

    [Route("/api/token")]
    [ApiController]
    [EnableCors("RAC-Policy")]
    public class TokenController : ControllerBase
    {
        private RoutineAlarmClockAPI_Context _context;
        private readonly SignInManager<AppUser> _signInManager;

        public TokenController(
            RoutineAlarmClockAPI_Context ctx,
            SignInManager<AppUser> signInManager
        )
        {
            _context = ctx;
            _signInManager = signInManager;
        }

        [HttpGet]
        [Authorize]
        public IActionResult Get()
        {
            return new ObjectResult(new
            {
                Username = User.Identity.Name
            });
        }

        [HttpPut]
        [Authorize]
        public IActionResult Put()
        {
            return new ObjectResult(GenerateToken(User.Identity.Name));
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody]NewAppUser postUser)
        {
            // Check simplistic username and password validation rules
            bool isValid = IsValidUserAndPasswordCombination(postUser.Username, postUser.Password);

            if (isValid)
            {
                // Does the user already exist?
                AppUser user = _context.AppUser.SingleOrDefault(u => u.UserName == postUser.Username);

                if (user != null)
                {
                    // Found the user, verify credentials
                    var result = await _signInManager.PasswordSignInAsync(postUser.Username, postUser.Password, false, lockoutOnFailure: false);

                    // Password is correct, generate token and return it
                    if (result.Succeeded)
                    {
                        return new ObjectResult(GenerateToken(user.UserName));
                    }
                }
                else
                {
                    var userstore = new UserStore<AppUser>(_context);

                    // User does not exist, create one
                    user = new AppUser
                    {
                        Name = "Generic",
                        UserName = postUser.Username,
                        NormalizedUserName = postUser.Username.ToUpper(),
                        Email = postUser.Username,
                        NormalizedEmail = postUser.Username.ToUpper(),
                        EmailConfirmed = true,
                        LockoutEnabled = false,
                        SecurityStamp = Guid.NewGuid().ToString("D")
                    };
                    var passwordHash = new PasswordHasher<AppUser>();
                    user.PasswordHash = passwordHash.HashPassword(user, postUser.Password);
                    await userstore.CreateAsync(user);
                    // await userstore.AddToRoleAsync(user);
                    _context.SaveChanges();
                    return new ObjectResult(GenerateToken(user.UserName));
                }
            }
            return BadRequest();
        }

        private bool IsValidUserAndPasswordCombination(string username, string password)
        {
            return !string.IsNullOrEmpty(username) && username != password;
        }

        private string GenerateToken(string username)
        {
            var claims = new Claim[]
            {
                new Claim(ClaimTypes.Name, username),
                new Claim(JwtRegisteredClaimNames.Nbf, new DateTimeOffset(DateTime.Now).ToUnixTimeSeconds().ToString()),
                new Claim(JwtRegisteredClaimNames.Exp, new DateTimeOffset(DateTime.Now.AddDays(1)).ToUnixTimeSeconds().ToString())
            };

            var token = new JwtSecurityToken(
                new JwtHeader(new SigningCredentials(
                    new SymmetricSecurityKey(
                        Encoding.UTF8.GetBytes("7A735D7B-1A19-4D8A-9CFA-99F55483013F")),
                        SecurityAlgorithms.HmacSha256)
                    ),
                new JwtPayload(claims)
            );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}
