using System.ComponentModel.DataAnnotations.Schema;

namespace EZShopper.Models
{
    [Table("item")]
    public class Item
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int AisleNumber { get; set; }
        public int UserId { get; set; }
        public int StoreId { get; set; }
        public int DeptId { get; set; }
    }
}
