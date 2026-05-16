"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    function update() {
      const total = document.body.scrollHeight - window.innerHeight;
      setPct(total > 0 ? (window.scrollY / total) * 100 : 0);
    }
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "3px",
        width: `${pct}%`,
        background: "linear-gradient(90deg, var(--g), var(--g2))",
        zIndex: 1001,
        pointerEvents: "none",
        transition: "width 0.08s linear",
      }}
    />
  );
}
