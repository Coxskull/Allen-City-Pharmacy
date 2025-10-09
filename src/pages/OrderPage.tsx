import React, { useState } from "react";
import { Link } from "react-router-dom";

const OrderPage: React.FC = () => {
  const [step, setStep] = useState<"choose" | "upload" | "status">("choose");

  return (
    <div className="min-h-screen flex flex-col text-gray-800 bg-[linear-gradient(135deg,#22c58f_0%,#af9f11_100%)]">
      {/* Navbar */}
      <header className="bg-white/90 shadow-md sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
          <Link
            to="/"
            className="text-2xl font-bold text-green-700 hover:text-green-800"
          >
            Allen City Pharmacy
          </Link>
          <ul className="hidden md:flex gap-6 text-lg">
            <li>
              <Link to="/" className="hover:text-green-700">
                Home
              </Link>
            </li>
            <li>
              <Link to="/shop" className="hover:text-green-700">
                Shop
              </Link>
            </li>
            <li>
              <Link
                to="/order"
                className="text-green-700 font-semibold underline"
              >
                Orders
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-green-700">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-green-700">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto text-center py-12 px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
          Manage Your Orders & Prescriptions
        </h1>
        <p className="text-white/90 text-lg max-w-2xl mx-auto">
          Refill your prescriptions, upload new ones, or check your order
          status — all in one convenient page.
        </p>
      </section>

      {/* Main Section */}
      <main className="flex-1 bg-white rounded-t-3xl py-12">
        <div className="max-w-6xl mx-auto px-6">
          {/* Step 1 — Choose Action */}
          {step === "choose" && (
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div
                className="p-6 rounded-2xl shadow hover:shadow-lg bg-green-50 transition cursor-pointer"
                onClick={() => setStep("upload")}
              >
                <div className="text-5xl mb-3">📸</div>
                <h2 className="text-xl font-bold text-green-700 mb-2">
                  Upload Prescription
                </h2>
                <p className="text-gray-600">
                  Upload a photo or PDF of your prescription to start a new
                  order.
                </p>
              </div>

              <div
                className="p-6 rounded-2xl shadow hover:shadow-lg bg-green-50 transition cursor-pointer"
                onClick={() => alert('Refill prescription process started')}
              >
                <div className="text-5xl mb-3">💊</div>
                <h2 className="text-xl font-bold text-green-700 mb-2">
                  Refill Prescription
                </h2>
                <p className="text-gray-600">
                  Enter your Rx number to refill existing prescriptions easily.
                </p>
              </div>

              <div
                className="p-6 rounded-2xl shadow hover:shadow-lg bg-green-50 transition cursor-pointer"
                onClick={() => setStep("status")}
              >
                <div className="text-5xl mb-3">📦</div>
                <h2 className="text-xl font-bold text-green-700 mb-2">
                  Track My Orders
                </h2>
                <p className="text-gray-600">
                  Check your prescription or delivery status instantly.
                </p>
              </div>
            </div>
          )}

          {/* Step 2 — Upload Prescription */}
          {step === "upload" && (
            <div className="text-center space-y-6">
              <h2 className="text-3xl font-bold text-green-700">
                Upload Your Prescription
              </h2>
              <p className="text-gray-600 max-w-lg mx-auto">
                Upload a clear image or PDF file of your prescription. Our team
                will process it promptly.
              </p>

              <div className="flex flex-col items-center space-y-4">
                <input
                  type="file"
                  accept="image/*,application/pdf"
                  className="border border-green-300 rounded-lg p-3 w-full max-w-sm"
                />
                <button
                  onClick={() => alert("Prescription uploaded successfully!")}
                  className="bg-green-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-800 transition"
                >
                  Submit Prescription
                </button>
                <button
                  onClick={() => setStep("choose")}
                  className="text-green-700 underline hover:text-green-800"
                >
                  ← Back
                </button>
              </div>
            </div>
          )}

          {/* Step 3 — Track Order Status */}
          {step === "status" && (
            <div className="text-center space-y-6">
              <h2 className="text-3xl font-bold text-green-700">
                Track Your Orders
              </h2>
              <p className="text-gray-600 max-w-lg mx-auto">
                Enter your Order ID or Prescription Number to check its status.
              </p>

              <div className="flex flex-col items-center space-y-4">
                <input
                  type="text"
                  placeholder="Enter Order ID or Rx Number"
                  className="border border-green-300 rounded-lg p-3 w-full max-w-sm"
                />
                <button
                  onClick={() => alert("Order status: Ready for pickup!")}
                  className="bg-green-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-800 transition"
                >
                  Check Status
                </button>
                <button
                  onClick={() => setStep("choose")}
                  className="text-green-700 underline hover:text-green-800"
                >
                  ← Back
                </button>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-8 mt-auto">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-1">
              <li>
                <Link to="/shop" className="hover:underline">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:underline">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Contact Us</h4>
            <p>123 Main Street, Allen City</p>
            <p>Email: info@allencitypharmacy.com</p>
            <p>Phone: (555) 123-4567</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Stay Connected</h4>
            <p>Follow us for health tips & updates.</p>
            <div className="flex gap-4 mt-3 text-2xl">
              <a href="#" className="hover:text-yellow-300">📘</a>
              <a href="#" className="hover:text-yellow-300">📸</a>
              <a href="#" className="hover:text-yellow-300">🐦</a>
            </div>
          </div>
        </div>
        <div className="text-center mt-6 text-sm text-white/80">
          © {new Date().getFullYear()} Allen City Pharmacy. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default OrderPage;
