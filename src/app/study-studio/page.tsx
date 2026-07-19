"use client";
import Link from "next/link";
import { useState } from "react";

const chapters = [
  { n: 1, title: "The Indus Valley Civilisation", status: "sample" },
  { n: 2, title: "The Vedic Period", status: "sample" },
  { n: 3, title: "The Mauryan Empire", status: "active" },
  { n: 4, title: "The Gupta Period", status: "locked" },
  { n: 5, title: "Medieval India", status: "locked" },
  { n: 6, title: "The Mughal Empire", status: "locked" },
  { n: 7, title: "Colonial Rule", status: "locked" },
  { n: 8, title: "Independence Movement", status: "locked" },
  { n: 9, title: "Post-Independence India", status: "locked" },
];

const tools = [
  { icon: "📝", label: "Summary" },
  { icon: "🧠", label: "Mind Map" },
  { icon: "🃏", label: "Flashcards" },
  { icon: "❓", label: "Practice Qs" },
  { icon: "🎯", label: "Mock Test" },
  { icon: "📅", label: "Study Plan" },
  { icon: "🔁", label: "Revision Notes" },
  { icon: "👨‍🏫", label: "Ask Teacher" },
];

const suggestions = [
  "Explain like I'm 10",
  "Summarise this chapter",
  "Show common mistakes",
  "Give 5 MCQs",
  "Explain in Hindi",
  "JEE-level explanation",
];

export default function StudyStudio() {
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState<Array<{ type: "user" | "ai"; text: string; citations?: string[] }>>([
    {
      type: "ai",
      text: "👋 Welcome to the Study Studio! I'm here to answer any question from *Discovery of India* — in any language you prefer.\n\nTry asking: \"What was the administrative system of the Mauryan Empire?\" or click a suggestion below.",
      citations: [],
    },
  ]);

  const askQuestion = () => {
    if (!question.trim()) return;
    setMessages((prev) => [...prev, { type: "user", text: question }]);
    const q = question;
    setQuestion("");
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          type: "ai",
          text: `Great question! The Mauryan Empire (c. 321–185 BCE) under Chandragupta and Ashoka had one of the most sophisticated administrative systems of ancient India.\n\n**Key features:**\n• *Mandalas* — theory of concentric circles describing neighbour states\n• *Rajjukas* — district administrators\n• *Prahara* — frontier garrisons\n• Ashoka's *dhamma* promoted moral governance across the empire`,
          citations: ["Chapter 3 · Page 88", "Chapter 3 · Example 2"],
        },
      ]);
    }, 1500);
  };

  return (
    <div className="studio-shell">
      {/* Top bar */}
      <div className="studio-top">
        <Link href="/student-dashboard" style={{ color: "var(--rg-muted)", fontSize: "20px" }}>←</Link>
        <div className="book-pill">
          <div className="bm">D</div>
          <div>
            <div style={{ fontWeight: 700, fontSize: "14px", color: "var(--rg-ink)" }}>Discovery of India</div>
            <div style={{ fontSize: "12px", color: "var(--rg-muted)" }}>Jawaharlal Nehru · Chapter 3</div>
          </div>
        </div>
        <div style={{ display: "flex", gap: "6px" }}>
          <span className="badge badge-sample">Sample</span>
          <span className="badge badge-rag">🤖 RAG-enabled</span>
        </div>
        <div className="right">
          <div className="credits">
            <span>●</span> AI Ready
          </div>
          <select className="select" style={{ width: "auto", padding: "6px 10px", fontSize: "13px" }}>
            <option>English</option>
            <option>हिन्दी Hindi</option>
            <option>বাংলা Bengali</option>
            <option>தமிழ் Tamil</option>
          </select>
          <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "linear-gradient(135deg, var(--rg-primary), var(--rg-bright))", display: "grid", placeItems: "center", color: "white", fontWeight: 700, fontSize: "13px" }}>A</div>
        </div>
      </div>

      {/* Left: Sources */}
      <div className="studio-col left">
        <div className="studio-card">
          <div className="book-header">
            <div className="cover-mini">Discovery<br />of India</div>
            <div className="info">
              <h4>Discovery of India</h4>
              <div className="by">Jawaharlal Nehru · Ch. 3</div>
              <div style={{ marginTop: "8px" }}>
                <span className="badge badge-sample">Sample</span>
              </div>
            </div>
          </div>
          <div style={{ marginTop: "12px", fontSize: "13px", color: "var(--rg-muted)" }}>
            Reading progress: <strong>65%</strong>
            <div className="progress" style={{ marginTop: "6px" }}><i style={{ width: "65%" }} /></div>
          </div>
        </div>

        <div style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: ".06em", color: "var(--rg-muted)", marginBottom: "8px", paddingLeft: "4px" }}>Chapters</div>
        <ul className="studio-chapters">
          {chapters.map((ch) => (
            <li key={ch.n} className={ch.status}>
              <div className="num">{ch.n}</div>
              {ch.title}
              {ch.status === "locked" && <span style={{ marginLeft: "auto", fontSize: "11px" }}>🔒</span>}
            </li>
          ))}
        </ul>

        <div style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: ".06em", color: "var(--rg-muted)", marginBottom: "8px", paddingLeft: "4px", marginTop: "16px" }}>Saved pages</div>
        <div style={{ fontSize: "13px", color: "var(--rg-muted)", padding: "8px" }}>
          No saved pages yet. Highlight text in the reader to save.
        </div>
      </div>

      {/* Center: Chat */}
      <div className="studio-col center">
        <div className="center-inner" style={{ flex: 1, overflow: "auto" }}>
          <div className="chat-stream">
            {messages.map((msg, i) => (
              <div key={i} className={`qbubble ${msg.type}`}>
                {msg.type === "ai" && <h4>🤖 Granthica AI</h4>}
                <p style={{ whiteSpace: "pre-wrap" }}>{msg.text}</p>
                {msg.citations && msg.citations.length > 0 && (
                  <div className="citations">
                    {msg.citations.map((c, j) => (
                      <span key={j} className="cite">{c}</span>
                    ))}
                  </div>
                )}
                {msg.type === "ai" && (
                  <div className="actions">
                    <button className="a">🔁 Regenerate</button>
                    <button className="a">💾 Save</button>
                    <button className="a">📋 Copy</button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Question input */}
        <div style={{ padding: "16px 24px", background: "white", borderTop: "1px solid var(--rg-line)" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "10px" }}>
            {suggestions.map((s, i) => (
              <button key={i} className="a" onClick={() => setQuestion(s)} style={{ fontSize: "12px" }}>{s}</button>
            ))}
          </div>
          <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
            <input
              className="input"
              placeholder="Ask anything from this book..."
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && askQuestion()}
              style={{ flex: 1 }}
            />
            <button className="btn btn-primary" onClick={askQuestion}>Ask</button>
          </div>
          <div style={{ fontSize: "11.5px", color: "var(--rg-muted)", marginTop: "6px" }}>
            Answers come only from this book. <strong style={{ color: "var(--rg-mint)" }}>✓ Always cited.</strong>
          </div>
        </div>
      </div>

      {/* Right: Studio Tools */}
      <div className="studio-col right">
        <div style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: ".06em", color: "var(--rg-muted)", marginBottom: "12px" }}>Study Tools</div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
          {tools.map((tool, i) => (
            <div key={i} className="card card-pad" style={{ padding: "12px", textAlign: "center", cursor: "pointer" }}>
              <div style={{ fontSize: "22px", marginBottom: "4px" }}>{tool.icon}</div>
              <div style={{ fontSize: "12px", fontWeight: 600, color: "var(--rg-ink-2)" }}>{tool.label}</div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "16px", fontSize: "12px", textTransform: "uppercase", letterSpacing: ".06em", color: "var(--rg-muted)", marginBottom: "12px" }}>Quick actions</div>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {[
            { icon: "📋", text: "Generate Chapter Summary" },
            { icon: "🎯", text: "Create Practice Set" },
            { icon: "🧠", text: "Build Mind Map" },
            { icon: "🔁", text: "Revision Notes" },
          ].map((a, i) => (
            <div key={i} style={{ display: "flex", gap: "10px", alignItems: "center", padding: "10px", background: "var(--rg-tint)", borderRadius: "10px", fontSize: "13px", fontWeight: 500, cursor: "pointer" }}>
              <span>{a.icon}</span> {a.text}
            </div>
          ))}
        </div>

        <div style={{ marginTop: "20px", padding: "14px", background: "rgba(56,189,248,.08)", borderRadius: "12px", border: "1px dashed var(--rg-bright)" }}>
          <div style={{ fontSize: "13px", fontWeight: 600, color: "var(--rg-ink)", marginBottom: "6px" }}>📌 Stuck on something?</div>
          <div style={{ fontSize: "12px", color: "var(--rg-muted)", marginBottom: "10px" }}>Get help from a teacher in ~30 minutes</div>
          <button className="btn btn-sm btn-soft btn-block">💬 Talk to a teacher</button>
        </div>
      </div>
    </div>
  );
}
