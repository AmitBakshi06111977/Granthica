"use client";
import Link from "next/link";

const books = [
  { title: "Discovery of India", author: "Jawaharlal Nehru", edition: "1st Ed", pages: 540, language: "Hindi, English, 6 more", cover: "cover-1", coverTitle: "Discovery of India", coverMeta: "Jawaharlal Nehru", badge: "Free", badgeClass: "badge-free", exam: "General", subject: "History" },
  { title: "Indian Polity", author: "M. Laxmikanth", edition: "6th Ed", pages: 820, language: "English, Hindi", cover: "cover-2", coverTitle: "Indian Polity", coverMeta: "M. Laxmikanth", badge: "Free", badgeClass: "badge-free", exam: "UPSC / State PSC", subject: "Polity" },
  { title: "NCERT History", author: "NCERT · Class 12", edition: "2023", pages: 380, language: "8 languages", cover: "cover-3", coverTitle: "NCERT History", coverMeta: "Themes in Indian History", badge: "Free", badgeClass: "badge-free", exam: "UPSC / Boards", subject: "History" },
  { title: "Premchand Stories", author: "Munshi Premchand", edition: "Collection", pages: 290, language: "Hindi & English", cover: "cover-4", coverTitle: "Premchand", coverMeta: "Selected Stories", badge: "Free", badgeClass: "badge-free", exam: "General", subject: "Literature" },
  { title: "Science & Technology", author: "NCERT · Class 10", edition: "2023", pages: 420, language: "8 languages", cover: "cover-5", coverTitle: "Science & Tech", coverMeta: "NCERT Class 10", badge: "Free", badgeClass: "badge-free", exam: "Boards", subject: "Science" },
  { title: "Geography of India", author: "Majid Husain", edition: "7th Ed", pages: 610, language: "English, Hindi", cover: "cover-6", coverTitle: "Geography", coverMeta: "Majid Husain", badge: "Free", badgeClass: "badge-free", exam: "UPSC", subject: "Geography" },
  { title: "Environment & Ecology", author: "NCERT", edition: "2022", pages: 310, language: "English, Hindi", cover: "cover-1", coverTitle: "Environment", coverMeta: "NCERT", badge: "Free", badgeClass: "badge-free", exam: "UPSC / NEET", subject: "Environment" },
  { title: "Physical Geography", author: "Savindra Singh", edition: "2nd Ed", pages: 480, language: "English, Hindi", cover: "cover-2", coverTitle: "Physical Geo", coverMeta: "Savindra Singh", badge: "Free", badgeClass: "badge-free", exam: "UPSC", subject: "Geography" },
];

export default function DiscoverPage() {
  return (
    <>
      {/* Header */}
      <header className="site-header">
        <div className="container">
          <div className="bar">
            <Link href="/" className="brand">
              <div className="mark">G</div>
              <div>Granthica<small>Learn from every book</small></div>
            </Link>
            <div style={{ flex: 1 }} />
            <nav className="nav-links">
              <Link href="/discover" className="active">Discover</Link>
              <Link href="/study-studio">Study Studio</Link>
              <Link href="/login">Sign in</Link>
            </nav>
            <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
              <Link href="/login" className="btn btn-ghost btn-sm">Sign in</Link>
              <Link href="/student-dashboard" className="btn btn-primary btn-sm">My library →</Link>
            </div>
          </div>
        </div>
      </header>

      {/* Discover Hero */}
      <div className="discover-hero">
        <div className="container">
          <div style={{ color: "var(--rg-primary)", textTransform: "uppercase", letterSpacing: ".12em", fontSize: "12px", fontWeight: 700, marginBottom: "12px" }}>Free library</div>
          <h1 style={{ fontSize: "32px", marginBottom: "16px", color: "var(--rg-ink)" }}>Discover books</h1>
          <p style={{ color: "var(--rg-muted)", marginBottom: "20px" }}>Browse trusted books for exams, learning, and curiosity. All free.</p>
          <div className="search-shell">
            <input className="input" placeholder="Search books, authors, topics..." style={{ border: 0, boxShadow: "none", padding: "14px 16px", fontSize: "15px", flex: 1 }} />
            <button className="btn btn-primary">Search</button>
          </div>
          <div className="filter-bar">
            {["All", "UPSC", "NEET", "JEE", "Board Exams", "General Knowledge", "History", "Geography", "Science", "Literature"].map((f, i) => (
              <div key={i} className={`chip${i === 0 ? " active" : ""}`}>{f}</div>
            ))}
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="container" style={{ padding: "32px 24px" }}>
        <div className="discover-layout">
          {/* Filter sidebar */}
          <div className="filter-block">
            <h5>Access</h5>
            {["Free", "Subscription", "Pay-per-book"].map((f, i) => (
              <div key={i} className="filter-row"><input type="checkbox" defaultChecked={i === 0} /> {f}</div>
            ))}
            <h5>Exam</h5>
            {["UPSC / State PSC", "NEET", "JEE", "Board Exams", "General Knowledge"].map((f, i) => (
              <div key={i} className="filter-row"><input type="checkbox" /> {f}</div>
            ))}
            <h5>Subject</h5>
            {["History", "Geography", "Polity", "Science", "Literature", "Economics"].map((f, i) => (
              <div key={i} className="filter-row"><input type="checkbox" /> {f}</div>
            ))}
            <h5>Language</h5>
            {["English", "हिन्दी", "বাংলা", "தமிழ்", "తెలుగు"].map((f, i) => (
              <div key={i} className="filter-row"><input type="checkbox" /> {f}</div>
            ))}
            <h5>Features</h5>
            {["RAG-enabled (AI answers)", "Sample chapters free", "Multi-language answers"].map((f, i) => (
              <div key={i} className="filter-row"><input type="checkbox" /> {f}</div>
            ))}
          </div>

          {/* Book grid */}
          <div>
            <div className="results-head">
              <div className="left">
                <span style={{ fontSize: "14px", color: "var(--rg-muted)" }}>Showing <strong>8</strong> books</span>
              </div>
              <div className="right">
                <select className="select" style={{ width: "auto", padding: "8px 12px", fontSize: "13px" }}>
                  <option>Most popular</option>
                  <option>Newest first</option>
                  <option>A → Z</option>
                </select>
              </div>
            </div>
            <div className="book-grid">
              {books.map((book, i) => (
                <Link key={i} href="/book-detail" className="book-card">
                  <div style={{ aspectRatio: "3/4", borderRadius: "10px", padding: "16px", display: "flex", flexDirection: "column", justifyContent: "space-between", color: "white", fontWeight: 700 }} className={book.cover}>
                    <div style={{ fontFamily: "'Source Serif Pro', Georgia, serif", fontSize: "20px", lineHeight: 1.1, fontWeight: 400 }}>{book.coverTitle}</div>
                    <div style={{ fontSize: "11px", opacity: 0.8 }}>{book.coverMeta}</div>
                  </div>
                  <div className="book-meta">
                    <h4>{book.title}</h4>
                    <div className="by">{book.author}</div>
                    <div className="row-tags">
                      <span className={`badge ${book.badgeClass}`}>{book.badge}</span>
                      <span className="badge">{book.subject}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
