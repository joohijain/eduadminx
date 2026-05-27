export default function DemoPage() {
  return (
    <main
      style={{
        background:
          "linear-gradient(135deg, #020617 0%, #07152f 45%, #3b0764 100%)",
        minHeight: "100vh",
        color: "white",
        fontFamily: "Arial, sans-serif",
        padding: "80px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "700px",
          margin: "auto",
          background: "rgba(255,255,255,0.08)",
          padding: "50px",
          borderRadius: "24px",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            fontSize: "48px",
            marginBottom: "15px",
          }}
        >
          Request Free Demo
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "#cbd5e1",
            marginBottom: "40px",
            fontSize: "18px",
          }}
        >
          Fill in your details and our team will contact you shortly.
        </p>

        <form
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <input
            type="text"
            placeholder="Institution Name"
            style={inputStyle}
          />

          <input
            type="text"
            placeholder="Contact Person"
            style={inputStyle}
          />

          <input
            type="text"
            placeholder="Phone Number"
            style={inputStyle}
          />

          <input
            type="email"
            placeholder="Email Address"
            style={inputStyle}
          />

          <input
            type="text"
            placeholder="City"
            style={inputStyle}
          />

          <textarea
            placeholder="Message"
            rows={5}
            style={inputStyle}
          />

          <button
            type="submit"
            style={{
              background:
                "linear-gradient(to right, #06b6d4, #a21caf)",
              border: "none",
              color: "white",
              padding: "18px",
              borderRadius: "12px",
              fontSize: "18px",
              fontWeight: "bold",
              cursor: "pointer",
              marginTop: "10px",
            }}
          >
            Submit Request
          </button>
        </form>
      </div>
    </main>
  );
}

const inputStyle = {
  background: "rgba(255,255,255,0.08)",
  border: "1px solid rgba(255,255,255,0.12)",
  padding: "16px",
  borderRadius: "12px",
  color: "white",
  fontSize: "16px",
  outline: "none",
};