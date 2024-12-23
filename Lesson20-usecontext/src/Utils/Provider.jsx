import React, {createContext, useContext, useState} from "react";

// Create a context "UserContext"
const UserContext = createContext(); 

// Storing the value of UserContext in "useMyData" using "useContext Hook"
export const useMyData = () => useContext(UserContext); //Custom Hook

// Creating "Provider Component" so to share value among those
// components which are wrapped by "Provider Component" ONLY.

function Provider ({ children }) {

  // Putting various States in the "UserContext" Here::
  const username = "Akshit"; //01
  const number = 1234567809; //02
  const [count, setCount] = useState(5); //03
  
  const values = {username, number,count, setCount};

  return (  
    <UserContext.Provider value={values}>
      {children}
    </UserContext.Provider>
  );
}

// The "component Provider" is used to wrap other components
export default Provider;