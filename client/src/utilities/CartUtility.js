import { useDispatch } from "react-redux";
import {
  addToCart,
  decreaseCart,
  removeFromCart,
  clearCart,
  getTotals,
} from "../features/CartSlice";

export const useCartActions = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (cartItem) => {
    dispatch(addToCart(cartItem))
  }

  const handleRemoveFromCart = (cartItem) => {
    dispatch(removeFromCart(cartItem));
  };

  const handleDecreaseCart = (cartItem) => {
    dispatch(decreaseCart(cartItem));
  };

  const handleIncrementCart = (cartItem) => {
    dispatch(addToCart(cartItem));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleGetTotals = () => {
    dispatch(getTotals());
  };

  return {
    handleAddToCart,
    handleRemoveFromCart,
    handleDecreaseCart,
    handleIncrementCart,
    handleClearCart,
    handleGetTotals,
  };
};
