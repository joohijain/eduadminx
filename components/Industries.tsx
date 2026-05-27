export default function Industries() {
  const industries = [
    {
      title: "Schools",
      icon: "🏫",
      desc: "RFID attendance, administration systems and smart campus solutions.",
    },
    {
      title: "Offices",
      icon: "🏢",
      desc: "Employee attendance tracking and access management systems.",
    },
    {
      title: "Hostels",
      icon: "🏠",
      desc: "Secure entry, student monitoring and hostel automation solutions.",
    },
    {
      title: "Enterprises",
      icon: "💼",
      desc: "Custom software, websites and enterprise automation platforms.",
    },
  ];

  return (
    <section
      style={{
        background: "#020617",
        padding: "100px 40px",
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
            fontSize: "54px",
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          Industries We Serve
        </h2>

        <p
          style={{
            textAlign: "center",
            color: "#94a3b8",
            maxWidth: "850px",
            margin: "auto",
            fontSize: "20px",
            lineHeight: "1.8",
            marginBottom: "70px",
          }}
        >
          EduAdminX delivers scalable technology solutions across educational,
          commercial and enterprise sectors.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "30px",
          }}
        >
          {industries.map((industry, index) => (
            <div
              key={index}
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "22px",
                padding: "40px 30px",
                textAlign: "center",
                backdropFilter: "blur(10px)",
                transition: "0.3s",
              }}
            >
              <div
                style={{
                  fontSize: "60px",
                  marginBottom: "20px",
                }}
              >
                {industry.icon}
              </div>

              <h3
                style={{
                  fontSize: "28px",
                  marginBottom: "18px",
                }}
              >
                {industry.title}
              </h3>

              <p
                style={{
                  color: "#cbd5e1",
                  lineHeight: "1.8",
                  fontSize: "17px",
                }}
              >
                {industry.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}