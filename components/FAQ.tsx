"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Is it ready to use right now?",
    a: "We are in the final stage of building the platform and onboarding founding restaurant partners across India. Founding partners get first access when we go live, a locked-in price forever, and their feedback directly shapes the product.",
  },
  {
    q: "How does setup work?",
    a: "I personally set everything up for you. We connect your Google Business Profile, generate your branded QR code, and you print it and place it on your table. The whole thing takes 2 minutes. No technical knowledge needed whatsoever.",
  },
  {
    q: "Can customers still go directly to Google and write a bad review?",
    a: "Yes — smart routing only works when customers go through your QR code. But here's the math: our system floods your listing with positive reviews from the happy majority who never posted before, completely changing your overall rating. You also get instant alerts for any review that lands publicly so you can respond immediately.",
  },
  {
    q: "What about Zomato and Swiggy reviews?",
    a: "Honest answer: Zomato and Swiggy do not have a public API for reviews, so we cannot pull them into the dashboard right now. We focus on Google (which drives the most new customer decisions) and Facebook. Zomato and Swiggy dashboard integration is on our roadmap and founding partners will get it the moment it is ready.",
  },
  {
    q: "What happens after the 14-day free trial?",
    a: "After 14 days, if you want to continue it's ₹3,000/month — locked in forever at the founding partner price. If you decide not to continue, cancel with one click. No questions, no charges, no awkward calls.",
  },
  {
    q: "Why only 10 founding restaurants?",
    a: "Because we want to give each founding restaurant personal attention — setting it up ourselves, checking in every week, making sure it works perfectly. We cannot do that for 100 restaurants at once. The 10-restaurant limit is real, not a sales tactic.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  function toggle(i: number) {
    setOpen(open === i ? null : i);
  }

  return (
    <section className="section" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="wrap">
        <div className="reveal">
          <div className="s-tag">FAQ</div>
          <h2 className="s-title">
            Questions you
            <br />
            probably have
          </h2>
        </div>
        <div className="faq-list">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`faq-item${open === i ? " open" : ""}`}
            >
              <button className="faq-q" onClick={() => toggle(i)}>
                {faq.q}
                <div className="faq-toggle">+</div>
              </button>
              <div className="faq-a">{faq.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
