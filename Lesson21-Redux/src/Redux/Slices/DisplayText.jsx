// Creating Slice

import { createSlice } from '@reduxjs/toolkit';

// Slice three => textSlice

const textSlice = createSlice(

{
  name: 'TextSlice',
  initialState : { // Setting up the initial value
    text: '' //Emplty String
  },
  reducers: {// Creating reducers for textSLICE.
    setText: (initialState, action) => {
      initialState.text = action.payload;
    }
  }
});

// Export reducer

export default textSlice.reducer; //To combine all the functions inside reducers internally.

export const { setText } = textSlice.actions;



