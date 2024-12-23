// GreetingComponent.js

import React from 'react';

function GreetingComponent({ name }) {
  return <h1>Hello, {name ? name : "User"}!</h1>;
}

export default GreetingComponent;


