import './App.css'
import {useSelector} from "react-redux"; 

function CounterTwo() {

  //To use the current state value
  const count = useSelector((store) => store.CounterReducer);

  return (
    <>
   <h3 style={{color: 'green'}}> Count value in CounterTwo Component is {count} </h3>
    </>
  );
}

export default CounterTwo;
