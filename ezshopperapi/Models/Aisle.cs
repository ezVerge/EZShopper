using System.ComponentModel.DataAnnotations.Schema;

namespace EZShopper.Models
{
    [Table("aisle")]
    public class Aisle
    {
        public int Id { get; set; }
        public string Item { get; set; }
        public int AisleNumber { get; set; }
        public int StoreId { get; set; }
    }
}
