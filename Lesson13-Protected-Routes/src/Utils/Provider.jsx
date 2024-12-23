import React, {createContext, useContext, useState} from "react";

// Create a context "UserContext"
const UserContext = createContext(); 

// Storing the value of UserContext in "useMyData" using "useContext Hook"
export const useMyData = () => useContext(UserContext); //Custom Hook

// Creating "Provider Component" so to share value among those
// components which are wrapped by "Provider Component" ONLY.

function Provider ({ children }) {

  // Putting various States in the "UserContext" Here::
  const[fakeLogin, setFakeLogin] = useState(false);
  
  const values = {fakeLogin, setFakeLogin}; //object

  return (  
    <UserContext.Provider value={values}>
      {children}
    </UserContext.Provider>
  );
}

// The "component Provider" is used to wrap other components
export default Provider;