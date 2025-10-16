import React, { useEffect } from "react";

// ⚠️ Note: You'll still need to include CreateJS via your index.html or dynamically import it.
// Example: <script src="https://code.createjs.com/1.0.0/createjs.min.js"></script>

const AboutPage: React.FC = () => {
  useEffect(() => {
    // ✅ CreateJS banner animation
    const canvas = document.getElementById("pharmacyBanner") as HTMLCanvasElement | null;
    if (!canvas || !(window as any).createjs) return;
    const createjs = (window as any).createjs;
    const stage = new createjs.Stage(canvas);

    const setCanvasSize = () => {
      canvas.width = window.innerWidth * devicePixelRatio;
      canvas.style.height = "240px";
      canvas.height = 240 * devicePixelRatio;
      stage.update();
    };
    setCanvasSize();

    const pills: any[] = [];
    const colors = ["#ffffff", "#ffcc80", "#c8e6c9", "#b2dfdb"];
    for (let i = 0; i < 30; i++) {
      const pill = new createjs.Shape();
      pill.graphics.beginFill(colors[Math.floor(Math.random() * colors.length)]).drawRoundRect(0, 0, 40, 15, 8);
      pill.x = Math.random() * (canvas.width / devicePixelRatio);
      pill.y = Math.random() * (canvas.height / devicePixelRatio);
      pill.speed = 0.5 + Math.random() * 1.5;
      pills.push(pill);
      stage.addChild(pill);
    }

    const bannerText = new createjs.Text("Allen City Pharmacy", "bold 32px Segoe UI", "#ffffff");
    bannerText.textAlign = "center";
    bannerText.x = canvas.width / devicePixelRatio / 2;
    bannerText.y = 100;
    stage.addChild(bannerText);

    createjs.Ticker.framerate = 60;
    createjs.Ticker.addEventListener("tick", () => {
      pills.forEach((p) => {
        p.y -= p.speed;
        if (p.y < -20) {
          p.y = canvas.height / devicePixelRatio + 10;
          p.x = Math.random() * (canvas.width / devicePixelRatio);
        }
      });
      bannerText.alpha = 0.8 + Math.sin(createjs.Ticker.getTime() / 300) * 0.2;
      stage.update();
    });

    window.addEventListener("resize", () => {
      setCanvasSize();
      bannerText.x = canvas.width / devicePixelRatio / 2;
      stage.update();
    });

    return () => {
      createjs.Ticker.removeAllEventListeners();
    };
  }, []);

  useEffect(() => {
    // ✅ Responsive inline style behavior from original script
    const aboutWrapper = document.getElementById("aboutGridWrapper") as HTMLElement | null;
    const aboutImage = document.getElementById("aboutImageWrapper") as HTMLElement | null;
    const aboutText = document.getElementById("aboutTextWrapper") as HTMLElement | null;
    const servicesGrid = document.getElementById("servicesGrid") as HTMLElement | null;
    const leadershipGrid = document.getElementById("leadershipGrid") as HTMLElement | null;
    const pressGrid = document.getElementById("pressGrid") as HTMLElement | null;
    const mainNav = document.getElementById("mainNav") as HTMLElement | null;

    const applyResponsive = () => {
      const w = window.innerWidth;

      // ABOUT section
      if (aboutWrapper && aboutImage && aboutText) {
        if (w >= 768) {
          aboutWrapper.style.display = "grid";
          aboutWrapper.style.gridTemplateColumns = "1fr 1fr";
          aboutWrapper.style.gap = "3rem";
          aboutImage.style.margin = "0";
          aboutText.style.margin = "0";
        } else {
          aboutWrapper.style.display = "block";
          aboutImage.style.marginBottom = "1.5rem";
          aboutText.style.marginBottom = "1.5rem";
        }
      }

      // SERVICES grid
      if (servicesGrid) {
        if (w >= 1024) servicesGrid.style.gridTemplateColumns = "repeat(3, 1fr)";
        else if (w >= 640) servicesGrid.style.gridTemplateColumns = "repeat(2, 1fr)";
        else servicesGrid.style.gridTemplateColumns = "1fr";
        servicesGrid.style.display = "grid";
      }

      // LEADERSHIP grid
      if (leadershipGrid) {
        if (w >= 1024) leadershipGrid.style.gridTemplateColumns = "repeat(3, 1fr)";
        else if (w >= 640) leadershipGrid.style.gridTemplateColumns = "repeat(2, 1fr)";
        else leadershipGrid.style.gridTemplateColumns = "1fr";
        leadershipGrid.style.display = "grid";
      }

      // PRESS grid
      if (pressGrid) {
        if (w >= 1024) pressGrid.style.gridTemplateColumns = "repeat(3, 1fr)";
        else if (w >= 768) pressGrid.style.gridTemplateColumns = "repeat(2, 1fr)";
        else pressGrid.style.gridTemplateColumns = "1fr";
        pressGrid.style.display = "grid";
      }

      // NAV responsive
      if (mainNav) {
        if (w < 480) {
          mainNav.style.flexDirection = "column";
          mainNav.style.alignItems = "center";
          mainNav.style.gap = "0.5rem";
        } else {
          mainNav.style.flexDirection = "row";
          mainNav.style.alignItems = "center";
          mainNav.style.gap = "2rem";
        }
      }
    };

    applyResponsive();
    window.addEventListener("resize", applyResponsive);
    return () => window.removeEventListener("resize", applyResponsive);
  }, []);

  return (
    <div style={{ backgroundColor: "#f9fafb", color: "#1f2937", lineHeight: 1.5, fontFamily: "system-ui, sans-serif" }}>
      {/* Header */}
      <header
        id="siteHeader"
        style={{
          backgroundColor: "#fff",
          boxShadow: "0 2px 6px rgba(0,0,0,0.06)",
          padding: "1rem 2rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img src="logo1.png" alt="Allen City Pharmacy Logo" style={{ height: 64, marginBottom: "1rem" }} />
        <nav id="mainNav" style={{ display: "flex", gap: "2rem", fontSize: "1.05rem", fontWeight: 600 }}>
          <a href="/" style={{ color: "#374151", textDecoration: "none" }}>
            Home
          </a>
          <a href="#" style={{ color: "#22543d", textDecoration: "none", borderBottom: "2px solid #22543d", paddingBottom: "0.125rem" }}>
            About
          </a>
          <a href="/shop" style={{ color: "#374151", textDecoration: "none" }}>
            Shop
          </a>
          <a href="/contact" style={{ color: "#374151", textDecoration: "none" }}>
            Contact
          </a>
        </nav>
      </header>

      {/* Canvas Banner */}
      <canvas id="pharmacyBanner" style={{ width: "100%", height: "240px", display: "block", backgroundColor: "#22543d" }} />

      {/* Main About Section */}
      <section id="aboutOverview" style={{ maxWidth: 1200, margin: "0 auto", padding: "4rem 1.5rem" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h1 style={{ fontSize: "2.25rem", fontWeight: 700, color: "#22543d", marginBottom: "1rem" }}>About Allen City Pharmacy</h1>
          <p style={{ fontSize: "1.0625rem", color: "#4b5563", maxWidth: 900, margin: "0 auto" }}>
            Allen City Pharmacy is committed to improving lives through accessible, reliable, and innovative healthcare solutions.
            Our platform enables customers to order medicines online, manage prescriptions, and consult with licensed pharmacists—with full compliance to HIPAA and FDA e-prescription standards.
          </p>
        </div>

        {/* Image + Text */}
        <div id="aboutGridWrapper" style={{ display: "block" }}>
          <div id="aboutImageWrapper" style={{ marginBottom: "2rem" }}>
            <img src="pharmacystore.jpeg" alt="Pharmacy store" style={{ width: "100%", borderRadius: 16, boxShadow: "0 8px 20px rgba(0,0,0,0.08)" }} />
          </div>

          <div id="aboutTextWrapper" style={{ marginBottom: "2rem" }}>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 600, color: "#2f855a", marginBottom: "0.75rem" }}>Our Mission</h2>
            <p style={{ color: "#374151", marginBottom: "1rem" }}>
              We aim to make healthcare more personal and accessible—empowering individuals and communities to live healthier lives.
              From prescription management to telehealth, our services bridge the gap between traditional and digital pharmacy care.
            </p>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 600, color: "#2f855a", margin: "1rem 0 0.75rem" }}>Our Values</h2>
            <ul style={{ paddingLeft: "1.25rem", color: "#374151", lineHeight: 1.6 }}>
              <li>Integrity and transparency in every interaction</li>
              <li>Accessibility to essential medicines and care</li>
              <li>Innovation to meet evolving healthcare needs</li>
              <li>Commitment to community health and wellness</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: "#0f1724", color: "#d1d5db", padding: "2rem 1rem", textAlign: "center" }}>
        <p style={{ margin: 0 }}>&copy; 2025 Allen City Pharmacy. All Rights Reserved.</p>
        <p style={{ marginTop: "0.5rem" }}>
          <a href="#" style={{ color: "#d1d5db", textDecoration: "underline" }}>
            Privacy Policy
          </a>{" "}
          |{" "}
          <a href="#" style={{ color: "#d1d5db", textDecoration: "underline" }}>
            Terms of Use
          </a>
        </p>
      </footer>
    </div>
  );
};

export default AboutPage;
