import { useReducer } from "react";
import { CounterReducer, initialState } from "../../Reducers/CounterReducer";

export function CounterA() {

    //Step 03 => useReducer will take teo intialState and ReducerFunction [CounterReducer] from CounterReducer.jsx
    const [state, dispatch] = useReducer(CounterReducer, initialState);
    //state is the initial state and dispatch is a function capable of updating state and 
    //returning new state.
  
    return (
      <div>
        <div className="text-3xl text-center font-bold mb-5"> Count: {state.count} </div>
        <div className="flex flex-row justify-center">
        
        {/* dispatch function matches the type and update the state based on the 
        respective action defined in ReducerFunction [CounterReducer] */}
        <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
        <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
        </div>
      
      </div>
    );
  }
  