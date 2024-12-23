import { useState } from "react";
import BurgerImg from "../src/assets/Burger.jpg";

const Card = () => {

const Price = 25;

const [counter, setCounter] = useState(0);
const [avail, setAvail] = useState(10);

  return(
    
    <div className="max-w-sm bg-gray-200 p-3 border border-black rounded-xl hover:bg-gray-300  transition-all mb-3">
      
      <div className="bg-gray-400 p-1 text-center border border-black rounded-xl mb-2">
        <span className="mx-3">Burger</span>
        <span>Cart : {counter}</span>
      </div>

      <img className="w-full h-30 rounded-xl" src={BurgerImg} alt="Burger" />
      <span className="p-1.5 mx-5 text-2xl">Price: ${Price}</span>
      <span className="p-1.5 mx-4 text-2xl">Availability: {avail}</span>

      <div className="max-w-full p-3 mt-1">
      <button className="text-2xl hover:bg-green-500 bg-green-400 px-7 mx-32 rounded-md"
      disabled={avail === 0}
      onClick = {() => {setCounter(counter+1); setAvail(avail-1); } }> Buy
      </button>
      </div>

    
    </div>
    
  );

}

export default Card;
