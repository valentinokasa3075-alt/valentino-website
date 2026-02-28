import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Valentinos Alien-Archiv",
  description: "UFO-Fälle, Ereignisse und Recherchen.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>

      <body>
        {/* HEADER OHNE BLAUEN BALKEN */}
        <header
          style={{
            position: "sticky",
            top: 0,
            background: "transparent",
            borderBottom: "none",
            padding: "14px 24px",
            zIndex: 10,
          }}
        >
          <div
            style={{
              maxWidth: 900,
              margin: "0 auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              gap: 16,
            }}
          >
            <nav style={{ display: "flex", gap: 16 }}>

              <Link
                href="/"
                style={{
                  textDecoration: "none",
                  color: "#00ffff", // ← geändert zu Alien-Blau
                  fontWeight: 600,
                  textShadow: "0 0 8px rgba(0,255,255,0.8)", // optional Glow
              }}
          >
                Home
              </Link>

              <Link
              href="/about"
              style={{
              textDecoration: "none",
              color: "#00ffff", // ← geändert zu Alien-Blau
              fontWeight: 600,
              textShadow: "0 0 8px rgba(0,255,255,0.8)", // optional Glow
                }}
              >
                About
              </Link>

              {/* 👉 NUR DAS IST NEU */}
              <Link
                href="/kontakt"
                style={{
                  textDecoration: "none",
                  color: "#00ffff",
                  fontWeight: 600,
                  textShadow: "0 0 8px rgba(0,255,255,0.8)",
                }}
              >
                Kontakt
              </Link>

            </nav>
          </div>
        </header>

        <main style={{ paddingBottom: 60 }}>{children}</main>

        <footer
          style={{
            borderTop: "1px solid rgba(255,255,255,0.2)",
            padding: "18px 24px",
            color: "white",
            background: "rgba(0,0,0,0.7)",
            backdropFilter: "blur(8px)",
          }}
        >
          <div
            style={{
              maxWidth: 900,
              margin: "0 auto",
              fontSize: 14,
            }}
          >
            © {new Date().getFullYear()} Valentinos Alien-Archiv
          </div>
        </footer>
      </body>
    </html>
  );
}