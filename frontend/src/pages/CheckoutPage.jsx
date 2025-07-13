import { useEffect, useState } from "react";
import React from 'react';
import axios from "axios";

export default function CheckoutPage() {
  const [cartItems, setCartItems] = useState([]);
  const [paying, setPaying] = useState(false);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(cart);
  }, []);

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  const loadRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    setPaying(true);
    const res = await loadRazorpay();
    if (!res) {
      alert("Razorpay SDK failed to load.");
      setPaying(false);
      return;
    }

    try {
      const order = await axios.post("/api/payment/create-order", {
        amount: total
      });

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY,
        amount: order.data.amount,
        currency: "INR",
        name: "ShopKart",
        description: "Order Payment",
        order_id: order.data.id,
        handler: async function (response) {
          const verification = await axios.post("/api/payment/verify", {
            ...response
          });

          if (verification.data.success) {
            alert("Payment successful!");
            localStorage.removeItem("cart");
            window.location.href = "/";
          } else {
            alert("Payment verification failed.");
          }
        },
        prefill: {
          name: "Customer",
          email: "customer@example.com",
          contact: "9999999999"
        },
        theme: {
          color: "#0f172a"
        }
      };

      const razor = new window.Razorpay(options);
      razor.open();
    } catch (err) {
      console.error("Payment Error:", err);
      alert("Something went wrong.");
    } finally {
      setPaying(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold mb-6">Checkout</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div>
          <ul className="mb-6 space-y-2">
            {cartItems.map((item, index) => (
              <li
                key={index}
                className="flex justify-between bg-white p-3 rounded shadow"
              >
                <span>{item.name}</span>
                <span>₹{item.price}</span>
              </li>
            ))}
          </ul>
          <div className="text-right text-xl font-bold mb-6">
            Total: ₹{total}
          </div>
          <button
            disabled={paying}
            onClick={handlePayment}
            className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 disabled:opacity-50"
          >
            {paying ? "Processing..." : "Pay with Razorpay"}
          </button>
        </div>
      )}
    </div>
  );
}

