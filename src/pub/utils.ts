import { ref, onMounted, onUnmounted } from 'vue';

export function displayTime(time: number) {
  // Create a new Date object for today at 3 PM
  const baseTime = new Date();
  baseTime.setHours(15, 0, 0, 0);  // Set to 3:00:00.000 PM

  // Add the minutes
  baseTime.setMinutes(baseTime.getMinutes() + time);

  // Format the time
  const hours = baseTime.getHours().toString().padStart(2, '0');
  const minutes = baseTime.getMinutes().toString().padStart(2, '0');

  return `${hours}:${minutes} PM`;
}

export function usePlayerId() {
  const hash = window.location.hash;
  if (!hash || hash.length < 2 || hash === '#leaderboard') {
    return null;
  } else {
    return hash.slice(1);
  }
}