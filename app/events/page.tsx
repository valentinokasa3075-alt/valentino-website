import Link from "next/link";
import { events } from "../data/events";

export default function EventsPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "60px 20px",
        backgroundImage: "url('/ufo.png')",
        backgroundSize: "cover",
        backgroundPosition: "right center",
        backgroundAttachment: "fixed",
        color: "white",
      }}
    >
      {/* CSS für Event-Karten */}
      <style>{`
        .eventCard {
          border: 1px solid rgba(0,255,255,0.4);
          padding: 20px;
          margin-bottom: 16px;
          border-radius: 12px;
          background: rgba(0,0,0,0.45);
          cursor: pointer;
          transition: transform 0.15s ease, background 0.15s ease;
          backdrop-filter: blur(4px);
        }

        .eventCard:hover {
          transform: scale(1.02);
          background: rgba(0,0,0,0.65);
        }

        .eventTitle {
          color: #00ffff;
          text-shadow: 0 0 8px rgba(0,255,255,0.7);
        }

        .eventDate {
          color: #00e6e6;
          font-weight: 600;
        }

        .eventLocation {
          color: #00e6e6;
        }

        .eventLink {
          color: #00ffff;
          font-weight: bold;
          text-shadow: 0 0 8px rgba(0,255,255,0.7);
        }

      `}</style>

      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            fontSize: "42px",
            marginBottom: "20px",
            color: "#00ffff",
            textShadow: "0 0 10px rgba(0,255,255,0.7)",
          }}
        >
          Ereignisse & Fälle
        </h1>

        <p
          style={{
            marginBottom: "30px",
            fontSize: "18px",
            color: "#00e6e6",
          }}
        >
          Wähle eine Akte aus, um die vollständigen Details zu sehen.
          Teile anschliessend deine eigene Einschätzung, Theorie oder Beobachtung –
          jede Meinung könnte der Wahrheit näherkommen.
        </p>

        {events.map((event) => (
          <Link
            key={event.slug}
            href={`/events/${event.slug}`}
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <div className="eventCard">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <h2 className="eventTitle" style={{ margin: 0 }}>
                  {event.title}
                </h2>

                <span className="eventDate">
                  {event.date}
                </span>
              </div>

              <p className="eventLocation">
                <strong>Ort:</strong> {event.location}
              </p>

              <p className="eventLink">
                👉 Akte öffnen
              </p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}