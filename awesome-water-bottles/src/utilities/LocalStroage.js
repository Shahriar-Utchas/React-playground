const getCartFromLocalStorage = () => {
  const cart = localStorage.getItem("cart");
  if (cart) {
    return JSON.parse(cart);
  }
  return [];
};

const setCartToLocalStorage = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

const AddItemToCartLocalStorage = (id) => {
  const cart = getCartFromLocalStorage();
  const newCart = [...cart, id];
  setCartToLocalStorage(newCart);
};

const RemoveItemFromCartLocalStorage = (id) => {
  const cart = getCartFromLocalStorage();
  const remainingCart = cart.filter((storedId) => storedId !== id);
  setCartToLocalStorage(remainingCart);
};

export {
  getCartFromLocalStorage as getStoreCart,
  AddItemToCartLocalStorage as setToStoredCart,
  RemoveItemFromCartLocalStorage as removeFromCart,
};
