import React, { useEffect } from "react";
import "./Bottle.css";

const Bottle = ({ bottle, handleAddToCart, handleRemoveFromCart }) => {
  const [isInCart, setIsInCart] = React.useState(false);

  // Check if the bottle is in the cart when the component mounts
  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    setIsInCart(cartItems.includes(bottle.id));
  }, [bottle.id]);

  const handleCart = () => {
    if (isInCart) {
      setIsInCart(false);
      handleRemoveFromCart(bottle.id);
    } else {
      setIsInCart(true);
      handleAddToCart(bottle);
    }
  };

  return (
    <div className="bottle-container">
      <img src={bottle.img} alt={bottle.name} className="bottle-image" />
      <p>{bottle.name}</p>
      <p>${bottle.price}</p>
      <p>Remaining: {bottle.stock}</p>
      <button className="btn" onClick={handleCart}>
        {isInCart ? "Remove from Cart" : "Add to Cart"}
      </button>
    </div>
  );
};

export default Bottle;
