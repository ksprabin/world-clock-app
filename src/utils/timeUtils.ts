// Utility function to calculate the time difference between two time strings (HH:mm:ss).
// Returns a human-readable string like "+5h 30m 12s".
// Handles negative differences and absolute values for consistency.

export const calculateTimeDifference = (t1: string, t2: string): string => {
  const time1 = new Date(`1970-01-01T${t1}`);
  const time2 = new Date(`1970-01-01T${t2}`);
  const diffMs = time2.getTime() - time1.getTime();
  const sign = diffMs >= 0 ? '+' : '';
  const abs = Math.abs(diffMs);

  const hours = Math.floor(abs / (1000 * 60 * 60));
  const minutes = Math.floor((abs / (1000 * 60)) % 60);
  const seconds = Math.floor((abs / 1000) % 60);

  return `${sign}${hours}h ${minutes}m ${seconds}s`;
};