export default function Navbar() {
  return (
    <nav
      style={{
        width: "100%",
        padding: "20px 60px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "fixed",
        top: 0,
        zIndex: 1000,
        background: "rgba(0,0,0,0.25)",
        backdropFilter: "blur(10px)",
      }}
    >
      {/* LOGO */}
      <div
        style={{
          fontSize: "34px",
          fontWeight: "bold",
          color: "white",
        }}
      >
        <span style={{ color: "#22d3ee" }}>Edu</span>
        <span>Admin</span>
        <span style={{ color: "#d946ef" }}>X</span>
      </div>

      {/* MENU */}
      <div
        style={{
          display: "flex",
          gap: "30px",
          color: "white",
          fontSize: "16px",
          alignItems: "center",
        }}
      >
        <a href="/" style={{ color: "white", textDecoration: "none" }}>
          Home
        </a>

        <a href="/services" style={{ color: "white", textDecoration: "none" }}>
          Services
        </a>

        <a href="/about" style={{ color: "white", textDecoration: "none" }}>
          About
        </a>

        <a href="/contact" style={{ color: "white", textDecoration: "none" }}>
          Contact
        </a>

        <button
          style={{
            background:
              "linear-gradient(to right, #06b6d4, #a21caf)",
            border: "none",
            color: "white",
            padding: "12px 22px",
            borderRadius: "10px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Request Demo
        </button>
      </div>
    </nav>
  );
}