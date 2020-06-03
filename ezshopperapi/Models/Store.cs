using System.ComponentModel.DataAnnotations.Schema;

namespace EZShopper.Models
{
    [Table("store")]
    public class Store
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Street { get; set; }
        public string City { get; set; }
        public int StateId { get; set; }
        public string Zip { get; set; }
        public int UserId { get; set; }
        public int TotalAisles { get; set; }
    }
}
