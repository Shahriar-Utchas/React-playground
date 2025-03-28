import React, { use, useState, useEffect } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css";
import { getStoreCart, setToStoredCart } from "../../utilities/LocalStroage";

const Bottles = ({ BottlesPromise }) => {
  const bottles = use(BottlesPromise);
  const [cart, setCart] = useState([]);

  const handleAddToCart = (bottle) => {
    const newCart = [...cart, bottle];
    setCart(newCart);
    setToStoredCart(bottle.id);
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
        <button>Show Cart items</button>
      </div>
      <div className="bottles-container">
        {bottles.map((bottle) => (
          <Bottle
            key={bottle.id}
            bottle={bottle}
            handleAddToCart={handleAddToCart}
          ></Bottle>
        ))}
      </div>
    </>
  );
};

export default Bottles;
