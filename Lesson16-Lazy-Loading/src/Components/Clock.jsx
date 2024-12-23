import React, { useEffect, useRef, useState } from 'react';
import './Clock.css';

const Clock = () => {
  const hourRef = useRef(null);
  const minuteRef = useRef(null);
  const secondRef = useRef(null);
  const timeRef = useRef(null);
  const dateRef = useRef(null);
  const [darkMode, setDarkMode] = useState(false);

  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
  }

  const setTime = () => {
    const time = new Date();
    const month = time.getMonth();
    const day = time.getDay();
    const date = time.getDate();
    const hours = time.getHours();
    const hoursForClock = hours >= 13 ? hours % 12 : hours;
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hourRef.current.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 12, 0, 360)}deg)`;
    minuteRef.current.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 60, 0, 360)}deg)`;
    secondRef.current.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 60, 0, 360)}deg)`;

    timeRef.current.innerHTML = `${hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`;
    dateRef.current.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`;
  }

  useEffect(() => {
    setTime();
    const interval = setInterval(setTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const toggleMode = () => {
    setDarkMode(!darkMode);
    document.querySelector('html').classList.toggle('dark');
  }

  return (
    <div className="clock-container">
      <button className="toggle" onClick={toggleMode}>
        {darkMode ? 'Light mode' : 'Dark mode'}
      </button>
      <div className="clock">
        <div ref={hourRef} className="needle hour"></div>
        <div ref={minuteRef} className="needle minute"></div>
        <div ref={secondRef} className="needle second"></div>
        <div className="center-point"></div>
      </div>
      <div ref={timeRef} className="time"></div>
      <div ref={dateRef} className="date"></div>
    </div>
  );
}

export default Clock;
