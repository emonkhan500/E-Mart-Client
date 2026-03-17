import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
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
  className="max-w-2xl mx-auto mt-16 p-8 rounded-2xl shadow-xl bg-white border border-gray-100"
  onSubmit={handleSubmit}
>
  {/* Title */}
  <h2 className="text-2xl font-bold text-center text-green-600 mb-2">
    Secure Payment
  </h2>
  <p className="text-sm text-gray-500 text-center mb-6">
    Pay safely using your card
  </p>

  {/* Card Box */}
  <div className="p-4 border rounded-xl bg-gray-50 focus-within:ring-2 focus-within:ring-green-400 transition">
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
    className="w-full mt-6 bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-semibold transition duration-300 disabled:opacity-50"
  >
    Pay Now 💳
  </button>

  {/* Footer */}
  <p className="text-xs text-gray-400 text-center mt-4">
    Your payment is securely processed with Stripe
  </p>
</form>
    </div>
  );
};

export default CheckoutForm;
