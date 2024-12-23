import React from "react";
import { useDispatch, useSelector } from "react-redux"; //React-Redux
import { addToCart, removeFromCart } from "../Redux/Slices/CartCounter"; //React-Redux Actions

import "../Components/Component.css"; //CSS

function SingleProduct({ product }) {

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.CartCounterReducer.cart); //Array
  const currItem = cart.find((item) => item.id == product.id); //product.id comes from API.
  const currQuantity = currItem ? currItem.quantity : 0; // currItem == 0 means false else true(currItem.quantity)]

  return (

    //Creating CARD [BootStrap]

    //NOTE:: This ID are unique key help react to deal each card independently.

    <div className="card" style={{ width: "18rem" }}>
      <img src={product.image} className="card-img-top" alt="Clothes Image" />

      <div className="card-body">
        <h5 className="card-title"> {product.name}</h5>
        <hr /> <hr />
        <h3 className="card-text"> Price: Rs. {product.price}</h3>
        <p className="card-text"> {product.creationAt}</p>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <button
            className="btn btn-primary"
            onClick={() => dispatch(addToCart(product.id))}
          >
            {" "}
            +{" "}
          </button>
          <h2> {currQuantity} </h2>
          <button
            href="#"
            className="btn btn-danger"
            onClick={() => dispatch(removeFromCart(product.id))}
          >
            {" "}
            -{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
