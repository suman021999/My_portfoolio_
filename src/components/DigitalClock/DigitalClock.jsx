"use client";

import { useState, useEffect } from 'react';

const DigitalClock = ({ delay = 0 }) => {
  const [time, setTime] = useState(new Date());
  const [showClock, setShowClock] = useState(false);

  useEffect(() => {
    // Set up initial delay
    const delayTimer = setTimeout(() => {
      setShowClock(true);
      
      // Start clock updates after delay
      const timer = setInterval(() => {
        setTime(new Date());
      }, 1000);

      return () => clearInterval(timer);
    }, delay * 1000);

    return () => clearTimeout(delayTimer);
  }, [delay]);

  const formatTime = (value) => {
    return value < 10 ? `0${value}` : value;
  };

  const hours = time.getHours() % 12 || 12;
  const minutes = formatTime(time.getMinutes());
  const seconds = formatTime(time.getSeconds());
  const ampm = time.getHours() >= 12 ? 'PM' : 'AM';

  if (!showClock) return null;

  return (
    <div className="digital-clock text-amber-300 font-mono text-4xl mt-2 rounded-lg inline-flex items-center">
      <span className="time-segment">{formatTime(hours)}</span>
      <span className="time-separator mx-1">:</span>
      <span className="time-segment">{minutes}</span>
      <span className="time-separator mx-1">:</span>
      <span className="time-segment">{seconds}</span>
      <span className="ampm text-xl ml-2">{ampm}</span>
    </div>
  );
};

export default DigitalClock;