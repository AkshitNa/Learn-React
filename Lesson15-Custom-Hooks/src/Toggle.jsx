import React from 'react';
import useToggle from './Utils/useToggle';

function Toggle() {
  const [value, toggle] = useToggle();//value is false by default

  return (
    <div>
      <p>The light is: {value ? "On" : "Off"}</p>
      <button onClick={toggle}>Toggle</button>
    </div>
  );
}

export default Toggle;