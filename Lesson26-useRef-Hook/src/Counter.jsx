import React, { useState, useRef } from "react";

function Counter() {
  const [stateCounter, setStateCounter] = useState(0); // useState variable
  let letCounter = 0; // Regular let variable
  const refCounter = useRef(0); // useRef variable

  const incrementStateCounter = () => {
    setStateCounter((prev) => prev + 1); // Updates the state, causing re-render
  };

  const incrementLetCounter = () => {
    letCounter += 1;
    console.log("Let Counter:", letCounter); // Logs to console but no re-render
  };

  const incrementRefCounter = () => {
    refCounter.current += 1;
    console.log("Ref Counter:", refCounter.current); // Logs to console but no re-render
  };

  return (
    <div className="bg-gray-200 border border-gray-400 w-3/4 lg:w-1/2 mx-auto p-8 rounded-lg shadow-md">
      <h2 className="text-center text-xl text-gray-800 font-bold mb-6">
        useRef Example
      </h2>

      <div className="mb-6">
        <h3 className="text-lg text-gray-700 mb-2">State Counter: {stateCounter}</h3>
        <button
          className="border border-green-600 bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 focus:outline-none"
          onClick={incrementStateCounter}
        >
          Increment State Counter
        </button>
      </div>

      <div className="mb-6">
        <h3 className="text-lg text-gray-700 mb-2">Let Counter (check console): {letCounter}</h3>
        <button
          className="border border-blue-600 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none"
          onClick={incrementLetCounter}
        >
          Increment Let Counter
        </button>
      </div>

      <div>
        <h3 className="text-lg text-gray-700 mb-2">Ref Counter (check console): {refCounter.current}</h3>
        <button
          className="border border-purple-600 bg-purple-500 text-white py-2 px-4 rounded-lg hover:bg-purple-600 focus:outline-none"
          onClick={incrementRefCounter}
        >
          Increment Ref Counter
        </button>
      </div>
    </div>
  );
}

export default Counter;
