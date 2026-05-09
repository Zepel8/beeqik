import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Beeqik — Reliable China Sourcing Without the Alibaba Headache";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          backgroundColor: "#f7f8f4",
          backgroundImage: "linear-gradient(135deg, #f7f8f4 0%, #e3e7db 100%)",
          padding: "80px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              fontSize: "72px",
              fontWeight: "bold",
              color: "#745d07",
              display: "flex",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <span style={{ fontSize: "80px" }}>🐝</span>
            <span>beeqik</span>
          </div>
        </div>

        {/* Main headline */}
        <div
          style={{
            fontSize: "56px",
            fontWeight: "bold",
            lineHeight: 1.2,
            color: "#0f172a",
            marginBottom: "32px",
            maxWidth: "900px",
          }}
        >
          Reliable China Sourcing
          <br />
          <span style={{ color: "#745d07" }}>Without the Alibaba Headache</span>
        </div>

        {/* Trust badges */}
        <div
          style={{
            display: "flex",
            gap: "24px",
            fontSize: "28px",
            color: "#475569",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ color: "#745d07", fontSize: "32px" }}>✓</span>
            <span>Verified Suppliers</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ color: "#745d07", fontSize: "32px" }}>✓</span>
            <span>Fast Samples</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ color: "#745d07", fontSize: "32px" }}>✓</span>
            <span>Custom Packaging</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
