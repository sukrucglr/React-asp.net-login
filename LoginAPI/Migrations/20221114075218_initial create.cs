using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace LoginAPI.Migrations
{
    public partial class initialcreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Participants",
                columns: table => new
                {
                    ParticipantId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    email = table.Column<string>(type: "nvarchar(50)", nullable: false),
                    Remail = table.Column<string>(type: "nvarchar(50)", nullable: false),
                    password = table.Column<string>(type: "nvarchar(50)", nullable: false),
                    Rpassword = table.Column<string>(type: "nvarchar(50)", nullable: false),
                    //name = table.Column<string>(type: "nvarchar(50)", nullable: false),
                    //date = table.Column<int>(type: "nvarchar(50)", nullable: false),
                    //Score = table.Column<int>(type: "int", nullable: false),
                    //TimeTaken = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Participants", x => x.ParticipantId);
                });


        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Participants");


        }
    }
}
