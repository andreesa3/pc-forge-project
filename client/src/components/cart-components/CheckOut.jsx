import React from "react";
import { useSelector } from "react-redux";
import PaypalButton from "./PaypalButtons";
import  returnCartPic from "../../assets/icons/return.png"

const CheckOut = ({ closeCheckOut }) => {
  const cart = useSelector((state) => state.cart);

  return (
    <div className="checkout-div">
      <p style={{ color: "white", fontSize: "25px" }} onClick={closeCheckOut}>
        <img src={returnCartPic} alt="" />
      </p>
      <script
        src={`https://www.paypal.com/sdk/js?client-id=il-tuo-client-id&currency=EUR`}
      ></script>
      <PaypalButton totalPrice={cart.cartTotalAmount} />
    </div>
  );
};

export default CheckOut;
