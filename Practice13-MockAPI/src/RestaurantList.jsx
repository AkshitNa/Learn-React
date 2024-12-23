import React, { useEffect, useState } from "react";
import mockApiData from "./data.json";

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    // Simulating an API call
    setRestaurants(mockApiData.data.cards);
  }, []);

  return (
    <div>
      <h1>Restaurant List</h1>
      {restaurants.length > 0 ? (
        <ul>
          {restaurants.map((restaurant) => (
            <li key={restaurant.id}>
              <h2>{restaurant.name}</h2>
              <img
                src={restaurant.image}
                alt={restaurant.name}
                style={{ width: "150px", borderRadius: "10px" }}
              />
              <p>Rating: {restaurant.rating}</p>
              <p>Cuisines: {restaurant.cuisines.join(", ")}</p>
              <p>Location: {restaurant.location.address}, {restaurant.location.city}</p>
              <p>Delivery Time: {restaurant.deliveryTime}</p>
              <p>Cost for Two: ₹{restaurant.costForTwo}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No restaurants found.</p>
      )}
    </div>
  );
};

export default RestaurantList;
