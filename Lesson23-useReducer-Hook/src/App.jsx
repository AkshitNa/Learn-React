// Importing Components
import { CounterA } from "./Components/Counter/CounterA";
import { CounterB } from "./Components/Counter/CounterB";
import ShoppingCart from "./Components/ShoppingCart/ShoppingCart";

function App() {
  
  return (
    <>
       <h1 className="text-2xl text-center text-red-600 mb-5">First Understand This Code 01</h1>
       <CounterB/>
       <CounterA/>
       <ShoppingCart/>
    </>
  )
}

export default App;
