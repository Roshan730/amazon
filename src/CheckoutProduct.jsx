/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, image, title, price, hideButton }) {
  const [{ cart }, dispatch] = useStateValue();

  const removeFromCart = () => {
    // remove the item from the basket
    dispatch({
      type: "REMOVE_FROM_CART",
      key: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        {!hideButton && (
          <button onClick={removeFromCart}>Remove from Basket</button>
        )}
      </div>
    </div>
  );
}

export default CheckoutProduct;
