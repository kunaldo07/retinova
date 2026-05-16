"use client";

import { useState, useEffect } from "react";

const LINKS = [
  { href: "#how", label: "How it Works" },
  { href: "#features", label: "Features" },
  { href: "#demo", label: "Watch Demo" },
  { href: "#faq", label: "FAQ" },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  function close() { setOpen(false); }

  return (
    <>
      <button
        className={`hamburger${open ? " is-open" : ""}`}
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
      >
        <span />
        <span />
        <span />
      </button>

      {open && (
        <div className="mob-overlay" onClick={close}>
          <div className="mob-drawer" onClick={(e) => e.stopPropagation()}>
            {LINKS.map(({ href, label }) => (
              <a key={href} href={href} className="mob-link" onClick={close}>
                {label}
              </a>
            ))}
            <a href="#waitlist" className="mob-cta" onClick={close}>
              Get early access →
            </a>
          </div>
        </div>
      )}
    </>
  );
}
