// Creating Slice
import { createSlice } from '@reduxjs/toolkit';

// Slice One => CounterSlice
export const counterSlice = createSlice({
  
  name: 'CounterSlice', //Name of the Slice
  initialState: 777, // Setting up the initial value
  reducers: { // Creating reducers [Functions] for COUNTERSLICE.
    increment: (initialState) => initialState + 1, //Action 1
    decrement: (initialState) => initialState - 1, //Action 2
  },
});
 
// Exporting Actions
export const { increment, decrement } = counterSlice.actions;

// Exporting Reducer [Combined Functions]
export default counterSlice.reducer;




