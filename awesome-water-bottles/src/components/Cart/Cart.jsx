import React from "react";

const Cart = ({ cart, handleRemoveFromCart, setShowCartComponent }) => {
  const handleBackToHome = () => {
    setShowCartComponent(false); // Go back to Bottles component
  };
  if (cart.length === 0) {
    return (
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <h2>Your cart is empty</h2>
        <button onClick={handleBackToHome}>Add more items</button>
      </div>
    );
  }

  return (
    <div>
      <div
        style={{
          display: "flex",
          gap: "10px",
          justifyContent: "center",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        {cart.map((bottle) => (
          <div
            key={bottle.id}
            className="bottle-container"
            style={{
              textAlign: "center",
              border: "1px solid #ccc",
              padding: "10px",
              borderRadius: "5px",
              width: "200px",
            }}
          >
            <img
              style={{ width: "40%" }}
              src={bottle.img}
              alt={bottle.name}
              className="bottle-image"
            />
            <p>{bottle.name}</p>
            <p>${bottle.price}</p>
            <p>Remaining: {bottle.stock}</p>
            <button
              className="btn"
              onClick={() => handleRemoveFromCart(bottle.id)}
            >
              Remove from Cart
            </button>
          </div>
        ))}
      </div>
      <button onClick={handleBackToHome}>Add more items</button>
    </div>
  );
};

export default Cart;
