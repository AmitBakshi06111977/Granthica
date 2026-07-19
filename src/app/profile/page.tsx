"use client";
import Image from "next/image";
import Link from "next/link";

const devices = [
  { name: "Chrome on Windows", location: "Delhi, India", lastActive: "Active now", current: true },
  { name: "Safari on iPhone", location: "Delhi, India", lastActive: "2h ago", current: false },
  { name: "Chrome on Android", location: "Delhi, India", lastActive: "Yesterday", current: false },
];

export default function Profile() {
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
        <Link href="/wallet" className="side-link">💰 Wallet</Link>
        <Link href="/profile" className="side-link active">👤 Profile</Link>
      </aside>
      <main className="app-main">
        <div className="app-top">
          <h2 style={{ fontSize: "20px", fontWeight: 700 }}>Profile & Devices</h2>
        </div>
        <div className="app-content">
          {/* Profile info */}
          <div className="card card-pad" style={{ marginBottom: "20px" }}>
            <h3 style={{ marginBottom: "16px" }}>Account details</h3>
            <div style={{ display: "flex", gap: "16px", alignItems: "center", marginBottom: "20px" }}>
              <div style={{ width: "64px", height: "64px", borderRadius: "50%", background: "linear-gradient(135deg, var(--rg-primary), var(--rg-bright))", display: "grid", placeItems: "center", color: "white", fontWeight: 800, fontSize: "24px" }}>A</div>
              <div>
                <div style={{ fontWeight: 700, fontSize: "18px", color: "var(--rg-ink)" }}>Amit Bakshi</div>
                <div style={{ color: "var(--rg-muted)", fontSize: "14px" }}>amit@example.com</div>
                <div style={{ fontSize: "13px", color: "var(--rg-muted)", marginTop: "4px" }}>Member since July 2025</div>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              <div>
                <label className="field">Full name</label>
                <input className="input" defaultValue="Amit Bakshi" />
              </div>
              <div>
                <label className="field">Email</label>
                <input className="input" defaultValue="amit@example.com" type="email" />
              </div>
              <div>
                <label className="field">Preferred language</label>
                <select className="select">
                  <option>English</option>
                  <option>हिन्दी Hindi</option>
                </select>
              </div>
              <div>
                <label className="field">Timezone</label>
                <select className="select">
                  <option>India (IST · UTC+5:30)</option>
                </select>
              </div>
            </div>
            <div style={{ marginTop: "16px" }}>
              <button className="btn btn-primary">Save changes</button>
            </div>
          </div>

          {/* Devices */}
          <div className="card card-pad" style={{ marginBottom: "20px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
              <h3>Active devices</h3>
              <span className="badge badge-free">3 of 5 used</span>
            </div>
            {devices.map((device, i) => (
              <div key={i} style={{ display: "flex", gap: "14px", padding: "14px 0", borderBottom: i < devices.length - 1 ? "1px dashed var(--rg-line-2)" : 0, alignItems: "center" }}>
                <div style={{ fontSize: "24px" }}>💻</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600, fontSize: "14px", color: "var(--rg-ink)" }}>{device.name}</div>
                  <div style={{ fontSize: "13px", color: "var(--rg-muted)" }}>{device.location} · {device.lastActive}</div>
                </div>
                {device.current && <span className="badge badge-free">This device</span>}
                {!device.current && <button className="btn btn-ghost btn-sm" style={{ color: "var(--rg-rose)" }}>Revoke</button>}
              </div>
            ))}
          </div>

          {/* Security */}
          <div className="card card-pad">
            <h3 style={{ marginBottom: "16px" }}>Security</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <div style={{ fontWeight: 600, fontSize: "14px" }}>Password</div>
                  <div style={{ fontSize: "13px", color: "var(--rg-muted)" }}>Last changed 30 days ago</div>
                </div>
                <button className="btn btn-ghost btn-sm">Change</button>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <div style={{ fontWeight: 600, fontSize: "14px" }}>Two-factor authentication</div>
                  <div style={{ fontSize: "13px", color: "var(--rg-muted)" }}>Not enabled</div>
                </div>
                <button className="btn btn-soft btn-sm">Enable 2FA</button>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <div style={{ fontWeight: 600, fontSize: "14px" }}>Active sessions</div>
                  <div style={{ fontSize: "13px", color: "var(--rg-muted)" }}>3 devices logged in</div>
                </div>
                <button className="btn btn-ghost btn-sm" style={{ color: "var(--rg-rose)" }}>Sign out all</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
