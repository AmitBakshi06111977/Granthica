"use client";
import Link from "next/link";

export default function StudentDashboard() {
  return (
    <div className="app-shell">
      {/* Sidebar */}
      <aside className="app-side">
        <Link href="/" className="brand" style={{ padding: "0 8px 18px" }}>
          <div className="mark">G</div>
          <div>Granthica</div>
        </Link>

        <div className="side-section">Menu</div>
        <Link href="/student-dashboard" className="side-link active">📊 Dashboard</Link>
        <Link href="/student-library" className="side-link">📚 My Library</Link>
        <Link href="/discover" className="side-link">🔍 Discover</Link>
        <Link href="/chat-history" className="side-link">💬 Chat History</Link>
        <Link href="/outputs" className="side-link">📄 My Outputs</Link>

        <div className="side-section">Account</div>
        <Link href="/wallet" className="side-link">💰 Wallet</Link>
        <Link href="/profile" className="side-link">👤 Profile</Link>
        <Link href="/pricing" className="side-link">⭐ Study Pass</Link>

        <div style={{ marginTop: "auto", padding: "16px 10px 0" }}>
          <div style={{ background: "var(--rg-mint-light)", borderRadius: "10px", padding: "12px", fontSize: "13px" }}>
            <div style={{ fontWeight: 600, color: "#0f8a72", marginBottom: "4px" }}>📖 Keep reading</div>
            <div style={{ color: "var(--rg-muted)", fontSize: "12px" }}>You have 4 books in your library</div>
          </div>
        </div>
      </aside>

      {/* Main */}
      <main className="app-main">
        <div className="app-top">
          <input className="input" placeholder="Search your books, questions..." style={{ maxWidth: "400px", padding: "9px 14px" }} />
          <div style={{ marginLeft: "auto", display: "flex", gap: "12px", alignItems: "center" }}>
            <span className="badge badge-free">✓ Study Pass Active</span>
            <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "linear-gradient(135deg, var(--rg-primary), var(--rg-bright))", display: "grid", placeItems: "center", color: "white", fontWeight: 700, fontSize: "14px" }}>A</div>
          </div>
        </div>

        <div className="app-content">
          {/* Welcome card */}
          <div className="welcome-card">
            <div className="deco" />
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <div>
                <div className="eyebrow" style={{ background: "rgba(255,255,255,.2)", color: "white", marginBottom: "10px" }}>Welcome back, Amit 👋</div>
                <h2>Continue where you left off</h2>
                <p>Your last session was 2 hours ago in Discovery of India, Chapter 3.</p>
                <div className="ctas">
                  <Link href="/reader" className="btn btn-primary">Resume reading →</Link>
                  <Link href="/study-studio" className="btn btn-ghost">Open Study Studio</Link>
                </div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: "48px", fontWeight: 800, color: "white" }}>7</div>
                <div style={{ color: "rgba(255,255,255,.7)", fontSize: "12px" }}>books unlocked</div>
              </div>
            </div>
          </div>

          {/* KPIs */}
          <div className="kpi-row" style={{ marginTop: "24px" }}>
            {[
              { label: "Books Read", value: "3", delta: "+1 this week", up: true, icon: "📚" },
              { label: "Questions Asked", value: "47", delta: "+12 today", up: true, icon: "💬", alt: true },
              { label: "Hours Studied", value: "12.5h", delta: "This week", up: true, icon: "⏱", alt2: true },
              { label: "Study Streak", value: "5 days", delta: "Personal best!", up: true, icon: "🔥", alt3: true },
            ].map((kpi, i) => (
              <div key={i} className={`kpi${kpi.alt ? " alt" : ""}${kpi.alt2 ? " alt-2" : ""}${kpi.alt3 ? " alt-3" : ""}`}>
                <div className="ic-pill">{kpi.icon}</div>
                <div className="label">{kpi.label}</div>
                <div className="value">{kpi.value}</div>
                <div className={`delta ${kpi.up ? "up" : "down"}`}>{kpi.delta}</div>
              </div>
            ))}
          </div>

          {/* Continue reading + Activity */}
          <div className="section-row">
            <div className="card card-pad">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                <h3>Continue reading</h3>
                <Link href="/student-library" style={{ fontSize: "13px", color: "var(--rg-primary)" }}>View all →</Link>
              </div>
              {[
                { title: "Discovery of India", author: "Jawaharlal Nehru", progress: 65, chapter: "Chapter 3 — The Mauryan Empire" },
                { title: "Indian Polity", author: "M. Laxmikanth", progress: 32, chapter: "Chapter 7 — Parliament" },
                { title: "NCERT History", author: "NCERT · Class 12", progress: 18, chapter: "Chapter 2 — Kings and Kingdoms" },
              ].map((book, i) => (
                <div key={i} style={{ display: "flex", gap: "14px", padding: "12px 0", borderBottom: "1px dashed var(--rg-line-2)" }}>
                  <div style={{ width: "48px", height: "64px", borderRadius: "8px", background: "linear-gradient(135deg, #d6e4ff, #c7f3e3)", display: "grid", placeItems: "center", fontSize: "10px", fontWeight: 700, flexShrink: 0 }}>{book.title.split(" ").slice(0, 2).join(" ")}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 600, fontSize: "14px", color: "var(--rg-ink)" }}>{book.title}</div>
                    <div style={{ fontSize: "12px", color: "var(--rg-muted)" }}>{book.chapter}</div>
                    <div style={{ marginTop: "8px" }}>
                      <div className="progress"><i style={{ width: `${book.progress}%` }} /></div>
                    </div>
                    <div style={{ fontSize: "11px", color: "var(--rg-muted)", marginTop: "4px" }}>{book.progress}% complete</div>
                  </div>
                  <Link href="/reader" className="btn btn-soft btn-sm">Read</Link>
                </div>
              ))}
            </div>

            <div className="card card-pad">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                <h3>Recent activity</h3>
              </div>
              <ul className="activity-list">
                {[
                  { icon: "💬", title: "Asked about Mauryan administration", meta: "Discovery of India · 2h ago" },
                  { icon: "📝", title: "Generated summary — Chapter 3", meta: "Saved to My Outputs · 2h ago" },
                  { icon: "🃏", title: "Created 20 flashcards", meta: "Indian Polity · Yesterday" },
                  { icon: "📖", title: "Finished Chapter 2", meta: "NCERT History · Yesterday" },
                ].map((item, i) => (
                  <li key={i}>
                    <div className="ic">{item.icon}</div>
                    <div className="body">
                      <div className="t">{item.title}</div>
                      <div className="m">{item.meta}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Suggested */}
          <div style={{ marginTop: "24px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
              <h3>Recommended for you</h3>
              <Link href="/discover" style={{ fontSize: "13px", color: "var(--rg-primary)" }}>Browse all →</Link>
            </div>
            <div className="book-grid-3">
              {[
                { title: "Physical Geography", author: "Savindra Singh", tag: "Geography", color: "cover-2" },
                { title: "Environment & Ecology", author: "NCERT", tag: "UPSC / NEET", color: "cover-3" },
                { title: "Science & Technology", author: "NCERT · Class 10", tag: "Boards", color: "cover-4" },
              ].map((book, i) => (
                <Link key={i} href="/book-detail" className="book-card">
                  <div style={{ aspectRatio: "3/4", borderRadius: "10px", padding: "16px", display: "flex", flexDirection: "column", justifyContent: "space-between", color: "white", fontWeight: 700 }} className={book.color}>
                    <div style={{ fontFamily: "'Source Serif Pro', Georgia, serif", fontSize: "20px", lineHeight: 1.1, fontWeight: 400 }}>{book.title}</div>
                    <div style={{ fontSize: "11px", opacity: 0.8 }}>{book.author}</div>
                  </div>
                  <div className="book-meta">
                    <h4>{book.title}</h4>
                    <div className="by">{book.author}</div>
                    <div className="row-tags">
                      <span className="badge badge-free">Free</span>
                      <span className="badge">{book.tag}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
