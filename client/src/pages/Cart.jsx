import { useSelector, useDispatch } from "react-redux";
import Button from "../components/home-components/Button";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import CheckOut from "../components/cart-components/CheckOut";
import { useCartActions } from "../utilities/CartUtility";
import { getTotals } from "../features/CartSlice";

const Cart = () => {
   const [checkOutDivOpen, setCheckOutDivOpen] = useState(false);
   const cart = useSelector((state) => state.cart);
   const { handleRemoveFromCart, handleDecreaseCart, handleIncrementCart, handleClearCart, handleGetTotals } = useCartActions();
   const dispatch = useDispatch();


  const openCheckOut=()=>{
    if (checkOutDivOpen == true){
      setCheckOutDivOpen(false)
    } else {
      setCheckOutDivOpen(true)
    }
    
  }

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);


  return (
    <section>
      <div className="wrapper cart-container">
        <h2>Carrello</h2>
        {cart.cartItems.length === 0 ? (
          <div className="cart-empty">
            <p>Il tuo carrello è vuoto</p>
            <Link to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-arrow-left-short"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"
                />
              </svg>
              <span>Inizia ad acquistare</span>
            </Link>
          </div>
        ) : (
          <div>
            <div className="titles">
              <h3 className="product-title">Prodotto</h3>
              <h3 className="price">Prezzo</h3>
              <h3 className="quantity">Quantità</h3>
              <h3 className="total">Totale</h3>
            </div>
            <div className="cart-items">
              {cart.cartItems?.map((cartItem) => (
                <div className="cart-item" key={cartItem.id}>
                  <div className="cart-product">
                    <img src={cartItem.img} alt={cartItem.name} />
                    <div>
                      <h3>{cartItem.name}</h3>
                      <p>{cartItem.desc}</p>
                      <button onClick={() => handleRemoveFromCart(cartItem)}>
                        Rimuovi
                      </button>
                    </div>
                  </div>
                  <div className="cart-product-price">€{cartItem.price}</div>
                  <div className="cart-product-quantity">
                    <button onClick={() => handleDecreaseCart(cartItem)}>
                      -
                    </button>
                    <div className="count">{cartItem.cartQuantity}</div>
                    <button onClick={() => handleIncrementCart(cartItem)}>
                      +
                    </button>
                  </div>
                  <div className="cart-product-total-price">
                  €{cartItem.price * cartItem.cartQuantity}
                  </div>
                </div>
              ))}
            </div>
            <div className="cart-summary">
              <button className="clear-btn" onClick={() => handleClearCart()}>
                Rimuovi tutto
              </button>
              <div className="cart-checkout">
                <div className="subtotal">
                  <span>Totale</span>
                  <span className="amount">€{cart.cartTotalAmount}</span>
                </div>
                <Button onClickFunction={openCheckOut} text="Check Out"></Button>
                {checkOutDivOpen && (<CheckOut closeCheckOut={openCheckOut} />)}

                <div className="continue-shopping">
                  <Link to="/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="currentColor"
                      className="bi bi-arrow-left-short"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"
                      />
                    </svg>
                    <span>Continua ad acquistare</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
export  const { handleClearCart, handleDecreaseCart, handleIncrementCart, handleRemoveFromCart } = Cart
export default Cart;
