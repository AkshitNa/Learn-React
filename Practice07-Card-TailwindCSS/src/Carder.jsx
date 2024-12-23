import { useState } from "react";
import BurgerImg from "../src/assets/Burger.jpg";

const Carder = ({ name = "Burger", price = 25, availability = 5, image = BurgerImg }) => {
  const [counter, setCounter] = useState(0);

  const handleBuy = () => {
    if (counter < availability) {
      setCounter(counter + 1);
    }
  };

  const handleRemove = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <div className="container w-full max-w-sm bg-orange-300 p-4 border border-black rounded-xl hover:bg-orange-600 transition-all">
      <div className="bg-orange-500 p-2 text-center border border-black rounded-xl mb-3">
        <h2 className="font-bold text-lg">{name}</h2>
        <p aria-live="polite">
          Cart: <span className="font-semibold">{counter}</span>
        </p>
      </div>
      <img
        className="w-full h-50 object-contain rounded-md"
        src={image}
        alt={`Delicious ${name}`}
      />
      <div className="flex justify-between p-3 text-sm">
        <span className="font-medium">Price: ${price}</span>
        <span className="font-medium">
          Available: {availability - counter}
        </span>
      </div>
      <div className="flex justify-around mt-3">
        <button
          className={`px-4 py-2 rounded ${
            counter >= availability
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-orange-500 hover:bg-orange-800"
          } text-white`}
          onClick={handleBuy}
          disabled={counter >= availability}
          aria-label={`Buy ${name}`}
        >
          Buy
        </button>
        <button
          className="px-4 py-2 bg-red-500 hover:bg-red-700 rounded text-white"
          onClick={handleRemove}
          disabled={counter === 0}
          aria-label={`Remove one ${name}`}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default Carder;
