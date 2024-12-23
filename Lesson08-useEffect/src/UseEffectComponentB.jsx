import React, { useEffect, useState } from 'react';

function UseEffectComponentB() {

  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Count Component: UseEffectComponentB() is changed");
  }, [count]); // This effect runs whenever the state of Count changes.

  /* By running a array [count] as a second argument, you’re letting React know that
  your useEffect function depends on "count" state. */

  //count is a state variable manage by useState().

  const changeCount = () => { setCount(count+1); };

  return (
    <div>
      <h1> Count value is {count} </h1>
      <button onClick={() => changeCount()}> ChangeCount </button>
    </div>
  );
}

export default UseEffectComponentB;