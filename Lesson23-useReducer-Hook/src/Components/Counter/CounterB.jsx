import { useReducer } from "react";
import { CounterReducer, initialState } from "../../Reducers/CounterReducer";

export function CounterB() {

   const [state, dispatch] = useReducer(CounterReducer, initialState);
 
  
    return (
      <div>
        <div className="text-3xl text-center font-bold mb-5"> Count: {state.count} </div>
        <div className="flex flex-row justify-center">

        <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
        <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
        </div>
      
      </div>
    );
  }

  //CounterB is as same as CounterA but both have indepenent state.
  //To share same data we have to use useContext.
  