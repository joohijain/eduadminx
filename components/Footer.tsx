export default function Footer() {
  return (
    <footer
      style={{
        background: "#010314",
        color: "white",
        padding: "80px 40px 40px",
        borderTop: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div
        style={{
          maxWidth: "1300px",
          margin: "auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "50px",
        }}
      >
        {/* COMPANY */}
        <div>
          <h2
            style={{
              fontSize: "34px",
              marginBottom: "20px",
              fontWeight: "bold",
            }}
          >
            <span style={{ color: "#22d3ee" }}>Edu</span>
            <span>Admin</span>
            <span style={{ color: "#d946ef" }}>X</span>
          </h2>

          <p
            style={{
              color: "#94a3b8",
              lineHeight: "1.8",
            }}
          >
            Smart technology and automation solutions
            for educational institutions, businesses
            and enterprises.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3
            style={{
              marginBottom: "20px",
              fontSize: "22px",
            }}
          >
            Quick Links
          </h3>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "14px",
            }}
          >
            <a href="/" style={linkStyle}>Home</a>
            <a href="/services" style={linkStyle}>Services</a>
            <a href="/about" style={linkStyle}>About</a>
            <a href="/demo" style={linkStyle}>Demo</a>
            <a href="/contact" style={linkStyle}>Contact</a>
          </div>
        </div>

        {/* SERVICES */}
        <div>
          <h3
            style={{
              marginBottom: "20px",
              fontSize: "22px",
            }}
          >
            Services
          </h3>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "14px",
            }}
          >
            <span style={textStyle}>RFID Solutions</span>
            <span style={textStyle}>Website Development</span>
            <span style={textStyle}>Desktop Applications</span>
            <span style={textStyle}>Hardware Solutions</span>
            <span style={textStyle}>Cloud Automation</span>
          </div>
        </div>

        {/* CONTACT */}
        <div>
          <h3
            style={{
              marginBottom: "20px",
              fontSize: "22px",
            }}
          >
            Contact
          </h3>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              color: "#cbd5e1",
            }}
          >
            <span>📞 +91-9560064285</span>
            <span>📧 info@eduadminx.com</span>
            <span>📍 India</span>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div
        style={{
          marginTop: "70px",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          paddingTop: "25px",
          textAlign: "center",
          color: "#64748b",
        }}
      >
        © 2026 EduAdminX. All Rights Reserved.
      </div>
    </footer>
  );
}

const linkStyle = {
  color: "#cbd5e1",
  textDecoration: "none",
};

const textStyle = {
  color: "#cbd5e1",
};