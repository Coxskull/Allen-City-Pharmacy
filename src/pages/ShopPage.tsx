import React, { useState } from "react";
import "/src/index.css";

interface Product {
  id: number;
  name: string;
  price: string;
  oldPrice?: string;
  rating: string;
  description: string;
  image: string;
  stock: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Pain Relief Tablets - 20 pack",
    price: "$8.99",
    oldPrice: "$11.99",
    rating: "⭐ 4.8 (1.2k)",
    description:
      "Fast-acting pain relief tablets ideal for headaches, muscle pain, and body aches. 20 tablets per pack.",
    image:
      "https://www.deepheat.com.au/cdn/shop/files/27933NAPROXENPAINRELIEF30PK3DHIRES_1200x1200.png?v=1731997526",
    stock: "In stock",
  },
  {
    id: 2,
    name: "Vitamin D3 - 60 softgels",
    price: "$10.50",
    oldPrice: "$13.00",
    rating: "⭐ 4.7 (860)",
    description:
      "Vitamin D3 supports bone and immune health. 60 softgels per bottle.",
    image: "https://medlineplus.gov/images/Vitamins_share.jpg",
    stock: "Low stock",
  },
  {
    id: 3,
    name: "Cough Syrup - 150ml",
    price: "$6.75",
    oldPrice: "$8.00",
    rating: "⭐ 4.6 (430)",
    description:
      "Fast relief from dry and chesty coughs. Non-drowsy formula suitable for daytime use.",
    image: "https://pics.walgreens.com/prodimg/671386/900.jpg",
    stock: "In stock",
  },
  {
    id: 4,
    name: "Hand Sanitizer 500 ml",
    price: "$5.99",
    rating: "⭐ 4.9 (2.1k)",
    description:
      "Kills 99.9% of germs and bacteria. Fast-drying and moisturizing.",
    image: "https://i.ebayimg.com/images/g/rAIAAOSwobtlWS4Q/s-l1200.jpg",
    stock: "In stock",
  },
  {
    id: 5,
    name: "First Aid Kit - Compact",
    price: "$24.99",
    oldPrice: "$29.99",
    rating: "⭐ 4.5 (320)",
    description:
      "Contains essential medical supplies for emergencies, travel, or home use.",
    image:
      "https://target.scene7.com/is/image/Target/GUEST_e7f46325-c1a2-4baa-936d-d37de56b3ad7",
    stock: "In stock",
  },
  {
    id: 6,
    name: "Baby Formula - 400g",
    price: "$18.20",
    rating: "⭐ 4.6 (540)",
    description:
      "Premium baby formula with essential nutrients for healthy development.",
    image:
      "https://www.forthepeople.com/sites/default/files/styles/mm-image/545x306/shutterstock_2387752027cabbd356dfd7c23de3f64833fdbdc651.webp",
    stock: "Low stock",
  },
  {
    id: 7,
    name: "Digital Thermometer",
    price: "$9.99",
    rating: "⭐ 4.7 (760)",
    description:
      "Accurate and fast digital thermometer suitable for all ages.",
    image:
      "https://m.media-amazon.com/images/I/61OrvhuAJhL._UF1000,1000_QL80_.jpg",
    stock: "In stock",
  },
];

const ShopPage: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <div className="shop-page">
      {/* Header */}
      <header className="topbar">
        <div className="site">
          <div className="logo">
            <img
              src="Allen City Pharmacy Logo.png"
              alt="Allen City Pharmacy logo"
            />
          </div>
          <div className="search">
            <input
              type="search"
              placeholder="Search for medicines, vitamins, baby care..."
            />
            <button>Search</button>
          </div>
          <div className="actions">
            <button className="action-btn">📦 Orders</button>
            <button className="action-btn">👤 Account</button>
            <button className="action-btn">
              🛒 Cart <span className="cart-badge">2</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="hero">
        <div className="hero-inner">
          <h1>Your Health, Our Priority</h1>
          <p>
            Fast local delivery • Trusted pharmacists • Quality healthcare
            essentials
          </p>
          <a href="#" className="cta">
            Shop Now
          </a>
        </div>
      </section>

      {/* Categories */}
      <section className="categories">
        {[
          ["💊", "Vitamins"],
          ["🤕", "Pain Relief"],
          ["🧴", "Skincare"],
          ["🧷", "First Aid"],
          ["👶", "Baby Care"],
          ["🩹", "Medical Supplies"],
          ["🧼", "Hygiene"],
          ["🩺", "Health Devices"],
        ].map(([icon, label]) => (
          <a key={label} className="cat" href="#">
            <div className="icon">{icon}</div>
            <span>{label}</span>
          </a>
        ))}
      </section>

      {/* Product Grid */}
      <main>
        <div className="header-row">
          <h2>Featured for you</h2>
          <p>Best sellers • Fast delivery</p>
        </div>
        <div className="products">
          {products.map((p) => (
            <article
              key={p.id}
              className="card"
              onClick={() => setSelectedProduct(p)}
            >
              <div className="media">
                <img src={p.image} alt={p.name} />
              </div>
              <div className="body">
                <h3>{p.name}</h3>
                <div className="meta">
                  <div className="rating">{p.rating}</div>
                  <div>
                    <div className="price">{p.price}</div>
                    {p.oldPrice && <div className="old-price">{p.oldPrice}</div>}
                  </div>
                </div>
                <div className="add">
                  <div className="qty">{p.stock}</div>
                  <a href="#" className="btn">
                    Add
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>

      {/* Modal */}
      {selectedProduct && (
        <div
          className="product-modal"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="close" onClick={() => setSelectedProduct(null)}>
              &times;
            </span>
            <img src={selectedProduct.image} alt={selectedProduct.name} />
            <h2>{selectedProduct.name}</h2>
            <p>{selectedProduct.rating}</p>
            <p>Price: {selectedProduct.price}</p>
            <p>{selectedProduct.description}</p>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="site-footer">
        <div>© 2025 Allen City Pharmacy • Local delivery • Pharmacist advice</div>
        <div className="small-note">
          Placeholders use free stock images. Replace with your product photos.
        </div>
      </footer>
    </div>
  );
};

export default ShopPage;
