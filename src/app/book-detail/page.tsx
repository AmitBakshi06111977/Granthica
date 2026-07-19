"use client";
import Link from "next/link";
import { useState } from "react";

const chapters = [
  { n: 1, title: "The Indus Valley Civilisation", pages: "1–38", status: "sample" },
  { n: 2, title: "The Vedic Period", pages: "39–82", status: "sample" },
  { n: 3, title: "The Mauryan Empire", pages: "83–126", status: "sample" },
  { n: 4, title: "The Gupta Period", pages: "127–168", status: "locked" },
  { n: 5, title: "Medieval India", pages: "169–224", status: "locked" },
  { n: 6, title: "The Mughal Empire", pages: "225–280", status: "locked" },
  { n: 7, title: "Colonial Rule", pages: "281–340", status: "locked" },
  { n: 8, title: "Independence Movement", pages: "341–420", status: "locked" },
  { n: 9, title: "Post-Independence India", pages: "421–490", status: "locked" },
];

export default function BookDetailPage() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <>
      <header className="site-header">
        <div className="container">
          <div className="bar">
            <Link href="/" className="brand">
              <div className="mark">G</div>
              <div>Granthica<small>Learn from every book</small></div>
            </Link>
            <div style={{ flex: 1 }} />
            <nav className="nav-links">
              <Link href="/discover">Discover</Link>
              <Link href="/study-studio">Study Studio</Link>
              <Link href="/login">Sign in</Link>
            </nav>
            <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
              <Link href="/login" className="btn btn-ghost btn-sm">Sign in</Link>
              <Link href="/reader" className="btn btn-primary btn-sm">Read now →</Link>
            </div>
          </div>
        </div>
      </header>

      <div className="container" style={{ padding: "40px 24px" }}>
        {/* Breadcrumb */}
        <div style={{ fontSize: "13px", color: "var(--rg-muted)", marginBottom: "24px" }}>
          <Link href="/discover" style={{ color: "var(--rg-primary)" }}>Discover</Link> / Discovery of India
        </div>

        <div className="detail-grid">
          {/* Book cover */}
          <div>
            <div className="book-cover-lg" style={{ background: "linear-gradient(135deg, #0a1f4d, #0a66c2)" }}>
              <div>
                <h2 style={{ fontFamily: "'Source Serif Pro', Georgia, serif", fontSize: "26px", textAlign: "center", color: "white", lineHeight: 1.15, marginBottom: "12px" }}>
                  Discovery of India
                </h2>
                <div style={{ textAlign: "center", fontSize: "13px", color: "rgba(255,255,255,.8)" }}>Jawaharlal Nehru</div>
              </div>
            </div>
            <div style={{ marginTop: "16px" }}>
              <Link href="/reader" className="btn btn-primary btn-block" style={{ marginBottom: "10px" }}>
                📖 Read for free
              </Link>
              <Link href="/study-studio" className="btn btn-ghost btn-block">
                🤖 Ask AI questions
              </Link>
            </div>
          </div>

          {/* Book meta */}
          <div className="detail-meta">
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "12px" }}>
              <span className="badge badge-free">✓ 100% Free</span>
              <span className="badge badge-sample">📖 Sample available</span>
              <span className="badge badge-rag">🤖 AI Answers</span>
            </div>
            <h1>Discovery of India</h1>
            <div className="byline">by Jawaharlal Nehru · First published 1946</div>
            <div className="pill-row">
              {["History", "UPSC", "General Knowledge", "8 Languages"].map((p, i) => (
                <span key={i} className="badge">{p}</span>
              ))}
            </div>

            <div className="fact-grid">
              <div className="fact"><div className="l">Pages</div><div className="v">540</div></div>
              <div className="fact"><div className="l">Language</div><div className="v">English + 7 more</div></div>
              <div className="fact"><div className="l">Edition</div><div className="v">Oxford Edition</div></div>
              <div className="fact"><div className="l">Exam</div><div className="v">UPSC / General</div></div>
              <div className="fact"><div className="l">Publisher</div><div className="v">Oxford University Press</div></div>
              <div className="fact"><div className="l">AI Accuracy</div><div className="v" style={{ color: "var(--rg-mint)" }}>High (RAG-enabled)</div></div>
            </div>

            <div className="cta-row">
              <Link href="/reader" className="btn btn-primary btn-lg">Read free →</Link>
              <Link href="/study-studio" className="btn btn-soft btn-lg">Ask AI →</Link>
            </div>

            <p style={{ color: "var(--rg-muted)", fontSize: "14px", marginTop: "16px" }}>
              Enter book code to access full version: <span style={{ fontFamily: "monospace", background: "var(--rg-tint)", padding: "2px 8px", borderRadius: "6px" }}>DISCOVERY2024</span>
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div style={{ marginTop: "48px" }}>
          <div className="tabs">
            {["overview", "chapters", "sample", "publisher"].map((tab) => (
              <div key={tab} className={`tab${activeTab === tab ? " active" : ""}`} onClick={() => setActiveTab(tab)} style={{ textTransform: "capitalize" }}>
                {tab}
              </div>
            ))}
          </div>

          {activeTab === "overview" && (
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
              <div className="card card-pad">
                <h3 style={{ marginBottom: "12px" }}>About this book</h3>
                <p style={{ fontSize: "14px", color: "var(--rg-text)", lineHeight: 1.7 }}>
                  Written by Jawaharlal Nehru during his imprisonment in 1942–1945, Discovery of India is a monumental account of India&apos;s history, culture, and philosophy. It is essential reading for UPSC aspirants and anyone interested in understanding India&apos;s civilisational depth.
                </p>
                <h4 style={{ marginTop: "16px", marginBottom: "8px" }}>Key highlights</h4>
                <ul style={{ paddingLeft: "20px", fontSize: "14px", color: "var(--rg-text)", lineHeight: 1.8 }}>
                  <li>Covers ancient to modern India in one narrative</li>
                  <li>Written in Nehru&apos;s distinctive, accessible prose</li>
                  <li>Strong focus on India&apos;s philosophical traditions</li>
                  <li>Highly relevant for UPSC History and Essay papers</li>
                </ul>
              </div>
              <div className="card card-pad">
                <h3 style={{ marginBottom: "12px" }}>What you can do with Granthica</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {[
                    { icon: "📖", title: "Read chapter-by-chapter", desc: "Clean, distraction-free reading with bookmark support" },
                    { icon: "💬", title: "Ask anything in any language", desc: "Get answers from the book in English, Hindi, Bengali, Tamil, and more" },
                    { icon: "📝", title: "Generate summaries", desc: "AI-generated chapter summaries, mind maps, and revision notes" },
                    { icon: "❓", title: "Practice questions", desc: "MCQs, short answer, and long answer questions from the book" },
                  ].map((item, i) => (
                    <div key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                      <span style={{ fontSize: "20px" }}>{item.icon}</span>
                      <div>
                        <div style={{ fontWeight: 600, fontSize: "14px", color: "var(--rg-ink)" }}>{item.title}</div>
                        <div style={{ fontSize: "13px", color: "var(--rg-muted)" }}>{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "chapters" && (
            <div className="card chapter-list-card">
              {chapters.map((ch) => (
                <div key={ch.n} className="row">
                  <div style={{ width: "28px", height: "28px", borderRadius: "7px", background: ch.status === "sample" ? "var(--rg-primary-light)" : "var(--rg-tint)", color: ch.status === "sample" ? "var(--rg-primary)" : "var(--rg-muted)", display: "grid", placeItems: "center", fontSize: "12px", fontWeight: 700 }}>
                    {ch.n}
                  </div>
                  <div className="title">{ch.title}</div>
                  <div className="meta">{ch.pages}</div>
                  {ch.status === "sample" ? (
                    <span className="badge badge-sample">Sample</span>
                  ) : (
                    <span className="badge badge-locked">🔒 Unlock to access</span>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
