import React from "react";
import { Link } from "react-router-dom";

const ServicesPage: React.FC = () => {
  const services = [
    {
      title: "Prescription Refills",
      desc: "Easily refill prescriptions online or in-store. Manage your medications and set up automatic refills for convenience.",
      icon: "💊",
    },
    {
      title: "Vaccinations & Immunizations",
      desc: "Protect yourself and your family with vaccines for flu, COVID-19, shingles, and more — no appointment required.",
      icon: "💉",
    },
    {
      title: "Medication Therapy Management",
      desc: "Our licensed pharmacists can review your medications, check for interactions, and help you get the best results.",
      icon: "📋",
    },
    {
      title: "Health Screenings",
      desc: "Get health checks like blood pressure, cholesterol, and glucose screenings — quick and confidential.",
      icon: "🩺",
    },
    {
      title: "Home Delivery",
      desc: "We offer free local delivery for prescriptions and over-the-counter items. Stay healthy from home.",
      icon: "🚚",
    },
    {
      title: "Consult a Pharmacist",
      desc: "Ask our friendly pharmacists about any medication, side effects, or health concern — in person or by phone.",
      icon: "👩‍⚕️",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[linear-gradient(135deg,#22c58f_0%,#af9f11_100%)] text-gray-800">
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
              <Link to="/shop" className="hover:text-green-700">
                Shop
              </Link>
            </li>
            <li>
              <Link to="/services" className="text-green-700 font-semibold border-b-2 border-green-700">
                Services
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

      {/* Hero Banner */}
      <section className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto py-12 px-6 gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">
            Pharmacy Services You Can Trust
          </h1>
          <p className="text-white/90 text-lg">
            At Allen City Pharmacy, we offer professional health services to help
            you live better — from quick vaccinations to in-depth consultations.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-green-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-800 transition"
          >
            Book a Service
          </Link>
        </div>
        <div className="flex-1">
          <img
            src="/images/services-banner.jpg"
            alt="Pharmacy Services"
            className="rounded-2xl shadow-lg w-full"
          />
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-green-700 mb-8">
            Our Comprehensive Health Services
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-green-50 p-6 rounded-2xl shadow hover:shadow-lg transition text-left"
              >
                <div className="text-4xl mb-3">{s.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-green-700">
                  {s.title}
                </h3>
                <p className="text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Health Banner */}
      <section className="bg-green-700 py-12 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Your Health, Our Mission</h2>
        <p className="text-white/90 mb-6 max-w-3xl mx-auto">
          From everyday care to long-term wellness, Allen City Pharmacy is here
          to support your journey with trusted services and expert advice.
        </p>
        <Link
          to="/shop"
          className="bg-white text-green-800 px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition"
        >
          Explore Wellness Products
        </Link>
      </section>

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
            <p>Follow us for health tips & pharmacy updates.</p>
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

export default ServicesPage;
