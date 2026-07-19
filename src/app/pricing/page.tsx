"use client";
import Image from "next/image";
import Link from "next/link";

export default function PricingPage() {
  return (
    <>
      <header className="site-header">
        <div className="container">
          <div className="bar">
            <Link href="/" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
              <Image src="/granthica-logo.png" alt="Granthica" width={140} height={40} style={{ objectFit: "contain" }} />
            </Link>
            <div style={{ flex: 1 }} />
            <nav className="nav-links">
              <Link href="/discover">Discover</Link>
              <Link href="/study-studio">Study Studio</Link>
              <Link href="/login">Sign in</Link>
            </nav>
            <Link href="/login" className="btn btn-primary btn-sm">Get started</Link>
          </div>
        </div>
      </header>

      <div style={{ textAlign: "center", padding: "80px 24px 40px" }}>
        <div className="eyebrow" style={{ marginBottom: "12px" }}>Pricing</div>
        <h1 style={{ fontSize: "clamp(32px, 5vw, 52px)", marginBottom: "16px" }}>Free to start. Free to stay.</h1>
        <p style={{ color: "var(--rg-muted)", fontSize: "18px", maxWidth: "540px", margin: "0 auto 40px" }}>
          Granthica is free for students. Browse any book, ask AI questions, generate outputs — all at no cost.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px", maxWidth: "960px", margin: "0 auto", textAlign: "left" }}>
          {/* Free */}
          <div className="card card-pad" style={{ border: "2px solid var(--rg-line)" }}>
            <div className="eyebrow" style={{ marginBottom: "8px" }}>Free</div>
            <div style={{ fontSize: "40px", fontWeight: 800, color: "var(--rg-ink)", marginBottom: "4px" }}>₹0</div>
            <div style={{ color: "var(--rg-muted)", fontSize: "14px", marginBottom: "20px" }}>Forever</div>
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px 0", display: "flex", flexDirection: "column", gap: "10px" }}>
              {["Browse full book library", "Read any free book", "Ask AI questions (sample books)", "Generate summaries", "Create flashcards", "Basic RAG answers"].map((f, i) => (
                <li key={i} style={{ fontSize: "14px", display: "flex", gap: "8px" }}>
                  <span style={{ color: "var(--rg-mint)" }}>✓</span> {f}
                </li>
              ))}
            </ul>
            <Link href="/login" className="btn btn-ghost btn-block">Get started free</Link>
          </div>

          {/* Study Pass */}
          <div className="card card-pad" style={{ border: "2px solid var(--rg-primary)", position: "relative" }}>
            <div style={{ position: "absolute", top: "-12px", left: "50%", transform: "translateX(-50%)", background: "var(--rg-primary)", color: "white", padding: "4px 14px", borderRadius: "999px", fontSize: "12px", fontWeight: 700 }}>Recommended</div>
            <div className="eyebrow" style={{ marginBottom: "8px", background: "var(--rg-primary-light)", color: "var(--rg-primary)" }}>Study Pass</div>
            <div style={{ fontSize: "40px", fontWeight: 800, color: "var(--rg-ink)", marginBottom: "4px" }}>₹99<span style={{ fontSize: "16px", fontWeight: 400, color: "var(--rg-muted)" }}>/month</span></div>
            <div style={{ color: "var(--rg-muted)", fontSize: "14px", marginBottom: "20px" }}>Unlimited learning</div>
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px 0", display: "flex", flexDirection: "column", gap: "10px" }}>
              {["Everything in Free", "All books unlocked", "Unlimited AI questions", "Priority RAG processing", "Generate practice tests", "Export notes & mind maps", "Multi-language answers"].map((f, i) => (
                <li key={i} style={{ fontSize: "14px", display: "flex", gap: "8px" }}>
                  <span style={{ color: "var(--rg-mint)" }}>✓</span> {f}
                </li>
              ))}
            </ul>
            <Link href="/login" className="btn btn-primary btn-block">Get Study Pass</Link>
          </div>

          {/* Pay per book */}
          <div className="card card-pad" style={{ border: "2px solid var(--rg-line)" }}>
            <div className="eyebrow" style={{ marginBottom: "8px" }}>Pay per book</div>
            <div style={{ fontSize: "40px", fontWeight: 800, color: "var(--rg-ink)", marginBottom: "4px" }}>₹19<span style={{ fontSize: "16px", fontWeight: 400, color: "var(--rg-muted)" }}>/book</span></div>
            <div style={{ color: "var(--rg-muted)", fontSize: "14px", marginBottom: "20px" }}>One-time purchase</div>
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px 0", display: "flex", flexDirection: "column", gap: "10px" }}>
              {["Unlock one specific book", "Full AI access for that book", "Includes all language versions", "Never expires", "Download as PDF (optional)"].map((f, i) => (
                <li key={i} style={{ fontSize: "14px", display: "flex", gap: "8px" }}>
                  <span style={{ color: "var(--rg-mint)" }}>✓</span> {f}
                </li>
              ))}
            </ul>
            <Link href="/login" className="btn btn-ghost btn-block">Browse books</Link>
          </div>
        </div>

        {/* FAQ */}
        <div style={{ maxWidth: "640px", margin: "64px auto 0", textAlign: "left" }}>
          <h2 style={{ textAlign: "center", marginBottom: "32px" }}>FAQ</h2>
          {[
            { q: "Is the Free plan really free?", a: "Yes. You can browse books, read free samples, and ask AI questions on sample chapters at no cost." },
            { q: "What's included in the Study Pass?", a: "Unlimited access to all books, unlimited AI questions, priority processing, and the ability to export notes and mind maps." },
            { q: "Can I switch plans later?", a: "Absolutely. You can upgrade or downgrade at any time." },
            { q: "Do teachers or schools get a discount?", a: "Yes — reach out to us at teachers@granthica.com for institutional pricing." },
          ].map((faq, i) => (
            <div key={i} style={{ marginBottom: "16px", borderBottom: "1px solid var(--rg-line)", paddingBottom: "16px" }}>
              <div style={{ fontWeight: 600, color: "var(--rg-ink)", marginBottom: "6px" }}>{faq.q}</div>
              <div style={{ fontSize: "14px", color: "var(--rg-muted)" }}>{faq.a}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
