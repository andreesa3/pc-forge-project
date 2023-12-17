import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { toast } from "react-toastify";
import { useCartActions } from "../../utilities/CartUtility";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom"

const PaypalButton = ({ totalPrice }) => {
  const { handleClearCart } = useCartActions();
  const navigate = useNavigate()
  useEffect(() => {
    const approvedPay = () => {
      handleClearCart();
      toast.success(`Pagamento avvenuto con successo!`, {
        position: "bottom-left",
      });
      navigate("/thanksForBuy")
    };

    window.handleApprovedPay = approvedPay;
  }, [handleClearCart]);

  return (
    <PayPalScriptProvider>
      <PayPalButtons
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: totalPrice,
                },
              },
            ],
          });
        }}
        onApprove={() => {
          window.handleApprovedPay();
        }}
      />
    </PayPalScriptProvider>
  );
};

export default PaypalButton;
