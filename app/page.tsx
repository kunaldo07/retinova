import LeadForm from "@/components/LeadForm";
import FAQ from "@/components/FAQ";
import ScrollReveal from "@/components/ScrollReveal";
import NavScrollEffect from "@/components/NavScrollEffect";
import StickyCTA from "@/components/StickyCTA";
import NavCTA from "@/components/NavCTA";

const SPOTS_TAKEN = 3; // update this as you get sign-ups
const TOTAL_SPOTS = 10;

export default function Home() {
  return (
    <>
      {/* ── CLIENT EFFECTS ──────────────────────────── */}
      <ScrollReveal />
      <NavScrollEffect />
      <StickyCTA />

      {/* ── NAV ─────────────────────────────────────── */}
      <nav>
        <a href="/" className="logo">
          <div className="logo-dot" />
          Ratinova
        </a>
        <div className="nav-right">
          <a href="#features" className="nav-link">Features</a>
          <a href="#pricing" className="nav-link">Pricing</a>
          <NavCTA />
        </div>
      </nav>

      {/* ── HERO ────────────────────────────────────── */}
      <section className="hero">
        <div className="hero-glow" />
        <div className="hero-grid" />

        <div className="hero-tag">
          <div className="logo-dot" />
          Now onboarding founding restaurants in Hyderabad
        </div>

        {/* Urgency bar */}
        <div className="spots-bar">
          <div className="spots-dot" />
          {SPOTS_TAKEN} of {TOTAL_SPOTS} founding spots claimed — {TOTAL_SPOTS - SPOTS_TAKEN} left
        </div>

        <h1>
          Your restaurant&apos;s reputation.
          <br />
          <em>Under your control.</em>
        </h1>

        <p className="hero-sub">
          One platform that manages all your reviews across Google, Zomato, Swiggy
          and Facebook — with instant WhatsApp alerts, AI replies, and a system
          that catches bad reviews before they ever go public.
        </p>

        {/* ── HERO INLINE FORM ────────────────────── */}
        <div className="hero-form-wrap">
          <p className="hero-form-label">
            <strong>Start your 14-day free trial</strong> — no card needed
          </p>
          <LeadForm variant="hero" />
        </div>

        {/* Stats */}
        <div className="hero-stats">
          <div className="h-stat">
            <div className="h-stat-n">5–9%</div>
            <div className="h-stat-l">
              Revenue boost per
              <br />
              1-star improvement
            </div>
          </div>
          <div className="h-stat">
            <div className="h-stat-n">91%</div>
            <div className="h-stat-l">
              Diners skip restaurants
              <br />
              below 4 stars
            </div>
          </div>
          <div className="h-stat">
            <div className="h-stat-n">₹3K</div>
            <div className="h-stat-l">
              Per month — all
              <br />
              10 features
            </div>
          </div>
          <div className="h-stat">
            <div className="h-stat-n">14 days</div>
            <div className="h-stat-l">
              Completely free
              <br />
              No card needed
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ───────────────────────────────── */}
      <div className="trust">
        <strong>Works with</strong>
        <div className="t-dot" />
        Google Reviews
        <div className="t-dot" />
        Zomato
        <div className="t-dot" />
        Swiggy
        <div className="t-dot" />
        Facebook
        <div className="t-dot" />
        <strong>WhatsApp-first. India-built.</strong>
      </div>

      {/* ── PROBLEM ─────────────────────────────────── */}
      <section className="section problem" id="problem">
        <div className="wrap">
          <div className="reveal">
            <div className="s-tag">The problem</div>
            <h2 className="s-title">
              Your restaurant is losing money.
              <br />
              Every single day.
            </h2>
            <p className="s-sub">
              Harvard Business School studied 2,000 restaurants and proved it.
              Here&apos;s what&apos;s happening to yours.
            </p>
          </div>
          <div className="prob-grid">
            {[
              {
                ico: "😤",
                title: "Reviews you never see",
                desc: "A 1-star review sits on Google for 3 days. 300 people read it. Zero reply. Your reputation takes the hit silently.",
                stat: "⚠ Avg response time: 3–7 days",
              },
              {
                ico: "📉",
                title: "A rating that lies",
                desc: "Happy customers walk out and say nothing. Angry ones always post. Your 3.8-star rating reflects the 1%, not the 99%.",
                stat: "⚠ 20 five-stars to offset 1 one-star",
              },
              {
                ico: "💸",
                title: "Customers choosing someone else",
                desc: "At 3.6 stars, 55% of people searching nearby pick a competitor — before they read your menu or know your food.",
                stat: "⚠ ₹2.75L lost/mo on ₹5L revenue",
              },
              {
                ico: "🌐",
                title: "4 platforms. Zero system.",
                desc: "Google, Zomato, Swiggy, Facebook — four apps, four logins, four places something can go wrong while you run your kitchen.",
                stat: "⚠ No Indian tool manages all four",
              },
            ].map((c, i) => (
              <div className="prob-card reveal" key={i}>
                <div className="prob-ico">{c.ico}</div>
                <div className="prob-title">{c.title}</div>
                <div className="prob-desc">{c.desc}</div>
                <div className="prob-stat">{c.stat}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ────────────────────────────── */}
      <section
        className="section"
        id="how"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        <div className="wrap">
          <div className="reveal">
            <div className="s-tag">How it works</div>
            <h2 className="s-title">
              From customer scan to
              <br />
              5-star review in 60 seconds
            </h2>
            <p className="s-sub">
              Six steps. Fully automatic. You do nothing except choose which AI
              reply to send.
            </p>
          </div>
          <div className="how-wrap">
            {[
              {
                ico: "📲",
                title: "Customer scans your QR code",
                desc: "A branded QR code sits on your table or counter. Customer finishes their meal, scans it with their phone camera. No app download. No friction. Works on any phone in 2 seconds.",
                chip: "Happens automatically at your table",
              },
              {
                ico: "⭐",
                title: "They tap a star rating",
                desc: "A clean, branded page appears asking how their experience was. One tap on a star. That is all they do.",
                chip: "5 seconds. Zero friction.",
              },
              {
                ico: "🔀",
                title: "Smart routing catches bad reviews privately",
                desc: "4–5 stars → they go straight to Google to post publicly. 1–3 stars → their feedback comes to you privately on WhatsApp. Bad reviews are caught before they ever reach Google.",
                chip: "Your most important protection",
              },
              {
                ico: "🔔",
                title: "Instant WhatsApp alert",
                desc: "The moment any review is posted on Google, Zomato, Swiggy or Facebook — you know about it immediately. No more finding a 1-star review 3 days later.",
                chip: "All 4 platforms. Real-time.",
              },
              {
                ico: "🤖",
                title: "AI writes your reply in 10 seconds",
                desc: "For every review — positive or negative — AI generates 3 professional reply options. You pick one and click send. 10 seconds instead of 20 minutes of stress.",
                chip: "35% higher return rate from responding",
              },
              {
                ico: "📊",
                title: "Everything in one dashboard",
                desc: "All your Google, Zomato, Swiggy and Facebook reviews in one screen. See everything, reply to everything, track your rating over time. The only tool in India with all four platforms.",
                chip: "One login. Total control.",
              },
            ].map((s, i) => (
              <div className="how-step reveal" key={i}>
                <div className="step-icon">{s.ico}</div>
                <div>
                  <div className="step-title">{s.title}</div>
                  <div className="step-desc">{s.desc}</div>
                  <span className="step-chip">{s.chip}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Routing visual */}
          <div className="routing-box reveal">
            <div
              style={{
                fontSize: "11px",
                fontWeight: 700,
                color: "var(--dim)",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: "18px",
              }}
            >
              How smart routing protects your rating
            </div>
            <div className="r-center">Customer taps a star rating</div>
            <div className="r-arrows">
              <span>↙</span>
              <span>↘</span>
            </div>
            <div className="r-paths">
              <div className="r-path r-happy">
                <div className="r-emoji">😊</div>
                <div className="r-stars">4 – 5 Stars</div>
                <div className="r-desc">
                  Redirected to Google to post a public 5-star review
                </div>
                <div className="r-badge">→ Google Reviews ★</div>
              </div>
              <div className="r-path r-sad">
                <div className="r-emoji">😔</div>
                <div className="r-stars">1 – 3 Stars</div>
                <div className="r-desc">
                  Private WhatsApp alert to you only. Never reaches Google.
                </div>
                <div className="r-badge">→ Private to owner 🔒</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ────────────────────────────────── */}
      <section className="section feat-bg" id="features">
        <div className="wrap">
          <div className="reveal">
            <div className="s-tag">All 10 features</div>
            <h2 className="s-title">
              Built for Indian restaurants.
              <br />
              Not a Western tool with Zomato added on.
            </h2>
            <p className="s-sub">
              Every feature is designed for how restaurant owners in India
              actually work — WhatsApp-first, all 4 platforms, regional context.
            </p>
          </div>
          <div className="feat-grid">
            {[
              { n: "01", ico: "📲", title: "QR Code Review Collection", desc: "Branded QR code for your table. Customer scans, taps a star. No app. Works on every phone." },
              { n: "02", ico: "🔀", title: "Smart Review Routing", desc: "4–5 stars go to Google. 1–3 stars come to you privately on WhatsApp before they go public." },
              { n: "03", ico: "📩", title: "WhatsApp & SMS Review Requests", desc: "Auto-sent 2 hours after visit with a direct Google review link. No manual follow-up needed." },
              { n: "04", ico: "🔔", title: "Instant WhatsApp Alerts", desc: "Real-time WhatsApp notification the moment any review is posted on any platform." },
              { n: "05", ico: "🤖", title: "AI Reply Suggestions", desc: "3 professional reply options for every review. Pick one, send in 10 seconds." },
              { n: "06", ico: "📢", title: "WhatsApp Campaigns", desc: "Send bulk promotional messages to your entire customer database. Festival offers, new menu, weekend specials." },
              { n: "07", ico: "📋", title: "Weekly WhatsApp Report", desc: "Every Monday at 9am — new reviews, rating changes, negative ones caught privately. All on WhatsApp." },
              { n: "08", ico: "📊", title: "Review Dashboard", desc: "Google + Zomato + Swiggy + Facebook in one screen. The only tool in India with all four platforms." },
              { n: "09", ico: "👥", title: "Customer Database", desc: "Every QR scan auto-captures name and number. Your customer list grows without you doing anything." },
              { n: "10", ico: "📈", title: "Analytics Dashboard", desc: "Track QR scans, review requests sent, conversion rate, and watch your rating climb week by week." },
            ].map((f) => (
              <div className="feat-card reveal" key={f.n}>
                <div className="feat-n">{f.n}</div>
                <div className="feat-ico">{f.ico}</div>
                <div className="feat-title">{f.title}</div>
                <div className="feat-desc">{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ────────────────────────────── */}
      <section className="section testimonials-bg">
        <div className="wrap">
          <div className="reveal">
            <div className="s-tag">What restaurant owners say</div>
            <h2 className="s-title">
              Real results from
              <br />
              real restaurants
            </h2>
            <p className="s-sub">
              Early access feedback from restaurant owners who tested Ratinova
              before launch.
            </p>
          </div>
          <div className="testi-grid">
            {[
              {
                stars: "★★★★★",
                text: "Within 3 weeks, we went from 3.9 to 4.4 stars on Google. The QR code system alone has brought us <strong>double the reviews</strong> we used to get in a month. The WhatsApp alerts are a game changer — I replied to a bad review within 15 minutes.",
                emoji: "🍛",
                name: "Arjun Reddy",
                role: "Owner, Spice Garden — Hyderabad",
              },
              {
                stars: "★★★★★",
                text: "I used to spend 30 minutes a day checking Google, Zomato and Swiggy separately. Now it's all in one place and I get an alert the second anything comes in. <strong>The smart routing caught 4 bad reviews</strong> in the first week and I resolved them directly.",
                emoji: "🍕",
                name: "Priya Sharma",
                role: "Co-owner, Pizzeria Napoli — Banjara Hills",
              },
              {
                stars: "★★★★★",
                text: "The AI reply feature saves me at least 20 minutes every day. I was skeptical about the price but <strong>₹3,000 is nothing</strong> compared to what one extra table a day brings in. This paid for itself in the first week.",
                emoji: "🫕",
                name: "Vikram Nair",
                role: "Owner, Coastal Bites — Jubilee Hills",
              },
            ].map((t, i) => (
              <div className="testi-card reveal" key={i}>
                <div className="testi-stars">{t.stars}</div>
                <p
                  className="testi-text"
                  dangerouslySetInnerHTML={{ __html: t.text }}
                />
                <div className="testi-author">
                  <div className="testi-avatar">{t.emoji}</div>
                  <div>
                    <div className="testi-name">{t.name}</div>
                    <div className="testi-role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROOF / RESEARCH STATS ──────────────────── */}
      <section
        className="section"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        <div className="wrap">
          <div className="reveal">
            <div className="s-tag">Research-backed proof</div>
            <h2 className="s-title">
              What the data says about
              <br />
              reviews and restaurant revenue
            </h2>
          </div>
          <div className="stats-row">
            {[
              { n: "5–9%", l: "Revenue increase per 1-star improvement on Google", s: "Harvard Business School — 2,000 restaurants" },
              { n: "91%", l: "Of diners avoid restaurants rated below 4 stars", s: "Google Reviews Hospitality Study 2025" },
              { n: "30–49%", l: "More tables filled at peak hours per half-star boost", s: "UC Berkeley Economist Study" },
              { n: "35%", l: "Higher customer return rate when owners respond to reviews", s: "Restaurant Marketing Statistics 2025" },
            ].map((s, i) => (
              <div className="stat-block reveal" key={i}>
                <div className="stat-n">{s.n}</div>
                <div className="stat-l">{s.l}</div>
                <div className="stat-s">{s.s}</div>
              </div>
            ))}
          </div>
          <div className="quote-block reveal">
            <div className="q-mark">&ldquo;</div>
            <div className="q-text">
              When we added a QR code review system across our 10 restaurants,{" "}
              <strong>top-line revenue went up 10% every time</strong> — in
              every single location, within 3 months. The single highest-impact
              change we made all year.
            </div>
            <div className="q-src">
              — David Orr, President &amp; Owner, Parched Hospitality Group (10
              locations, UK)
            </div>
          </div>
        </div>
      </section>

      {/* ── COMPETITOR COMPARISON ───────────────────── */}
      <section className="section comp-bg">
        <div className="wrap">
          <div className="reveal">
            <div className="s-tag">Why Ratinova</div>
            <h2 className="s-title">
              Every competitor is built
              <br />
              for the West. We&apos;re built for India.
            </h2>
            <p className="s-sub">
              No other tool in the world combines Zomato, Swiggy,
              WhatsApp-first alerts and smart routing in one platform.
            </p>
          </div>
          <div className="comp-scroll reveal">
            <table>
              <thead>
                <tr>
                  <th>Feature</th>
                  <th className="you">Ratinova ₹3K/mo</th>
                  <th>tech-dev.in ₹2.5K/mo</th>
                  <th>NiceJob $75/mo</th>
                  <th>BrightLocal $44/mo</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Smart review routing", "✓ Yes", "✗ No", "~ Partial", "✗ No"],
                  ["WhatsApp-first alerts", "✓ Yes", "✓ Yes", "✗ No", "✗ No"],
                  ["Zomato + Swiggy reviews", "✓ Yes", "✗ No", "✗ No", "✗ No"],
                  ["AI reply suggestions", "✓ All plans", "✓ Yes", "~ Premium only", "~ Partial"],
                  ["Customer database", "✓ Yes", "✓ Yes", "✗ No", "✗ No"],
                  ["WhatsApp campaigns", "✓ Yes", "✓ Yes", "✗ No", "✗ No"],
                  ["Priced for India", "✓ ₹3,000/mo", "✓ ₹2,499/mo", "✗ ₹6,200/mo", "✗ ₹3,600/mo"],
                ].map(([feature, us, ...rest], i) => (
                  <tr key={i}>
                    <td>{feature}</td>
                    <td className="you">
                      <span className={us.startsWith("✓") ? "tick" : us.startsWith("~") ? "partial" : "cross"}>
                        {us.split(" ")[0]}
                      </span>{" "}
                      {us.slice(2)}
                    </td>
                    {rest.map((cell, j) => (
                      <td key={j}>
                        <span
                          className={
                            cell.startsWith("✓")
                              ? "tick"
                              : cell.startsWith("~")
                              ? "partial"
                              : "cross"
                          }
                        >
                          {cell.split(" ")[0]}
                        </span>{" "}
                        {cell.slice(2)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── PRICING ─────────────────────────────────── */}
      <section
        className="section"
        id="pricing"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        <div className="wrap">
          <div className="reveal" style={{ textAlign: "center" }}>
            <div className="s-tag">Pricing</div>
            <h2 className="s-title">
              Simple pricing.
              <br />
              Built for Indian restaurants.
            </h2>
            <p className="s-sub" style={{ margin: "0 auto" }}>
              One plan. All 10 features. Founding partner price locked in
              forever.
            </p>
          </div>
          <div className="pricing-row">
            <div className="plan plan-free reveal">
              <div className="plan-name">Free trial</div>
              <div className="plan-price">
                ₹0 <span>/ 14 days</span>
              </div>
              <div className="plan-note">No card needed. No commitment.</div>
              <ul className="plan-feats">
                <li>Full access to all 10 features</li>
                <li>QR code setup included</li>
                <li>Personal setup help from Kunal</li>
                <li>WhatsApp alerts activated</li>
                <li>Cancel anytime</li>
              </ul>
              <a href="#waitlist" className="plan-cta">
                Start free trial
              </a>
            </div>
            <div className="plan plan-main reveal">
              <div className="plan-hot">⭐ Founding partner price</div>
              <div className="plan-name">Full platform</div>
              <div className="plan-price">
                ₹3,000 <span>/ month</span>
              </div>
              <div className="plan-note">
                Price locked in forever. Never goes up.
              </div>
              <ul className="plan-feats">
                <li>QR code review collection</li>
                <li>Smart routing — catch bad reviews privately</li>
                <li>WhatsApp + SMS review requests</li>
                <li>Instant WhatsApp alerts — all platforms</li>
                <li>AI reply suggestions — 3 per review</li>
                <li>WhatsApp promotional campaigns</li>
                <li>Weekly WhatsApp Monday report</li>
                <li>Dashboard — Google + Zomato + Swiggy + Facebook</li>
                <li>Customer database — auto-built from QR scans</li>
                <li>Analytics — scans, requests, conversion, rating trend</li>
              </ul>
              <a href="#waitlist" className="plan-cta">
                Join as founding partner
              </a>
            </div>
          </div>
          <div
            style={{
              textAlign: "center",
              marginTop: "18px",
              fontSize: "12px",
              color: "var(--dim)",
            }}
          >
            ⚠ Only {TOTAL_SPOTS} founding restaurant spots in Hyderabad.
            Founding price is locked for life.
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA + FORM ───────────────────────── */}
      <section className="cta-section" id="waitlist">
        <div className="cta-glow" />
        <div className="cta-inner reveal">
          <div
            className="s-tag"
            style={{ display: "block", textAlign: "center" }}
          >
            Get early access
          </div>
          <h2>
            Join as a founding partner.
            <br />
            First {TOTAL_SPOTS} restaurants only.
          </h2>
          <p>
            14 days completely free. No card needed.
            <br />
            Setup in 2 minutes. Price locked forever.
          </p>

          {/* Spots remaining indicator */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "12px",
              marginBottom: "28px",
            }}
          >
            <div style={{ display: "flex", gap: "6px" }}>
              {Array.from({ length: TOTAL_SPOTS }).map((_, i) => (
                <div
                  key={i}
                  style={{
                    width: "20px",
                    height: "6px",
                    borderRadius: "3px",
                    background: i < SPOTS_TAKEN ? "var(--g)" : "var(--border2)",
                    transition: "background 0.3s",
                  }}
                />
              ))}
            </div>
            <span
              style={{
                fontSize: "12px",
                color: "var(--muted)",
                fontWeight: 600,
              }}
            >
              {SPOTS_TAKEN}/{TOTAL_SPOTS} spots claimed
            </span>
          </div>

          <LeadForm variant="cta" />
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────── */}
      <FAQ />

      {/* ── FOOTER ──────────────────────────────────── */}
      <footer>
        <div className="footer-logo">Ratinova</div>
        <div className="footer-links">
          <a href="mailto:kunal@ratinova.com">kunal@ratinova.com</a>
          <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer">
            WhatsApp us
          </a>
        </div>
        <div className="footer-right">
          © 2025 Ratinova. Built for Indian restaurants. Hyderabad, India.
        </div>
      </footer>

      {/* ── FLOATING WHATSAPP ───────────────────────── */}
      <a
        className="wa-float"
        href="https://wa.me/919999999999?text=Hi Kunal, I want to join as a founding partner for Ratinova"
        target="_blank"
        rel="noreferrer"
        title="Chat on WhatsApp"
      >
        💬
      </a>
    </>
  );
}
