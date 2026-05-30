import Link from "next/link";
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
            <Link href="/" style={linkStyle}>Home</Link>
            <Link href="/services" style={linkStyle}>Services</Link>
            <Link href="/about" style={linkStyle}>About</Link>
            <Link href="/demo" style={linkStyle}>Demo</Link>
            <Link href="/contact" style={linkStyle}>Contact</Link>
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
  <Link href="/services/rfid-solutions" style={linkStyle}>
    RFID Solutions
  </Link>

  <Link href="/services/web-development" style={linkStyle}>
    Website Development
  </Link>

  <Link href="/services/software-development" style={linkStyle}>
    Desktop Applications
  </Link>

  <Link href="/services/rfid-solutions" style={linkStyle}>
    Hardware Solutions
  </Link>

  <Link href="/services/cloud-solutions" style={linkStyle}>
    Cloud Automation
  </Link>
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
            <span>📞 +91-9729061588</span>
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