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

const CheckOutPage: React.FC = () => {
  const [checkoutData, setCheckoutData] = useState<CheckoutData | null>(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
    deliveryMethod: "standard",
    orderNotes: "",
    cardName: "",
    cardNumber: "",
    cardExp: "",
    cardCVC: "",
    tos: false,
  });

  // Load stored cart data
  useEffect(() => {
    const data = localStorage.getItem("checkoutData");
    if (data) {
      setCheckoutData(JSON.parse(data));
    }
  }, []);

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { id, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: type === "checkbox" ? checked : value,
    }));
  };

  // Place order
  const handlePlaceOrder = () => {
    if (!formData.tos) {
      alert("Please agree to the terms and privacy policy.");
      return;
    }

    alert("✅ Order placed successfully! Thank you for your purchase.");
    localStorage.removeItem("checkoutData");
    window.location.href = "/";
  };

  return (
    <div className="text-gray-800 font-sans bg-[linear-gradient(135deg,#22c55e_0%,#f97316_100%)] bg-fixed min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-green-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src="AllenCity Pharmacy Logo.png"
              alt="Allen City Pharmacy"
              className="h-11 w-11 object-contain"
            />
            <div>
              <div className="text-lg font-bold text-green-800">Allen City Pharmacy</div>
              <div className="text-xs text-gray-500 -mt-1">Secure Checkout</div>
            </div>
          </div>
          <nav className="flex items-center gap-6 text-sm">
            <a href="/" className="text-gray-600 hover:text-green-700 transition">
              Home
            </a>
            <a href="/about" className="text-gray-600 hover:text-green-700 transition">
              About
            </a>
            <a href="/shop" className="text-gray-600 hover:text-green-700 transition">
              Shop
            </a>
            <a href="/contact" className="text-gray-600 hover:text-green-700 transition">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Main */}
      <main className="max-w-6xl mx-auto px-6 py-10 flex-grow">
        <h1 className="text-3xl font-bold text-black mb-6 text-center">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Billing & Payment */}
          <section className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-6 border border-green-100">
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <h2 className="text-xl font-semibold text-green-800 border-b pb-2">
                Billing Information
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <input
                  id="firstName"
                  type="text"
                  placeholder="First Name"
                  className="p-3 border rounded-md"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                />
                <input
                  id="lastName"
                  type="text"
                  placeholder="Last Name"
                  className="p-3 border rounded-md"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>

              <input
                id="email"
                type="email"
                placeholder="Email"
                className="p-3 border rounded-md w-full"
                required
                value={formData.email}
                onChange={handleChange}
              />
              <input
                id="address"
                type="text"
                placeholder="Street Address"
                className="p-3 border rounded-md w-full"
                required
                value={formData.address}
                onChange={handleChange}
              />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <input
                  id="city"
                  type="text"
                  placeholder="City"
                  className="p-3 border rounded-md"
                  required
                  value={formData.city}
                  onChange={handleChange}
                />
                <input
                  id="state"
                  type="text"
                  placeholder="State/Region"
                  className="p-3 border rounded-md"
                  required
                  value={formData.state}
                  onChange={handleChange}
                />
                <input
                  id="zip"
                  type="text"
                  placeholder="ZIP / Postal"
                  className="p-3 border rounded-md"
                  required
                  value={formData.zip}
                  onChange={handleChange}
                />
              </div>

              <input
                id="phone"
                type="tel"
                placeholder="Phone (for delivery updates)"
                className="p-3 border rounded-md w-full"
                required
                value={formData.phone}
                onChange={handleChange}
              />

              {/* Delivery */}
              <div>
                <label className="block text-sm font-semibold mb-2">Delivery Method</label>
                <select
                  id="deliveryMethod"
                  className="p-3 border rounded-md w-full"
                  value={formData.deliveryMethod}
                  onChange={handleChange}
                >
                  <option value="standard">Standard (2–4 days)</option>
                  <option value="express">Express (1–2 days)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Order Notes (Optional)
                </label>
                <textarea
                  id="orderNotes"
                  rows={3}
                  className="p-3 border rounded-md w-full"
                  placeholder="Leave delivery instructions..."
                  value={formData.orderNotes}
                  onChange={handleChange}
                />
              </div>

              {/* Payment */}
              <h2 className="text-xl font-semibold text-green-800 border-b pb-2">
                Payment Details
              </h2>

              <input
                id="cardName"
                type="text"
                placeholder="Name on Card"
                className="p-3 border rounded-md w-full"
                value={formData.cardName}
                onChange={handleChange}
              />
              <input
                id="cardNumber"
                type="text"
                placeholder="Card number (4242 4242 4242 4242)"
                className="mt-3 p-3 border rounded-md w-full"
                value={formData.cardNumber}
                onChange={handleChange}
              />

              <div className="grid grid-cols-3 gap-3 mt-3">
                <input
                  id="cardExp"
                  type="text"
                  placeholder="MM/YY"
                  className="p-3 border rounded-md"
                  value={formData.cardExp}
                  onChange={handleChange}
                />
                <input
                  id="cardCVC"
                  type="text"
                  placeholder="CVC"
                  className="p-3 border rounded-md"
                  value={formData.cardCVC}
                  onChange={handleChange}
                />
                <div className="p-3 border rounded-md text-sm text-gray-600 flex items-center justify-center">
                  Secure
                </div>
              </div>

              {/* Payment Icons */}
              <div className="mt-3">
                <p className="text-sm text-gray-600 mb-1">Accepted Payment Methods:</p>
                <div className="flex gap-3 items-center">
                  <a href="https://www.visa.com" target="_blank">
                    <img src="Visa.png" alt="Visa" className="h-5 hover:scale-110 transition-transform" />
                  </a>
                  <a href="https://www.mastercard.com" target="_blank">
                    <img src="mastercard.png" alt="Mastercard" className="h-5 hover:scale-110 transition-transform" />
                  </a>
                  <a href="https://www.americanexpress.com" target="_blank">
                    <img src="amex.png" alt="AmEx" className="h-5 hover:scale-110 transition-transform" />
                  </a>
                  <a href="https://pay.google.com" target="_blank">
                    <img src="Googleplayicon.png" alt="Google Pay" className="h-5 hover:scale-110 transition-transform" />
                  </a>
                  <a href="https://www.paypal.com" target="_blank">
                    <img src="Paypal.png" alt="PayPal" className="h-5 hover:scale-110 transition-transform" />
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 mt-4">
                <input id="tos" type="checkbox" checked={formData.tos} onChange={handleChange} />
                <label className="text-sm text-gray-600">
                  I agree to the{" "}
                  <a href="#" className="text-green-700 underline">
                    Terms & Privacy
                  </a>
                  .
                </label>
              </div>

              <div className="flex gap-3 mt-6 items-center justify-between">
                <button
                  type="button"
                  onClick={handlePlaceOrder}
                  className="bg-green-700 text-white px-4 py-3 rounded-md w-full hover:bg-green-800"
                >
                  Place Order
                </button>
                <a href="/cart" className="flex items-center justify-center">
                  <img
                    src="carticon.png"
                    alt="Edit Cart"
                    className="h-9 w-9 object-contain hover:scale-110 transition-transform duration-200"
                    title="Edit Cart"
                  />
                </a>
              </div>
            </form>
          </section>

          {/* Order Summary */}
          <aside className="bg-white rounded-2xl shadow-lg border border-green-100 p-6 h-fit">
            <h2 className="text-xl font-semibold text-green-800 mb-4 border-b pb-2">
              Order Summary
            </h2>

            <div className="space-y-3 max-h-56 overflow-auto mb-3">
              {checkoutData && checkoutData.items.length > 0 ? (
                checkoutData.items.map((item, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center text-sm border-b pb-2"
                  >
                    <span>
                      {item.name} × {item.qty}
                    </span>
                    <span>₱{(item.price * item.qty).toFixed(2)}</span>
                  </div>
                ))
              ) : (
                <p className="text-gray-500 text-sm">Your cart is empty.</p>
              )}
            </div>

            <div className="flex justify-between text-sm text-gray-600">
              <span>Subtotal</span>
              <span>₱{checkoutData ? checkoutData.subtotal.toFixed(2) : "0.00"}</span>
            </div>
            <div className="flex justify-between text-sm text-gray-600 mt-1">
              <span>Discount</span>
              <span>₱0.00</span>
            </div>
            <div className="flex justify-between text-sm text-gray-600 mt-1">
              <span>Shipping</span>
              <span>₱{checkoutData ? checkoutData.shipping.toFixed(2) : "0.00"}</span>
            </div>
            <div className="flex justify-between text-sm text-gray-600 mt-1">
              <span>Estimated Tax</span>
              <span>₱{checkoutData ? checkoutData.tax.toFixed(2) : "0.00"}</span>
            </div>

            <div className="border-t my-4"></div>

            <div className="flex justify-between items-center">
              <div>
                <div className="text-sm text-gray-600">Total</div>
                <div className="text-2xl font-bold text-green-800">
                  ₱{checkoutData ? checkoutData.total.toFixed(2) : "0.00"}
                </div>
              </div>
            </div>

            <div className="mt-4 text-xs text-gray-500">
              Payments are processed securely. Card payments only accepted on this page.
            </div>
          </aside>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 text-center text-sm text-gray-100 bg-green-800/90 mt-10 rounded-t-2xl">
        &copy; 2025 Allen City Pharmacy. All Rights Reserved.
      </footer>
    </div>
  );
};

export default CheckOutPage;
