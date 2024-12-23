// Creating Slice: todoSlice
import { createSlice } from '@reduxjs/toolkit';

// Creating reducers for each SLICE.
const todoSlice = createSlice({ 

  name: 'TodosSlice',
  initialState : { // Setting up the initial value
    todos: [] //Empty Array
  },
  reducers: {
    addTodo: (initialState, action) => {
      initialState.todos.push(action.payload); //JS Function
    },
    removeTodo: (initialState, action) => {
      initialState.todos.splice(action.payload, 1);//JS Function
    }
  }
});

// Exporting
export default todoSlice.reducer;
export const { addTodo, removeTodo } = todoSlice.actions;

/*

In Redux, an action is an object that describes a change or event that happens in your application.
This action object typically has two properties:

(A) type: A string that describes the type of action being performed.

(B) payload: The data or information that is sent along with the action to the reducer.

What is action.payload?

=> action.payload is the data that the action carries with it.
=> This is the information that will be used to update the state.

In the context of our to-do list example:

When we add a new to-do item, the action.payload will contain the new to-do item (i.e., the text of the to-do).
When we remove a to-do item, the action.payload might contain the index of the to-do item to be removed.


*/
