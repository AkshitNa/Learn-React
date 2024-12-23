import { useEffect, useState } from "react";
import { getGymDetailsAPI } from "./API/GymAPI";

/* 

//For Testing only [Without API] 

[
  {
    "customerId": 1,
    "firstName": "Jasvinder",
    "lastName": "Kaur",
    "email": "JasmineKaur001@gmail.com",
    "contactNo": "9897307401",
    "gender": "Female",
    "height": 165,
    "weight": 80,
    "remarks": "Fat",
    "category": "Premium"
  }
]

*/

function MyGymData(){

  //Array in which object is stored.
  const [gymDetails, setGymDetails] = useState([
        {
          customerId: null,
          firstName: "",
          lastName: "",
          email: "",
          contactNo: "",
          gender: "",
          height: null,
          weight: null,
          remarks: "",
          category: ""
        }
      ]); 

  //Fetching Data From API
   function getGymDetailsForME(){

    getGymDetailsAPI()
    .then((response) => setGymDetails(response.data) )
    .catch((error) => console.log(error))
  }

  //When the component MyGymData; is mounted,
  //the function getGymDetailsForME() is called once[].
  useEffect(() => getGymDetailsForME(), []);

  return (

    <>
    <h1>Hello, {gymDetails[0].firstName} {gymDetails[0].lastName} </h1>
    <p> can you please give me your phone number? </p>
    <h3>yes !! Write it down it is {gymDetails[0].contactNo}</h3>
    </>
  );

}

export default MyGymData;


 