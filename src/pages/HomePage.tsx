import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
    // Mock featured products
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
                            <Link to="/shop" className="hover:text-green-700">
                                Shop
                            </Link>
                        </li>
                        <li>
                            <Link to="/services" className="hover:text-green-700">
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

            {/* Hero Section */}
            <section className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto py-12 px-6 gap-8">
                <div className="flex-1 space-y-4">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white">
                        Welcome to Allen City Pharmacy
                    </h1>
                    <p className="text-white/90 text-lg">
                        Your trusted health partner. Refill prescriptions, shop wellness
                        products, and get expert care from your neighborhood pharmacy.
                    </p>
                    <Link
                        to="/shop"
                        className="inline-block bg-green-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-800 transition"
                    >
                        Shop Now
                    </Link>
                </div>
                <div className="flex-1">
                    <img
                        src="/images/pharmacy-hero.jpg"
                        alt="Pharmacy"
                        className="rounded-2xl shadow-lg w-full"
                    />
                </div>
            </section>

            {/* Services */}
            <section className="bg-white py-12">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-green-700 mb-8">
                        Our Pharmacy Services
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
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
                                className="bg-green-50 p-6 rounded-2xl shadow hover:shadow-lg transition"
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

            {/* Featured Products */}
            <section className="bg-gray-50 py-12">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center text-green-700 mb-8">
                        Featured Products
                    </h2>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {products.map((p) => (
                            <Link
                                to={`/product/${p.id}`}
                                key={p.id}
                                className="bg-white rounded-2xl shadow hover:shadow-lg transition text-center p-4"
                            >
                                <img
                                    src={p.imageUrl}
                                    alt={p.name}
                                    className="w-full h-56 object-cover rounded-xl mb-3"
                                />
                                <h4 className="font-semibold text-lg text-gray-800">
                                    {p.name}
                                </h4>
                                <p className="text-green-700 font-bold">${p.price.toFixed(2)}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="bg-white py-12">
                <div className="max-w-6xl mx-auto px-6 text-center space-y-4">
                    <h2 className="text-3xl font-bold text-green-700">
                        About Allen City Pharmacy
                    </h2>
                    <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                        For over 20 years, Allen City Pharmacy has been dedicated to serving
                        our community with care and expertise. From prescription refills to
                        health consultations, our friendly pharmacists are here to keep you
                        and your family well.
                    </p>
                    <ul className="text-gray-700 mt-6 space-y-1">
                        <li>📍 123 Main Street, Allen City</li>
                        <li>⏰ Mon–Fri 9am–7pm | Sat 9am–5pm | Sun Closed</li>
                        <li>📞 (555) 123-4567</li>
                    </ul>
                </div>
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
                        <p>Follow us on social media for health tips & offers.</p>
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

export default HomePage;