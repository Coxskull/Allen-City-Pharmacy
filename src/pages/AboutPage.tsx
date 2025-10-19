import React, { useEffect, useRef } from "react";

// Declare CreateJS globally (if loaded via CDN)
declare global {
  interface Window {
    createjs: any;
  }
}
declare const createjs: any;

const AboutPage: React.FC = () => {
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

    // Animated floating pills
    const pills: any[] = [];
    const colors = ["#ffffff", "#ffcc80", "#c8e6c9", "#b2dfdb"];

    for (let i = 0; i < 30; i++) {
      const pill = new createjs.Shape();
      pill.graphics
        .beginFill(colors[Math.floor(Math.random() * colors.length)])
        .drawRoundRect(0, 0, 40, 15, 8);
      pill.x = Math.random() * (canvas.width / window.devicePixelRatio);
      pill.y = Math.random() * (canvas.height / window.devicePixelRatio);
      (pill as any).speed = 0.5 + Math.random() * 1.5;
      pills.push(pill);
      stage.addChild(pill);
    }

    const bannerText = new createjs.Text(
      "About Allen City Pharmacy",
      "bold 32px Segoe UI",
      "#ffffff"
    );
    bannerText.textAlign = "center";
    bannerText.x = canvas.width / window.devicePixelRatio / 2;
    bannerText.y = 100;
    stage.addChild(bannerText);

    createjs.Ticker.framerate = 60;
    createjs.Ticker.addEventListener("tick", () => {
      pills.forEach((p) => {
        p.y -= (p as any).speed;
        if (p.y < -20) {
          p.y = canvas.height / window.devicePixelRatio + 10;
          p.x = Math.random() * (canvas.width / window.devicePixelRatio);
        }
      });
      bannerText.alpha = 0.8 + Math.sin(createjs.Ticker.getTime() / 300) * 0.2;
      stage.update();
    });

    const handleResize = () => {
      setCanvasSize();
      bannerText.x = canvas.width / window.devicePixelRatio / 2;
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
      {/* Animated Banner */}
      <section className="relative w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-center text-white overflow-hidden">
        <canvas ref={canvasRef} className="w-full h-60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h2 className="text-4xl md:text-5xl font-bold drop-shadow-lg">
            Your Trusted Online Pharmacy
          </h2>
          <p className="mt-4 text-lg opacity-90">
            Caring for your health, one prescription at a time.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-6xl mx-auto py-20 px-6 space-y-20">
        {/* About / Overview */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <img
            src="https://images.unsplash.com/photo-1584433144859-1fc3ab64a957?auto=format&fit=crop&w=800&q=80"
            alt="Pharmacy shelves"
            className="rounded-2xl shadow-md"
          />
          <div>
            <h3 className="text-3xl font-semibold mb-4 text-blue-700">
              About Us
            </h3>
            <p className="text-lg leading-relaxed">
              Allen City Pharmacy is committed to bringing quality,
              affordable healthcare to our communities. We combine modern
              pharmaceutical practices with compassionate customer care so
              that every patient feels seen, respected, and well served.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              From prescription refills and consultations to wellness products
              and vaccinations, we tailor our services to your needs with
              integrity and innovation.
            </p>
          </div>
        </div>

        {/* Milestones */}
        <div>
          <h3 className="text-3xl font-semibold mb-8 text-blue-700">
            Our Journey & Milestones
          </h3>
          <ul className="space-y-6 list-disc list-inside text-gray-700">
            <li>
              <strong>1949</strong> — Founded as a pharmaceutical import and
              wholesale company.
            </li>
            <li>
              <strong>2001</strong> — First retail pharmacy branch opened,
              serving local communities and building trust.
            </li>
            <li>
              <strong>2007</strong> — Expanded into franchising, allowing
              more branches across Metro areas.
            </li>
            <li>
              <strong>2016</strong> — Formed strategic partnerships to reach
              more Filipinos nationwide.
            </li>
            <li>
              <strong>2025</strong> — Over 2,000 branches nationwide, becoming
              one of the largest pharmacy networks in the country.
            </li>
          </ul>
        </div>

        {/* Mission / Vision / Values */}
        <div className="space-y-8">
          <h3 className="text-3xl font-semibold text-blue-700">
            Mission, Vision & Values
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-xl shadow">
              <h4 className="text-xl font-semibold mb-3">Mission</h4>
              <p className="text-gray-700 leading-relaxed">
                To provide safe, quality, and cost-effective medicines and
                healthcare products to every Filipino, while fostering growth
                with franchisees, suppliers, and communities.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow">
              <h4 className="text-xl font-semibold mb-3">Vision</h4>
              <p className="text-gray-700 leading-relaxed">
                To be the most trusted partner in accessible, affordable
                healthcare for all Filipinos — because we care, you matter.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow">
              <h4 className="text-xl font-semibold mb-3">Core Values</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Integrity & Transparency</li>
                <li>Compassion & Respect</li>
                <li>Excellence & Innovation</li>
                <li>Affordability & Accessibility</li>
                <li>Shared Growth & Partnerships</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Leadership */}
        <div>
          <h3 className="text-3xl font-semibold mb-8 text-blue-700">
            Our Leadership
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { name: "Dr. Sarah Mendoza", role: "Chief Pharmacist" },
              { name: "Allen Cruz", role: "Founder & CEO" },
              { name: "Maria Lopez", role: "Operations Manager" },
            ].map((leader, i) => (
              <div
                key={i}
                className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition"
              >
                <img
                  src={`https://randomuser.me/api/portraits/${i % 2 ? "women" : "men"}/${i + 12}.jpg`}
                  alt={leader.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h4 className="text-xl font-semibold text-blue-600 text-center">
                  {leader.name}
                </h4>
                <p className="text-gray-500 text-center">{leader.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Services */}
        <div id="services">
          <h3 className="text-3xl font-semibold mb-8 text-blue-700 text-center">
            What We Offer
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Prescription Refills",
                desc: "Refill your prescriptions online or at any branch.",
              },
              {
                title: "Medication Consultation",
                desc: "Expert advice from certified pharmacists.",
              },
              {
                title: "Home Delivery",
                desc: "Fast and secure delivery to your door.",
              },
              {
                title: "Wellness Products",
                desc: "Vitamins, supplements, and health essentials.",
              },
              {
                title: "Vaccination Services",
                desc: "Safe immunization programs for your protection.",
              },
              {
                title: "Community Health Programs",
                desc: "Medical outreach and wellness drives in local areas.",
              },
            ].map((s, i) => (
              <div
                key={i}
                className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition transform hover:-translate-y-1"
              >
                <h4 className="text-xl font-semibold mb-3 text-blue-600">
                  {s.title}
                </h4>
                <p className="text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
