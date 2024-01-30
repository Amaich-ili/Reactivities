using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options) // We gonna pass the connectionString as option
        {
        }

        public DbSet<Activity> Activities{ get; set; } // The name of my table
    }
}