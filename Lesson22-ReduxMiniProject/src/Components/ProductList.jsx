import { useDispatch, useSelector } from "react-redux"; //React-Redux
import { fetchData } from "../Redux/Slices/Product"; //Redux-Thunk
import React, { useEffect } from "react"; //To call API once.

import SingleProduct from "../Components/SingleProduct";
import "../Components/Component.css";

function ProductList() {
  const dispatch = useDispatch();
  const productsArray = useSelector((state) => state.ProductReducer.products); // products array

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <div className="product-view">

      {productsArray.map((item) => (
        <SingleProduct key={item.id} product={item} /> //Passing Props
      ))}
      
    </div>
  );
}

export default ProductList;
