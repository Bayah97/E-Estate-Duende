using Api.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Api.Controllers
{
    [Route("[controller]")]
    [ApiController]
    [Authorize(policy: "ApiScope")]
    public class CompaniesController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public CompaniesController(ApplicationDbContext applicationDbContext)
        {
            this._context = applicationDbContext;
        }

        //Get All Company
        [HttpGet]
        public async Task<IActionResult> GetCompany()
        {
            var company = await _context.companies.ToListAsync();
            return Ok(company);
        }

        //Get one Company
        [HttpGet]
        [Route("{id:int}")]
        public async Task<IActionResult> GetOneCompany([FromRoute] int id)
        {
            var company = await _context.companies.FindAsync(id);
            return Ok(company);
        }
    }
}
