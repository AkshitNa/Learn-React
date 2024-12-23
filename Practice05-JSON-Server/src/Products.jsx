import { useEffect, useState } from "react";

const Products = () => {

  const [products, setProducts] = useState([]); //Empty Array
  const [url, setUrl] = useState("http://localhost:8080/product");

  useEffect(() => {

    //Step 01 => Calling function whenever the URL Changes
    const fetchProducts = async () => {

      try{
        const response = await fetch(url);
        const data = await response.json();
        setProducts(data);
      }catch(e){
        console.log(e);
      }
    }

     //Step 02 => Calling function
    fetchProducts();

  }, [url]); // Step 03 => Dependencies

  console.log(products);

  return (
    <>

     <h1>Hello World</h1>
     <div className="w-[500px] h-[500px] bg-blue-600">
      
      {
      products.map((product) => 
      <div key={product.id}>
      <span> {product.name} </span>
      <span> ${product.price} </span>
      </div>
      )
      }
     </div>
    
    </>
  );
};

export default Products;
