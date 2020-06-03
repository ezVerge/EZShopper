using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace EZShopper.Models
{
    [Table("list")]
    public class List
    {
        public int Id { get; set; }
        public int Quantity { get; set; }
        public string Name { get; set; }
        public string Comments { get; set; }
        public DateTime Added { get; set; }
        public bool Active { get; set; }
        public int UserId { get; set; }
        public int StoreId { get; set; }
    }
}
