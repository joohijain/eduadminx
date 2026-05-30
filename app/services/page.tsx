import Link from "next/link";
export default function ServicesPage() {
  const services = [
    {
    title: "RFID & Smart Automation",
    icon: "📡",
    desc: "Attendance systems, smart gates, access control and automation solutions for schools, offices and hostels.",
    link: "/services/rfid-solutions",
  },
  {
    title: "Website Development",
    icon: "🌐",
    desc: "Modern responsive websites, SaaS platforms, school portals and business websites.",
    link: "/services/web-development",
  },
  {
    title: "Desktop Applications",
    icon: "💻",
    desc: "Custom Windows software applications for administration, billing and management systems.",
    link: "/services/software-development",
  },
  {
    title: "RFID Hardware Solutions",
    icon: "🪪",
    desc: "RFID printed cards, UHF readers, gates and smart access hardware devices.",
    link: "/services/rfid-solutions",
  },
  {
    title: "Third Party Administration",
    icon: "🤝",
    desc: "White-label deployment, integration support and partner administration services.",
    link: "/services/automation-solutions",
  },
  {
    title: "Cloud & Automation",
    icon: "☁️",
    desc: "Cloud infrastructure, smart dashboards and scalable automation systems.",
    link: "/services/cloud-solutions",
  },
  ];

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
          textAlign: "center",
          maxWidth: "1000px",
          margin: "auto",
          marginBottom: "90px",
        }}
      >
        <h1
          style={{
            fontSize: "72px",
            marginBottom: "25px",
            lineHeight: "1.1",
          }}
        >
          Our Services
        </h1>

        <p
          style={{
            fontSize: "22px",
            color: "#cbd5e1",
            lineHeight: "1.8",
          }}
        >
          EduAdminX provides scalable technology,
          automation and software solutions for educational,
          commercial and enterprise sectors.
        </p>
      </section>

      {/* SERVICES GRID */}

      <section
        style={{
          maxWidth: "1300px",
          margin: "auto",
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "35px",
        }}
      >
        {services.map((service, index) => (
          <div
            key={index}
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "26px",
              padding: "40px 32px",
              backdropFilter: "blur(12px)",
              transition: "0.3s",
            }}
          >
            <div
              style={{
                fontSize: "60px",
                marginBottom: "24px",
              }}
            >
              {service.icon}
            </div>

            <h2
              style={{
                fontSize: "32px",
                marginBottom: "18px",
              }}
            >
              {service.title}
            </h2>

            <p
              style={{
                color: "#cbd5e1",
                lineHeight: "1.8",
                fontSize: "17px",
                marginBottom: "28px",
              }}
            >
              {service.desc}
            </p>

            <Link
  href={service.link}
  style={{
    display: "inline-block",
    background:
      "linear-gradient(to right, #06b6d4, #a21caf)",
    color: "white",
    padding: "14px 26px",
    borderRadius: "12px",
    fontWeight: "bold",
    textDecoration: "none",
  }}
>
  Learn More
</Link>
          </div>
        ))}
      </section>
    </main>
  );
}