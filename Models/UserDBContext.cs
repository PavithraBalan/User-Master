using Microsoft.EntityFrameworkCore;

namespace UserDetails.Models
{
    public class UserDBContext:DbContext
    {
        public UserDBContext(DbContextOptions<UserDBContext>options ): base(options)
        {

        }
        public DbSet<User> UserDB {get; set;}
    }
}