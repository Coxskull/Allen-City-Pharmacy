import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import PromoBar from "./components/PromoBar";
import Footer from "./components/Footer";
import CartPanel from "./components/CartPanel";
import ChatBot from "./components/ChatBot";

// Pages
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import OrderPage from "./pages/OrderPage";
import CheckoutPage from "./pages/CheckoutPage";
import ThankYouPage from "./pages/ThankYouPage";
import ContactPage from "./pages/ContactPage";
import ServicesPage from "./pages/ServicesPage";
import StoreLocatorPage from "./pages/StoreLocatorPage";
import AboutPage from "./pages/AboutPage";

function App() {
  // CART STATE
  const [cart, setCart] = useState<any[]>([]);
  const [cartCount, setCartCount] = useState(0);

  // Promo bar
  const [promoVisible, setPromoVisible] = useState(true);

  // Load cart from localStorage on mount
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      const parsed = JSON.parse(storedCart);
      setCart(parsed);
      updateCartCount(parsed);
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount(cart);
  }, [cart]);

  const updateCartCount = (cartItems: any[]) => {
    const total = cartItems.reduce((sum, item) => sum + item.qty, 0);
    setCartCount(total);
  };

  // Add to cart
  const addToCart = (product: any) => {
    const existing = cart.find((item) => item.id === product.id);

    if (existing) {
      setCart((prev) =>
        prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart((prev) => [...prev, { ...product, qty: 1 }]);
    }
  };

  // Update quantity
  const setQty = (productId: number, qty: number) => {
    if (qty <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.id === productId ? { ...item, qty } : item
      )
    );
  };

  // Remove from cart
  const removeFromCart = (productId: number) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  };

  // Clear cart
  const clearCart = () => {
    setCart([]);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar cartCount={cartCount} />
      <PromoBar visible={promoVisible} onClose={() => setPromoVisible(false)} />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage onAdd={addToCart} />} />
          <Route path="/shop" element={<ShopPage onAdd={addToCart} />} />
          <Route path="/order" element={<OrderPage />} />
          <Route
            path="/checkout"
            element={
              <CheckoutPage
                cart={cart}
                setQty={setQty}
                removeFromCart={removeFromCart}
                clearCart={clearCart}
              />
            }
          />
          <Route path="/thankyou" element={<ThankYouPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/store-locator" element={<StoreLocatorPage />} />
          <Route path="/about" element={<AboutPage />} /> {/* ✅ Added AboutPage Route */}

          {/* Catch-all → Redirect to Home */}
          <Route path="*" element={<HomePage onAdd={addToCart} />} />
        </Routes>
      </main>

      <Footer />

      {/* Floating Cart Panel (Desktop only) */}
      <div className="fixed right-6 top-24 z-50 hidden md:block">
        <CartPanel
          cart={cart}
          setQty={setQty}
          removeFromCart={removeFromCart}
          clearCart={clearCart}
        />
      </div>

      <ChatBot />
    </div>
  );
}

export default App;
