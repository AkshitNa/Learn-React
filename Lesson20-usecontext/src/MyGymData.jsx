import {useMyData} from "./Utils/Provider";

function MyGymData(){

const data = useMyData(); //It passes an Object
// const {username, number} = MyData();

  return (
    <>
    <h1>Hello, {data.username} </h1>
    <p> can you please give me your phone number? </p>
    <h3>yes !! Write it down it is {data.number} </h3>
    </>
  );
}

export default MyGymData;


 