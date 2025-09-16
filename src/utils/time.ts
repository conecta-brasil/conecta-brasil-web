/**
 * Converts seconds to HH:MM:SS format
 * @param seconds - Time in seconds (integer)
 * @returns Formatted time string in "HH:MM:SS" format
 */
export const formatSecondsToTime = (seconds: number): string => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  return [hours, minutes, remainingSeconds]
    .map(unit => unit.toString().padStart(2, '0'))
    .join(':');
};