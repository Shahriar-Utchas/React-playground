import React from "react";
import "./Bottle.css";

const Bottle = ({ bottle }) => {
  return (
    <div className="bottle-container">
      <img src={bottle.img} alt={bottle.name} className="bottle-image" />
      <p>{bottle.name}</p>
      <p>${bottle.price}</p>
      <p>Remaining: {bottle.stock}</p>
      <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
        <button className="btn">Add to cart</button>
        <button className="btn">Buy Now</button> 
      </div>
    </div>
  );
};

export default Bottle;
