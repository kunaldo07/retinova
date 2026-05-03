"use client";

import { useEffect } from "react";

export default function NavScrollEffect() {
  useEffect(() => {
    function onScroll() {
      const nav = document.querySelector("nav");
      if (!nav) return;
      nav.style.background =
        window.scrollY > 50 ? "rgba(5,5,8,0.95)" : "rgba(5,5,8,0.7)";
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}
