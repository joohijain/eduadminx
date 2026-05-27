export default function AboutPage() {
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
          maxWidth: "1000px",
          margin: "auto",
          textAlign: "center",
          marginBottom: "100px",
        }}
      >
        <h1
          style={{
            fontSize: "72px",
            marginBottom: "25px",
          }}
        >
          About EduAdminX
        </h1>

        <p
          style={{
            fontSize: "22px",
            color: "#cbd5e1",
            lineHeight: "1.8",
          }}
        >
          EduAdminX is a modern technology and automation company
          delivering RFID solutions, software development,
          cloud platforms and smart digital systems
          for educational institutions, businesses and enterprises.
        </p>
      </section>

      {/* CONTENT */}

      <section
        style={{
          maxWidth: "1200px",
          margin: "auto",
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "35px",
        }}
      >
        {/* CARD 1 */}

        <div
          style={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "26px",
            padding: "40px",
          }}
        >
          <div style={{ fontSize: "54px", marginBottom: "22px" }}>
            🚀
          </div>

          <h2
            style={{
              fontSize: "34px",
              marginBottom: "18px",
            }}
          >
            Our Vision
          </h2>

          <p
            style={{
              color: "#cbd5e1",
              lineHeight: "1.8",
            }}
          >
            To build scalable and innovative technology solutions
            that simplify operations and enable digital transformation.
          </p>
        </div>

        {/* CARD 2 */}

        <div
          style={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "26px",
            padding: "40px",
          }}
        >
          <div style={{ fontSize: "54px", marginBottom: "22px" }}>
            💡
          </div>

          <h2
            style={{
              fontSize: "34px",
              marginBottom: "18px",
            }}
          >
            What We Do
          </h2>

          <p
            style={{
              color: "#cbd5e1",
              lineHeight: "1.8",
            }}
          >
            We provide RFID systems, websites, desktop applications,
            cloud automation and enterprise technology services.
          </p>
        </div>

        {/* CARD 3 */}

        <div
          style={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "26px",
            padding: "40px",
          }}
        >
          <div style={{ fontSize: "54px", marginBottom: "22px" }}>
            🛠️
          </div>

          <h2
            style={{
              fontSize: "34px",
              marginBottom: "18px",
            }}
          >
            Our Expertise
          </h2>

          <p
            style={{
              color: "#cbd5e1",
              lineHeight: "1.8",
            }}
          >
            Hardware + software integration, smart automation,
            cloud-ready systems and scalable application development.
          </p>
        </div>
      </section>
    </main>
  );
}