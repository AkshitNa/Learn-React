import BurgerImg from "../src/assets/Burger.jpg";

const Cards = () => {
  return (
    <div className="max-w-60 ml-2 mt-2 bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Image */}
      <img
        className="w-full h-50 object-cover rounded-lg p-2"
        src={BurgerImg}
        alt="Placeholder"
      />

      {/* Content */}
      <div className="p-4 text-center">
        <h2 className="text-lg font-semibold text-gray-800">Burger</h2>
        <p className="mt-2 text-gray-600">
          Karnatak Burger Crispy & Tasty
        </p>
        {/* Centered Button */}
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded hover:bg-blue-600">
          Buy
        </button>
      </div>
    </div>
  );
};

export default Cards;
