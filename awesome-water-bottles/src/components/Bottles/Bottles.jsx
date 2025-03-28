import React, { use, useState, useEffect } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css";
import {
  getStoreCart,
  setToStoredCart,
  removeFromCart,
} from "../../utilities/LocalStroage";

const Bottles = ({ BottlesPromise }) => {
  const bottles = use(BottlesPromise);
  const [cart, setCart] = useState([]);

  const handleAddToCart = (bottle) => {
    if (cart.includes(bottle)) {
      return;
    }
    const newCart = [...cart, bottle];
    setCart(newCart);
    setToStoredCart(bottle.id);
  };
  const handleRemoveFromCart = (id) => {
    removeFromCart(id);
    const remainingCart = cart.filter((bottle) => bottle.id !== id);
    setCart(remainingCart);
  };

  //useEffect
  useEffect(() => {
    const storedCart = getStoreCart();
    const savedCart = [];

    for (const id of storedCart) {
      const addedBottle = bottles.find((bottle) => bottle.id === id);
      if (addedBottle) {
        savedCart.push(addedBottle);
      }
    }
    setCart(savedCart);
  }, [bottles]);

  return (
    <>
      <div>
        <h2>Card items: {cart.length}</h2>
        <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
          <button>Show Cart items</button>
          <button>Remove all items</button>
        </div>
      </div>
      <div className="bottles-container">
        {bottles.map((bottle) => (
          <Bottle
            key={bottle.id}
            bottle={bottle}
            handleAddToCart={handleAddToCart}
            handleRemoveFromCart={handleRemoveFromCart}
          ></Bottle>
        ))}
      </div>
    </>
  );
};

export default Bottles;
