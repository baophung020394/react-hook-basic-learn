import React, { useState, useEffect } from 'react';

const convertDate = (date) => {
  const hours = `0${date.getHours()}`.slice(-2);
  const minutes = `0${date.getMinutes()}`.slice(-2);
  const seconds = `0${date.getSeconds()}`.slice(-2);

  return `${hours}:${minutes}:${seconds}`;
};
export default function useClock() {
  const [timerString, setTimerString] = useState('');

  useEffect(() => {
    const clockInterval = setInterval(() => {
      const now = new Date();
      const newTimer = convertDate(now);

      setTimerString(newTimer);
    }, 1000);

    return () => {
      clearInterval(clockInterval);
    };
  }, []);

  return { timerString };
}
