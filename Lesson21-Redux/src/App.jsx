import './App.css'

//Redux
import {useDispatch, useSelector} from "react-redux"; 
import { increment,decrement } from './Redux/Slices/Counter';

import CounterTwo from './CounterTwo';
import TodoApp from './TodoApp';
import DisplayTextApp from './DisplayTextApp';

function App() {

  //To use the current state value
  const count = useSelector((store) => store.CounterReducer); //Efficient Way -> Subscribe to specific Slice Only
  
  //To use the funtions related to it.
  const dispatch = useDispatch();
  
  return (
    <>

   <h3> Count value in App Component is {count} </h3>

   <button onClick={() => dispatch(increment())}> Increment Button </button>
   <button onClick={() => dispatch(decrement())}> Decrement Button </button>

   <hr /> <hr />

   <CounterTwo/>

   <hr /> <hr />

   <DisplayTextApp/>

   <hr /> <hr />

   <TodoApp/>
   
    </>
  );
}

export default App;