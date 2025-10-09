import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ServicesPage: React.FC = () => {
  const services = [
    {
      title: "Prescription Refills",
      desc: "Easily manage and refill your prescriptions online or in-store. Set up automatic refills and get notified when your medication is ready.",
      icon: "💊",
    },
    {
      title: "Vaccinations & Immunizations",
      desc: "We offer vaccines for flu, COVID-19, pneumonia, HPV, and more — no appointment needed. Walk in anytime to protect yourself and your family.",
      icon: "💉",
    },
    {
      title: "Medication Therapy Management",
      desc: "Get personalized consultations with our pharmacists to optimize your prescriptions and ensure safe, effective treatment outcomes.",
      icon: "📋",
    },
    {
      title: "Health Screenings",
      desc: "Affordable screenings for blood pressure, cholesterol, glucose, and BMI — with instant results and health recommendations.",
      icon: "🩺",
    },
    {
      title: "Home Delivery",
      desc: "Stay home and stay healthy — we offer free local delivery for prescriptions and essential health products.",
      icon: "🚚",
    },
    {
      title: "Consult a Pharmacist",
      desc: "Speak directly with our licensed pharmacists about dosage, side effects, or any medication concerns — in person or virtually.",
      icon: "👩‍⚕️",
    },
  ];

  const testimonials = [
    {
      name: "Maria Lopez",
      feedback:
        "The staff here are always kind and professional. I love how quick and easy the refill process is!",
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      name: "James Anderson",
      feedback:
        "Their vaccination service was super convenient — walked in during lunch and was done in 10 minutes!",
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      name: "Elaine Cruz",
      feedback:
        "Allen City Pharmacy really cares about their customers. I got a free consultation that helped me understand my new meds better.",
      rating: "⭐⭐⭐⭐⭐",
    },
  ];

  const trustBadges = [
    { icon: "🏥", text: "DOH Licensed Pharmacy" },
    { icon: "👩‍⚕️", text: "Certified Pharmacists" },
    { icon: "🌿", text: "Trusted Health Partner" },
    { icon: "⏱️", text: "Fast & Reliable Service" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-tr from-emerald-400 via-green-400 to-lime-300 text-gray-800 font-[Segoe_UI]">
      {/* Hero Banner */}
      <section className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto py-20 px-6 gap-10">
        <motion.div
          className="flex-1 space-y-5"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg">
            Caring for You, Every Step of the Way
          </h1>
          <p className="text-white/90 text-lg leading-relaxed">
            At <strong>Allen City Pharmacy</strong>, we combine modern healthcare with personal care.
            From prescriptions to wellness services, our goal is to help you live a healthier, happier life.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-green-800 px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition shadow-md"
          >
            Talk to a Pharmacist
          </Link>
        </motion.div>

        <motion.div
          className="flex-1"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/AllenCity Pharmacy Logo.png"
            alt="Pharmacy services illustration"
            className="rounded-2xl shadow-2xl w-full"
          />
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-green-700 mb-12">
            Comprehensive Pharmacy Services
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((s) => (
              <motion.div
                key={s.title}
                className="bg-green-50 p-8 rounded-3xl shadow hover:shadow-xl transition text-left"
                whileHover={{ scale: 1.03 }}
              >
                <div className="text-5xl mb-3">{s.icon}</div>
                <h3 className="text-2xl font-semibold mb-2 text-green-700">
                  {s.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-green-100 py-12">
        <div className="max-w-6xl mx-auto px-6 grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {trustBadges.map((badge) => (
            <motion.div
              key={badge.text}
              className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-5xl mb-3">{badge.icon}</div>
              <p className="font-semibold text-green-800">{badge.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-green-700 mb-10">
            What Our Customers Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <motion.div
                key={t.name}
                className="bg-green-50 p-8 rounded-3xl shadow hover:shadow-lg transition"
                whileHover={{ scale: 1.03 }}
              >
                <p className="text-gray-700 italic mb-3 leading-relaxed">
                  “{t.feedback}”
                </p>
                <p className="font-bold text-green-800">{t.name}</p>
                <p className="text-yellow-500 mt-1">{t.rating}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-green-700 py-20 text-center text-white">
        <h2 className="text-4xl font-bold mb-4">
          Your Trusted Pharmacy in Allen City
        </h2>
        <p className="text-white/90 mb-6 max-w-3xl mx-auto text-lg">
          Whether you need your prescription refilled or a quick vaccination,
          we’re here to make healthcare simpler and more accessible for you.
        </p>
        <Link
          to="/shop"
          className="bg-white text-green-800 px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition shadow-md"
        >
          Browse Health Products
        </Link>
      </section>
    </div>
  );
};

export default ServicesPage;
