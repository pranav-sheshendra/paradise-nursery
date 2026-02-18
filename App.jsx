import React, { useState } from "react";
import ProductList from "./ProductList";
import AboutUs from "./AboutUs";
import "./App.css";

function App() {
  const [showProductList, setShowProductList] = useState(false);

  if (showProductList) {
    return <ProductList />;
  }

  return (
    <div style={{ textAlign: "center", paddingTop: "150px" }}>
      <h1>Paradise Nursery</h1>
      <p>Welcome to e-plantShopping plant store</p>

      <AboutUs />

      <button
        onClick={() => setShowProductList(true)}
        style={{ padding: "12px 20px", fontSize: "18px", cursor: "pointer" }}
      >
        Get Started
      </button>
    </div>
  );
}

export default App;
