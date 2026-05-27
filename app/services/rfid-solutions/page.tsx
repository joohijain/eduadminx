export default function RFIDSolutionsPage() {
  const features = [
    {
      title: "Smart Attendance Tracking",
      icon: "📡",
      desc: "Automated RFID attendance systems for schools, offices and hostels.",
    },
    {
      title: "UHF RFID Technology",
      icon: "📶",
      desc: "Long-range RFID detection with fast and reliable scanning systems.",
    },
    {
      title: "Access Control Systems",
      icon: "🚪",
      desc: "Secure entry and exit management using RFID cards and smart gates.",
    },
    {
      title: "Cloud Monitoring Dashboard",
      icon: "☁️",
      desc: "Real-time monitoring, analytics and attendance reporting platform.",
    },
  ];

  const industries = [
    "Schools",
    "Offices",
    "Hostels",
    "Coaching Institutes",
    "Enterprises",
    "Commercial Buildings",
  ];

  return (
    <main
      style={{
        background:
          "linear-gradient(to bottom, #020617, #0f172a, #111827)",
        minHeight: "100vh",
        color: "white",
      }}
    >
      {/* HERO SECTION */}

      <section
        style={{
          padding: "140px 40px 100px",
        }}
      >
        <div
          style={{
            maxWidth: "1300px",
            margin: "auto",
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(350px, 1fr))",
            gap: "60px",
            alignItems: "center",
          }}
        >
          {/* LEFT */}

          <div>
            <h1
              style={{
                fontSize: "72px",
                lineHeight: "1.1",
                marginBottom: "30px",
              }}
            >
              RFID & Smart
              <br />
              Automation
              <br />
              Solutions
            </h1>

            <p
              style={{
                color: "#cbd5e1",
                fontSize: "22px",
                lineHeight: "1.8",
                marginBottom: "40px",
              }}
            >
              EduAdminX delivers advanced RFID attendance,
              smart access control and automation systems
              for educational institutions, offices,
              hostels and enterprises.
            </p>

            <a
              href="/demo"
              style={{
                display: "inline-block",
                background:
                  "linear-gradient(to right, #06b6d4, #a21caf)",
                color: "white",
                padding: "18px 36px",
                borderRadius: "14px",
                textDecoration: "none",
                fontWeight: "bold",
                fontSize: "18px",
              }}
            >
              Request Free Demo
            </a>
          </div>

          {/* RIGHT */}

          <div
            style={{
              background:
                "linear-gradient(to right, rgba(6,182,212,0.2), rgba(162,28,175,0.2))",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "32px",
              padding: "50px",
              backdropFilter: "blur(12px)",
            }}
          >
            <div
              style={{
                fontSize: "120px",
                textAlign: "center",
                marginBottom: "30px",
              }}
            >
              📡
            </div>

            <h2
              style={{
                textAlign: "center",
                fontSize: "36px",
                marginBottom: "20px",
              }}
            >
              Smart RFID Platform
            </h2>

            <p
              style={{
                textAlign: "center",
                color: "#cbd5e1",
                lineHeight: "1.8",
                fontSize: "18px",
              }}
            >
              Real-time attendance, access control
              and automation powered by modern RFID technologies.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURES */}

      <section
        style={{
          padding: "40px 40px 100px",
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
              marginBottom: "70px",
            }}
          >
            RFID Solution Features
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "30px",
            }}
          >
            {features.map((feature, index) => (
              <div
                key={index}
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "24px",
                  padding: "40px 30px",
                }}
              >
                <div
                  style={{
                    fontSize: "54px",
                    marginBottom: "24px",
                  }}
                >
                  {feature.icon}
                </div>

                <h3
                  style={{
                    fontSize: "28px",
                    marginBottom: "18px",
                  }}
                >
                  {feature.title}
                </h3>

                <p
                  style={{
                    color: "#cbd5e1",
                    lineHeight: "1.8",
                  }}
                >
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}

      <section
        style={{
          padding: "20px 40px 100px",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "auto",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: "56px",
              marginBottom: "30px",
            }}
          >
            Industries Using RFID Solutions
          </h2>

          <p
            style={{
              color: "#cbd5e1",
              fontSize: "20px",
              lineHeight: "1.8",
              marginBottom: "50px",
            }}
          >
            Our RFID systems are designed for multiple sectors
            requiring automation, tracking and smart monitoring.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "20px",
              justifyContent: "center",
            }}
          >
            {industries.map((industry, index) => (
              <div
                key={index}
                style={{
                  padding: "16px 28px",
                  borderRadius: "999px",
                  background:
                    "linear-gradient(to right, rgba(6,182,212,0.2), rgba(162,28,175,0.2))",
                  border: "1px solid rgba(255,255,255,0.08)",
                  fontSize: "18px",
                }}
              >
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}

      <section
        style={{
          padding: "20px 40px 120px",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "auto",
            textAlign: "center",
            background:
              "linear-gradient(to right, rgba(6,182,212,0.15), rgba(162,28,175,0.18))",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "32px",
            padding: "80px 40px",
          }}
        >
          <h2
            style={{
              fontSize: "54px",
              marginBottom: "25px",
            }}
          >
            Ready To Automate
            <br />
            Your Institution?
          </h2>

          <p
            style={{
              color: "#cbd5e1",
              fontSize: "22px",
              lineHeight: "1.8",
              marginBottom: "45px",
            }}
          >
            Get started with modern RFID attendance
            and smart automation solutions from EduAdminX.
          </p>

          <a
            href="/demo"
            style={{
              display: "inline-block",
              background:
                "linear-gradient(to right, #06b6d4, #a21caf)",
              color: "white",
              padding: "18px 36px",
              borderRadius: "14px",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "18px",
            }}
          >
            Book Free Demo
          </a>
        </div>
      </section>
    </main>
  );
}