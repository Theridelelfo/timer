export function createCountdown(start, onTick, onEnd) {
  let time = start;

  const interval = setInterval(() => {
    time--;

    if (time >= 0) {
      onTick(time);
    }

    if (time <= 0) {
      clearInterval(interval);
      onEnd();
    }
  }, 1000);

  return interval;
}