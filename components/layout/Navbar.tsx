import Logo from "./Logo";
import Link from "next/link";
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
      <Logo />

      {/* MENU */}
      <div 
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "16px",
          color: "white",
          fontSize: "16px",
          alignItems: "center",
        }}
      >
        <Link href="/" style={{ color: "white", textDecoration: "none" }}>
          Home
        </Link>

        <Link href="/services" style={{ color: "white", textDecoration: "none" }}>
          Services
        </Link>

        <Link href="/about" style={{ color: "white", textDecoration: "none" }}>
          About
        </Link>

        <Link href="/contact" style={{ color: "white", textDecoration: "none" }}>
          Contact
        </Link>

        <Link
  href="/demo"
  style={{
    background:
      "linear-gradient(to right, #06b6d4, #a21caf)",
    color: "white",
    padding: "12px 22px",
    borderRadius: "10px",
    fontWeight: "bold",
    textDecoration: "none",
  }}
>
  Request Demo
</Link>
      </div>
    </nav>
  );
}