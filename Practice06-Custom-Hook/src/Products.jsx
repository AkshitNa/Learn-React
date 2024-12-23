import { useState } from "react";
import { useFetch } from "./Hook/useFetch";

const Products = () => {

  const [url, setUrl] = useState("http://localhost:8080/product");

  const {products} = useFetch(url);

  return (
    <>
     <h1>Hello World</h1>

     <div className="w-[500px] h-[500px] bg-blue-600">
      {products && products.map((product) => 
      
      <div key={product.id}>
      <span> {product.name} </span>
      <span> ${product.price} </span>
      </div>

      )}
     </div>
    
    </>
  );
};

export default Products;
