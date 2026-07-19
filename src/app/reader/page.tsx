"use client";
import Image from "next/image";
import Link from "next/link";

const chapters = [
  { n: 1, title: "The Indus Valley Civilisation", status: "sample" },
  { n: 2, title: "The Vedic Period", status: "sample" },
  { n: 3, title: "The Mauryan Empire", status: "active" },
  { n: 4, title: "The Gupta Period", status: "locked" },
  { n: 5, title: "Medieval India", status: "locked" },
  { n: 6, title: "The Mughal Empire", status: "locked" },
  { n: 7, title: "Colonial Rule", status: "locked" },
];

export default function ReaderPage() {
  return (
    <>
      <header className="site-header">
        <div className="container">
          <div className="bar">
            <Link href="/student-dashboard" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
              <Image src="/granthica-logo.png" alt="Granthica" width={120} height={34} style={{ objectFit: "contain" }} />
            </Link>
            <div style={{ flex: 1 }} />
            <div style={{ fontSize: "14px", color: "var(--rg-muted)" }}>
              Discovery of India · <strong style={{ color: "var(--rg-ink)" }}>Chapter 3</strong>
            </div>
            <Link href="/study-studio" className="btn btn-soft btn-sm">🤖 Ask AI</Link>
            <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "linear-gradient(135deg, var(--rg-primary), var(--rg-bright))", display: "grid", placeItems: "center", color: "white", fontWeight: 700, fontSize: "13px" }}>A</div>
          </div>
        </div>
      </header>

      <div className="reader-shell">
        {/* Left sidebar */}
        <div className="reader-side">
          <div style={{ fontSize: "13px", fontWeight: 600, color: "var(--rg-ink)", marginBottom: "12px" }}>Discovery of India</div>
          <h5>Chapters</h5>
          {chapters.map((ch) => (
            <div key={ch.n} className={`ch${ch.status === "active" ? " active" : ""}${ch.status === "locked" ? " locked" : ""}`}>
              <div style={{ width: "22px", height: "22px", borderRadius: "6px", background: ch.status === "active" ? "var(--rg-primary)" : ch.status === "locked" ? "#f1f1f3" : "var(--rg-tint)", color: ch.status === "active" ? "white" : "var(--rg-muted)", display: "grid", placeItems: "center", fontSize: "11px", fontWeight: 700 }}>
                {ch.n}
              </div>
              {ch.title}
              {ch.status === "locked" && <span className="l-ic">🔒</span>}
            </div>
          ))}

          <h5>Book details</h5>
          <div style={{ padding: "0 8px", fontSize: "13px", color: "var(--rg-muted)", lineHeight: 1.6 }}>
            <div>Author: Jawaharlal Nehru</div>
            <div>Pages: 1–38 of 540</div>
            <div>Progress: <strong>65%</strong></div>
          </div>
        </div>

        {/* Center: reading area */}
        <div className="reader-main">
          <div className="page">
            <div className="watermark">gran thica.com</div>
            <h2>Chapter 3: The Mauryan Empire</h2>
            <p>
              The Mauryan Empire (c. 321–185 BCE) represents one of the most significant periods in Indian history, marked by territorial expansion, sophisticated administration, and cultural flourishing under rulers like Chandragupta Maurya and Ashoka.
            </p>
            <p>
              Chandragupta Maurya, with the guidance of his mentor Chanakya (Kautilya), overthrew the Nanda dynasty around 321 BCE and established the first pan-Indian empire. His administration was highly organised, dividing the empire into provinces governed by royal princes and senior officials.
            </p>
            <p>
              The empire reached its zenith under Ashoka, who, after the brutal Kalinga war, embraced Buddhism and dedicated his reign to <em>dharma</em> — righteous conduct. His edicts, inscribed on pillars and rocks across the subcontinent, provide invaluable historical evidence of Mauryan governance and social conditions.
            </p>
            <p>
              The administrative structure included various officials: the <strong>Mahaamatras</strong> (high officials), <strong>Rajjukas</strong> (district magistrates), and <strong>Praharas</strong> (frontier commanders). This bureaucratic apparatus enabled efficient governance across a vast and diverse territory.
            </p>
            <p>
              Ashoka&apos;s empire was divided into four provinces, each administered by a <strong>Kumara</strong> (prince). The empire maintained a vast army — reported by Megasthenes as comprising 6,00,000 infantry, 30,000 cavalry, and 9,000 war elephants. Yet Ashoka chose the path of peace, famously renouncing violence after Kalinga.
            </p>
            <p>
              The Mauryan period also saw significant developments in art and architecture. The polished sandstone pillars of Ashoka, with their elaborate capitals, represent the finest achievements of Mauryan stonework. The Sarnath lion capital, now India&apos;s national emblem, exemplifies the artistic excellence of this age.
            </p>
            <p>
              The decline of the Mauryan Empire after Ashoka was gradual but inexorable. Weak successors, vast administrative costs, and the growing power of provincial governors fragmented the empire. By 185 BCE, the last Mauryan ruler was assassinated, and the Sungas rose to power. Yet the legacy of the Mauryas — administrative traditions, Buddhist propagation, and artistic achievements — endured for centuries.
            </p>
          </div>
        </div>

        {/* Right rail */}
        <div className="reader-rail">
          <h5>Key concepts</h5>
          {[
            { label: "Chapter", value: "3 of 9" },
            { label: "Source", value: "Discovery of India" },
            { label: "RAG score", value: "Very high" },
          ].map((c, i) => (
            <div key={i} className="cite-card">
              <div className="l">{c.label}</div>
              <div style={{ fontWeight: 600, marginTop: "2px" }}>{c.value}</div>
            </div>
          ))}

          <h5>Related questions</h5>
          {["What was Chandragupta's admin system?", "Ashoka's Kalinga war", "Mauryan art and architecture"].map((q, i) => (
            <div key={i} className="cite-card" style={{ cursor: "pointer" }}>
              💬 {q}
            </div>
          ))}

          <div style={{ marginTop: "16px" }}>
            <Link href="/study-studio" className="btn btn-soft btn-block btn-sm">
              Continue in Study Studio →
            </Link>
          </div>
        </div>
      </div>

      {/* Floating ask bar */}
      <div className="reader-ask">
        <input placeholder="Ask anything from this page..." />
        <button className="btn btn-primary btn-sm">Ask</button>
      </div>
    </>
  );
}
