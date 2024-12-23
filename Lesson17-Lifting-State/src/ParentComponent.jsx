// ParentComponent.js

import React, { useState } from 'react';
import InputComponent from './InputComponent';
import GreetingComponent from './GreetingComponent';

function ParentComponent() {
  const [name, setName] = useState("Akshit"); // This state is going to 
  //share among greetingComponent and InputComponent [name and setName]

  return (
    <div>
      <InputComponent name={name} setName={setName} />
      <GreetingComponent name={name} />
    </div>
  );
}

export default ParentComponent;


