"use client";
import { motion } from "framer-motion";
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
     <div className="hero-grid"
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
          <motion.h1
  initial={{ opacity: 0, y: 60 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
            style={{
              fontSize: "clamp(42px, 8vw, 72px)",
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
          </motion.h1>

          <motion.p
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.2, duration: 0.8 }}
            style={{
              fontSize: "clamp(16px, 3vw, 22px)",
              lineHeight: "1.8",
              color: "#cbd5e1",
              marginBottom: "40px",
            }}
          >
            EduAdminX provides RFID systems, website development,
            desktop applications, smart attendance platforms,
            card printing solutions and enterprise automation services.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.4, duration: 0.8 }}
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
          </motion.div>
        </div>

        {/* RIGHT SIDE CARDS */}
        <motion.div
  initial={{ opacity: 0, x: 40 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ delay: 0.3, duration: 0.8 }}
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
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
      }}
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
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
    </motion.div>
  ))}
</motion.div>
      </div>
    </section>
  );
}