// Importing Components

import ContactF from "./ContactF"
import ContactC from "./ContactC";

function App() {
  return (
    <>
      <div> Functional Component! </div> 
       <ContactF nameF = {"Akshit Functional Props Nautiyal"}/>
       <div> Class Component! </div> 
       <ContactC nameC = {"Akshit Class Props Nautiyal"}/>
    </>
  )
}

export default App;
