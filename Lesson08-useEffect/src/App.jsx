import { useState } from 'react';
import './App.css'
import UseEffectComponentA from './UseEffectComponentA';
import UseEffectComponentB from './UseEffectComponentB';
import UseEffectComponentC from './UseEffectComponentC';
import UseEffectComponentD from './UseEffectComponentD';

function App() {

  const[value, setValue] = useState(false);

  return (
    <>
   <UseEffectComponentA/>
   <UseEffectComponentB/> <br /> <br />

   <button onClick={() => setValue(!value)}> Mount-Unmount </button> <br />
   {value ? <UseEffectComponentC/> : ""}

   <UseEffectComponentD/>

    </>
  );
}

export default App;
