// Creating Slice

import {createSlice } from '@reduxjs/toolkit';

// Create the CartCounterSlice

export const CartCounterSlice = createSlice({
  
  name: 'CartSlice',
  
  initialState: { // Setting up the initial value
    cart: [] // Initial state with an empty array of cart
  },

  reducers: { // Creating reducers for CARTCOUNTERSLICE.
    
    addToCart: (state, action) => {

      const cartItem = state.cart.find(item => item.id == action.payload) //action.payload me ID of Product pass krege API se.
      if(cartItem){ //If we find the item.
        cartItem.quantity +=1;
        return;
      }
      state.cart.push({ //Pusing the value into the cart
        quantity:1, //By 1
        id: action.payload
      })
    },

    removeFromCart: (state, action) => {

      const cartItem = state.cart.find(item => item.id == action.payload)
      if(cartItem){
        cartItem.quantity -=1; //Remove by 1
        if(cartItem.quantity == 0){ //If SingleProduct is 0 then completely remove it from the Cart.
          state.cart = state.cart.filter(item => item.id !== action.payload)
        }
}
    }   
  }
});
 
// Exporting

export default CartCounterSlice.reducer; //To combine all the functions inside reducers internally.

export const { addToCart, removeFromCart } = CartCounterSlice.actions;


