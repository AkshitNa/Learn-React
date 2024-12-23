// InputComponent.js

import React from 'react';

function InputComponent({ name, setName }) {
  
  // Updates the name in the parent component
  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div> Name: 
      <input
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="Type your name"
      />
    </div>
  );
}

export default InputComponent;


