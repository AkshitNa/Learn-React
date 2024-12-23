// Configure our Redux Store + Reducer inside it. Our event goes to this "store" and then these 
// reducers [ProductReducer & CartCounterReducer] are called.

import { configureStore } from '@reduxjs/toolkit';

// Importing our SLICES

import ProductSlice from './Slices/Product'; // ONE
import CartCounterSlice from './Slices/CartCounter'; //TWO

// Reducer has different functions inside it.
const appStore = configureStore({
  reducer: {
    ProductReducer: ProductSlice, //From now, ProductSlice is called as "ProductReducer"
    CartCounterReducer: CartCounterSlice, //From now, CartCounterSlice is called as "CartCounterReducer"
  },
});

export default appStore;
