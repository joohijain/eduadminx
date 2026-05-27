export default function Home() {
  return (
    <main
      style={{
        background:
          "linear-gradient(135deg, #020617 0%, #0f172a 50%, #581c87 100%)",
        minHeight: "100vh",
        color: "white",
        fontFamily: "Arial, sans-serif",
      }}
    >

      {/* HERO SECTION */}

      <section
        style={{
          textAlign: "center",
          padding: "100px 20px 80px",
        }}
      >

        <h1
          style={{
            fontSize: "80px",
            fontWeight: "bold",
            marginBottom: "20px",
          }}
        >
          <span style={{ color: "#22d3ee" }}>Edu</span>
          <span>Admin</span>
          <span style={{ color: "#d946ef" }}>X</span>
        </h1>

        <p
          style={{
            fontSize: "28px",
            color: "#cbd5e1",
            marginBottom: "25px",
          }}
        >
          Smart Attendance & Administration Solutions
        </p>

        <p
          style={{
            fontSize: "20px",
            color: "#94a3b8",
            maxWidth: "700px",
            margin: "0 auto 40px",
            lineHeight: "1.6",
          }}
        >
          Modern RFID attendance and administration platform
          designed for educational institutions.
        </p>

        <button
          style={{
            background:
              "linear-gradient(to right, #06b6d4, #a21caf)",
            color: "white",
            border: "none",
            padding: "16px 36px",
            borderRadius: "12px",
            fontSize: "18px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Book Free Demo
        </button>

      </section>

      {/* FEATURES SECTION */}

      <section
        style={{
          padding: "40px 20px 80px",
          maxWidth: "1200px",
          margin: "auto",
        }}
      >

        <h2
          style={{
            textAlign: "center",
            fontSize: "42px",
            marginBottom: "50px",
          }}
        >
          Our Features
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "25px",
          }}
        >

          <div
            style={{
              background: "rgba(255,255,255,0.08)",
              padding: "30px",
              borderRadius: "20px",
            }}
          >
            <h3 style={{ fontSize: "24px", marginBottom: "15px" }}>
              RFID Attendance
            </h3>

            <p style={{ color: "#cbd5e1" }}>
              Automated attendance tracking using smart RFID technology.
            </p>
          </div>

          <div
            style={{
              background: "rgba(255,255,255,0.08)",
              padding: "30px",
              borderRadius: "20px",
            }}
          >
            <h3 style={{ fontSize: "24px", marginBottom: "15px" }}>
              Real-Time Reports
            </h3>

            <p style={{ color: "#cbd5e1" }}>
              Instant attendance insights and reporting dashboard.
            </p>
          </div>

          <div
            style={{
              background: "rgba(255,255,255,0.08)",
              padding: "30px",
              borderRadius: "20px",
            }}
          >
            <h3 style={{ fontSize: "24px", marginBottom: "15px" }}>
              Cloud Based
            </h3>

            <p style={{ color: "#cbd5e1" }}>
              Secure and scalable cloud infrastructure for institutions.
            </p>
          </div>

        </div>

      </section>

      {/* CONTACT SECTION */}

      <section
        style={{
          textAlign: "center",
          padding: "50px 20px 100px",
        }}
      >

        <h2
          style={{
            fontSize: "40px",
            marginBottom: "30px",
          }}
        >
          Contact Us
        </h2>

        <p style={{ fontSize: "22px", marginBottom: "15px" }}>
          📞 +91-9560064285
        </p>

        <p style={{ fontSize: "22px" }}>
          📧 info@eduadminx.com
        </p>

      </section>

    </main>
  );
}