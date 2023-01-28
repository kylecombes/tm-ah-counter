import { useState, useRef } from 'react';

export const useTimer = () => {
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef<number | null>(null);

  const startTimer = () => {
    setIsRunning(true);
    timerRef.current = window.setInterval(() => {
      setElapsedTime((elapsedTime) => elapsedTime + 1);
    }, 1000);
  };

  const stopTimer = () => {
    setIsRunning(false);
    if (timerRef.current) {
      window.clearInterval(timerRef.current);
    }
  };

  const resetTimer = (time: number = 0) => {
    if (isRunning) {
      stopTimer();
    }
    setElapsedTime(time);
  };

  return {
    elapsedTime,
    isRunning,
    startTimer,
    stopTimer,
    resetTimer,
  };
};
