import Link from "next/link";
import {
  Cloud,
  Server,
  Database,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export default function CloudSolutionsPage() {
  const services = [
    {
      title: "Cloud Infrastructure",
      icon: Cloud,
      desc: "Secure and scalable cloud hosting solutions for modern businesses.",
    },
    {
      title: "Database Management",
      icon: Database,
      desc: "Reliable cloud databases with backup, monitoring and optimization.",
    },
    {
      title: "Server Deployment",
      icon: Server,
      desc: "Deploy and manage applications on cloud servers with high availability.",
    },
    {
      title: "Security & Backup",
      icon: ShieldCheck,
      desc: "Data protection, automated backups and disaster recovery planning.",
    },
  ];

  const benefits = [
    "Scalable cloud infrastructure",
    "High availability architecture",
    "Automated backups",
    "Enhanced security",
    "Performance monitoring",
    "Reduced operational costs",
  ];

  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(to right, #020617, #0f172a, #3b0764)",
        color: "white",
        padding: "140px 40px 80px",
      }}
    >
      <div
        style={{
          maxWidth: "1300px",
          margin: "0 auto",
        }}
      >
        {/* Hero */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "80px",
          }}
        >
          <h1
            style={{
              fontSize: "clamp(42px, 6vw, 72px)",
              marginBottom: "20px",
            }}
          >
            Cloud & Automation Solutions
          </h1>

          <p
            style={{
              maxWidth: "850px",
              margin: "0 auto",
              fontSize: "20px",
              lineHeight: "1.8",
              color: "#cbd5e1",
            }}
          >
            Modern cloud infrastructure, secure hosting, automation workflows,
            monitoring systems and enterprise-grade deployment solutions for
            growing organizations.
          </p>
        </div>

        {/* Services */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            gap: "30px",
            marginBottom: "80px",
          }}
        >
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "20px",
                  padding: "30px",
                }}
              >
                <Icon size={42} color="#38bdf8" />

                <h3
                  style={{
                    marginTop: "20px",
                    marginBottom: "15px",
                    fontSize: "24px",
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
              </div>
            );
          })}
        </div>

        {/* Benefits */}
        <div
          style={{
            background: "rgba(255,255,255,0.04)",
            borderRadius: "24px",
            padding: "40px",
            marginBottom: "80px",
          }}
        >
          <h2
            style={{
              fontSize: "40px",
              marginBottom: "30px",
            }}
          >
            Why Choose Our Cloud Solutions?
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
              gap: "20px",
            }}
          >
            {benefits.map((item, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                <CheckCircle2 color="#22c55e" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div
          style={{
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: "42px",
              marginBottom: "20px",
            }}
          >
            Ready to Move to the Cloud?
          </h2>

          <p
            style={{
              color: "#cbd5e1",
              marginBottom: "30px",
            }}
          >
            Let's discuss your infrastructure, automation and cloud strategy.
          </p>

          <Link href="/demo">
            <button
              style={{
                background:
                  "linear-gradient(to right, #06b6d4, #a21caf)",
                border: "none",
                color: "white",
                padding: "16px 32px",
                borderRadius: "12px",
                fontSize: "18px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Request Free Demo
              <ArrowRight
                size={18}
                style={{ marginLeft: "10px", verticalAlign: "middle" }}
              />
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}