using System.ComponentModel.DataAnnotations.Schema;

namespace EZShopper.Models
{
    [Table("dept")]
    public class Dept
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public bool Grocery { get; set; }
        public int StoreId { get; set; }
    }
}
