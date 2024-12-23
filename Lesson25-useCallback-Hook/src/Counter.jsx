import React, { useState, useCallback } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  // useCallback ensures the increment function is memoized
  // and doesn't change unless count changes
  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      {/* Passing memoized function as a prop */}
      <button className='border border-black-500 bg-green-400 mt-8 p-2' onClick={increment}>Increment</button>
    </div>
  );
}

export default Counter;
