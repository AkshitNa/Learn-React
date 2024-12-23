import React, { useEffect } from 'react';

function UseEffectComponentC() {
  
  //useEffect( Mounting-function, UnMounting-function, [dependency]);
  useEffect(() => {
   console.log("UseEffectComponentC is mounted");

    return function(){
      alert("UseEffectComponentC is Unmounted");
    }
  }, []);

  return (
    <div>
      <ul>
      <li> Component is Mounted !! </li>
        <li> Banana </li>
        <li> Manago/ </li>
        <li> Pineapple </li>
      </ul>
    </div>
  );
}

export default UseEffectComponentC;