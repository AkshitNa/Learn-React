function CartList({ cart, dispatch }) {
  return (
    
    <div>
      <h2 className="text-lg font-semibold mb-4">Items in Cart:</h2>
      <ul className="space-y-3">
        {cart.map((item) => (
          <li
            key={item.id} // Unique key for each item
            className="flex justify-between items-center bg-gray-100 p-2 rounded"
          >
            <span>
              {item.name} - ${item.price.toFixed(2)}
            </span>
            <button
              className="text-red-500 hover:text-red-700"
              onClick={() =>
                dispatch({ type: "removeItem", payload: { id: item.id } })
              }
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      {cart.length === 0 && (
        <p className="text-gray-500 mt-4">Your cart is empty.</p>
      )}
    </div>
  );
}

export default CartList;
