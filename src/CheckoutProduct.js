import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ key, id, image, title, price, rating, hideButton }) {
  // eslint-disable-next-line no-empty-pattern
  const [{}, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id,
    });
  };
  return (
    <div key={key} className="checkoutProduct">
      <img src={image} alt="Checkout-Product" className="checkoutProduct__image" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              // eslint-disable-next-line jsx-a11y/accessible-emoji
              <span role="img">⭐</span>
            ))}
        </div>
        {!hideButton && <button onClick={removeFromBasket}>Remove from basket</button>}
      </div>
    </div>
  );
}

export default CheckoutProduct;
