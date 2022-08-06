/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import CheckoutProduct from "./CheckoutProduct";
import "./Payment.css";
import axios from "./axios";
import { Link, useHistory } from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import { getCartTotal } from "./reducer";
import { useStateValue } from "./StateProvider";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

const Payment = () => {
  const [{ cart, user }, dispatch] = useStateValue();

  const stripe = useStripe();
  const element = useElements();
  const history = useHistory();

  const [error, setError] = useState(null);
  const [disable, setDisable] = useState(true);
  const [succeded, setSucceded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        url: `/payments/create?total= ₹(getCartTotal(cart)*100)`,
      });
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [cart]);

  console.log("the secret is >>> ", clientSecret);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: element.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        setSucceded(true);
        setError(null);
        setProcessing(false);

        history.replace("/order");
      });
  };

  const handleChenge = (event) => {
    setDisable(event.empty);
    setError(event.error ? event.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to={"/checkout"}>{cart?.length} items</Link>)
        </h1>
        {/* payment address */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Deliver Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>D D Nagar, Gwalior</p>
            <p>Madhya Pradesh, INDIA</p>
          </div>
        </div>
        {/* payment review item */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
            {cart.map((item) => (
              <CheckoutProduct
                key={item.key}
                title={item.title}
                image={item.image}
                price={item.price}
              />
            ))}
          </div>
        </div>

        {/* payment method */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChenge} />
              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <h3>Order Total: {value}</h3>
                    </>
                  )}
                  decimalScale={2}
                  value={getCartTotal(cart)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"₹"}
                />
                <button disabled={processing || disable || succeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
