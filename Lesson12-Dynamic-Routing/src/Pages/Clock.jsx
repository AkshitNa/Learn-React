import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';

export const Clock = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    document.title = "LinkedInMart/Clock"; //To set tittle 

    return () => clearInterval(timerId); // Cleanup the timer on unmount
  }, []);

  return (
    <div className="flex flex-col justify-around items-center h-screen dark:bg-black">
      <div className="text-4xl font-mono text-gray-800 bg-yellow-300 p-6 rounded-lg shadow-lg mb-5">
        {time}
      </div>

      <Link
        to="/"
        className="px-6 py-3 bg-black text-white rounded-lg hover:bg-green-600 transition duration-200 dark:bg-white dark:text-black"
      >
        Go Back Home
      </Link>

    </div>
  );
};

export default Clock;
