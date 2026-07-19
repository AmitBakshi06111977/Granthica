"use client";
import { SignIn } from "@clerk/nextjs";
import Link from "next/link";

export default function LoginPage() {
  const hasClerkKey = !!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

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
        {hasClerkKey ? (
          <SignIn routing="path" path="/login" />
        ) : (
          <div className="card" style={{ width: "100%", maxWidth: "420px", padding: "36px", textAlign: "center" }}>
            <h2 style={{ marginBottom: "12px" }}>Sign-in coming soon</h2>
            <p style={{ color: "var(--rg-muted)", fontSize: "14px" }}>
              We're setting up authentication. Please check back shortly.
            </p>
            <Link href="/discover" className="btn btn-primary btn-block" style={{ marginTop: "20px" }}>
              Browse books
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
