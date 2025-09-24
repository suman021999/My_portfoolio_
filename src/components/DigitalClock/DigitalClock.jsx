"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

const DigitalClock = ({ delay = 0 }) => {
  const [time, setTime] = useState(new Date());
  const [showClock, setShowClock] = useState(false);

  // Refs for animation
  const hourRef = useRef(null);
  const minRef = useRef(null);
  const secRef = useRef(null);
  const ampmRef = useRef(null);

  useEffect(() => {
    // Delay before showing
    const delayTimer = setTimeout(() => {
      setShowClock(true);

      // Start clock updates
      const timer = setInterval(() => {
        setTime(new Date());
      }, 1000);

      return () => clearInterval(timer);
    }, delay * 1000);

    return () => clearTimeout(delayTimer);
  }, [delay]);

  useEffect(() => {
    if (showClock) {
      const tl = gsap.timeline({ defaults: { opacity: 0, y: 20, duration: 0.6, ease: "power3.out" } });
      tl.from(hourRef.current, {})
        .from(minRef.current, {}, "-=0.2")
        .from(secRef.current, {}, "-=0.2")
        .from(ampmRef.current, {}, "-=0.3");
    }
  }, [showClock]);

  const formatTime = (value) => (value < 10 ? `0${value}` : value);

  const hours = time.getHours() % 12 || 12;
  const minutes = formatTime(time.getMinutes());
  const seconds = formatTime(time.getSeconds());
  const ampm = time.getHours() >= 12 ? "PM" : "AM";

  if (!showClock) return null;

  return (
    <div className="digital-clock text-amber-300 font-mono text-4xl mt-2 rounded-lg inline-flex items-center">
      <span ref={hourRef} className="time-segment font-[font1]">
        {formatTime(hours)}
      </span>
      <span className="time-separator mx-1">:</span>
      <span ref={minRef} className="time-segment font-[font1]">
        {minutes}
      </span>
      <span className="time-separator mx-1">:</span>
      <span ref={secRef} className="time-segment font-[font1]">
        {seconds}
      </span>
      <span ref={ampmRef} className="ampm text-xl ml-2 font-[font1]">
        {ampm}
      </span>
    </div>
  );
};

export default DigitalClock;
