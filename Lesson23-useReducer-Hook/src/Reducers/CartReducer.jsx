//Intial Value
export const initialState = {
    cart: [], //Empty array
  };
  
//Different functions to change the initial value
  export const CartReducer = (state, action) => {
    switch (action.type) {

      //based on the action tpye perform following actions
      case "addItem":
        return {
          ...state,
          cart: [...state.cart, action.payload], // Add item
        };
      case "removeItem":
        return {
          ...state,
          cart: state.cart.filter((item) => item.id !== action.payload.id), // Remove item by ID
        };
      case "clearCart":
        return {
          ...state,
          cart: [], // Empty cart
        };
      default:
        throw new Error("Unknown action type");
    }
  }
  