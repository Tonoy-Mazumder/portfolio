import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Tonoy Mazumder | Full Stack Developer";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a12",
        }}
      >
        <div
          style={{
            fontSize: 96,
            fontWeight: 700,
            backgroundImage: "linear-gradient(135deg, #8b5cf6 0%, #22d3ee 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          Tonoy Mazumder
        </div>
        <div
          style={{
            marginTop: 16,
            fontSize: 44,
            fontWeight: 500,
            color: "rgba(255, 255, 255, 0.7)",
            letterSpacing: 4,
            textTransform: "uppercase",
          }}
        >
          Full Stack Developer
        </div>
        <div
          style={{
            marginTop: 40,
            width: 360,
            height: 8,
            borderRadius: 999,
            backgroundImage: "linear-gradient(90deg, #8b5cf6 0%, #22d3ee 100%)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
