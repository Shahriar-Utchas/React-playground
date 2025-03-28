import React, { use, useState, useEffect } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css";
import Cart from "../cart/cart";
import {
  getStoreCart,
  setToStoredCart,
  removeFromCart,
  removeAllCart,
} from "../../utilities/LocalStroage";

const Bottles = ({ BottlesPromise }) => {
  const bottles = use(BottlesPromise);
  const [cart, setCart] = useState([]);
  const [showCartComponent, setShowCartComponent] = useState(false);

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
  const handleClearCart = () => {
    removeAllCart();
    setCart([]);
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
  const handleCartBtnClick = () => {
    setShowCartComponent(true);
  };

  return (
    <>
      <div>
        <h2>Cart items: {cart.length}</h2>
        <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
          <button onClick={handleCartBtnClick}>Show Cart items</button>
          <button onClick={handleClearCart} disabled={cart.length === 0}>
            Remove all cart items
          </button>
        </div>
      </div>
      {showCartComponent ? (
        <Cart
          cart={cart}
          handleRemoveFromCart={handleRemoveFromCart}
          setShowCartComponent={setShowCartComponent}
        ></Cart>
      ) : (
        <div className="bottles-container">
          {bottles.map((bottle) => (
            <Bottle
              key={bottle.id}
              bottle={bottle}
              handleAddToCart={handleAddToCart}
              handleRemoveFromCart={handleRemoveFromCart}
              cart={cart}
            ></Bottle>
          ))}
        </div>
      )}
    </>
  );
};

export default Bottles;
