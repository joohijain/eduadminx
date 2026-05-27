export default function CTA() {
  return (
    <section
      style={{
        background: "#020617",
        padding: "120px 40px",
        color: "white",
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
          backdropFilter: "blur(12px)",
        }}
      >
        <h2
          style={{
            fontSize: "60px",
            marginBottom: "25px",
            lineHeight: "1.2",
          }}
        >
          Ready to Modernize
          <br />
          Your Business?
        </h2>

        <p
          style={{
            color: "#cbd5e1",
            fontSize: "22px",
            lineHeight: "1.8",
            maxWidth: "800px",
            margin: "auto",
            marginBottom: "45px",
          }}
        >
          Explore smart automation, RFID systems,
          software development and scalable technology
          solutions tailored for your organization.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <a
            href="/demo"
            style={{
              background:
                "linear-gradient(to right, #06b6d4, #a21caf)",
              color: "white",
              padding: "18px 36px",
              borderRadius: "14px",
              fontSize: "18px",
              fontWeight: "bold",
              textDecoration: "none",
            }}
          >
            Request Free Demo
          </a>

          <a
            href="/contact"
            style={{
              border: "1px solid rgba(255,255,255,0.15)",
              color: "white",
              padding: "18px 36px",
              borderRadius: "14px",
              fontSize: "18px",
              fontWeight: "bold",
              textDecoration: "none",
            }}
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}