"use client";
export default function Services() {
  const services = [
    {
      title: "RFID Attendance Systems",
      desc: "Smart attendance tracking solutions for schools, offices and hostels.",
      image:
        "https://images.unsplash.com/photo-1521791136064-7986c2920216",
    },
    {
      title: "Website Development",
      desc: "Modern websites for schools, businesses and startups.",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    },
    {
      title: "Desktop Applications",
      desc: "Custom Windows applications for business automation.",
      image:
        "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
    },
    {
      title: "RFID Cards & Devices",
      desc: "RFID printed cards, gates, readers and access systems.",
      image:
        "https://images.unsplash.com/photo-1556740749-887f6717d7e4",
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
          Services We Offer
        </h2>

        <p
          style={{
            textAlign: "center",
            color: "#94a3b8",
            maxWidth: "800px",
            margin: "auto",
            fontSize: "20px",
            lineHeight: "1.8",
            marginBottom: "70px",
          }}
        >
          EduAdminX provides scalable technology solutions for educational institutions,
          enterprises and organizations.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "30px",
          }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              style={{
                background: "#0f172a",
                borderRadius: "22px",
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.06)",
                transition: "0.3s",
              }}
            >
              <img
                src={service.image}
                alt={service.title}
                style={{
                  width: "100%",
                  height: "220px",
                  objectFit: "cover",
                }}
              />

              <div style={{ padding: "28px" }}>
                <h3
                  style={{
                    fontSize: "26px",
                    marginBottom: "16px",
                  }}
                >
                  {service.title}
                </h3>

                <p
                  style={{
                    color: "#cbd5e1",
                    lineHeight: "1.8",
                  }}
                >
                  {service.desc}
                </p>

                <button
                  style={{
                    marginTop: "24px",
                    background:
                      "linear-gradient(to right, #06b6d4, #a21caf)",
                    border: "none",
                    color: "white",
                    padding: "12px 24px",
                    borderRadius: "10px",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}