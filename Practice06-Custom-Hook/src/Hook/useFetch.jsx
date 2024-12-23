import React, { useEffect, useState } from 'react'

export const useFetch = (url) => {

  const [products, setProducts] = useState(null); //null means no Result while Empty array [] can be a result.

  useEffect(() => {

    const fetchProducts = async () => {

      const response = await fetch(url);
      const data = await response.json();
      setProducts(data);
    }

    fetchProducts();
    
  }, [url]);  

  return {products};
}
