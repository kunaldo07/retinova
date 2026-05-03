"use client";

export default function NavCTA() {
  return (
    <button
      className="nav-btn"
      onClick={() =>
        document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })
      }
    >
      Get early access
    </button>
  );
}
