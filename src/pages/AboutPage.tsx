import { useEffect, useRef } from "react";
// If using npm: npm install @createjs/easeljs
// import * as createjs from "@createjs/easeljs";
declare const createjs: any; // use CDN in index.html

const AboutPage = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const stage = new createjs.Stage(canvas);

    const setCanvasSize = () => {
      canvas.width = window.innerWidth * window.devicePixelRatio;
      canvas.style.height = "240px";
      canvas.height = 240 * window.devicePixelRatio;
      stage.update();
    };
    setCanvasSize();

    // Animated pills
    const pills: any[] = [];
    const colors = ["#ffffff", "#ffcc80", "#c8e6c9", "#b2dfdb"];
    for (let i = 0; i < 30; i++) {
      const pill = new createjs.Shape();
      pill.graphics
        .beginFill(colors[Math.floor(Math.random() * colors.length)])
        .drawRoundRect(0, 0, 40, 15, 8);
      pill.x = Math.random() * canvas.width / devicePixelRatio;
      pill.y = Math.random() * canvas.height / devicePixelRatio;
      pill.speed = 0.5 + Math.random() * 1.5;
      pills.push(pill);
      stage.addChild(pill);
    }

    // Banner text
    const bannerText = new createjs.Text("Allen City Pharmacy", "bold 32px Segoe UI", "#ffffff");
    bannerText.textAlign = "center";
    bannerText.x = canvas.width / devicePixelRatio / 2;
    bannerText.y = 100;
    stage.addChild(bannerText);

    // Animation ticker
    createjs.Ticker.framerate = 60;
    createjs.Ticker.addEventListener("tick", () => {
      pills.forEach(p => {
        p.y -= p.speed;
        if (p.y < -20) {
          p.y = canvas.height / devicePixelRatio + 10;
          p.x = Math.random() * canvas.width / devicePixelRatio;
        }
      });
      bannerText.alpha = 0.8 + Math.sin(createjs.Ticker.getTime() / 300) * 0.2;
      stage.update();
    });

    // Resize listener
    const handleResize = () => {
      setCanvasSize();
      bannerText.x = canvas.width / devicePixelRatio / 2;
      stage.update();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      createjs.Ticker.removeAllEventListeners();
    };
  }, []);

  return (
    <div className="font-poppins text-gray-800 min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Navbar */}
      <nav id="mainNav" className="flex justify-between items-center p-6 bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg">
        <h1 className="text-2xl font-semibold">Allen City Pharmacy</h1>
        <div className="hidden md:flex gap-8">
          <a href="#about" className="hover:text-yellow-300 transition">About</a>
          <a href="#services" className="hover:text-yellow-300 transition">Services</a>
          <a href="#leadership" className="hover:text-yellow-300 transition">Team</a>
          <a href="#press" className="hover:text-yellow-300 transition">Press</a>
          <a href="#contact" className="hover:text-yellow-300 transition">Contact</a>
        </div>
      </nav>

      {/* Banner */}
      <section className="relative w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-center text-white overflow-hidden">
        <canvas ref={canvasRef} id="pharmacyBanner" className="w-full h-60"></canvas>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h2 className="text-4xl md:text-5xl font-bold drop-shadow-lg">Your Trusted Online Pharmacy</h2>
          <p className="mt-4 text-lg opacity-90">Caring for your health, one prescription at a time</p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-6xl mx-auto py-20 px-6 grid md:grid-cols-2 gap-10 items-center" >
        <div>
          <img
            id="aboutImageWrapper"
            src="https://images.unsplash.com/photo-1584433144859-1fc3ab64a957?auto=format&fit=crop&w=800&q=80"
            alt="Pharmacy shelves"
            className="rounded-2xl shadow-md"
          />
        </div>
        <div id="aboutTextWrapper">
          <h3 className="text-3xl font-semibold mb-4 text-blue-700">About Us</h3>
          <p className="text-lg leading-relaxed">
            Allen City Pharmacy is your trusted partner in healthcare. We combine modern pharmaceutical services
            with compassionate customer care to ensure every patient receives the attention they deserve.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-blue-50 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-semibold text-blue-700 mb-12">Our Services</h3>
          <div id="servicesGrid" className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Prescription Refills", desc: "Easily refill your prescriptions online or in-store." },
              { title: "Medication Consultation", desc: "Get expert advice from our licensed pharmacists." },
              { title: "Prescription Delivery", desc: "Fast and safe delivery straight to your home." },
              { title: "Controlled Medications", desc: "Upload and manage your controlled prescriptions securely." },
              { title: "Wellness Products", desc: "Shop vitamins, supplements, and personal care essentials." },
              { title: "Immunizations", desc: "Stay protected with convenient vaccination services." },
            ].map((s, i) => (
              <div key={i} className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
                <h4 className="text-xl font-semibold mb-3 text-blue-600">{s.title}</h4>
                <p className="text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="leadership" className="max-w-6xl mx-auto py-20 px-6 text-center">
        <h3 className="text-3xl font-semibold text-blue-700 mb-12">Our Leadership</h3>
        <div id="leadershipGrid" className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            { name: "Dr. Sarah Mendoza", role: "Chief Pharmacist" },
            { name: "Allen Cruz", role: "Founder & CEO" },
            { name: "Maria Lopez", role: "Operations Manager" },
          ].map((leader, i) => (
            <div key={i} className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
              <img
                src={`https://randomuser.me/api/portraits/${i % 2 ? "women" : "men"}/${i + 12}.jpg`}
                alt={leader.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h4 className="text-xl font-semibold text-blue-600">{leader.name}</h4>
              <p className="text-gray-500">{leader.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Press Section */}
      <section id="press" className="bg-blue-50 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-semibold text-blue-700 mb-12">In the Press</h3>
          <div id="pressGrid" className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Local Pharmacy of the Year 2025", source: "Health Journal" },
              { title: "Revolutionizing Online Prescription Access", source: "Daily Metro News" },
              { title: "Community-Driven Care You Can Trust", source: "The Medical Review" },
            ].map((p, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                <h4 className="text-xl font-semibold text-blue-600 mb-2">{p.title}</h4>
                <p className="text-gray-500">{p.source}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <footer id="contact" className="bg-gradient-to-r from-blue-700 to-cyan-500 text-white text-center py-12">
        <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
        <p>Email: support@allencitypharmacy.com | Phone: (555) 123-4567</p>
        <div className="flex justify-center gap-6 mt-6">
          <a href="#" className="hover:text-yellow-300">Facebook</a>
          <a href="#" className="hover:text-yellow-300">Twitter</a>
          <a href="#" className="hover:text-yellow-300">Instagram</a>
        </div>
        <p className="mt-8 text-sm opacity-80">© 2025 Allen City Pharmacy. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AboutPage;
