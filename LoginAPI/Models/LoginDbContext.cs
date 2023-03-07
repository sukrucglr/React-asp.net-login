using Microsoft.EntityFrameworkCore;

namespace LogensAPI.Models
{
    public class LoginDbContext:DbContext 
    {
        

        public LoginDbContext(DbContextOptions<LoginDbContext> options) : base(options)
        {  }
       
        public DbSet<Participant> participant { get; set; }

    }
}
