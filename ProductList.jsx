import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./CartSlice";

const plants = [
  { id: 1, name: "Aloe Vera", price: 10, category: "Indoor", img: "https://via.placeholder.com/100" },
  { id: 2, name: "Snake Plant", price: 15, category: "Indoor", img: "https://via.placeholder.com/100" },
  { id: 3, name: "Peace Lily", price: 20, category: "Decorative", img: "https://via.placeholder.com/100" },
  { id: 4, name: "Spider Plant", price: 18, category: "Decorative", img: "https://via.placeholder.com/100" },
  { id: 5, name: "Fern", price: 12, category: "Outdoor", img: "https://via.placeholder.com/100" },
  { id: 6, name: "Bamboo", price: 25, category: "Outdoor", img: "https://via.placeholder.com/100" }
];

function ProductList() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Plant Collection</h2>

      {plants.map((plant) => (
        <div key={plant.id} style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
          <img src={plant.img} alt={plant.name} />
          <h3>{plant.name}</h3>
          <p>Category: {plant.category}</p>
          <p>Price: ${plant.price}</p>

          <button onClick={() => dispatch(addItem({ ...plant, quantity: 1 }))}>
            Add to Cart
          </button>
        </div>
      ))}

      <h3>Cart Items: {cart.length}</h3>
    </div>
  );
}

export default ProductList;

