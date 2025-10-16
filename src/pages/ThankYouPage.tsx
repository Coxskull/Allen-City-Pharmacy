import React, { useEffect, useState } from "react";

interface CartItem {
  name: string;
  price: number;
  qty: number;
}

interface CheckoutData {
  items: CartItem[];
  subtotal: number;
  tax: number;
  shipping: number;
  total: number;
}

const ThankYouPage: React.FC = () => {
  const [checkoutData, setCheckoutData] = useState<CheckoutData | null>(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("checkoutData") || "null");
    if (data) setCheckoutData(data);
    localStorage.removeItem("checkoutData");
  }, []);

  return (
    <div className="text-gray-800 font-sans bg-[linear-gradient(135deg,#22c55e_0%,#f97316_100%)] bg-fixed min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-green-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src="/AllenCity Pharmacy Logo.png"
              alt="Allen City Pharmacy"
              className="h-11 w-11 object-contain"
            />
            <div>
              <div className="text-lg font-bold text-green-800">Allen City Pharmacy</div>
              <div className="text-xs text-gray-500 -mt-1">Trusted Health Partner</div>
            </div>
          </div>
          <nav className="flex items-center gap-6 text-sm">
            <a href="index.html" className="text-gray-600 hover:text-green-700 transition">
              Home
            </a>
            <a href="about.html" className="text-gray-600 hover:text-green-700 transition">
              About
            </a>
            <a href="shop.html" className="text-gray-600 hover:text-green-700 transition">
              Shop
            </a>
            <a href="contact.html" className="text-gray-600 hover:text-green-700 transition">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-16 flex-1">
        <div className="bg-white rounded-2xl shadow-lg border border-green-100 p-10 text-center">
          <div className="flex flex-col items-center">
            <div className="bg-green-700 text-white rounded-full h-20 w-20 flex items-center justify-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>

            <h1 className="text-3xl font-bold text-green-800 mb-2">Thank You for Your Order!</h1>
            <p className="text-gray-600 mb-8">
              Your order has been successfully placed. A confirmation email has been sent to you.
            </p>

            {/* Order Summary */}
            <div className="bg-gray-50 border rounded-xl p-6 text-left w-full md:w-3/4 mx-auto">
              <h2 className="text-lg font-semibold text-green-700 mb-3">Order Summary</h2>

              <div className="space-y-2 max-h-48 overflow-auto mb-3">
                {checkoutData && checkoutData.items.length > 0 ? (
                  checkoutData.items.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center text-sm border-b pb-1"
                    >
                      <span>{item.name} × {item.qty}</span>
                      <span>₱{(item.price * item.qty).toFixed(2)}</span>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500 text-sm">No order data available.</p>
                )}
              </div>

              <div className="flex justify-between text-sm text-gray-600">
                <span>Subtotal</span>
                <span>₱{checkoutData?.subtotal.toFixed(2) || "0.00"}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-600 mt-1">
                <span>Shipping</span>
                <span>₱{checkoutData?.shipping.toFixed(2) || "0.00"}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-600 mt-1">
                <span>Estimated Tax</span>
                <span>₱{checkoutData?.tax.toFixed(2) || "0.00"}</span>
              </div>

              <div className="border-t my-4"></div>

              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Total</span>
                <span className="text-2xl font-bold text-green-800">
                  ₱{checkoutData?.total.toFixed(2) || "0.00"}
                </span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mt-10">
              <a
                href="index.html"
                className="bg-green-700 text-white px-6 py-3 rounded-md hover:bg-green-800 w-full sm:w-auto text-center"
              >
                Return Home
              </a>
              <a
                href="shop.html"
                className="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 w-full sm:w-auto text-center"
              >
                Continue Shopping
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 text-center text-sm text-gray-100 bg-green-800/90 mt-10 rounded-t-2xl">
        &copy; 2025 Allen City Pharmacy. All Rights Reserved.
      </footer>
    </div>
  );
};

export default ThankYouPage;
