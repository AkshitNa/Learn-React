import React, { useReducer } from "react";
import { CartReducer, initialState } from "../../Reducers/CartReducer";
import CartList from "./CartList";
import CartActions from "./CartActions";

function ShoppingCart() {

  const [state, dispatch] = useReducer(CartReducer, initialState);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl text-center text-purple-600 my-5">Then Understand This Code 02</h1>
      <h1 className="text-2xl font-bold text-center mb-6">Shopping Cart</h1>
      <div className="max-w-lg mx-auto bg-white shadow rounded p-4">
       
        {/* Cart List Component */}
        <CartList cart={state.cart} dispatch={dispatch} />

        {/* Cart Actions Component */}
        
        <CartActions dispatch={dispatch} />
      </div>
    </div>
  );
}

export default ShoppingCart;
