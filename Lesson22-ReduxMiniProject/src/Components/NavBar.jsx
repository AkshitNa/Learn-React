import React from "react";
import { useSelector } from "react-redux"; //React-Redux
import { FaCartShopping } from "react-icons/fa6"; //Importing Icon
import "../Components/Component.css"; //Importing CSS

function NavBar() {

  //Logic To Sum All The Item Quantity We Put Into Our "CART"

  const cart = useSelector((state) => state.CartCounterReducer.cart); //Cart is an array.

  let count = 0;

  cart.forEach((item) => {
    count += item.quantity;
  });

  return (
    // NavBar => BootStrap 
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Naughty Myntra
        </a>

        {/* For Toggle List */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li
              className="nav-item"
              style={{
                fontSize: "1.5rem",
                display: "flex",
                alignItems: "center",
              }}
            >
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li
              className="nav-item cart-item"
              style={{
                fontSize: "1.5rem",
                display: "flex",
                alignItems: "center",
              }}
            >
              Cart
              <FaCartShopping //Loading Cart Icon from React-Icon
                style={{ fontSize: "2rem", marginLeft: "0.5rem" }}
              />
              <h3 className="boxer"> {count} </h3>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
