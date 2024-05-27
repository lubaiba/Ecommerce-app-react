import React, { useState, useEffect } from "react";
const Cart = () => {
  var footer = {
    minHeight: "100vh",
  };

  const [cart, setCart] = useState({});
  const getHeaders = () => {
    const publicKey = "pk_5621351f171389979a3ef502a91eba7fdabc4b7f8070a";
    return {
      "X-Authorization": publicKey,
      Accept: "application/json",
      "Content-Type": "application/json",
    };
  };
  useEffect(() => {
    const cartId = "cart_kpnNwAWXE95mXB";
    fetch(`https://api.chec.io/v1/carts/${cartId}`, {
      headers: getHeaders(),
    })
      .then((response) => response.json())
      .then((data) => setCart(data))
      .catch((error) => console.error("Error fetching cart:", error));
  }, []);
  const handleRemoveFromCart = async (lineItemId) => {
    try {
      await fetch(
        `https://api.chec.io/v1/carts/${cart.id}/items/${lineItemId}`,
        {
          method: "DELETE",
          headers: getHeaders(),
        }
      );
      console.log("Product removed from cart");

      const response = await fetch("https://api.chec.io/v1/carts", {
        headers: getHeaders(),
      });
      const data = await response.json();
      setCart(data);
    } catch (error) {
      console.error("Error removing product from cart:", error);
    }
  };
  if (!cart) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div className="container d-flex flex-column gap-3" style={footer}>
        <h1>Your Shopping Cart</h1>
        <ul>
          {cart.line_items &&
            cart.line_items.map((item) => (
              <li key={item.id} className="pt-3">
                {item.name}
                <br></br>
                Quantity: {item.quantity}
                <br></br>
                Price: {item.price.formatted_with_symbol}
                <br />
                <div className="pt-2">
                  <button
                    onClick={() => handleRemoveFromCart(item.id)}
                    className="btn btn-primary"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
        </ul>
        <div>
          <button className="btn btn-dark">CHECKOUT</button>
        </div>
      </div>
    </>
  );
};
export default Cart;
