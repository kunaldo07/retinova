import LeadForm from "@/components/LeadForm";
import VideoEmbed from "@/components/VideoEmbed";
import FAQ from "@/components/FAQ";
import ScrollReveal from "@/components/ScrollReveal";
import NavScrollEffect from "@/components/NavScrollEffect";
import StickyCTA from "@/components/StickyCTA";
import NavCTA from "@/components/NavCTA";
import {
  QrCode, Shuffle, MessageCircle, Bell, Bot, Megaphone,
  ClipboardList, LayoutDashboard, Users, TrendingUp,
  EyeOff, StarOff, UserX, Globe,
  Scan, GitFork, Star,
  ArrowRight,
} from "lucide-react";

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
          {/* Rating Graph icon */}
          <svg width="32" height="32" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
            <rect width="44" height="44" rx="11" fill="rgba(0,232,122,0.1)" />
            <rect width="44" height="44" rx="11" fill="url(#nav-logo-bg)" />
            <rect x="7" y="30" width="5.5" height="8" rx="1.8" fill="#00E87A" opacity="0.3" />
            <rect x="15.5" y="24" width="5.5" height="14" rx="1.8" fill="#00E87A" opacity="0.6" />
            <rect x="24" y="16" width="5.5" height="22" rx="1.8" fill="#00E87A" opacity="0.9" />
            <path d="M35.5 6 L36.8 9.8 L40.8 9.8 L37.6 12.2 L38.9 16 L35.5 13.6 L32.1 16 L33.4 12.2 L30.2 9.8 L34.2 9.8 Z" fill="#00E87A" />
            <defs>
              <linearGradient id="nav-logo-bg" x1="0" y1="0" x2="44" y2="44" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#00E87A" stopOpacity="0.08" />
                <stop offset="100%" stopColor="#00E87A" stopOpacity="0.01" />
              </linearGradient>
            </defs>
          </svg>
          Ratinova
        </a>
        <div className="nav-right">
          <a href="#how" className="nav-link">How it Works</a>
          <a href="#features" className="nav-link">Features</a>
          <a href="#pricing" className="nav-link">Pricing</a>
          <a href="#faq" className="nav-link">FAQ</a>
          <a href="#demo" className="nav-link nav-link-demo">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
              <path d="M8 5.14v13.72a1 1 0 0 0 1.5.87l11-6.86a1 1 0 0 0 0-1.74l-11-6.86A1 1 0 0 0 8 5.14z"/>
            </svg>
            Watch Demo
          </a>
          <NavCTA />
        </div>
      </nav>

      {/* ── HERO ────────────────────────────────────── */}
      <section className="hero">
        <div className="hero-glow" />
        <div className="hero-grid" />

        <div className="hero-tag">
          <div className="logo-dot" />
          Now onboarding founding restaurants across India
        </div>

        {/* Urgency bar */}
        <div className="spots-bar">
          <div className="spots-dot" />
          {SPOTS_TAKEN} of {TOTAL_SPOTS} founding spots claimed — {TOTAL_SPOTS - SPOTS_TAKEN} left
        </div>

        <h1>
          You&apos;re losing customers to reviews
          <br />
          <em>you&apos;ve never read.</em>
        </h1>

        <p className="hero-sub">
          Ratinova catches every new review the moment it&apos;s posted, routes
          unhappy customers to you privately before they go public, and floods
          your Google listing with 5-star reviews — all through WhatsApp.
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
        Facebook
        <div className="t-dot" />
        WhatsApp
        <div className="t-dot" />
        <strong>WhatsApp-first. India-built.</strong>
      </div>

      {/* ── SOCIAL PROOF BAR ────────────────────────── */}
      <div className="proof-bar">
        <div className="proof-item">
          <strong>14 days</strong> free trial
        </div>
        <div className="proof-divider" />
        <div className="proof-item">
          <strong>2 min</strong> setup
        </div>
        <div className="proof-divider" />
        <div className="proof-item">
          <strong>9</strong> features included
        </div>
        <div className="proof-divider" />
        <div className="proof-item">
          <strong>₹3,000</strong>/mo locked forever
        </div>
        <div className="proof-divider" />
        <div className="proof-item">
          <strong>No card</strong> needed
        </div>
      </div>

      {/* ── 3-STEP SECTION ──────────────────────────── */}
      <section className="section steps-bg">
        <div className="wrap">
          <div className="reveal" style={{ textAlign: "center" }}>
            <div className="s-tag">How simple it is</div>
            <h2 className="s-title">
              Three steps to a better
              <br />
              Google rating. Automatically.
            </h2>
          </div>
          <div className="steps-grid reveal">
            <div className="step-card">
              <div className="step-card-num">01</div>
              <div className="ico-wrap ico-wrap-lg">
                <QrCode size={28} color="var(--g)" strokeWidth={1.5} />
              </div>
              <div className="step-card-title">Customer scans your QR</div>
              <div className="step-card-desc">
                A branded QR code on your table. They scan it after their meal — no app, no friction, 2 seconds on any phone.
              </div>
              <div className="step-card-arrow"><ArrowRight size={14} color="var(--g)" /></div>
            </div>
            <div className="step-card">
              <div className="step-card-num">02</div>
              <div className="ico-wrap ico-wrap-lg">
                <GitFork size={28} color="var(--g)" strokeWidth={1.5} />
              </div>
              <div className="step-card-title">Smart routing kicks in</div>
              <div className="step-card-desc">
                4–5 stars → they&apos;re sent to Google to post publicly. 1–3 stars → their complaint comes directly to you on WhatsApp. Bad reviews never reach Google.
              </div>
              <div className="step-card-arrow"><ArrowRight size={14} color="var(--g)" /></div>
            </div>
            <div className="step-card">
              <div className="step-card-num">03</div>
              <div className="ico-wrap ico-wrap-lg">
                <TrendingUp size={28} color="var(--g)" strokeWidth={1.5} />
              </div>
              <div className="step-card-title">Your rating climbs</div>
              <div className="step-card-desc">
                More 5-star reviews land every week. You get WhatsApp alerts the second any review posts. AI writes your reply in 10 seconds. Your rating goes up on autopilot.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DASHBOARD MOCKUP ────────────────────────── */}
      <section className="section dash-section">
        <div className="wrap">
          <div className="reveal" style={{ textAlign: "center" }}>
            <div className="s-tag">Your dashboard</div>
            <h2 className="s-title">
              Every review. Every alert.
              <br />
              One clean dashboard.
            </h2>
            <p className="s-sub">
              See your Google rating climb in real time, get WhatsApp notifications the second a review lands,
              and manage everything from a single screen — no spreadsheets, no tab-switching.
            </p>
          </div>
          {/* Browser-frame mockup */}
          <div className="dash-frame reveal">
            <img
              src="/dashboard-mockup.svg"
              alt="Ratinova dashboard preview"
              className="dash-img"
              width={960}
              height={580}
            />
          </div>
          {/* Feature callouts below mockup */}
          <div className="dash-pills reveal">
            <div className="dash-pill"><span className="dash-pill-dot" />Live Google review feed</div>
            <div className="dash-pill"><span className="dash-pill-dot" />Rating trend graph</div>
            <div className="dash-pill"><span className="dash-pill-dot" />Smart routing toggle</div>
            <div className="dash-pill"><span className="dash-pill-dot" />WhatsApp instant alerts</div>
            <div className="dash-pill"><span className="dash-pill-dot" />QR code manager</div>
            <div className="dash-pill"><span className="dash-pill-dot" />Weekly performance summary</div>
          </div>
        </div>
      </section>

      {/* ── VIDEO / DEMO ────────────────────────────── */}
      <section className="section video-section" id="demo">
        <div className="wrap">
          <div className="reveal" style={{ textAlign: "center" }}>
            <div className="s-tag">See it in action</div>
            <h2 className="s-title">
              A 2-star review posted at 9pm.
              <br />
              300 people saw it before you did.
            </h2>
            <p className="s-sub">
              Watch how Ratinova makes sure that never happens to you again.
            </p>
          </div>

          <VideoEmbed />

          <p className="video-caption reveal">
            <strong>2-minute setup</strong> · No tech skills needed · Works on any phone
          </p>
        </div>
      </section>

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
                Icon: EyeOff,
                title: "Reviews you never see",
                desc: "A 1-star review sits on Google for 3 days. 300 people read it. Zero reply. Your reputation takes the hit silently.",
                stat: "⚠ Avg response time: 3–7 days",
              },
              {
                Icon: StarOff,
                title: "A rating that lies",
                desc: "Happy customers walk out and say nothing. Angry ones always post. Your 3.8-star rating reflects the 1%, not the 99%.",
                stat: "⚠ 20 five-stars to offset 1 one-star",
              },
              {
                Icon: UserX,
                title: "Customers choosing someone else",
                desc: "At 3.6 stars, 55% of people searching nearby pick a competitor — before they read your menu or know your food.",
                stat: "⚠ ₹2.75L lost/mo on ₹5L revenue",
              },
              {
                Icon: Globe,
                title: "Multiple platforms. Zero system.",
                desc: "Google, Facebook — multiple places reviews land, and you're expected to check all of them daily while also running your kitchen.",
                stat: "⚠ Most owners check reviews once a week",
              },
            ].map((c, i) => (
              <div className="prob-card reveal" key={i}>
                <div className="ico-wrap ico-wrap-red">
                  <c.Icon size={22} color="#FF7777" strokeWidth={1.75} />
                </div>
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
                Icon: QrCode,
                title: "Customer scans your QR code",
                desc: "A branded QR code sits on your table or counter. Customer finishes their meal, scans it with their phone camera. No app download. No friction. Works on any phone in 2 seconds.",
                chip: "Happens automatically at your table",
              },
              {
                Icon: Star,
                title: "They tap a star rating",
                desc: "A clean, branded page appears asking how their experience was. One tap on a star. That is all they do.",
                chip: "5 seconds. Zero friction.",
              },
              {
                Icon: GitFork,
                title: "Smart routing catches bad reviews privately",
                desc: "4–5 stars → they go straight to Google to post publicly. 1–3 stars → their feedback comes to you privately on WhatsApp. Bad reviews are caught before they ever reach Google.",
                chip: "Your most important protection",
              },
              {
                Icon: Bell,
                title: "Instant WhatsApp alert",
                desc: "The moment any review is posted on Google or Facebook — you know about it immediately on WhatsApp. No more finding a 1-star review 3 days later.",
                chip: "Google + Facebook. Real-time.",
              },
              {
                Icon: Bot,
                title: "AI writes your reply in 10 seconds",
                desc: "For every review — positive or negative — AI generates 3 professional reply options. You pick one and click send. 10 seconds instead of 20 minutes of stress.",
                chip: "35% higher return rate from responding",
              },
              {
                Icon: LayoutDashboard,
                title: "Everything in one dashboard",
                desc: "All your Google and Facebook reviews in one screen. See everything, reply to everything, track your rating over time. One login instead of jumping between apps.",
                chip: "One login. Total control.",
              },
            ].map((s, i) => (
              <div className="how-step reveal" key={i}>
                <div className="ico-wrap" style={{ marginBottom: 0 }}>
                  <s.Icon size={20} color="var(--g)" strokeWidth={1.75} />
                </div>
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
            <div className="s-tag">All 9 features</div>
            <h2 className="s-title">
              Built for Indian restaurants.
              <br />
              WhatsApp-first. Google-focused.
            </h2>
            <p className="s-sub">
              Every feature is designed for how restaurant owners in India
              actually work — WhatsApp alerts, AI replies, smart routing, and a
              customer database that builds itself.
            </p>
          </div>
          <div className="feat-grid">
            {[
              { n: "01", Icon: QrCode, title: "QR Code Review Collection", desc: "Branded QR code for your table. Customer scans, taps a star. No app. Works on every phone.", badge: null },
              { n: "02", Icon: GitFork, title: "Smart Review Routing", desc: "4–5 stars go to Google. 1–3 stars come to you privately on WhatsApp before they go public.", badge: null },
              { n: "03", Icon: MessageCircle, title: "WhatsApp & SMS Review Requests", desc: "Auto-sent 2 hours after visit with a direct Google review link. No manual follow-up needed.", badge: "wa" },
              { n: "04", Icon: Bell, title: "Instant WhatsApp Alerts", desc: "Real-time WhatsApp notification the moment any review is posted on Google or Facebook.", badge: "wa" },
              { n: "05", Icon: Bot, title: "AI Reply Suggestions", desc: "3 professional reply options for every review. Pick one, send in 10 seconds.", badge: null },
              { n: "06", Icon: Megaphone, title: "WhatsApp Campaigns", desc: "Send bulk promotional messages to your entire customer database. Festival offers, new menu, weekend specials.", badge: "wa" },
              { n: "07", Icon: ClipboardList, title: "Weekly WhatsApp Report", desc: "Every Monday at 9am — new reviews, rating changes, negative ones caught privately. All on WhatsApp.", badge: "exclusive" },
              { n: "08", Icon: LayoutDashboard, title: "Review Dashboard", desc: "Google + Facebook reviews in one screen. Reply to everything from one place without switching apps.", badge: null },
              { n: "09", Icon: Users, title: "Customer Database", desc: "Every QR scan auto-captures name and number. Your customer list grows without you doing anything.", badge: null },
              { n: "10", Icon: TrendingUp, title: "Analytics Dashboard", desc: "Track QR scans, review requests sent, conversion rate, and watch your rating climb week by week.", badge: null },
            ].map((f) => (
              <div className="feat-card reveal" key={f.n}>
                <div className="feat-n">{f.n}</div>
                <div className="ico-wrap">
                  <f.Icon size={22} color="var(--g)" strokeWidth={1.75} />
                </div>
                <div className="feat-title">
                  {f.title}
                  {f.badge === "exclusive" && <span className="feat-badge feat-badge-exclusive">Only us</span>}
                  {f.badge === "wa" && <span className="feat-badge feat-badge-wa">WhatsApp</span>}
                </div>
                <div className="feat-desc">{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ────────────────────────────── */}
      {/* <section className="section testimonials-bg">
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
                initials: "AR",
                color: "#7C3AED",
                text: "Within 3 weeks, we went from 3.9 to 4.4 stars on Google. The QR code system alone has brought us <strong>double the reviews</strong> we used to get in a month. The WhatsApp alerts are a game changer — I replied to a bad review within 15 minutes.",
                name: "Arjun Reddy",
                role: "Owner, Spice Garden",
              },
              {
                initials: "PS",
                color: "#0891B2",
                text: "I used to spend 30 minutes a day checking Google and Facebook separately and still miss reviews. Now I get a WhatsApp alert the second anything comes in. <strong>The smart routing caught 4 bad reviews</strong> in the first week and I resolved them directly.",
                name: "Priya Sharma",
                role: "Co-owner, Pizzeria Napoli — Banjara Hills",
              },
              {
                initials: "VN",
                color: "#059669",
                text: "The AI reply feature saves me at least 20 minutes every day. I was skeptical about the price but <strong>₹3,000 is nothing</strong> compared to what one extra table a day brings in. This paid for itself in the first week.",
                name: "Vikram Nair",
                role: "Owner, Coastal Bites — Jubilee Hills",
              },
            ].map((t, i) => (
              <div className="testi-card reveal" key={i}>
                <div className="testi-stars">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} size={14} fill="#00E87A" color="#00E87A" />
                  ))}
                </div>
                <p
                  className="testi-text"
                  dangerouslySetInnerHTML={{ __html: t.text }}
                />
                <div className="testi-author">
                  <div
                    className="testi-avatar"
                    style={{
                      background: t.color,
                      border: `2px solid ${t.color}40`,
                      fontSize: "14px",
                      fontFamily: "'Syne', sans-serif",
                      fontWeight: 700,
                      color: "#fff",
                      letterSpacing: "0.02em",
                    }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div className="testi-name">{t.name}</div>
                    <div className="testi-role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

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
          {/* <div className="quote-block reveal">
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
          </div> */}
        </div>
      </section>

      {/* ── COMPETITOR COMPARISON ───────────────────── */}
      {/* <section className="section comp-bg">
        <div className="wrap">
          <div className="reveal">
            <div className="s-tag">How we compare</div>
            <h2 className="s-title">
              We checked every competitor.
              <br />
              Here&apos;s the honest comparison.
            </h2>
            <p className="s-sub">
              No other tool at this price gives you WhatsApp-first alerts,
              a weekly report, AI replies, and a customer database — all built
              for India.
            </p>
          </div>
          <div className="comp-scroll reveal">
            <table>
              <thead>
                <tr>
                  <th>Feature</th>
                  <th className="you">Ratinova ₹3K/mo</th>
                  <th>tech-dev.in ₹2.5K/mo</th>
                  <th>InsightReviews $49/mo</th>
                  <th>review-pulse.com $49/mo</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Smart review routing", "✓ Yes", "~ Partial", "✓ Yes", "✓ Yes"],
                  ["WhatsApp alerts", "✓ Yes", "✓ Yes", "✗ Email only", "✗ Email only"],
                  ["WhatsApp review requests", "✓ Yes", "✓ Yes", "✗ SMS/Email", "✗ Email only"],
                  ["AI reply suggestions", "✓ All plans", "✓ Yes", "✗ No", "✓ Yes"],
                  ["WhatsApp campaigns", "✓ Yes", "✓ Yes", "✗ No", "✗ No"],
                  ["Weekly WhatsApp report", "✓ Yes", "✗ No", "✗ No", "✗ No"],
                  ["Customer database", "✓ Yes", "✓ Yes", "✗ No", "✗ No"],
                  ["Personal founder setup", "✓ Yes", "✗ No", "~ Email only", "✗ No"],
                  ["Price (monthly)", "✓ ₹3,000", "✓ ₹2,499", "✗ ~₹4,100", "✗ ~₹4,100"],
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
                        <span className={cell.startsWith("✓") ? "tick" : cell.startsWith("~") ? "partial" : "cross"}>
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
          <p style={{ fontSize: "11px", color: "var(--dim)", marginTop: "12px", textAlign: "center" }}>
            Based on publicly available information from each company&apos;s website as of May 2026.
          </p>
        </div>
      </section> */}

      {/* ── PRICING ─────────────────────────────────── */}
      {/* <section
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
              One plan. All 9 features. Founding partner price locked in
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
                <li>Full access to all 9 features</li>
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
                <li>Instant WhatsApp alerts — Google + Facebook</li>
                <li>AI reply suggestions — 3 per review</li>
                <li>WhatsApp promotional campaigns</li>
                <li>Weekly WhatsApp Monday report</li>
                <li>Review dashboard — Google + Facebook</li>
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
            ⚠ Only {TOTAL_SPOTS} founding restaurant spots across India.
            Founding price is locked for life.
          </div>
        </div>
      </section> */}

      {/* ── FOUNDER BOX ─────────────────────────────── */}
      {/* <section className="section" style={{ borderTop: "1px solid var(--border)", paddingBottom: 0 }}>
        <div className="wrap">
          <div className="founder-box reveal">
            <div className="founder-avatar">👨‍💻</div>
            <div className="founder-text">
              <h3>Built by <span>Kunal</span> — and I set it up personally for every restaurant.</h3>
              <p>
                I&apos;m not a big company. I&apos;m a founder who watched restaurant owners
                lose customers to reviews they never even saw. So I built Ratinova to fix exactly that.
                When you sign up, I personally connect your Google profile, print your QR code design,
                and make sure everything works — I won&apos;t hand you off to a support ticket system.
                You get my WhatsApp number. That&apos;s the deal.
              </p>
              <div className="founder-sig">— Kunal · kunal@ratinova.com · WhatsApp: +91 84463 89105</div>
            </div>
          </div>
        </div>
      </section> */}

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
      <div id="faq"><FAQ /></div>

      {/* ── FOOTER ──────────────────────────────────── */}
      <footer>
        <div className="footer-logo" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <svg width="28" height="28" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="44" height="44" rx="11" fill="rgba(0,232,122,0.1)" />
            <rect x="7" y="30" width="5.5" height="8" rx="1.8" fill="#00E87A" opacity="0.3" />
            <rect x="15.5" y="24" width="5.5" height="14" rx="1.8" fill="#00E87A" opacity="0.6" />
            <rect x="24" y="16" width="5.5" height="22" rx="1.8" fill="#00E87A" opacity="0.9" />
            <path d="M35.5 6 L36.8 9.8 L40.8 9.8 L37.6 12.2 L38.9 16 L35.5 13.6 L32.1 16 L33.4 12.2 L30.2 9.8 L34.2 9.8 Z" fill="#00E87A" />
          </svg>
          Ratinova
        </div>
        <div className="footer-links">
          <a href="mailto:kunal@ratinova.com">kunal@ratinova.com</a>
          <a href="https://wa.me/8446389105" target="_blank" rel="noreferrer">
            WhatsApp us
          </a>
        </div>
        <div className="footer-right">
          © 2025 Ratinova. Built for Indian restaurants.
        </div>
      </footer>

      {/* ── FLOATING WHATSAPP ───────────────────────── */}
      <a
        className="wa-float"
        href="https://wa.me/8446389105?text=Hi Kunal, I want to join as a founding partner for Ratinova"
        target="_blank"
        rel="noreferrer"
        title="Chat on WhatsApp"
      >
        💬
      </a>
    </>
  );
}
