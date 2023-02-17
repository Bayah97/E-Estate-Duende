using System.ComponentModel.DataAnnotations;

namespace Api.Models
{
    public class Company
    {
        [Key]
        public int Id { get; set; }
        public string? companyName { get; set; }
        public string? address1 { get; set; }
        public string? address2 { get; set; }
        public string? address3 { get; set; }
        public string? postcode { get; set; }
        public string? town { get; set; }
        public string? phone { get; set; }
        public string? email { get; set; }
        public string? fax { get; set; }
        public string? contactNo { get; set; }
        public string? manager { get; set; }
    }
}
