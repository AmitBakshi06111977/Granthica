"use client";
import { SignIn } from "@clerk/nextjs";
import Link from "next/link";

export default function LoginPage() {
  return (
    <>
      <header className="site-header">
        <div className="container">
          <div className="bar">
            <Link href="/" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
              <img src="/granthica-logo.png" alt="Granthica" style={{ height: "36px", objectFit: "contain" }} />
            </Link>
            <div style={{ flex: 1 }} />
            <Link href="/discover" style={{ color: "var(--rg-muted)", fontSize: "14px" }}>← Back to Granthica</Link>
          </div>
        </div>
      </header>

      <div style={{
        minHeight: "calc(100vh - 68px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 24px",
        background: "linear-gradient(135deg, #f6f4ff, #fff5ec)",
      }}>
        <SignIn />
      </div>
    </>
  );
}
