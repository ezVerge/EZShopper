using System.ComponentModel.DataAnnotations.Schema;

namespace EZShopper.Models
{
    [Table("path")]
    public class Path
    {
        public int Id { get; set; }
        public int AisleNumber { get; set; }
        public int Sequence { get; set; }
        public int DeptId { get; set; }
        public int StoreId { get; set; }
    }
}
