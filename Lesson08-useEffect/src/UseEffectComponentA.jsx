//useEffect( Mounting-function, UnMounting-function, [dependency]);

import React, { useEffect } from 'react';

function UseEffectComponentA() {

  useEffect(() => {
    console.log('Component: UseEffectComponentA() has mounted');
  }, []); 
  
/* <1> Jaise hi UseEffectComponentA() Component Screen me render hoga useEffect() => console.log('Component has mounted'); print
hoga console me. */  

// <2> Empty dependency array means this effect runs once when the component mounts.

/* <3> By running an empty array [] as a second argument, you’re letting React know that
        your useEffect function doesn’t depend on any values from props or state. This will help you avoid
        the component Update lifecycle. */

  return (
    <div>
      <h1>Check the console to see the message!</h1>
    </div>
  );
}

export default UseEffectComponentA;