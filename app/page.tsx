export default function Home() {
  return (
    <main
      style={{
        background:
          "linear-gradient(135deg, #020617 0%, #07152f 45%, #3b0764 100%)",
        minHeight: "100vh",
        color: "white",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* HERO SECTION */}

      <section
        style={{
          textAlign: "center",
          padding: "110px 20px 80px",
          maxWidth: "1200px",
          margin: "auto",
        }}
      >
        <h1
          style={{
            fontSize: "88px",
            fontWeight: "bold",
            marginBottom: "20px",
            lineHeight: "1",
          }}
        >
          <span style={{ color: "#22d3ee" }}>Edu</span>
          <span style={{ color: "white" }}>Admin</span>
          <span style={{ color: "#d946ef" }}>X</span>
        </h1>

        <p
          style={{
            fontSize: "34px",
            color: "#e2e8f0",
            marginBottom: "25px",
            fontWeight: "600",
          }}
        >
          Smart RFID Attendance & Administration Platform
        </p>

        <p
          style={{
            fontSize: "20px",
            color: "#94a3b8",
            maxWidth: "850px",
            margin: "0 auto",
            lineHeight: "1.8",
          }}
        >
          Automate attendance, streamline administration,
          and monitor educational institutions in real time
          using modern cloud-based technology.
        </p>

        {/* BUTTONS */}

        <div
          style={{
            marginTop: "45px",
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <a
  href="/demo"
  style={{
    display: "inline-block",
    background:
      "linear-gradient(to right, #06b6d4, #a21caf)",
    color: "white",
    padding: "16px 34px",
    borderRadius: "12px",
    fontSize: "18px",
    fontWeight: "bold",
    textDecoration: "none",
    cursor: "pointer",
    boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
  }}
>
  Book Free Demo
</a>

          <button
            style={{
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.12)",
              color: "white",
              padding: "16px 34px",
              borderRadius: "12px",
              fontSize: "18px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Contact Us
          </button>
        </div>
      </section>

      {/* FEATURES SECTION */}

      <section
        style={{
          maxWidth: "1250px",
          margin: "auto",
          padding: "20px 20px 100px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "48px",
            marginBottom: "60px",
          }}
        >
          Powerful Features
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "30px",
          }}
        >
          {/* CARD 1 */}

          <div
            style={{
              background: "rgba(255,255,255,0.07)",
              padding: "35px",
              borderRadius: "22px",
              border: "1px solid rgba(255,255,255,0.08)",
              backdropFilter: "blur(10px)",
            }}
          >
            <div style={{ fontSize: "40px" }}>📡</div>

            <h3
              style={{
                marginTop: "20px",
                fontSize: "28px",
                marginBottom: "15px",
              }}
            >
              RFID Attendance
            </h3>

            <p
              style={{
                color: "#cbd5e1",
                lineHeight: "1.7",
                fontSize: "17px",
              }}
            >
              Fully automated attendance tracking using
              advanced UHF RFID technology with real-time detection.
            </p>
          </div>

          {/* CARD 2 */}

          <div
            style={{
              background: "rgba(255,255,255,0.07)",
              padding: "35px",
              borderRadius: "22px",
              border: "1px solid rgba(255,255,255,0.08)",
              backdropFilter: "blur(10px)",
            }}
          >
            <div style={{ fontSize: "40px" }}>📊</div>

            <h3
              style={{
                marginTop: "20px",
                fontSize: "28px",
                marginBottom: "15px",
              }}
            >
              Real-Time Dashboard
            </h3>

            <p
              style={{
                color: "#cbd5e1",
                lineHeight: "1.7",
                fontSize: "17px",
              }}
            >
              Monitor attendance, analytics, reports and
              administrative activities instantly from anywhere.
            </p>
          </div>

          {/* CARD 3 */}

          <div
            style={{
              background: "rgba(255,255,255,0.07)",
              padding: "35px",
              borderRadius: "22px",
              border: "1px solid rgba(255,255,255,0.08)",
              backdropFilter: "blur(10px)",
            }}
          >
            <div style={{ fontSize: "40px" }}>☁️</div>

            <h3
              style={{
                marginTop: "20px",
                fontSize: "28px",
                marginBottom: "15px",
              }}
            >
              Cloud Based Platform
            </h3>

            <p
              style={{
                color: "#cbd5e1",
                lineHeight: "1.7",
                fontSize: "17px",
              }}
            >
              Secure, scalable and cloud-ready infrastructure
              designed for modern institutions and organizations.
            </p>
          </div>

          {/* CARD 4 */}

          <div
            style={{
              background: "rgba(255,255,255,0.07)",
              padding: "35px",
              borderRadius: "22px",
              border: "1px solid rgba(255,255,255,0.08)",
              backdropFilter: "blur(10px)",
            }}
          >
            <div style={{ fontSize: "40px" }}>📈</div>

            <h3
              style={{
                marginTop: "20px",
                fontSize: "28px",
                marginBottom: "15px",
              }}
            >
              Reports & Analytics
            </h3>

            <p
              style={{
                color: "#cbd5e1",
                lineHeight: "1.7",
                fontSize: "17px",
              }}
            >
              Generate smart attendance reports and
              actionable insights for better decision making.
            </p>
          </div>

          {/* CARD 5 */}

          <div
            style={{
              background: "rgba(255,255,255,0.07)",
              padding: "35px",
              borderRadius: "22px",
              border: "1px solid rgba(255,255,255,0.08)",
              backdropFilter: "blur(10px)",
            }}
          >
            <div style={{ fontSize: "40px" }}>🏫</div>

            <h3
              style={{
                marginTop: "20px",
                fontSize: "28px",
                marginBottom: "15px",
              }}
            >
              Multi Institution Ready
            </h3>

            <p
              style={{
                color: "#cbd5e1",
                lineHeight: "1.7",
                fontSize: "17px",
              }}
            >
              Flexible and scalable architecture suitable
              for schools, colleges and training institutes.
            </p>
          </div>

          {/* CARD 6 */}

          <div
            style={{
              background: "rgba(255,255,255,0.07)",
              padding: "35px",
              borderRadius: "22px",
              border: "1px solid rgba(255,255,255,0.08)",
              backdropFilter: "blur(10px)",
            }}
          >
            <div style={{ fontSize: "40px" }}>🔔</div>

            <h3
              style={{
                marginTop: "20px",
                fontSize: "28px",
                marginBottom: "15px",
              }}
            >
              Smart Notifications
            </h3>

            <p
              style={{
                color: "#cbd5e1",
                lineHeight: "1.7",
                fontSize: "17px",
              }}
            >
              Future-ready notification system for alerts,
              attendance updates and communication workflows.
            </p>
          </div>
        </div>
      </section>

      {/* WHY SECTION */}

      <section
        style={{
          padding: "20px 20px 100px",
          textAlign: "center",
          maxWidth: "1000px",
          margin: "auto",
        }}
      >
        <h2
          style={{
            fontSize: "46px",
            marginBottom: "30px",
          }}
        >
          Why EduAdminX?
        </h2>

        <p
          style={{
            fontSize: "22px",
            color: "#cbd5e1",
            lineHeight: "1.8",
          }}
        >
          EduAdminX is built for modern educational institutions
          looking to digitize attendance and administration
          using secure, scalable and cloud-based technologies.
        </p>
      </section>

      {/* CTA SECTION */}

      <section
        style={{
          padding: "20px 20px 100px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            maxWidth: "850px",
            margin: "auto",
            background: "rgba(255,255,255,0.08)",
            borderRadius: "30px",
            padding: "60px 30px",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <h2
            style={{
              fontSize: "46px",
              marginBottom: "25px",
            }}
          >
            Want to see EduAdminX in action?
          </h2>

          <p
            style={{
              color: "#cbd5e1",
              fontSize: "20px",
              marginBottom: "35px",
            }}
          >
            Schedule a free demo and explore how our platform
            can modernize your institution.
          </p>

          <a
  href="/demo"
  style={{
    display: "inline-block",
    background:
      "linear-gradient(to right, #06b6d4, #a21caf)",
    border: "none",
    color: "white",
    padding: "18px 40px",
    borderRadius: "14px",
    fontSize: "20px",
    fontWeight: "bold",
    cursor: "pointer",
    textDecoration: "none",
  }}
>
  Request Free Demo
</a>
        </div>
      </section>

      {/* CONTACT */}

      <section
        style={{
          textAlign: "center",
          paddingBottom: "80px",
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

        <p
          style={{
            fontSize: "24px",
            marginBottom: "15px",
          }}
        >
          📞 +91-9560064285
        </p>

        <p
          style={{
            fontSize: "24px",
            color: "#cbd5e1",
          }}
        >
          📧 info@eduadminx.com
        </p>
      </section>
    </main>
  );
}