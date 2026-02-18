import React from "react";

const products = [
  { id: 1, name: "Aloe Vera" },
  { id: 2, name: "Snake Plant" }
];

function ProductList() {
  return (
    <div>
      <h2>Plant Shop</h2>
      {products.map(p => (
        <div key={p.id}>{p.name}</div>
      ))}
    </div>
  );
}

export default ProductList;
