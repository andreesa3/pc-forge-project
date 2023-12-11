import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { toast } from "react-toastify";
import { useCartActions } from "../../utilities/CartUtility";
import { useEffect } from "react";

const PaypalButton = ({ totalPrice }) => {
  const { handleClearCart } = useCartActions();
  useEffect(() => {
    const approvedPay = () => {
      handleClearCart();
      toast.success(`Pagamento avvenuto con successo!`, {
        position: "bottom-left",
      });
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
