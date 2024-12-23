import React, { useState, useEffect } from 'react';

export const Clock = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timerId); // Cleanup the timer on unmount
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="text-4xl font-mono text-gray-800 bg-white p-6 rounded-lg shadow-lg">
        {time}
      </div>
    </div>
  );
};

export default Clock;
