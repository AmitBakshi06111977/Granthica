"use client";
import Link from "next/link";

const books = [
  { title: "Discovery of India", author: "Jawaharlal Nehru", progress: 65, chapters: "3 of 9", badge: "Free", color: "cover-1" },
  { title: "Indian Polity", author: "M. Laxmikanth", progress: 32, chapters: "7 of 18", badge: "Study Pass", color: "cover-2" },
  { title: "NCERT History", author: "NCERT · Class 12", progress: 18, chapters: "2 of 14", badge: "Free", color: "cover-3" },
  { title: "Physical Geography", author: "Savindra Singh", progress: 0, chapters: "0 of 12", badge: "Study Pass", color: "cover-4" },
];

export default function StudentLibrary() {
  return (
    <div className="app-shell">
      <aside className="app-side">
        <Link href="/" className="brand" style={{ padding: "0 8px 18px" }}>
          <div className="mark">G</div><div>Granthica</div>
        </Link>
        <div className="side-section">Menu</div>
        <Link href="/student-dashboard" className="side-link">📊 Dashboard</Link>
        <Link href="/student-library" className="side-link active">📚 My Library</Link>
        <Link href="/discover" className="side-link">🔍 Discover</Link>
        <Link href="/chat-history" className="side-link">💬 Chat History</Link>
        <Link href="/outputs" className="side-link">📄 My Outputs</Link>
        <div className="side-section">Account</div>
        <Link href="/wallet" className="side-link">💰 Wallet</Link>
        <Link href="/profile" className="side-link">👤 Profile</Link>
      </aside>
      <main className="app-main">
        <div className="app-top">
          <h2 style={{ fontSize: "20px", fontWeight: 700 }}>My Library</h2>
          <div style={{ marginLeft: "auto" }}>
            <Link href="/discover" className="btn btn-primary btn-sm">+ Add books</Link>
          </div>
        </div>
        <div className="app-content">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "20px" }}>
            {books.map((book, i) => (
              <div key={i} className="card" style={{ padding: "20px", display: "flex", gap: "16px" }}>
                <div style={{ width: "72px", height: "96px", borderRadius: "10px", background: "linear-gradient(135deg, #d6e4ff, #c7f3e3)", display: "grid", placeItems: "center", fontSize: "12px", fontWeight: 700, flexShrink: 0, padding: "8px", textAlign: "center" }}>
                  {book.title.split(" ").slice(0, 2).join(" ")}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                    <h3 style={{ fontSize: "16px", marginBottom: "4px" }}>{book.title}</h3>
                    <span className={`badge ${book.badge === "Free" ? "badge-free" : ""}`}>{book.badge}</span>
                  </div>
                  <div style={{ fontSize: "13px", color: "var(--rg-muted)", marginBottom: "10px" }}>{book.author}</div>
                  <div style={{ fontSize: "13px", color: "var(--rg-muted)", marginBottom: "6px" }}>{book.chapters} chapters read</div>
                  <div className="progress"><i style={{ width: `${book.progress}%` }} /></div>
                  <div style={{ fontSize: "12px", color: "var(--rg-muted)", marginTop: "4px" }}>{book.progress}% complete</div>
                  <div style={{ display: "flex", gap: "8px", marginTop: "10px" }}>
                    <Link href="/reader" className="btn btn-primary btn-sm">Read</Link>
                    <Link href="/study-studio" className="btn btn-soft btn-sm">Study Studio</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: "32px", textAlign: "center", padding: "32px", background: "var(--rg-tint)", borderRadius: "16px", border: "1px dashed var(--rg-line)" }}>
            <div style={{ fontSize: "24px", marginBottom: "8px" }}>📚</div>
            <h3 style={{ marginBottom: "8px" }}>Want more books?</h3>
            <p style={{ color: "var(--rg-muted)", fontSize: "14px", marginBottom: "16px" }}>Browse our free library and add books to your collection.</p>
            <Link href="/discover" className="btn btn-primary">Browse free books →</Link>
          </div>
        </div>
      </main>
    </div>
  );
}
