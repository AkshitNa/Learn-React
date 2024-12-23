// Importing Components
import Counter from "./Counter";
import {ToastContainer} from 'react-toastify';

function App() {
  
  return (
    <>
       <Counter/>
       {/* You can also pass the features by this way also */}
       <ToastContainer closeButton={false} />
    </>
  )
}

export default App;
