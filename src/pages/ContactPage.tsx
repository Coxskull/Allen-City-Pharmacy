import React, { useEffect } from "react";

const ContactPage: React.FC = () => {
  useEffect(() => {
    // Responsive JS from your original HTML
    const breakpoint = 768;

    function handleResize() {
      const w = window.innerWidth;

      const grid = document.getElementById("grid") as HTMLElement;
      const leftCol = document.getElementById("leftCol") as HTMLElement;
      const rightCol = document.getElementById("rightCol") as HTMLElement;
      const headerInner = document.getElementById("headerInner") as HTMLElement;
      const main = document.getElementById("main") as HTMLElement;

      if (!grid || !leftCol || !rightCol || !headerInner || !main) return;

      if (w < breakpoint) {
        grid.style.flexDirection = "column";
        grid.style.alignItems = "stretch";

        leftCol.style.width = "100%";
        leftCol.style.boxSizing = "border-box";
        rightCol.style.width = "100%";
        rightCol.style.boxSizing = "border-box";

        headerInner.style.flexDirection = "column";
        headerInner.style.alignItems = "center";
        headerInner.style.justifyContent = "center";
        headerInner.style.gap = "12px";
        main.style.padding = "0 18px";
      } else {
        grid.style.flexDirection = "row";
        grid.style.alignItems = "flex-start";

        leftCol.style.width = "60%";
        leftCol.style.boxSizing = "border-box";
        rightCol.style.width = "40%";
        rightCol.style.boxSizing = "border-box";

        headerInner.style.flexDirection = "row";
        headerInner.style.alignItems = "center";
        headerInner.style.justifyContent = "space-between";
        headerInner.style.gap = "20px";
        main.style.padding = "0 10px";
      }
    }

    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
    };
  }, []);

  return (
    <div
      style={{
        margin: 0,
        background: "#F8FAFC",
        color: "#1F2937",
        fontFamily:
          "'Segoe UI', system-ui, -apple-system, 'Helvetica Neue', Arial, 'Noto Sans', 'Liberation Sans', sans-serif",
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
      }}
    >
      {/* Header */}
      <header
        id="pageHeader"
        style={{
          width: "100%",
          background: "#FFFFFF",
          boxShadow: "0 2px 8px rgba(15,23,42,0.06)",
          padding: "20px 28px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          id="headerInner"
          style={{
            width: "100%",
            maxWidth: "1100px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "20px",
          }}
        >
          <div
            id="logoWrap"
            style={{ display: "flex", alignItems: "center", gap: "18px" }}
          >
            <img
              src="/logo1.png"
              alt="Allen City Pharmacy Logo"
              style={{
                height: "64px",
                width: "auto",
                display: "block",
                objectFit: "contain",
              }}
            />
          </div>

          <nav
            id="mainNav"
            aria-label="Main navigation"
            style={{
              display: "flex",
              gap: "28px",
              alignItems: "center",
            }}
          >
            <a
              href="index.html"
              style={{
                textDecoration: "none",
                fontWeight: 600,
                fontSize: "16px",
                color: "#374151",
              }}
            >
              Home
            </a>
            <a
              href="about.html"
              style={{
                textDecoration: "none",
                fontWeight: 600,
                fontSize: "16px",
                color: "#374151",
              }}
            >
              About
            </a>
            <a
              href="shop.html"
              style={{
                textDecoration: "none",
                fontWeight: 600,
                fontSize: "16px",
                color: "#374151",
              }}
            >
              Shop
            </a>
            <a
              href="#"
              aria-current="page"
              style={{
                textDecoration: "none",
                fontWeight: 700,
                fontSize: "16px",
                color: "#065F46",
                borderBottom: "3px solid #065F46",
                paddingBottom: "6px",
              }}
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Main content */}
      <main
        id="main"
        style={{
          width: "100%",
          maxWidth: "1100px",
          margin: "32px auto",
          padding: "0 20px",
          boxSizing: "border-box",
        }}
      >
        {/* Intro */}
        <section
          id="intro"
          style={{ textAlign: "center", marginBottom: "32px" }}
        >
          <h1
            style={{
              margin: 0,
              fontSize: "32px",
              lineHeight: 1.05,
              color: "#065F46",
              fontWeight: 800,
            }}
          >
            Contact Us
          </h1>
          <p
            style={{
              margin: "14px auto 0",
              maxWidth: "760px",
              color: "#475569",
              fontSize: "16px",
            }}
          >
            Have questions about your prescription, our services, or an online
            order? Our team is here to help — 24/7 support for your convenience.
          </p>
        </section>

        {/* Grid: Form & contact info */}
        <section
          id="grid"
          style={{ display: "flex", gap: "24px", flexDirection: "column" }}
        >
          {/* Form */}
          <div
            id="leftCol"
            style={{
              background: "#FFFFFF",
              padding: "24px",
              borderRadius: "18px",
              boxShadow: "0 6px 18px rgba(15,23,42,0.06)",
            }}
          >
            <h2
              style={{
                margin: "0 0 18px 0",
                color: "#064E3B",
                fontSize: "22px",
                fontWeight: 700,
              }}
            >
              Send us a message
            </h2>

            <form
              id="contactForm"
              action="#"
              method="POST"
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <label style={{ display: "block", fontSize: "14px", color: "#374151" }}>
                <span style={{ display: "block", marginBottom: "8px" }}>
                  Full Name
                </span>
                <input
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  required
                  style={{
                    width: "100%",
                    padding: "12px 14px",
                    borderRadius: "10px",
                    border: "1px solid #D1D5DB",
                    fontSize: "15px",
                    outline: "none",
                    boxSizing: "border-box",
                  }}
                />
              </label>

              <label style={{ display: "block", fontSize: "14px", color: "#374151" }}>
                <span style={{ display: "block", marginBottom: "8px" }}>Email Address</span>
                <input
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                  style={{
                    width: "100%",
                    padding: "12px 14px",
                    borderRadius: "10px",
                    border: "1px solid #D1D5DB",
                    fontSize: "15px",
                    outline: "none",
                    boxSizing: "border-box",
                  }}
                />
              </label>

              <label style={{ display: "block", fontSize: "14px", color: "#374151" }}>
                <span style={{ display: "block", marginBottom: "8px" }}>Subject</span>
                <input
                  name="subject"
                  type="text"
                  placeholder="Subject"
                  style={{
                    width: "100%",
                    padding: "12px 14px",
                    borderRadius: "10px",
                    border: "1px solid #D1D5DB",
                    fontSize: "15px",
                    outline: "none",
                    boxSizing: "border-box",
                  }}
                />
              </label>

              <label style={{ display: "block", fontSize: "14px", color: "#374151" }}>
                <span style={{ display: "block", marginBottom: "8px" }}>Message</span>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Your message..."
                  style={{
                    width: "100%",
                    padding: "12px 14px",
                    borderRadius: "10px",
                    border: "1px solid #D1D5DB",
                    fontSize: "15px",
                    outline: "none",
                    boxSizing: "border-box",
                    resize: "vertical",
                  }}
                ></textarea>
              </label>

              <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", gap: "12px" }}>
                <button
                  type="submit"
                  style={{
                    background: "#065F46",
                    color: "#FFFFFF",
                    border: "none",
                    padding: "12px 18px",
                    fontSize: "15px",
                    fontWeight: 700,
                    borderRadius: "10px",
                    cursor: "pointer",
                    boxShadow: "0 6px 18px rgba(6,95,70,0.12)",
                  }}
                >
                  Send Message
                </button>
                <span id="formNote" style={{ color: "#6B7280", fontSize: "14px" }}>
                  We typically respond within 1 business day.
                </span>
              </div>
            </form>
          </div>

          {/* Contact Info */}
          <aside
            id="rightCol"
            style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: "18px" }}
          >
            <div style={{ background: "transparent" }}>
              <h2 style={{ margin: "0 0 12px 0", color: "#064E3B", fontSize: "22px", fontWeight: 700 }}>Get in Touch</h2>
              <p style={{ margin: "0 0 12px 0", color: "#475569", fontSize: "15px" }}>
                Whether you’re managing prescriptions, exploring products, or seeking health advice, we’re just a message away.
              </p>
            </div>

            <div id="contactsList" style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {/* Phone */}
              <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                <img src="/Phone.png" alt="Phone" style={{ height: "40px", width: "40px", objectFit: "contain" }} />
                <div>
                  <div style={{ fontSize: "13px", color: "#6B7280" }}>Call Us</div>
                  <div style={{ fontWeight: 700, color: "#065F46", fontSize: "16px" }}>+1 (972) 555-7890</div>
                </div>
              </div>

              {/* Email */}
              <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                <img src="/Email.png" alt="Email" style={{ height: "40px", width: "40px", objectFit: "contain" }} />
                <div>
                  <div style={{ fontSize: "13px", color: "#6B7280" }}>Email</div>
                  <div style={{ fontWeight: 700, color: "#065F46", fontSize: "16px" }}>support@allencitypharmacy.com</div>
                </div>
              </div>

              {/* Address */}
              <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                <img src="/Address.png" alt="Location" style={{ height: "40px", width: "40px", objectFit: "contain" }} />
                <div>
                  <div style={{ fontSize: "13px", color: "#6B7280" }}>Address</div>
                  <div style={{ fontWeight: 700, color: "#065F46", fontSize: "16px" }}>123 Healthway Street, Allen, Texas, USA</div>
                </div>
              </div>

              {/* Hours */}
              <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                <img src="/Clock.png" alt="Hours" style={{ height: "40px", width: "40px", objectFit: "contain" }} />
                <div>
                  <div style={{ fontSize: "13px", color: "#6B7280" }}>Working Hours</div>
                  <div style={{ fontWeight: 700, color: "#065F46", fontSize: "16px" }}>Mon–Sun: 8:00 AM – 9:00 PM</div>
                </div>
              </div>
            </div>

            {/* Social */}
            <div style={{ marginTop: "8px" }}>
              <div style={{ color: "#6B7280", marginBottom: "8px" }}>Follow us</div>
              <div style={{ display: "flex", gap: "12px" }}>
                <a href="#" style={{ display: "inline-block", textDecoration: "none" }} aria-label="Facebook">
                  <img src="/facebook.png" alt="Facebook" style={{ height: "36px", width: "36px", objectFit: "contain" }} />
                </a>
                <a href="#" style={{ display: "inline-block", textDecoration: "none" }} aria-label="Instagram">
                  <img src="/Instagram.png" alt="Instagram" style={{ height: "36px", width: "36px", objectFit: "contain" }} />
                </a>
                <a href="#" style={{ display: "inline-block", textDecoration: "none" }} aria-label="Twitter">
                  <img src="/Twitter.png" alt="Twitter" style={{ height: "36px", width: "36px", objectFit: "contain" }} />
                </a>
              </div>
            </div>
          </aside>
        </section>

        {/* Map Section */}
        <section id="visitSection" style={{ marginTop: "36px" }}>
          <div style={{ textAlign: "center", marginBottom: "18px" }}>
            <h2 style={{ margin: 0, fontSize: "20px", color: "#065F46", fontWeight: 700 }}>Visit Our Pharmacy</h2>
            <p style={{ margin: "8px 0 0 0", color: "#475569", fontSize: "15px" }}>
              We’re conveniently located in the heart of Allen, Texas.
            </p>
          </div>

          <div
            id="mapWrap"
            style={{
              width: "100%",
              borderRadius: "18px",
              overflow: "hidden",
              boxShadow: "0 10px 30px rgba(15,23,42,0.06)",
              marginTop: "16px",
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3342.7022994827347!2d-96.67250052467837!3d33.1031740735439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c166b2f0dffb1%3A0xbee5d6c6c72b4a1!2sAllen%2C%20TX%2075013%2C%20USA!5e0!3m2!1sen!2sus!4v1728261000000!5m2!1sen!2sus"
              style={{ width: "100%", height: "400px", border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer
        style={{
          width: "100%",
          background: "#0F1724",
          color: "#D1D5DB",
          padding: "20px 16px",
          marginTop: "40px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ fontSize: "14px" }}>&copy; 2025 Allen City Pharmacy. All Rights Reserved.</div>
          <div style={{ marginTop: "8px", fontSize: "14px" }}>
            <a href="#" style={{ color: "#D1D5DB", textDecoration: "none", marginRight: "10px" }}>
              Privacy Policy
            </a>{" "}
            |{" "}
            <a href="#" style={{ color: "#D1D5DB", textDecoration: "none", marginLeft: "10px" }}>
              Terms of Use
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;
