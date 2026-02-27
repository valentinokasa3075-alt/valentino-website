"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { events } from "../../data/events";
import Comments from "@/app/components/Comments";

export default function EventPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const event = events.find((e) => e.slug === slug);

  // ✅ ORIGINALAKTEN – HIER BILDER EINTRAGEN
  const evidence: Record<string, { src: string; label: string }[]> = {
    roswell: [
      {
        src: "/evidence/roswell/marcel-debris-roswell-1947.jpg",
        label:
          "Major Jesse A. Marcel mit geborgenen Trümmerteilen (Fort Worth Army Air Field, 8. Juli 1947)",
      },

      {
        src: "/evidence/roswell/roswell-debris-newspaper-1947.jpg",
        label:
          "Zeitungsfoto der Roswell-Trümmer während der offiziellen Militärpräsentation, 1947",
      },

      {
        src: "/evidence/roswell/roswell-debris-recovery-1947.jpg",
        label:
          "Geborgene Trümmerteile vom Fundort nahe Roswell, New Mexico (1947)",
      },
    ],

    rendlesham: [
      {
        src: "/evidence/rendlesham/rendlesham-forest-site-1980.jpg",
        label: "Ort der UFO-Sichtung (1980)",
      },

      {
        src: "/evidence/rendlesham/rendlesham-newspaper-1983.jpg",
        label: "Zeitungsbericht 'News of the World' über Rendlesham (1983)",
      },
    ],

    phoenix: [
      {
        src: "/evidence/phoenix/phoenix1.jpg",
        label: "Lichtformation über Phoenix (1997)",
      },

      {
        src: "/evidence/phoenix/phoenix2.jpg",
        label: "Zeitungsbild eines V-förmigen Objekts über Arizona (1997)",
      },
    ],

    "belgian-ufo-wave": [
      {
        src: "/evidence/belgian-ufo-wave/belgian1.jpg",
        label: "Dreieckige UFO-Lichterformation über Belgien (1989)",
      },
    ],

    "nimitz-tic-tac": [
      {
        src: "/evidence/nimitz/nimitz1.jpg",
        label: "FLIR1 Aufnahme des USS Nimitz Tic Tac Objekts (2004)",
      },

      {
        src: "/evidence/nimitz/nimitz2.jpg",
        label: "weitere FLIR1 Aufnahme des USS Nimitz Tic Tac Objekts (2004)",
      },
    ],

    "ariel-school": [
      {
        src: "/evidence/ariel/ariel1.jpg",
        label: "Zeichnung eines Schülers der Ariel School (1994)",
      },

      {
        src: "/evidence/ariel/ariel2.jpg",
        label: "Zeichnung eines Schülers der Ariel School (1994)",
      },

      {
        src: "/evidence/ariel/ariel3.jpg",
        label: "Zeichnung eines Schülers der Ariel School (1994)",
      },
    ],

    "socorro-zamora": [
      {
        src: "/evidence/socorro/socorro1.jpg",
        label: "Officer Zamora am Ort der UFO-Sichtung (1964)",
      },

      {
        src: "/evidence/socorro/socorro2.jpg",
        label: "Ort der UFO-Sichtung (1964)",
      },
    ],

    "tehran-1976": [
      {
        src: "/evidence/tehran/tehran1.jpg",
        label:
          "Skizze des zylindrischen UFO-Objekts mit elliptischen Lichtquellen über Teheran (1976)",
      },
      {
        src: "/evidence/tehran/tehran2.jpg",
        label:
          "Freigegebener militärischer Geheimbericht über Radarerfassung und Verfolgung des UFOs durch iranische F-4 Jets (1976)",
      },
      {
        src: "/evidence/tehran/tehran3.jpg",
        label:
          "Zeichnung des leuchtenden UFO-Objekts und Referenzflugzeug der iranischen Luftwaffe vom Typ F-4 Phantom (1976)",
      },
    ],
  };

  const images = evidence[slug] ?? [];

  if (!event) {
    return (
      <main
        style={{
          padding: 40,
          backgroundColor: "#0a0a0a",
          color: "#ffffff",
          minHeight: "100vh",
        }}
      >
        <h1>Event nicht gefunden</h1>
      </main>
    );
  }

  return (
    <main
      style={{
        padding: 0,
        backgroundColor: "#0a0a0a",
        color: "#e0e0e0",
        minHeight: "100vh",
      }}
    >
      {/* HERO IMAGE */}
      <div
        style={{
          width: "100%",
          height: "60vh",
          backgroundImage: `url(/${event.slug}.png)`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "black",
          borderBottom: "1px solid #222",
        }}
      />

      {/* CONTENT */}
      <div
        style={{
          padding: "60px 20px",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        {/* TITLE */}
        <h1
          style={{
            fontSize: "42px",
            marginBottom: "10px",
            color: "#ffffff",
            fontWeight: "600",
          }}
        >
          {event.title}
        </h1>

        {/* META INFO */}
        <div
          style={{
            background: "#111",
            padding: "20px",
            marginTop: "20px",
            marginBottom: "30px",
            borderLeft: "4px solid #00ffff",
          }}
        >
          <p style={{ margin: "5px 0" }}>
            <b>📍 Ort:</b> {event.location}
          </p>

          <p style={{ margin: "5px 0" }}>
            <b>📅 Datum:</b> {event.date}
          </p>
        </div>

        {/* 📁 ORIGINALAKTEN ORDNER */}
        <details
          style={{
            background: "rgba(0,0,0,0.45)",
            border: "1px solid rgba(0,255,255,0.35)",
            borderRadius: "12px",
            padding: "16px 18px",
            marginBottom: "30px",
          }}
        >
          <summary
            style={{
              cursor: "pointer",
              listStyle: "none",
              fontWeight: 700,
              color: "#00ffff",
              textShadow: "0 0 12px rgba(0,255,255,0.9)",
              fontSize: "18px",
            }}
          >
            📁 Originalakten (Bilder)
          </summary>

          <div style={{ marginTop: "16px", color: "#bfeff0" }}>
            {images.length === 0 ? (
              <p>Keine Originalbilder vorhanden.</p>
            ) : (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                  gap: "16px",
                }}
              >
                {images.map((img, idx) => (
                  <a
                    key={idx}
                    href={img.src}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                    }}
                  >
                    <div
                      style={{
                        borderRadius: "12px",
                        overflow: "hidden",
                        border: "1px solid rgba(0,255,255,0.35)",
                        background: "#050505",
                        transition: "0.2s",
                      }}
                    >
                      <img
                        src={img.src}
                        alt={img.label}
                        style={{
                          width: "100%",
                          height: "170px",
                          objectFit: "cover",
                          display: "block",
                        }}
                      />

                      <div
                        style={{
                          padding: "10px",
                          fontSize: "14px",
                          color: "#00ffff",
                        }}
                      >
                        {img.label}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>
        </details>

        {/* DESCRIPTION */}
        <div
          style={{
            background: "#0f0f0f",
            padding: "30px",
            border: "1px solid #222",
            lineHeight: "1.8",
            fontSize: "18px",
          }}
        >
          {event.description
            .replace(/\t/g, "")
            .replace(/\r/g, "")
            .split("\n")
            .map((line) => line.trim())
            .filter((line) => line !== "")
            .map((text, index) => {
              const isHeading =
                text.length > 20 &&
                text.length < 60 &&
                !text.endsWith(".") &&
                !text.startsWith("–");

              if (isHeading) {
                return (
                  <h2
                    key={index}
                    style={{
                      marginTop: "30px",
                      marginBottom: "12px",
                      color: "#ffffff",
                    }}
                  >
                    {text}
                  </h2>
                );
              }

              return <p key={index}>{text}</p>;
            })}
        </div>

        {/* ✅ KOMMENTARE */}
        <Comments slug={slug} />

        {/* BACK BUTTON */}
        <Link
          href="/events"
          style={{
            display: "inline-block",
            marginTop: "50px",
            padding: "12px 20px",
            backgroundColor: "#00ffff",
            color: "#000",
            fontWeight: "600",
            textDecoration: "none",
            borderRadius: "10px",
          }}
        >
          ← Zurück zur Übersicht
        </Link>
      </div>
    </main>
  );
}