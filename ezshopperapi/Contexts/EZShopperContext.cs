using Microsoft.EntityFrameworkCore;

// note: the context is configured in Startup.cs
// there is currently NO need for a set of repository classes
// all db interactions can be done using the context and linq
// if the need arises to modify the canned functionality then methods can be overriden here in this class (example SaveChanges, etc.)
namespace EZShopper.Models
{
    public class EZShopperContext : DbContext
    {
        public EZShopperContext(DbContextOptions<EZShopperContext> options) : base(options)
        {
        }

        public DbSet<Aisle> Aisle { get; set; }
        public DbSet<Dept> Dept { get; set; }
        public DbSet<Item> Item { get; set; }
        public DbSet<List> List { get; set; }
        public DbSet<Meal> Meal { get; set; }
        public DbSet<Path> Path { get; set; }
        public DbSet<State> State { get; set; }
        public DbSet<Store> Store { get; set; }
        public DbSet<User> User { get; set; }
    }
}
