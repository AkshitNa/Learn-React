import MyGymData from './MyGymData';
import {useMyData} from "./Utils/Provider";
import Counter from "./Counter";

function App() {

  const {username, number} = useMyData(); //It passes an Object

  return (
    <>
        <h1> My name is {username}</h1>
        <MyGymData/>
        <Counter/>
    </>
  );
}

export default App;




