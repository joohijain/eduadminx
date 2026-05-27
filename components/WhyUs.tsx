"use client";
export default function WhyUs() {
  const points = [
    {
      title: "Modern Technology Stack",
      icon: "⚡",
      desc: "Built using scalable modern technologies for future-ready systems.",
    },
    {
      title: "Hardware + Software Expertise",
      icon: "🛠️",
      desc: "Complete solutions including RFID devices, software and automation.",
    },
    {
      title: "Cloud Ready Infrastructure",
      icon: "☁️",
      desc: "Secure and scalable cloud-based architecture for modern organizations.",
    },
    {
      title: "Custom Development",
      icon: "💻",
      desc: "Tailor-made software and automation solutions based on business needs.",
    },
  ];

  return (
    <section
      style={{
        background:
          "linear-gradient(to right, #020617, #111827, #3b0764)",
        padding: "110px 40px",
        color: "white",
      }}
    >
      <div
        style={{
          maxWidth: "1300px",
          margin: "auto",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "56px",
            marginBottom: "25px",
          }}
        >
          Why Choose EduAdminX?
        </h2>

        <p
          style={{
            textAlign: "center",
            color: "#cbd5e1",
            maxWidth: "850px",
            margin: "auto",
            lineHeight: "1.8",
            fontSize: "20px",
            marginBottom: "80px",
          }}
        >
          We combine smart automation, scalable software solutions
          and modern technologies to help organizations digitize
          and streamline their operations.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "30px",
          }}
        >
          {points.map((point, index) => (
            <div
              key={index}
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "24px",
                padding: "40px 30px",
                backdropFilter: "blur(12px)",
              }}
            >
              <div
                style={{
                  fontSize: "54px",
                  marginBottom: "25px",
                }}
              >
                {point.icon}
              </div>

              <h3
                style={{
                  fontSize: "28px",
                  marginBottom: "18px",
                }}
              >
                {point.title}
              </h3>

              <p
                style={{
                  color: "#cbd5e1",
                  lineHeight: "1.8",
                  fontSize: "17px",
                }}
              >
                {point.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}