using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace LogensAPI.Models
{
    public class Participant
    {
        [Key]
        //Login Page
        public int ParticipantId { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public string email { get; set; }


        [Column(TypeName = "ints(30)")]
        public int password { get; set; }

        //[Column(TypeName = "nvarchar(30)")]
        //public string Rname { get; set; }

        // regsiter Page

        //[Column(TypeName = "nvarchar(50)")]
        //public string Remail { get; set; }

        //[Column(TypeName = "nvarchar(50)")]
        //public string Rname { get; set; }

        //[Column(TypeName = "nvarchar(30)")]
        //public string Rpassword { get; set; }


    }

    public class ParticipantRestult
    {
        public int ParticipantId { get; set; }

        //public int date { get; set; }

    }
}
