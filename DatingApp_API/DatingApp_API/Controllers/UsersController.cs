using DatingApp_API.Data;
using DatingApp_API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DatingApp_API.Controllers
{
    public class UsersController : BaseApiController
    {
        private readonly DataContext _dataContext;
        public UsersController(DataContext context)
        {
            _dataContext = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<AppUser>>> GetUsers()
        {
            return await _dataContext.Users.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<AppUser>> GetUserByID(int id)
        {
            return await _dataContext.Users.FindAsync(id);
        }
    }
}
