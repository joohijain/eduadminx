export default function ContactPage() {
  return (
    <main
      style={{
        background:
          "linear-gradient(to bottom, #020617, #0f172a, #111827)",
        minHeight: "100vh",
        color: "white",
        padding: "120px 40px 100px",
      }}
    >
      {/* HERO */}

      <section
        style={{
          textAlign: "center",
          maxWidth: "900px",
          margin: "auto",
          marginBottom: "80px",
        }}
      >
        <h1
          style={{
            fontSize: "72px",
            marginBottom: "25px",
          }}
        >
          Contact Us
        </h1>

        <p
          style={{
            fontSize: "22px",
            color: "#cbd5e1",
            lineHeight: "1.8",
          }}
        >
          Let’s discuss your project, automation requirements
          or technology solutions for your organization.
        </p>
      </section>

      {/* CONTACT SECTION */}

      <section
        style={{
          maxWidth: "1200px",
          margin: "auto",
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(350px, 1fr))",
          gap: "40px",
        }}
      >
        {/* LEFT */}

        <div
          style={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "28px",
            padding: "45px",
          }}
        >
          <h2
            style={{
              fontSize: "40px",
              marginBottom: "30px",
            }}
          >
            Get In Touch
          </h2>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "28px",
              fontSize: "20px",
              color: "#cbd5e1",
            }}
          >
            <div>📞 +91-9560064285</div>

            <div>📧 info@eduadminx.com</div>

            <div>🌐 www.eduadminx.com</div>

            <div>📍 India</div>
          </div>
        </div>

        {/* RIGHT FORM */}

        <div
          style={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "28px",
            padding: "45px",
          }}
        >
          <h2
            style={{
              fontSize: "40px",
              marginBottom: "30px",
            }}
          >
            Send Inquiry
          </h2>

          <form
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <input
              type="text"
              placeholder="Your Name"
              style={inputStyle}
            />

            <input
              type="email"
              placeholder="Email Address"
              style={inputStyle}
            />

            <input
              type="text"
              placeholder="Phone Number"
              style={inputStyle}
            />

            <textarea
              placeholder="Tell us about your requirement"
              rows={5}
              style={inputStyle}
            />

            <button
              type="submit"
              style={{
                background:
                  "linear-gradient(to right, #06b6d4, #a21caf)",
                border: "none",
                color: "white",
                padding: "16px",
                borderRadius: "12px",
                fontSize: "18px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Submit Inquiry
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

const inputStyle = {
  background: "rgba(255,255,255,0.06)",
  border: "1px solid rgba(255,255,255,0.08)",
  padding: "16px",
  borderRadius: "12px",
  color: "white",
  fontSize: "16px",
  outline: "none",
};