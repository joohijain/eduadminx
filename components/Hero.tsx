export default function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(to right, #020617, #0f172a, #3b0764)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "120px 40px 80px",
        color: "white",
      }}
    >
      <div
        style={{
          maxWidth: "1300px",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "60px",
          alignItems: "center",
        }}
      >
        {/* LEFT SIDE */}
        <div>
          <h1
            style={{
              fontSize: "72px",
              lineHeight: "1.1",
              fontWeight: "bold",
              marginBottom: "30px",
            }}
          >
            Smart Tech
            <br />
            Solutions For
            <br />
            Modern Businesses
          </h1>

          <p
            style={{
              fontSize: "22px",
              lineHeight: "1.8",
              color: "#cbd5e1",
              marginBottom: "40px",
            }}
          >
            EduAdminX provides RFID systems, website development,
            desktop applications, smart attendance platforms,
            card printing solutions and enterprise automation services.
          </p>

          {/* BUTTONS */}
          <div
            style={{
              display: "flex",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            <button
              style={{
                background:
                  "linear-gradient(to right, #06b6d4, #a21caf)",
                border: "none",
                color: "white",
                padding: "16px 34px",
                borderRadius: "12px",
                fontSize: "18px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Request Free Demo
            </button>

            <button
              style={{
                background: "transparent",
                border: "1px solid #475569",
                color: "white",
                padding: "16px 34px",
                borderRadius: "12px",
                fontSize: "18px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Explore Services
            </button>
          </div>
        </div>

        {/* RIGHT SIDE CARDS */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "25px",
          }}
        >
          {[
            {
              title: "RFID Attendance",
              desc: "Smart attendance & tracking systems",
              icon: "📡",
            },
            {
              title: "Website Development",
              desc: "Modern business & school websites",
              icon: "🌐",
            },
            {
              title: "Desktop Applications",
              desc: "Custom Windows software solutions",
              icon: "💻",
            },
            {
              title: "RFID Cards & Devices",
              desc: "Cards, gates & access systems",
              icon: "🪪",
            },
          ].map((service, index) => (
            <div
              key={index}
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "22px",
                padding: "30px",
                backdropFilter: "blur(12px)",
                transition: "0.3s",
              }}
            >
              <div
                style={{
                  fontSize: "42px",
                  marginBottom: "18px",
                }}
              >
                {service.icon}
              </div>

              <h3
                style={{
                  fontSize: "24px",
                  marginBottom: "14px",
                }}
              >
                {service.title}
              </h3>

              <p
                style={{
                  color: "#cbd5e1",
                  lineHeight: "1.7",
                }}
              >
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}