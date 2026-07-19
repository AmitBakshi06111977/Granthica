"use client";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* ── HEADER ── */}
      <header className="g-header">
        <div className="container">
          <div className="bar">
            <Link href="/" className="brand">
              <div className="mark">G</div>
              <div>
                Granthica
                <small>Learn from every book</small>
              </div>
            </Link>
            <div style={{ flex: 1 }} />
            <nav className="nav-links">
              <Link href="/discover">Discover</Link>
              <Link href="/study-studio">Study Studio</Link>
              <Link href="/login">Sign in</Link>
            </nav>
            <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
              <Link href="/login" className="btn btn-ghost btn-sm">Sign in</Link>
              <Link href="/discover" className="btn btn-primary btn-sm">My library →</Link>
            </div>
          </div>
        </div>
      </header>

      {/* ── HERO ── */}
      <section className="g-hero">
        <div className="container">
          <div className="g-hero-meta" style={{ display: "flex", alignItems: "center", gap: "14px", fontSize: "12.5px", color: "var(--rg-muted)", textTransform: "uppercase", letterSpacing: ".1em", fontWeight: 600, marginBottom: "28px" }}>
            <span className="dot" />
            <span>100% Free · No signup required</span>
          </div>
          <h1 style={{ fontFamily: "'Source Serif Pro', Georgia, serif", fontSize: "clamp(52px, 9vw, 96px)", lineHeight: 0.95, letterSpacing: "-0.02em", margin: 0, color: "var(--rg-ink)" }}>
            The book,<br />
            in <em style={{ fontStyle: "italic", color: "var(--rg-primary)" }}>your</em> language.<br />
            <span style={{ color: "var(--rg-bright)" }}>Always from the source.</span>
          </h1>
          <p style={{ fontSize: "20px", lineHeight: 1.5, color: "#1a2a52", maxWidth: "680px", marginTop: "24px", fontWeight: 400 }}>
            Not &ldquo;which book should I read?&rdquo; Not &ldquo;where to start?&rdquo; Just tell Granthica what you want to learn.
            Every answer comes from the actual book — in the language you understand best.
          </p>
          <div style={{ display: "flex", gap: "14px", marginTop: "32px", flexWrap: "wrap" }}>
            <Link href="/discover" className="g-hero-cta-primary" style={{ background: "var(--rg-primary)", color: "white", padding: "16px 28px", borderRadius: "99px", textDecoration: "none", fontWeight: 600, fontSize: "16px", display: "inline-flex", gap: "8px", alignItems: "center", boxShadow: "0 4px 20px rgba(10,102,194,.35)", transition: "all .2s" }}>
              Browse free books →
            </Link>
            <Link href="/study-studio" style={{ background: "transparent", color: "var(--rg-ink)", padding: "16px 28px", borderRadius: "99px", textDecoration: "none", fontWeight: 600, fontSize: "16px", display: "inline-flex", gap: "8px", alignItems: "center", border: "1.5px solid var(--rg-ink)" }}>
              ▶ See it in 60 seconds
            </Link>
          </div>
          <div style={{ display: "flex", gap: "32px", marginTop: "36px", flexWrap: "wrap", alignItems: "center", fontSize: "13px", color: "var(--rg-muted)" }}>
            <span>📚 History · Geography · Literature · Polity</span>
            <span>🎓 Students · Teachers · Curious readers</span>
            <span>💬 8 Indian languages</span>
            <span>✓ Cited, every time</span>
          </div>
        </div>
      </section>

      {/* ── LANGUAGE STAGE ── */}
      <section style={{ background: "linear-gradient(180deg, #0a1f4d 0%, #084a8e 100%)", color: "white", padding: "100px 32px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(800px 400px at 10% 20%, rgba(56,189,248,.2) 0%, transparent 50%), radial-gradient(800px 400px at 90% 80%, rgba(10,102,194,.3) 0%, transparent 50%)" }} />
        <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ color: "#38bdf8", textTransform: "uppercase", letterSpacing: ".12em", fontSize: "12px", fontWeight: 700, marginBottom: "18px" }}>
            The feature parents love
          </div>
          <h2 style={{ fontFamily: "'Source Serif Pro', Georgia, serif", fontSize: "clamp(36px, 5vw, 64px)", lineHeight: 1.05, margin: "0 0 24px", fontWeight: 400, color: "white", maxWidth: "800px" }}>
            Ask in <em style={{ fontStyle: "italic", color: "#38bdf8" }}>your</em> language.<br />Get answers in <em style={{ fontStyle: "italic", color: "#38bdf8" }}>your</em> language.
          </h2>
          <p style={{ fontSize: "17px", color: "rgba(255,255,255,.8)", maxWidth: "580px", lineHeight: 1.5, marginBottom: "56px" }}>
            Hindi book → answer in Hindi. Bengali book → answer in Bengali. Tamil, Telugu, Gujarati, Punjabi, Marathi — all of them. The same question, the same book, the right language for the reader.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "20px" }}>
            {/* English */}
            <div style={{ background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.12)", borderRadius: "18px", padding: "24px", backdropFilter: "blur(10px)", transition: "transform .25s, background .25s" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "18px", paddingBottom: "14px", borderBottom: "1px dashed rgba(255,255,255,.15)" }}>
                <span style={{ fontSize: "22px" }}>🇬🇧</span>
                <div>
                  <div style={{ fontWeight: 600, fontSize: "14px" }}>English</div>
                  <div style={{ fontSize: "11.5px", color: "rgba(255,255,255,.5)", textTransform: "uppercase", letterSpacing: ".08em" }}>ENGLISH</div>
                </div>
              </div>
              <div style={{ color: "#38bdf8", fontSize: "10.5px", fontWeight: 700, letterSpacing: ".08em", marginBottom: "4px" }}>Q · Reader asks</div>
              <div style={{ fontSize: "14px", color: "rgba(255,255,255,.9)", lineHeight: 1.5, marginBottom: "14px", minHeight: "42px" }}>
                &ldquo;Who built the Taj Mahal and why?&rdquo;
              </div>
              <div style={{ background: "rgba(255,255,255,.08)", borderRadius: "12px", padding: "14px 16px", fontSize: "13.5px", lineHeight: 1.55, color: "white", borderLeft: "3px solid #38bdf8" }}>
                <div style={{ color: "#38bdf8", fontSize: "10.5px", fontWeight: 700, letterSpacing: ".08em", marginBottom: "4px" }}>A · Granthica</div>
                The Taj Mahal was built between 1632 and 1653 by the Mughal emperor Shah Jahan in memory of his wife Mumtaz Mahal. It is in Agra, on the bank of the Yamuna river, and is made of white marble.
                <div style={{ marginTop: "10px", paddingTop: "10px", borderTop: "1px solid rgba(255,255,255,.1)", fontSize: "11px", color: "rgba(255,255,255,.5)", display: "flex", alignItems: "center", gap: "5px" }}>
                  📖 NCERT History · Class 7 · Chapter 10
                </div>
              </div>
            </div>

            {/* Hindi */}
            <div style={{ background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.12)", borderRadius: "18px", padding: "24px", backdropFilter: "blur(10px)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "18px", paddingBottom: "14px", borderBottom: "1px dashed rgba(255,255,255,.15)" }}>
                <span style={{ fontSize: "22px" }}>🇮🇳</span>
                <div>
                  <div style={{ fontWeight: 600, fontSize: "14px" }}>Hindi</div>
                  <div style={{ fontFamily: "'Noto Sans Devanagari', sans-serif", fontSize: "11.5px", color: "rgba(255,255,255,.5)", textTransform: "uppercase", letterSpacing: ".08em" }}>हिन्दी</div>
                </div>
              </div>
              <div style={{ color: "#38bdf8", fontSize: "10.5px", fontWeight: 700, letterSpacing: ".08em", marginBottom: "4px" }}>Q · पाठक पूछता है</div>
              <div style={{ fontFamily: "'Noto Sans Devanagari', sans-serif", fontSize: "14px", color: "rgba(255,255,255,.9)", lineHeight: 1.5, marginBottom: "14px", minHeight: "42px" }}>
                &ldquo;ताजमहल किसने और क्यों बनवाया था?&rdquo;
              </div>
              <div style={{ background: "rgba(255,255,255,.08)", borderRadius: "12px", padding: "14px 16px", fontSize: "13.5px", lineHeight: 1.55, color: "white", borderLeft: "3px solid #38bdf8" }}>
                <div style={{ color: "#38bdf8", fontSize: "10.5px", fontWeight: 700, letterSpacing: ".08em", marginBottom: "4px" }}>A · ग्रंथिका</div>
                <span style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}>ताजमहल 1632 से 1653 के बीच मुगल बादशाह शाहजहाँ ने अपनी पत्नी मुमताज महल की याद में बनवाया था। यह आगरा में, यमुना नदी के किनारे सफेद संगमरमर से बना है।</span>
                <div style={{ marginTop: "10px", paddingTop: "10px", borderTop: "1px solid rgba(255,255,255,.1)", fontSize: "11px", color: "rgba(255,255,255,.5)", display: "flex", alignItems: "center", gap: "5px" }}>
                  📖 एनसीईआरटी इतिहास · कक्षा 7 · अध्याय 10
                </div>
              </div>
            </div>

            {/* Bengali */}
            <div style={{ background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.12)", borderRadius: "18px", padding: "24px", backdropFilter: "blur(10px)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "18px", paddingBottom: "14px", borderBottom: "1px dashed rgba(255,255,255,.15)" }}>
                <span style={{ fontSize: "22px" }}>🇮🇳</span>
                <div>
                  <div style={{ fontWeight: 600, fontSize: "14px" }}>Bengali</div>
                  <div style={{ fontFamily: "'Noto Sans Bengali', sans-serif", fontSize: "11.5px", color: "rgba(255,255,255,.5)", textTransform: "uppercase", letterSpacing: ".08em" }}>বাংলা</div>
                </div>
              </div>
              <div style={{ color: "#38bdf8", fontSize: "10.5px", fontWeight: 700, letterSpacing: ".08em", marginBottom: "4px" }}>Q · পাঠক জিজ্ঞেস করেন</div>
              <div style={{ fontFamily: "'Noto Sans Bengali', sans-serif", fontSize: "14px", color: "rgba(255,255,255,.9)", lineHeight: 1.5, marginBottom: "14px", minHeight: "42px" }}>
                &ldquo;তাজমহল কে এবং কেন তৈরি করেছিলেন?&rdquo;
              </div>
              <div style={{ background: "rgba(255,255,255,.08)", borderRadius: "12px", padding: "14px 16px", fontSize: "13.5px", lineHeight: 1.55, color: "white", borderLeft: "3px solid #38bdf8" }}>
                <div style={{ color: "#38bdf8", fontSize: "10.5px", fontWeight: 700, letterSpacing: ".08em", marginBottom: "4px" }}>A · গ্রন্থিকা</div>
                <span style={{ fontFamily: "'Noto Sans Bengali', sans-serif" }}>তাজমহল ১৬৩২ থেকে ১৬৫৩ সালের মধ্যে মুঘল সম্রাট শাহজাহান তাঁর স্ত্রী মুমতাজ মহলের স্মৃতিতে আগ্রায় যমুনা নদীর তীরে সাদা মার্বেল দিয়ে তৈরি করেছিলেন।</span>
                <div style={{ marginTop: "10px", paddingTop: "10px", borderTop: "1px solid rgba(255,255,255,.1)", fontSize: "11px", color: "rgba(255,255,255,.5)", display: "flex", alignItems: "center", gap: "5px" }}>
                  📖 এনসিইআরটি ইতিহাস · ক্লাস ৭ · অধ্যায় ১০
                </div>
              </div>
            </div>
          </div>

          <div style={{ textAlign: "center", marginTop: "48px" }}>
            <Link href="/discover" style={{ background: "white", color: "var(--rg-ink)", padding: "14px 24px", borderRadius: "99px", textDecoration: "none", fontWeight: 600, display: "inline-flex", gap: "8px", alignItems: "center" }}>
              Try it yourself — pick a book →
            </Link>
          </div>
        </div>
      </section>

      {/* ── BENTO GRID ── */}
      <section style={{ padding: "100px 32px", maxWidth: "1280px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <div style={{ color: "var(--rg-primary)", textTransform: "uppercase", letterSpacing: ".12em", fontSize: "12px", fontWeight: 700 }}>What you get, every time</div>
          <h2 style={{ fontFamily: "'Source Serif Pro', Georgia, serif", fontSize: "clamp(32px, 4.5vw, 52px)", margin: "12px 0 16px", fontWeight: 400, lineHeight: 1.1 }}>
            Always from the book. Never from the web.
          </h2>
          <p style={{ color: "var(--rg-muted)", fontSize: "17px", maxWidth: "560px", margin: "0 auto" }}>
            While others give answers from random internet content, Granthica answers only from the textbook in front of you.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr", gridTemplateRows: "auto auto", gap: "16px" }}>
          {/* Cell 1 */}
          <div style={{ gridColumn: "1/2", gridRow: "1/3", background: "var(--rg-cream)", borderRadius: "22px", padding: "32px", border: "1px solid var(--rg-line)" }}>
            <h3 style={{ fontSize: "24px", margin: "0 0 8px", fontWeight: 700 }}>Read with answers baked in</h3>
            <p style={{ color: "var(--rg-muted)", fontSize: "14.5px", lineHeight: 1.5, margin: 0 }}>
              Highlight any sentence. Ask any question. The answer comes from the same book — with the page number right there.
            </p>
            <div style={{ marginTop: "20px", background: "white", borderRadius: "14px", padding: "22px", boxShadow: "0 4px 24px rgba(10,31,77,.06)", border: "1px solid var(--rg-line)" }}>
              <div style={{ fontSize: "11px", color: "var(--rg-muted)", textTransform: "uppercase", letterSpacing: ".08em", marginBottom: "10px" }}>📖 Discovery of India · Jawaharlal Nehru · Chapter 6</div>
              <p style={{ fontSize: "14px", lineHeight: 1.6, color: "#1a2a52", margin: 0 }}>
                India&apos;s unity is fundamentally <mark style={{ background: "linear-gradient(180deg, transparent 50%, rgba(56,189,248,.4) 50%)", padding: "0 2px" }}>geographical and cultural, woven together over thousands of years</mark> by the threads of trade, travel, and ideas. From the Indus Valley to the southern tip, this land has been one continuous story.
              </p>
              <div style={{ marginTop: "12px", paddingTop: "12px", borderTop: "1px solid var(--rg-line)", fontSize: "11.5px", color: "var(--rg-muted)", display: "flex", gap: "6px", alignItems: "center" }}>
                💬 Your question · Answered from the highlighted line
              </div>
            </div>
          </div>

          {/* Cell 2 */}
          <div style={{ gridColumn: "2/3", gridRow: "1/2", background: "white", border: "1px solid var(--rg-line)", borderRadius: "22px", padding: "32px" }}>
            <h3 style={{ fontSize: "24px", margin: "0 0 8px", fontWeight: 700 }}>Ask anything</h3>
            <p style={{ color: "var(--rg-muted)", fontSize: "14.5px", lineHeight: 1.5, margin: "0 0 16px" }}>For students, teachers, and anyone curious.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {[
                { icon: "💡", text: "Explain like I&apos;m 10" },
                { icon: "📝", text: "Summarise this chapter" },
                { icon: "🌍", text: "When was this written?" },
                { icon: "⚠️", text: "What does this word mean?" },
                { icon: "🎯", text: "Deeper explanation" },
              ].map((item, i) => (
                <div key={i} style={{ background: "var(--rg-cream)", borderRadius: "10px", padding: "10px 14px", fontSize: "13px", display: "flex", gap: "8px", alignItems: "center" }}>
                  <span>{item.icon}</span> {item.text}
                </div>
              ))}
            </div>
          </div>

          {/* Cell 3 */}
          <div style={{ gridColumn: "3/4", gridRow: "1/2", background: "var(--rg-primary)", color: "white", borderRadius: "22px", padding: "32px" }}>
            <h3 style={{ fontSize: "24px", margin: "0 0 8px", fontWeight: 700, color: "white" }}>Free</h3>
            <p style={{ color: "rgba(255,255,255,.85)", fontSize: "14.5px", lineHeight: 1.5, margin: 0 }}>No pricing tiers. No credit cards. No limits.</p>
            <div style={{ fontFamily: "'Source Serif Pro', Georgia, serif", fontSize: "80px", lineHeight: 1, margin: "16px 0 8px", color: "white" }}>100%</div>
            <p style={{ fontSize: "13px", color: "rgba(255,255,255,.85)", margin: 0 }}>Forever, for every student.</p>
          </div>

          {/* Cell 4 */}
          <div style={{ gridColumn: "2/4", gridRow: "2/3", background: "var(--rg-ink)", color: "white", borderRadius: "22px", padding: "32px" }}>
            <h3 style={{ fontSize: "24px", margin: "0 0 8px", fontWeight: 700, color: "white" }}>One book. Every study tool.</h3>
            <p style={{ color: "rgba(255,255,255,.75)", fontSize: "14.5px", lineHeight: 1.5, margin: "0 0 18px" }}>Summaries, mind maps, flashcards, practice sets, and tests — all generated from the book you chose.</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
              {["📝 Summaries", "🧠 Mind maps", "🃏 Flashcards", "❓ Practice Q&apos;s", "🎯 Mock tests", "📅 Study plans"].map((tool, i) => (
                <div key={i} style={{ background: "rgba(255,255,255,.08)", borderRadius: "10px", padding: "12px 14px", fontSize: "13px", display: "flex", alignItems: "center", gap: "8px" }}>
                  {tool}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── BOOKS ── */}
      <section style={{ padding: "80px 32px", background: "var(--rg-cream)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", marginBottom: "40px", flexWrap: "wrap", gap: "16px" }}>
            <div>
              <div style={{ color: "var(--rg-primary)", textTransform: "uppercase", letterSpacing: ".12em", fontSize: "12px", fontWeight: 700, marginBottom: "8px" }}>Free library</div>
              <h2 style={{ fontFamily: "'Source Serif Pro', Georgia, serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 400, lineHeight: 1.1, maxWidth: "600px", margin: 0 }}>
                Books worth reading, all in one place.
              </h2>
            </div>
            <Link href="/discover" className="btn btn-primary" style={{ background: "var(--rg-ink)" }}>Browse all books →</Link>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px" }}>
            {[
              { title: "Discovery of India", author: "Jawaharlal Nehru", cover: "cover-1", coverTitle: "Discovery of India", coverMeta: "Jawaharlal Nehru", tags: ["Free", "8 languages"] },
              { title: "Indian Polity", author: "M. Laxmikanth", cover: "cover-2", coverTitle: "Indian Polity", coverMeta: "M. Laxmikanth", tags: ["Free", "Cited answers"] },
              { title: "NCERT History", author: "NCERT · Class 12", cover: "cover-3", coverTitle: "NCERT History", coverMeta: "Themes in Indian History", tags: ["Free", "8 languages"] },
              { title: "Premchand Stories", author: "Munshi Premchand", cover: "cover-4", coverTitle: "Premchand", coverMeta: "Selected Stories", tags: ["Free", "Hindi & English"] },
            ].map((book, i) => (
              <Link key={i} href="/book-detail" style={{ background: "white", borderRadius: "16px", padding: "18px", textDecoration: "none", color: "var(--rg-ink)", transition: "all .2s", display: "block" }}>
                <div style={{ aspectRatio: "3/4", borderRadius: "10px", padding: "16px", display: "flex", flexDirection: "column", justifyContent: "space-between", color: "white", fontWeight: 700, marginBottom: "14px" }} className={book.cover}>
                  <div style={{ fontFamily: "'Source Serif Pro', Georgia, serif", fontSize: "22px", lineHeight: 1.1, fontWeight: 400 }}>{book.coverTitle}</div>
                  <div style={{ fontSize: "11px", opacity: 0.8 }}>{book.coverMeta}</div>
                </div>
                <h4 style={{ fontSize: "15px", margin: "0 0 4px", fontWeight: 600 }}>{book.title}</h4>
                <div style={{ fontSize: "12.5px", color: "var(--rg-muted)", marginBottom: "8px" }}>{book.author}</div>
                <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                  {book.tags.map((tag, j) => (
                    <span key={j} style={{ background: tag === "Free" ? "rgba(56,189,248,.15)" : "var(--rg-cream)", padding: "3px 8px", borderRadius: "99px", fontSize: "11px", fontWeight: 600, color: tag === "Free" ? "var(--rg-primary)" : "var(--rg-ink)" }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── LANGUAGES ── */}
      <section style={{ padding: "80px 32px", textAlign: "center" }}>
        <div style={{ color: "var(--rg-primary)", textTransform: "uppercase", letterSpacing: ".12em", fontSize: "12px", fontWeight: 700, marginBottom: "12px" }}>Languages</div>
        <h2 style={{ fontFamily: "'Source Serif Pro', Georgia, serif", fontSize: "clamp(28px, 4vw, 44px)", margin: "0 0 12px", fontWeight: 400 }}>
          Read in the language you&apos;re most comfortable in.
        </h2>
        <p style={{ color: "var(--rg-muted)", maxWidth: "480px", margin: "0 auto 36px", fontSize: "16px" }}>
          8 Indian languages, fully supported. Content stays consistent across all of them.
        </p>
        <div style={{ maxWidth: "900px", margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "12px", justifyContent: "center" }}>
          {[
            { flag: "🇬🇧", lang: "English", script: "" },
            { flag: "🇮🇳", lang: "Hindi", script: "हिन्दी" },
            { flag: "🇮🇳", lang: "Punjabi", script: "ਪੰਜਾਬੀ" },
            { flag: "🇮🇳", lang: "Bengali", script: "বাংলা" },
            { flag: "🇮🇳", lang: "Gujarati", script: "ગુજરાતી" },
            { flag: "🇮🇳", lang: "Tamil", script: "தமிழ்" },
            { flag: "🇮🇳", lang: "Telugu", script: "తెలుగు" },
            { flag: "🇮🇳", lang: "Marathi", script: "मराठी" },
          ].map((l, i) => (
            <div key={i} style={{ background: "white", border: "1.5px solid var(--rg-line)", borderRadius: "99px", padding: "10px 18px", fontSize: "15px", fontWeight: 500, color: "var(--rg-ink)", display: "flex", alignItems: "center", gap: "8px", transition: "all .2s", cursor: "pointer" }}>
              <span>{l.flag}</span> {l.script ? <span style={{ fontFamily: l.lang === "Hindi" || l.lang === "Marathi" ? "'Noto Sans Devanagari', sans-serif" : l.lang === "Bengali" ? "'Noto Sans Bengali', sans-serif" : "'Noto Sans Tamil', sans-serif" }}>{l.script}</span> : null} {l.lang}
            </div>
          ))}
        </div>
      </section>

      {/* ── CLOSING CTA ── */}
      <section style={{ padding: "120px 32px", textAlign: "center", background: "linear-gradient(135deg, #0a1f4d 0%, #084a8e 50%, #0a66c2 100%)", color: "white", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(800px 400px at 20% 30%, rgba(56,189,248,.25) 0%, transparent 50%), radial-gradient(800px 400px at 80% 70%, rgba(10,102,194,.4) 0%, transparent 50%)" }} />
        <div style={{ position: "relative" }}>
          <h2 style={{ fontFamily: "'Source Serif Pro', Georgia, serif", fontSize: "clamp(36px, 6vw, 72px)", margin: "0 0 24px", fontWeight: 400, lineHeight: 1.05, maxWidth: "900px", marginInline: "auto" }}>
            Stop searching.<br />Start <em style={{ fontStyle: "italic", color: "#38bdf8" }}>studying</em>.
          </h2>
          <p style={{ color: "rgba(255,255,255,.8)", fontSize: "18px", maxWidth: "480px", margin: "0 auto 36px" }}>
            No signup, no credit card. Pick a book and you&apos;re in.
          </p>
          <Link href="/discover" style={{ background: "white", color: "var(--rg-ink)", padding: "18px 32px", borderRadius: "99px", textDecoration: "none", fontWeight: 600, fontSize: "17px", display: "inline-flex", gap: "8px", alignItems: "center", boxShadow: "0 4px 24px rgba(0,0,0,.2)", transition: "all .2s" }}>
            Browse free books →
          </Link>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ padding: "48px 32px 32px", background: "var(--rg-paper)", borderTop: "1px solid var(--rg-line)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", gap: "32px" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
              <div className="mark" style={{ width: "32px", height: "32px", borderRadius: "9px", background: "linear-gradient(135deg, var(--rg-primary), var(--rg-bright) 80%)", display: "grid", placeItems: "center", color: "white", fontWeight: 800, fontSize: "14px", boxShadow: "0 6px 14px rgba(10,102,194,.30)" }}>G</div>
              <div style={{ fontWeight: 700, fontSize: "17px" }}>Granthica</div>
            </div>
            <div style={{ color: "var(--rg-muted)", fontSize: "13px", marginBottom: "16px", maxWidth: "280px" }}>
              Free AI-assisted learning from trusted books. In your language, with cited answers.
            </div>
          </div>
          <div>
            <h6 style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: ".08em", margin: "0 0 12px", color: "var(--rg-ink)", fontWeight: 700 }}>Product</h6>
            <Link href="/discover" style={{ display: "block", color: "var(--rg-muted)", textDecoration: "none", fontSize: "13.5px", padding: "4px 0" }}>Discover books</Link>
            <Link href="/study-studio" style={{ display: "block", color: "var(--rg-muted)", textDecoration: "none", fontSize: "13.5px", padding: "4px 0" }}>Study Studio</Link>
            <Link href="/student-dashboard" style={{ display: "block", color: "var(--rg-muted)", textDecoration: "none", fontSize: "13.5px", padding: "4px 0" }}>My dashboard</Link>
          </div>
          <div>
            <h6 style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: ".08em", margin: "0 0 12px", color: "var(--rg-ink)", fontWeight: 700 }}>Languages</h6>
            {["English", "हिन्दी Hindi", "বাংলা Bengali", "தமிழ் Tamil"].map((l, i) => (
              <a key={i} href="#" style={{ display: "block", color: "var(--rg-muted)", textDecoration: "none", fontSize: "13.5px", padding: "4px 0" }}>{l}</a>
            ))}
          </div>
          <div>
            <h6 style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: ".08em", margin: "0 0 12px", color: "var(--rg-ink)", fontWeight: 700 }}>gran thica.com</h6>
            {["About Granthica", "Suggest a book", "Privacy", "Terms"].map((l, i) => (
              <a key={i} href="#" style={{ display: "block", color: "var(--rg-muted)", textDecoration: "none", fontSize: "13.5px", padding: "4px 0" }}>{l}</a>
            ))}
          </div>
        </div>
        <div style={{ maxWidth: "1280px", margin: "40px auto 0", paddingTop: "24px", borderTop: "1px solid var(--rg-line)", display: "flex", justifyContent: "space-between", fontSize: "12.5px", color: "var(--rg-muted)", flexWrap: "wrap", gap: "8px" }}>
          <span>© 2025 Granthica. All rights reserved.</span>
          <span>Made with ❤️ for learners across India</span>
        </div>
      </footer>
    </>
  );
}
