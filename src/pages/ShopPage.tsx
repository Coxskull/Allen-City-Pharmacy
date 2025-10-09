import React, { useState } from "react";

interface Product {
  name: string;
  price: string;
  oldPrice?: string;
  rating: string;
  image: string;
  description: string;
  stock: string;
}

const products: Product[] = [
  {
    name: "Pain Relief Tablets - 20 pack",
    price: "$8.99",
    oldPrice: "$11.99",
    rating: "⭐ 4.8 (1.2k)",
    image:
      "https://www.deepheat.com.au/cdn/shop/files/27933NAPROXENPAINRELIEF30PK3DHIRES_1200x1200.png?v=1731997526",
    description:
      "Fast-acting pain relief tablets ideal for headaches, muscle pain, and body aches. 20 tablets per pack.",
    stock: "In stock",
  },
  {
    name: "Vitamin D3 - 60 softgels",
    price: "$10.50",
    oldPrice: "$13.00",
    rating: "⭐ 4.7 (860)",
    image: "https://medlineplus.gov/images/Vitamins_share.jpg",
    description:
      "Vitamin D3 supports bone and immune health. 60 softgels per bottle.",
    stock: "Low stock",
  },
  {
    name: "Cough Syrup - 150ml",
    price: "$6.75",
    oldPrice: "$8.00",
    rating: "⭐ 4.6 (430)",
    image: "https://pics.walgreens.com/prodimg/671386/900.jpg",
    description:
      "This cough syrup provides fast relief from dry and chesty coughs. Non-drowsy formula suitable for daytime use.",
    stock: "In stock",
  },
  {
    name: "Hand Sanitizer 500 ml",
    price: "$5.99",
    rating: "⭐ 4.9 (2.1k)",
    image: "https://i.ebayimg.com/images/g/rAIAAOSwobtlWS4Q/s-l1200.jpg",
    description:
      "Kills 99.9% of germs and bacteria. Fast-drying formula with moisturizing ingredients.",
    stock: "In stock",
  },
  {
    name: "First Aid Kit - Compact",
    price: "$24.99",
    oldPrice: "$29.99",
    rating: "⭐ 4.5 (320)",
    image:
      "https://target.scene7.com/is/image/Target/GUEST_e7f46325-c1a2-4baa-936d-d37de56b3ad7",
    description:
      "Compact first aid kit with essential supplies for emergencies, travel, or home use.",
    stock: "In stock",
  },
  {
    name: "Baby Formula - 400g",
    price: "$18.20",
    rating: "⭐ 4.6 (540)",
    image:
      "https://www.forthepeople.com/sites/default/files/styles/mm-image/545x306/shutterstock_2387752027cabbd356dfd7c23de3f64833fdbdc651.webp",
    description:
      "Premium baby formula with essential nutrients for healthy growth. Easy to digest.",
    stock: "Low stock",
  },
  {
    name: "Digital Thermometer",
    price: "$9.99",
    rating: "⭐ 4.7 (760)",
    image:
      "https://m.media-amazon.com/images/I/61OrvhuAJhL._UF1000,1000_QL80_.jpg",
    description:
      "Accurate and fast-reading thermometer suitable for oral, rectal, and underarm use.",
    stock: "In stock",
  },
];

export default function ShopPage() {
  const [selected, setSelected] = useState<Product | null>(null);

  return (
    <div className="min-h-screen bg-[linear-gradient(-45deg,#006d53,#e56b1f,#f8f8f8,#006d53)] bg-[length:400%_400%] animate-[smoothFlow_25s_ease_infinite] text-gray-800 font-sans">
      {/* Header */}
      <header className="sticky top-0 bg-white border-b border-gray-200 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-4 p-4">
          <div className="flex items-center gap-2">
            <img
              src="Allen City Pharmacy Logo.png"
              alt="Allen City Pharmacy logo"
              className="h-12 w-auto"
            />
          </div>

          {/* Search */}
          <div className="flex flex-1 gap-2 items-center min-w-[220px]">
            <input
              type="search"
              placeholder="Search for medicines, vitamins..."
              className="flex-1 h-10 px-3 border border-gray-200 rounded-lg focus:outline-none"
            />
            <button className="bg-[#e56b1f] text-white font-semibold px-4 py-2 rounded-lg hover:bg-[#d45f1c] transition">
              Search
            </button>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button className="text-[#006d53] font-semibold">📦 Orders</button>
            <button className="text-[#006d53] font-semibold">👤 Account</button>
            <button className="text-[#006d53] font-semibold flex items-center">
              🛒 Cart <span className="ml-2 bg-[#e56b1f] text-white text-xs rounded-full px-2 py-0.5">2</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-cover bg-center rounded-2xl shadow-xl my-6 mx-auto max-w-7xl h-[380px] flex items-center justify-start"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/48604/pexels-photo-48604.jpeg?auto=compress&cs=tinysrgb&w=1600')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-[#e0f7f44a] via-[#ffffff30] to-[#d2f2e630] animate-[calmSky_30s_ease_infinite]" />
        <div className="relative z-10 p-10 max-w-xl">
          <h1 className="text-white text-4xl font-bold drop-shadow-lg">
            Your Health, Our Priority
          </h1>
          <p className="text-gray-100 mt-2 mb-4">
            Fast local delivery • Trusted pharmacists • Quality healthcare essentials
          </p>
          <a
            href="#products"
            className="inline-block bg-[#e56b1f] text-white px-5 py-3 rounded-lg font-semibold shadow-md hover:bg-[#d45f1c] transition"
          >
            Shop Now
          </a>
        </div>
      </section>

      {/* Categories */}
      <section className="flex gap-3 overflow-x-auto px-4 max-w-7xl mx-auto mb-6">
        {[
          ["💊", "Vitamins"],
          ["🤕", "Pain Relief"],
          ["🧴", "Skincare"],
          ["🧷", "First Aid"],
          ["👶", "Baby Care"],
          ["🩹", "Medical Supplies"],
          ["🧼", "Hygiene"],
          ["🩺", "Health Devices"],
        ].map(([icon, name]) => (
          <div
            key={name}
            className="min-w-[88px] bg-white text-center border border-gray-100 rounded-xl shadow-sm flex flex-col items-center gap-2 p-3 cursor-pointer hover:bg-[#f7faf9]"
          >
            <div className="text-2xl bg-[#006d530f] text-[#006d53] rounded-lg w-12 h-12 flex items-center justify-center">
              {icon}
            </div>
            <span className="text-sm font-semibold text-gray-700">{name}</span>
          </div>
        ))}
      </section>

      {/* Products */}
      <main id="products" className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-[#006d53] font-bold text-lg">Featured for you</h2>
          <p className="text-gray-500 font-semibold text-sm">
            Best sellers • Fast delivery
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((p) => (
            <div
              key={p.name}
              className="bg-white rounded-xl shadow hover:shadow-lg border border-gray-100 cursor-pointer transition-transform hover:-translate-y-1"
              onClick={() => setSelected(p)}
            >
              <img
                src={p.image}
                alt={p.name}
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <div className="p-3">
                <h3 className="font-bold text-[#006d53] text-sm mb-1">{p.name}</h3>
                <div className="flex justify-between text-sm mb-1">
                  <div className="text-yellow-500">{p.rating}</div>
                  <div className="text-[#e56b1f] font-bold">{p.price}</div>
                </div>
                {p.oldPrice && (
                  <div className="text-xs text-gray-400 line-through">
                    {p.oldPrice}
                  </div>
                )}
                <div className="flex items-center mt-2">
                  <div
                    className={`text-xs font-semibold px-2 py-1 rounded-md ${
                      p.stock.includes("Low")
                        ? "text-[#e67e22] bg-orange-50"
                        : "text-[#006d53] bg-green-50"
                    }`}
                  >
                    {p.stock}
                  </div>
                  <button className="ml-auto bg-[#006d53] text-white text-xs px-3 py-1 rounded-md font-bold">
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/60 flex justify-center items-center z-50"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white rounded-xl shadow-lg p-5 max-w-md w-[90%] relative animate-[popupIn_0.3s_ease]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-3 right-4 text-gray-600 text-xl"
            >
              ×
            </button>
            <img
              src={selected.image}
              alt={selected.name}
              className="rounded-lg mb-4 max-h-64 object-cover mx-auto"
            />
            <h2 className="text-xl font-bold text-[#006d53]">{selected.name}</h2>
            <p className="text-yellow-500 mt-1">{selected.rating}</p>
            <div className="flex gap-2 items-center my-3">
              <span className="text-2xl font-bold text-[#e56b1f]">
                {selected.price}
              </span>
              {selected.oldPrice && (
                <span className="text-gray-400 line-through">
                  {selected.oldPrice}
                </span>
              )}
            </div>
            <p className="text-sm text-gray-600">{selected.description}</p>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="text-center mt-12 text-sm text-gray-600 py-8">
        © 2025 Allen City Pharmacy • Local delivery • Pharmacist advice
        <div className="text-xs text-gray-400 mt-2">
          Placeholders use free stock images. Replace with your product photos.
        </div>
      </footer>

      {/* Keyframe Animations */}
      <style>{`
        @keyframes smoothFlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes calmSky {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes popupIn {
          from { transform: scale(0.85); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
