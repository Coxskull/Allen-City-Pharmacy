import React, { useEffect, useRef } from "react";
import * as createjs from "@createjs/easeljs"; // ✅ Proper CreateJS import

const ContactPage: React.FC = () => {
  const bannerCanvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = bannerCanvasRef.current;
    if (!canvas) return;

    const stage = new createjs.Stage(canvas);
    const dpr = window.devicePixelRatio || 1;

    const setCanvasSize = () => {
      const cssWidth = window.innerWidth;
      const cssHeight = 240;
      canvas.width = Math.floor(cssWidth * dpr);
      canvas.height = Math.floor(cssHeight * dpr);
      canvas.style.width = `${cssWidth}px`;
      canvas.style.height = `${cssHeight}px`;
      stage.update();
    };

    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    // 🎨 Animated pills setup
    const pills: createjs.Shape[] = [];
    const colors = ["#ffffff", "#ffcc80", "#c8e6c9", "#b2dfdb"];
    const random = (min: number, max: number) => min + Math.random() * (max - min);

    for (let i = 0; i < 30; i++) {
      const w = 40 * (0.9 + Math.random() * 0.4);
      const h = 15 * (0.9 + Math.random() * 0.4);
      const rx = 8;
      const pill = new createjs.Shape();
      pill.graphics
        .beginFill(colors[Math.floor(Math.random() * colors.length)])
        .drawRoundRect(0, 0, w * dpr, h * dpr, rx * dpr);
      pill.regX = (w * dpr) / 2;
      pill.regY = (h * dpr) / 2;
      pill.x = random(0, canvas.width);
      pill.y = random(0, canvas.height);
      (pill as any).speed = 0.5 * dpr + Math.random() * (1.5 * dpr);
      (pill as any).rotationSpeed = -0.05 + Math.random() * 0.1;
      pills.push(pill);
      stage.addChild(pill);
    }

    // 🧠 Banner text
    const bannerText = new createjs.Text(
      "Contact Allen City Pharmacy",
      `bold ${32 * dpr}px Segoe UI`,
      "#ffffff"
    );
    bannerText.textAlign = "center";
    bannerText.x = canvas.width / 2;
    bannerText.y = canvas.height / 3;
    bannerText.shadow = new createjs.Shadow(
      "rgba(0,0,0,0.18)",
      2 * dpr,
      2 * dpr,
      6 * dpr
    );
    stage.addChild(bannerText);

    // 🕒 Animation loop
    createjs.Ticker.framerate = 60;
    const tick = () => {
      pills.forEach((p) => {
        (p as any).y -= (p as any).speed;
        (p as any).rotation += (p as any).rotationSpeed;
        if ((p as any).y < -50 * dpr) {
          (p as any).y = canvas.height + 40 * dpr;
          (p as any).x = random(0, canvas.width);
        }
      });
      bannerText.alpha = 0.9 + Math.sin(createjs.Ticker.getTime() / 300) * 0.1;
      stage.update();
    };
    createjs.Ticker.addEventListener("tick", tick);

    return () => {
      window.removeEventListener("resize", setCanvasSize);
      createjs.Ticker.removeEventListener("tick", tick);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Message sent successfully!");
  };

  return (
    <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
      {/* Header */}
      <header className="bg-white shadow-md py-4 px-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <img src="logo1.png" alt="Allen City Pharmacy Logo" className="h-16" />
            <span className="font-bold text-lg text-green-800">
              Allen City Pharmacy
            </span>
          </div>
          <nav className="flex gap-6 text-gray-700 font-semibold">
            <a href="/" className="hover:text-green-700">Home</a>
            <a href="/about" className="hover:text-green-700">About</a>
            <a href="/shop" className="hover:text-green-700">Shop</a>
            <a
              href="#"
              className="text-green-800 border-b-2 border-green-800 pb-1"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Banner */}
      <div className="w-full bg-gradient-to-br from-green-400 to-orange-400 overflow-hidden">
        <canvas ref={bannerCanvasRef} className="w-full h-60 block"></canvas>
      </div>

      {/* Main */}
      <main className="max-w-6xl mx-auto py-12 px-4 flex flex-col md:flex-row gap-8">
        {/* Form */}
        <div className="flex-1 bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold text-green-800 mb-6">
            Send us a message
          </h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <label className="flex flex-col text-gray-700 text-sm">
              Full Name
              <input
                type="text"
                required
                placeholder="Your Name"
                className="mt-1 p-3 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </label>
            <label className="flex flex-col text-gray-700 text-sm">
              Email Address
              <input
                type="email"
                required
                placeholder="you@example.com"
                className="mt-1 p-3 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </label>
            <label className="flex flex-col text-gray-700 text-sm">
              Message
              <textarea
                rows={5}
                placeholder="Your message..."
                className="mt-1 p-3 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600"
              ></textarea>
            </label>
            <button
              type="submit"
              className="bg-green-800 text-white py-3 rounded-lg font-semibold hover:bg-green-900 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <aside className="flex-1 flex flex-col justify-center gap-6">
          <div>
            <h2 className="text-xl font-bold text-green-800">Get in Touch</h2>
            <p className="text-gray-600">
              We’re just a message away for prescriptions or advice.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <img src="Phone.png" alt="Phone" className="h-10 w-10" />
            <div>
              <p className="text-gray-500 text-sm">Call Us</p>
              <p className="font-bold text-green-800">+1 (972) 555-7890</p>
            </div>
          </div>
        </aside>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-200 py-6 text-center mt-12">
        &copy; 2025 Allen City Pharmacy. All Rights Reserved.
      </footer>
    </div>
  );
};

export default ContactPage;
