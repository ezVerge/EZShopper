using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace EZShopper.Models
{
    [Table("user")]
    public class User
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string Name { get; set; }
        public int PreferredStoreId { get; set; }
        public DateTime Joined { get; set; }
        public bool Enabled { get; set; }
    }
}
