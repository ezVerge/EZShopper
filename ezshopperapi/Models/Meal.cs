using System.ComponentModel.DataAnnotations.Schema;

namespace EZShopper.Models
{
    [Table("meal")]
    public class Meal
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Comments { get; set; }
        public int UserId { get; set; }
    }
}
