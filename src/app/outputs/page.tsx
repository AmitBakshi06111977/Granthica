"use client";
import Link from "next/link";

const outputs = [
  { type: "Summary", icon: "📝", book: "Discovery of India", chapter: "Chapter 3 — The Mauryan Empire", date: "2h ago", size: "4 pages" },
  { type: "Flashcards", icon: "🃏", book: "Indian Polity", chapter: "Chapter 7 — Parliament", date: "Yesterday", size: "20 cards" },
  { type: "Mind Map", icon: "🧠", book: "NCERT History", chapter: "Chapter 2 — Kings and Kingdoms", date: "3 days ago", size: "1 map" },
  { type: "Practice Set", icon: "❓", book: "Discovery of India", chapter: "Chapter 3 — The Mauryan Empire", date: "4 days ago", size: "15 questions" },
  { type: "Revision Notes", icon: "🔁", book: "Indian Polity", chapter: "Chapter 5 — The President", date: "1 week ago", size: "6 pages" },
  { type: "Summary", icon: "📝", book: "NCERT History", chapter: "Chapter 1 — The Story of Indian History", date: "2 weeks ago", size: "3 pages" },
];

export default function Outputs() {
  return (
    <div className="app-shell">
      <aside className="app-side">
        <Link href="/" className="brand" style={{ padding: "0 8px 18px" }}>
          <div className="mark">G</div><div>Granthica</div>
        </Link>
        <div className="side-section">Menu</div>
        <Link href="/student-dashboard" className="side-link">📊 Dashboard</Link>
        <Link href="/student-library" className="side-link">📚 My Library</Link>
        <Link href="/discover" className="side-link">🔍 Discover</Link>
        <Link href="/chat-history" className="side-link">💬 Chat History</Link>
        <Link href="/outputs" className="side-link active">📄 My Outputs</Link>
        <div className="side-section">Account</div>
        <Link href="/wallet" className="side-link">💰 Wallet</Link>
        <Link href="/profile" className="side-link">👤 Profile</Link>
      </aside>
      <main className="app-main">
        <div className="app-top">
          <h2 style={{ fontSize: "20px", fontWeight: 700 }}>My Outputs</h2>
          <div style={{ marginLeft: "auto", display: "flex", gap: "8px" }}>
            <input className="input" placeholder="Search outputs..." style={{ maxWidth: "200px", padding: "8px 12px", fontSize: "13px" }} />
            <button className="btn btn-primary btn-sm">Generate new →</button>
          </div>
        </div>
        <div className="app-content">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
            {outputs.map((out, i) => (
              <div key={i} className="card card-hover" style={{ padding: "20px", cursor: "pointer" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px" }}>
                  <div style={{ fontSize: "28px" }}>{out.icon}</div>
                  <span className="badge">{out.type}</span>
                </div>
                <h4 style={{ fontSize: "15px", marginBottom: "4px" }}>{out.chapter}</h4>
                <div style={{ fontSize: "13px", color: "var(--rg-muted)", marginBottom: "8px" }}>{out.book}</div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", color: "var(--rg-muted)" }}>
                  <span>{out.date}</span>
                  <span>{out.size}</span>
                </div>
                <div style={{ display: "flex", gap: "6px", marginTop: "12px" }}>
                  <button className="btn btn-ghost btn-sm" style={{ flex: 1 }}>View</button>
                  <button className="btn btn-soft btn-sm" style={{ flex: 1 }}>Download</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
