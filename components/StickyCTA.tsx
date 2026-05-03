"use client";

import { useEffect, useState } from "react";

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 500);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function scrollToWaitlist() {
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div
      className="sticky-cta"
      style={{ display: visible ? "flex" : "none" }}
    >
      <div className="sticky-cta-text">
        <strong>Only 10 founding spots</strong>
        14-day free trial · No card needed
      </div>
      <button className="sticky-cta-btn" onClick={scrollToWaitlist}>
        Claim spot →
      </button>
    </div>
  );
}
