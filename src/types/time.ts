// TypeScript interface describing the expected shape of the time API response.
// Used to ensure type safety across service and UI layers.

export interface TimeAPIResponse {
  dateTime: string;
  time: string;     // "HH:mm"
  timeZone: string;
  dayOfWeek: string;
  seconds: string;
}