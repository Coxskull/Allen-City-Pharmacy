import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
  const [products, setProducts] = useState<
    { id: string; name: string; imageUrl: string; price: number }[]
  >([]);

  useEffect(() => {
    setProducts([
      {
        id: "1",
        name: "Vitamin C 500mg",
        imageUrl: "/images/vitamin-c.jpg",
        price: 19.99,
      },
      {
        id: "2",
        name: "Pain Reliever Tablets",
        imageUrl: "/images/pain-reliever.jpg",
        price: 12.49,
      },
      {
        id: "3",
        name: "First Aid Kit",
        imageUrl: "/images/first-aid.jpg",
        price: 24.99,
      },
    ]);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col text-gray-800 overflow-hidden">
      {/* Animated Background Layer */}
      <div className="absolute inset-0 z-0">
        {/* Animated Gradient */}
        <div
          className="absolute inset-0 animate-gradient bg-[length:400%_400%] bg-gradient-to-br from-green-700 via-emerald-400 to-lime-200 opacity-90"
          style={{ backgroundAttachment: "fixed" }}
        ></div>

        {/* Floating Medical Icons */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-1/4 text-6xl animate-float-slow">💊</div>
          <div className="absolute top-1/2 left-1/3 text-7xl animate-float-medium">💉</div>
          <div className="absolute bottom-10 right-1/4 text-6xl animate-float-slow">🧴</div>
          <div className="absolute top-1/4 right-1/3 text-8xl animate-float-fast">🩺</div>
          <div className="absolute bottom-1/3 left-10 text-7xl animate-float-medium">🩹</div>
        </div>

        {/* Subtle Overlay */}
        <div className="absolute inset-0 bg-white/20 backdrop-blur-[1px] mix-blend-overlay"></div>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto py-20 px-6 gap-8">
          <div className="flex-1 space-y-5">
            <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg">
              Welcome to Allen City Pharmacy
            </h1>
            <p className="text-white/90 text-lg md:text-xl max-w-lg">
              Your trusted neighborhood pharmacy — where wellness meets care.
              Explore our health essentials and get professional service from our
              experts.
            </p>
            <Link
              to="/shop"
              className="inline-block bg-green-700 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-800 hover:scale-105 transform transition"
            >
              Shop Now
            </Link>
          </div>
          <div className="flex-1">
            <img
              src="/images/pharmacy-hero.jpg"
              alt="Pharmacy"
              className="rounded-3xl shadow-2xl w-full border-4 border-white/40"
            />
          </div>
        </section>

        {/* Services Section */}
        <section className="bg-white/80 backdrop-blur-sm py-16">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-green-700 mb-10">
              Our Pharmacy Services
            </h2>
            <div className="grid md:grid-cols-3 gap-10">
              {[
                {
                  title: "Prescription Refills",
                  desc: "Quick and easy prescription refills online or in-store.",
                  icon: "💊",
                },
                {
                  title: "Vaccinations",
                  desc: "Flu shots, COVID-19, and more immunizations available.",
                  icon: "💉",
                },
                {
                  title: "Consultations",
                  desc: "Get personalized health advice from licensed pharmacists.",
                  icon: "🩺",
                },
              ].map((s) => (
                <div
                  key={s.title}
                  className="bg-green-50/80 backdrop-blur p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-transform hover:-translate-y-1"
                >
                  <div className="text-5xl mb-3">{s.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-green-700">
                    {s.title}
                  </h3>
                  <p className="text-gray-700">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="bg-gray-50/90 backdrop-blur-md py-16">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-green-700 mb-10">
              Featured Products
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
              {products.map((p) => (
                <Link
                  to={`/product/${p.id}`}
                  key={p.id}
                  className="bg-white rounded-3xl shadow hover:shadow-2xl transition transform hover:-translate-y-1 text-center p-5"
                >
                  <img
                    src={p.imageUrl}
                    alt={p.name}
                    className="w-full h-56 object-cover rounded-2xl mb-4"
                  />
                  <h4 className="font-semibold text-lg text-gray-800">
                    {p.name}
                  </h4>
                  <p className="text-green-700 font-bold">
                    ${p.price.toFixed(2)}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="bg-white/90 backdrop-blur-sm py-16">
          <div className="max-w-6xl mx-auto px-6 text-center space-y-4">
            <h2 className="text-3xl font-bold text-green-700">
              About Allen City Pharmacy
            </h2>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto">
              For over 20 years, Allen City Pharmacy has proudly served our
              community with trusted healthcare products and personal service.
              From prescriptions to wellness guidance, we’re here to care for
              you and your family.
            </p>
            <ul className="text-gray-800 mt-6 space-y-1 font-medium">
              <li>📍 123 Main Street, Allen City</li>
              <li>⏰ Mon–Fri 9am–7pm | Sat 9am–5pm | Sun Closed</li>
              <li>📞 (555) 123-4567</li>
            </ul>
          </div>
        </section>
      </div>

      {/* Keyframes for animation */}
      <style>{`
        /* Smooth animated gradient */
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: gradientMove 15s ease infinite;
        }

        /* Floating icon animations */
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.2; }
          50% { transform: translateY(-20px) scale(1.05); opacity: 0.3; }
        }
        @keyframes floatMedium {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.2; }
          50% { transform: translateY(-30px) scale(1.08); opacity: 0.3; }
        }
        @keyframes floatFast {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.2; }
          50% { transform: translateY(-40px) scale(1.1); opacity: 0.35; }
        }

        .animate-float-slow {
          animation: floatSlow 12s ease-in-out infinite;
        }
        .animate-float-medium {
          animation: floatMedium 8s ease-in-out infinite;
        }
        .animate-float-fast {
          animation: floatFast 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default HomePage;
