//App is using the ProductProps component so it has to pass the values.

import './App.css'
import Product from './ProductProps';

function App(){

  let naam = "Akshit";

  return (

    <> 
    <p>My name is {naam} and m products are: </p>
    <br />
    <h1> Product 01 </h1>
    <Product ItemName={"Car"} Price={"Rs. 10000"} />
    <br />
    <h1> Product 02 </h1>
    <Product ItemName={"Bike"} Price={"Rs. 20000"} />
    <br />
    <h1> Product 03 </h1>
    <Product ItemName={"Scooter"} />  {/* Default Value */}
    </>
  );
}

export default App;
