using System.ComponentModel.DataAnnotations.Schema;

namespace EZShopper.Models
{
    [Table("item")]
    public class Item
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Aisle { get; set; }
        public int Userid { get; set; }
        public int StoreId { get; set; }
        public int DeptId { get; set; }
    }
}
