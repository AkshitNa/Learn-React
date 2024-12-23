/* 
Configure our Redux Store + Reducer inside it. Our event goes to this "store" and
then these  reducers [CounterReducer, TodosReducer,TextReducer ..etc] are called.
*/

import { configureStore } from '@reduxjs/toolkit';

// Importing our SLICES
import counterSlice from './Slices/Counter'; // ONE
import todoSlice from './Slices/Todo'; // TWO
import textSlice from './Slices/DisplayText'; // THREE

// Reducer has different functions inside it.
const appStore = configureStore({
  reducer: {
    CounterReducer: counterSlice, // Now, we will call counterSlice as "CounterReducer". 
    TodosReducer: todoSlice, // Now, we will call todoSlice as "TodosReducer". 
    TextReducer: textSlice, // Now, we will call textSlice as "TextReducer"
  },
});

export default appStore;
