"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      <header className="site-header">
        <div className="container">
          <div className="bar">
            <Link href="/" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
              <Image src="/granthica-logo.png" alt="Granthica" width={140} height={40} style={{ objectFit: "contain" }} />
            </Link>
            <div style={{ flex: 1 }} />
            <Link href="/discover" style={{ color: "var(--rg-muted)", fontSize: "14px" }}>← Back to Granthica</Link>
          </div>
        </div>
      </header>

      <div style={{ minHeight: "calc(100vh - 68px)", display: "flex", alignItems: "center", justifyContent: "center", padding: "40px 24px", background: "linear-gradient(135deg, #f6f4ff, #fff5ec)" }}>
        <div className="card" style={{ width: "100%", maxWidth: "420px", padding: "36px" }}>
          <div style={{ textAlign: "center", marginBottom: "28px" }}>
            <div style={{ width: "52px", height: "52px", borderRadius: "14px", background: "linear-gradient(135deg, var(--rg-primary), var(--rg-bright))", display: "grid", placeItems: "center", color: "white", fontWeight: 800, fontSize: "22px", margin: "0 auto 14px" }}>G</div>
            <h2 style={{ marginBottom: "6px" }}>{isLogin ? "Welcome back" : "Create your account"}</h2>
            <p style={{ color: "var(--rg-muted)", fontSize: "14px" }}>
              {isLogin ? "Sign in to continue your learning journey" : "Join thousands of students learning with Granthica"}
            </p>
          </div>

          <div style={{ display: "flex", gap: "8px", marginBottom: "20px" }}>
            <button className={`btn btn-ghost btn-block${!isLogin ? " active" : ""}`} onClick={() => setIsLogin(false)} style={{ flex: 1 }}>Sign up</button>
            <button className={`btn btn-ghost btn-block${isLogin ? " active" : ""}`} onClick={() => setIsLogin(true)} style={{ flex: 1 }}>Sign in</button>
          </div>

          <div style={{ marginBottom: "16px" }}>
            <label className="field">Email</label>
            <input className="input" type="email" placeholder="you@example.com" />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <label className="field">Password</label>
            <input className="input" type="password" placeholder="••••••••" />
          </div>

          <button className="btn btn-primary btn-block btn-lg" style={{ marginBottom: "16px" }}>
            {isLogin ? "Sign in" : "Create account"}
          </button>

          <div style={{ textAlign: "center", color: "var(--rg-muted)", fontSize: "14px", marginBottom: "16px" }}>or</div>

          <button className="btn btn-ghost btn-block" style={{ marginBottom: "12px" }}>
            <span style={{ fontSize: "18px" }}>🔵</span> Continue with Google
          </button>

          <button className="btn btn-ghost btn-block" style={{ marginBottom: "20px" }}>
            <span style={{ fontSize: "18px" }}>💻</span> Continue with GitHub
          </button>

          {isLogin && (
            <div style={{ textAlign: "center", fontSize: "13px", color: "var(--rg-muted)" }}>
              <a href="#" style={{ color: "var(--rg-primary)" }}>Forgot password?</a>
            </div>
          )}

          <div style={{ marginTop: "20px", padding: "14px", background: "var(--rg-mint-light)", borderRadius: "10px", textAlign: "center" }}>
            <div style={{ fontSize: "13px", color: "#0f8a72", fontWeight: 600, marginBottom: "4px" }}>📚 Free to start</div>
            <div style={{ fontSize: "12px", color: "var(--rg-muted)" }}>No credit card required. Browse books before signing up.</div>
            <Link href="/discover" style={{ fontSize: "13px", color: "var(--rg-primary)", fontWeight: 600, marginTop: "6px", display: "inline-block" }}>Browse books first →</Link>
          </div>
        </div>
      </div>
    </>
  );
}
