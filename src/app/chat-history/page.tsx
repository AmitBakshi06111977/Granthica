"use client";
import Link from "next/link";

const chats = [
  { id: 1, book: "Discovery of India", question: "What was the administrative system of the Mauryan Empire?", time: "2h ago", citations: "Ch.3 · p.88", status: "resolved" },
  { id: 2, book: "Discovery of India", question: "Explain the concept of Mandala in Kautilya's Arthashastra", time: "5h ago", citations: "Ch.3 · Example 2", status: "resolved" },
  { id: 3, book: "Indian Polity", question: "How is the President of India elected?", time: "Yesterday", citations: "Ch.5 · p.112", status: "resolved" },
  { id: 4, book: "NCERT History", question: "Give me 5 MCQs on the Gupta period", time: "2 days ago", citations: "Ch.4 · p.140", status: "resolved" },
  { id: 5, book: "Discovery of India", question: "What led to the decline of the Mauryan Empire?", time: "3 days ago", citations: "Ch.3 · p.105", status: "resolved" },
];

export default function ChatHistory() {
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
        <Link href="/chat-history" className="side-link active">💬 Chat History</Link>
        <Link href="/outputs" className="side-link">📄 My Outputs</Link>
        <div className="side-section">Account</div>
        <Link href="/wallet" className="side-link">💰 Wallet</Link>
        <Link href="/profile" className="side-link">👤 Profile</Link>
      </aside>
      <main className="app-main">
        <div className="app-top">
          <h2 style={{ fontSize: "20px", fontWeight: 700 }}>Chat History</h2>
          <div style={{ marginLeft: "auto", display: "flex", gap: "8px" }}>
            <input className="input" placeholder="Search conversations..." style={{ maxWidth: "240px", padding: "8px 12px", fontSize: "13px" }} />
            <button className="btn btn-ghost btn-sm">Filter</button>
          </div>
        </div>
        <div className="app-content">
          <div style={{ display: "flex", gap: "8px", marginBottom: "20px", flexWrap: "wrap" }}>
            {["All", "Discovery of India", "Indian Polity", "NCERT History", "This week", "Last 30 days"].map((f, i) => (
              <div key={i} className={`chip${i === 0 ? " active" : ""}`}>{f}</div>
            ))}
          </div>
          <div className="card">
            <div style={{ padding: "14px 18px", borderBottom: "1px solid var(--rg-line)", display: "grid", gridTemplateColumns: "2fr 1.5fr 1fr 1fr auto", gap: "12px", fontSize: "12px", textTransform: "uppercase", letterSpacing: ".05em", color: "var(--rg-muted)", fontWeight: 600 }}>
              <div>Question</div>
              <div>Book</div>
              <div>Time</div>
              <div>Citations</div>
              <div></div>
            </div>
            {chats.map((chat) => (
              <div key={chat.id} style={{ padding: "16px 18px", borderBottom: "1px solid var(--rg-line-2)", display: "grid", gridTemplateColumns: "2fr 1.5fr 1fr 1fr auto", gap: "12px", alignItems: "center" }}>
                <div style={{ fontSize: "14px", fontWeight: 500, color: "var(--rg-ink)" }}>{chat.question}</div>
                <div style={{ fontSize: "13px", color: "var(--rg-muted)" }}>{chat.book}</div>
                <div style={{ fontSize: "13px", color: "var(--rg-muted)" }}>{chat.time}</div>
                <div><span className="badge badge-rag" style={{ fontSize: "11px" }}>{chat.citations}</span></div>
                <Link href="/study-studio" className="btn btn-soft btn-sm">View →</Link>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
