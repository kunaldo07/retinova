"use client";

import { useState } from "react";

type Props = {
  variant: "hero" | "cta";
};

type FormState = "idle" | "loading" | "success" | "error";

export default function LeadForm({ variant }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      setErrorMsg("Please fill in your restaurant name and email.");
      return;
    }
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    if (!emailOk) {
      setErrorMsg("Please enter a valid email address.");
      return;
    }

    setErrorMsg("");
    setState("loading");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          restaurant_name: name.trim(),
          email: email.trim().toLowerCase(),
          phone: phone.trim() || undefined,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setState("success");
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Try again.");
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <div className="success-box">
        <h3>🎉 You&apos;re on the list!</h3>
        <p>
          We&apos;ll reach out on WhatsApp within 2 hours to get you set up.
          <br />
          Check your email too — confirmation on its way.
        </p>
      </div>
    );
  }

  const isHero = variant === "hero";

  return (
    <form onSubmit={handleSubmit} className={isHero ? "hero-form" : "cta-form"} noValidate>
      {isHero ? (
        <>
          <input
            className="hero-input"
            type="text"
            placeholder="Restaurant name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <div className="hero-form-row">
            <input
              className="hero-input"
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              className="hero-input"
              type="tel"
              placeholder="WhatsApp number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          {errorMsg && (
            <p style={{ fontSize: "12px", color: "var(--red)", textAlign: "center" }}>
              {errorMsg}
            </p>
          )}
          <button
            type="submit"
            className="hero-submit"
            disabled={state === "loading"}
          >
            {state === "loading" ? (
              <>
                <span className="spinner" />
                Claiming your spot…
              </>
            ) : (
              "Claim founding partner spot →"
            )}
          </button>
          <p className="hero-form-note">
            14-day free trial · No card needed · Setup in 2 minutes
          </p>
        </>
      ) : (
        <>
          <input
            className="cta-input"
            type="text"
            placeholder="Restaurant name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <div className="cta-form-row">
            <input
              className="cta-input"
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              className="cta-input"
              type="tel"
              placeholder="WhatsApp number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          {errorMsg && (
            <p style={{ fontSize: "12px", color: "var(--red)", textAlign: "center" }}>
              {errorMsg}
            </p>
          )}
          <button
            type="submit"
            className="cta-btn"
            disabled={state === "loading"}
          >
            {state === "loading" ? (
              <>
                <span className="spinner" />
                Claiming your spot…
              </>
            ) : (
              "Get founding partner access →"
            )}
          </button>
          <p className="cta-note">By submitting you agree to be contacted on WhatsApp &amp; email. No spam, ever.</p>
          <div className="cta-platforms">
            <span className="plat-tag">✓ Google</span>
            <span className="plat-tag">✓ Zomato</span>
            <span className="plat-tag">✓ Swiggy</span>
            <span className="plat-tag">✓ Facebook</span>
            <span className="plat-tag">✓ WhatsApp-first</span>
          </div>
        </>
      )}
    </form>
  );
}
