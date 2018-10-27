namespace RoutineAlarmClockAPI.Models
{
    public class Routine
    {
       // [Required]
        public int RoutineId { get; set; }

       // [Required]
        public int UserId { get; set; }

       // [Required]
        public string Title { get; set; }

       // [Required]
        public string Destination { get; set; }

       // [Required]
        public string ArrivalTime { get; set; }

       // [Required]
        public string AllotedTime { get; set; }

    }
}