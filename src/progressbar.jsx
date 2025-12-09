import React from "react";

export default function ProgressBar({ progress }) {
  return (
    <div style={{ background: "#333", borderRadius: 10, height: 10, overflow: "hidden" }}>
      <div
        style={{
          width: `${Math.min(progress, 100)}%`,
          background: "#38bdf8",
          height: "100%",
          transition: "width 0.3s ease"
        }}
      ></div>
    </div>
  );
}
