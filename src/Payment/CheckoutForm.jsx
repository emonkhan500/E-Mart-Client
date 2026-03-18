import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { CiCreditCard1 } from "react-icons/ci";
import ShareHead from "../Shared/ShareHead";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
  };
  return (
    <div className="">
      {/* <ShareHead pageTitle={"Pay For Order"}></ShareHead> */}
      <form
  className="max-w-2xl mx-auto mt-6 md:mt-10 p-2 md:p-8 rounded-2xl border-2 border-bg-honeydew drop-shadow-lg bg-white "
  onSubmit={handleSubmit}
>
  {/* Title */}
  <h2 className="text-3xl font-bold text-center text-primary-green mb-1 md:mb-2">
    Secure Payment
  </h2>
  <p className="text-sm text-primary-text text-center mb-6">
    Pay safely using your card
  </p>

  {/* Card Box */}
  <div className="p-4 border border-border-gray rounded-md">
    <CardElement
      options={{
        style: {
          base: {
            fontSize: "16px",
            color: "#1f2937",
            fontFamily: "Arial, sans-serif",
            "::placeholder": {
              color: "#9ca3af",
            },
          },
          invalid: {
            color: "#ef4444",
          },
        },
      }}
    />
  </div>

  {/* Pay Button */}
  <button
    type="submit"
    disabled={!stripe}
    className="w-full mt-3 md:mt-6 bg-primary-green  text-white py-3 rounded-md font-semibold flex items-center justify-center gap-2"
  >
    Pay Now <CiCreditCard1 className="text-lg"/>
  </button>

  {/* Footer */}
  <p className="text-xs text-primary-gray text-center leading-3 mt-4">
    Your payment is securely processed with Stripe
  </p>
</form>
    </div>
  );
};

export default CheckoutForm;
