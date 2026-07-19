"use client";
import Image from "next/image";
import Link from "next/link";

export default function Wallet() {
  return (
    <div className="app-shell">
      <aside className="app-side">
        <Link href="/" className="brand" style={{ padding: "0 8px 18px" }}>
          <Image src="/granthica-icon.png" alt="Granthica" width={28} height={28} style={{ borderRadius: "8px" }} /><div>Granthica</div>
        </Link>
        <div className="side-section">Menu</div>
        <Link href="/student-dashboard" className="side-link">📊 Dashboard</Link>
        <Link href="/student-library" className="side-link">📚 My Library</Link>
        <Link href="/discover" className="side-link">🔍 Discover</Link>
        <Link href="/chat-history" className="side-link">💬 Chat History</Link>
        <Link href="/outputs" className="side-link">📄 My Outputs</Link>
        <div className="side-section">Account</div>
        <Link href="/wallet" className="side-link active">💰 Wallet</Link>
        <Link href="/profile" className="side-link">👤 Profile</Link>
      </aside>
      <main className="app-main">
        <div className="app-top">
          <h2 style={{ fontSize: "20px", fontWeight: 700 }}>Wallet & Billing</h2>
        </div>
        <div className="app-content">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "24px" }}>
            {/* Balance card */}
            <div className="card card-pad-lg" style={{ background: "linear-gradient(135deg, #0a1f4d, #084a8e)", color: "white" }}>
              <div style={{ fontSize: "13px", opacity: 0.7, marginBottom: "8px" }}>Study Credits</div>
              <div style={{ fontSize: "48px", fontWeight: 800, marginBottom: "4px" }}>₹0</div>
              <div style={{ fontSize: "14px", opacity: 0.7, marginBottom: "16px" }}>Study Pass covers all usage</div>
              <button className="btn btn-sm" style={{ background: "rgba(255,255,255,.2)", color: "white", border: "1px solid rgba(255,255,255,.3)" }}>
                Buy credits
              </button>
            </div>

            {/* Study Pass */}
            <div className="card card-pad-lg">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px" }}>
                <div>
                  <div className="eyebrow badge-free" style={{ marginBottom: "8px" }}>Active</div>
                  <h3 style={{ fontSize: "20px", marginBottom: "4px" }}>Study Pass</h3>
                  <div style={{ fontSize: "13px", color: "var(--rg-muted)" }}>Unlimited AI questions & outputs</div>
                </div>
                <span style={{ fontSize: "28px" }}>⭐</span>
              </div>
              <div style={{ fontSize: "14px", color: "var(--rg-muted)", marginBottom: "12px" }}>
                Renews on <strong>Aug 19, 2025</strong> · ₹99/month
              </div>
              <div style={{ display: "flex", gap: "8px" }}>
                <button className="btn btn-ghost btn-sm">Manage</button>
                <button className="btn btn-soft btn-sm">Upgrade plan</button>
              </div>
            </div>
          </div>

          {/* Usage breakdown */}
          <div className="card card-pad" style={{ marginBottom: "20px" }}>
            <h3 style={{ marginBottom: "16px" }}>Usage this month</h3>
            <div className="kpi-row" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
              {[
                { label: "AI Questions", value: "47", total: "∞", icon: "💬" },
                { label: "Outputs generated", value: "12", total: "∞", icon: "📄" },
                { label: "Study time", value: "12.5h", total: "∞", icon: "⏱" },
              ].map((u, i) => (
                <div key={i} style={{ textAlign: "center", padding: "16px", background: "var(--rg-tint)", borderRadius: "10px" }}>
                  <div style={{ fontSize: "24px", marginBottom: "6px" }}>{u.icon}</div>
                  <div style={{ fontWeight: 700, fontSize: "22px" }}>{u.value}</div>
                  <div style={{ fontSize: "12px", color: "var(--rg-muted)" }}>{u.label} <span style={{ color: "var(--rg-mint)" }}>({u.total})</span></div>
                </div>
              ))}
            </div>
          </div>

          {/* Transaction history */}
          <div className="card card-pad">
            <h3 style={{ marginBottom: "16px" }}>Transaction history</h3>
            <ul className="activity-list">
              {[
                { icon: "💳", title: "Study Pass — Monthly subscription", meta: "Jul 19, 2025", amount: "-₹99" },
                { icon: "🎁", title: "Welcome bonus credits", meta: "Jul 15, 2025", amount: "+₹50" },
                { icon: "💳", title: "Study Pass — Monthly subscription", meta: "Jun 19, 2025", amount: "-₹99" },
              ].map((t, i) => (
                <li key={i}>
                  <div className="ic">{t.icon}</div>
                  <div className="body" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
                    <div>
                      <div className="t">{t.title}</div>
                      <div className="m">{t.meta}</div>
                    </div>
                    <span style={{ fontWeight: 700, color: t.amount.startsWith("+") ? "var(--rg-mint)" : "var(--rg-ink)" }}>{t.amount}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
