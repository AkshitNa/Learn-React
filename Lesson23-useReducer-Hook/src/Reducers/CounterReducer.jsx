//Creating My CounterReducer

//Step 01: Set up your initialstate [It is an Object]
export const initialState = {
  count: 0, //initialValue of the count
};

//Step 02 => Creating Reducer Function
// The reducer function takes the current state
// and an action and returns the next state.
export const CounterReducer = (state, action) => {

  switch (action.type) {
    case "increment":
      return { count: state.count + 1 }; //action 01
    case "decrement":
      return { count: state.count - 1 }; //action 02
    case "reset":
      return initialState; ////action 03
    default:
      throw new Error("Unknown action type"); //Handle error
  }
};
