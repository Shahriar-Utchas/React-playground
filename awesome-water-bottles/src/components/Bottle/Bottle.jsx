import React from "react";
import "./Bottle.css";

const Bottle = ({ bottle, handleAddToCart }) => {
  // const [isInCart, setIsInCart] = React.useState(false);
  return (
    <div className="bottle-container">
      <img src={bottle.img} alt={bottle.name} className="bottle-image" />
      <p>{bottle.name}</p>
      <p>${bottle.price}</p>
      <p>Remaining: {bottle.stock}</p>
      <button className="btn" onClick={() => handleAddToCart(bottle)}>
        Add to cart
      </button>
    </div>
  );
};

export default Bottle;
