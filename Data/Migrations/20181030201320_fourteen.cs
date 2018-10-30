using Microsoft.EntityFrameworkCore.Migrations;

namespace RoutineAlarmClockAPI.Migrations
{
    public partial class fourteen : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "UserId",
                table: "Routine",
                nullable: false,
                oldClrType: typeof(int));

            migrationBuilder.AddColumn<string>(
                name: "AppUserId",
                table: "Routine",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "AppUserId",
                table: "AppTask",
                nullable: false,
                defaultValue: "");

            migrationBuilder.CreateIndex(
                name: "IX_Routine_AppUserId",
                table: "Routine",
                column: "AppUserId");

            migrationBuilder.CreateIndex(
                name: "IX_AppTask_AppUserId",
                table: "AppTask",
                column: "AppUserId");

            migrationBuilder.AddForeignKey(
                name: "FK_AppTask_AspNetUsers_AppUserId",
                table: "AppTask",
                column: "AppUserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Routine_AspNetUsers_AppUserId",
                table: "Routine",
                column: "AppUserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AppTask_AspNetUsers_AppUserId",
                table: "AppTask");

            migrationBuilder.DropForeignKey(
                name: "FK_Routine_AspNetUsers_AppUserId",
                table: "Routine");

            migrationBuilder.DropIndex(
                name: "IX_Routine_AppUserId",
                table: "Routine");

            migrationBuilder.DropIndex(
                name: "IX_AppTask_AppUserId",
                table: "AppTask");

            migrationBuilder.DropColumn(
                name: "AppUserId",
                table: "Routine");

            migrationBuilder.DropColumn(
                name: "AppUserId",
                table: "AppTask");

            migrationBuilder.AlterColumn<int>(
                name: "UserId",
                table: "Routine",
                nullable: false,
                oldClrType: typeof(string));
        }
    }
}
