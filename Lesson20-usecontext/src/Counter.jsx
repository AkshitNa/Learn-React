import { useMyData } from "./Utils/Provider";

const Counter = () => {

    const {count, setCount} = useMyData();

  return (
    <div>
        <p>Current Count is {count}</p>
        <button onClick={ () => {setCount(count+1)}}> Increase </button>
    </div>
  )
}

export default Counter;



