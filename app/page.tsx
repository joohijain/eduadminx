export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #020617 0%, #0f172a 50%, #581c87 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        fontFamily: "Arial, sans-serif",
        padding: "20px",
      }}
    >
      <div
        style={{
          textAlign: "center",
          maxWidth: "700px",
        }}
      >
        <h1
          style={{
            fontSize: "80px",
            fontWeight: "bold",
            marginBottom: "20px",
            letterSpacing: "-2px",
          }}
        >
          <span style={{ color: "#22d3ee" }}>Edu</span>
          <span style={{ color: "white" }}>Admin</span>
          <span style={{ color: "#d946ef" }}>X</span>
        </h1>

        <p
          style={{
            fontSize: "28px",
            color: "#cbd5e1",
            marginBottom: "40px",
          }}
        >
          Smart Attendance & Administration Solutions
        </p>

        <div
          style={{
            background: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "20px",
            padding: "35px",
            backdropFilter: "blur(10px)",
          }}
        >
          <h2
            style={{
              fontSize: "32px",
              marginBottom: "20px",
            }}
          >
            Launching Soon 🚀
          </h2>

          <p
            style={{
              fontSize: "22px",
              marginBottom: "15px",
            }}
          >
            📞 +91-9560064285
          </p>

          <p
            style={{
              fontSize: "22px",
            }}
          >
            📧 info@eduadminx.com
          </p>
        </div>
      </div>
    </main>
  );
}