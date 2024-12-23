function CartActions({ dispatch }) {
  // Sample items to add
  const sampleItem1 = { id: 1, name: "Apple", price: 1.0 };
  const sampleItem2 = { id: 2, name: "Banana", price: 0.5 };

  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold mb-4">Actions:</h3>
      <div className="flex space-x-3">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={() => dispatch({ type: "addItem", payload: sampleItem1 })}
        >
          Apple
        </button>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          onClick={() => dispatch({ type: "addItem", payload: sampleItem2 })}
        >
          Banana
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          onClick={() => dispatch({ type: "clearCart" })}
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
}

export default CartActions;
