import Link from "next/link";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "60px 20px",
        backgroundImage: "url('/ufo.png')",
        backgroundSize: "cover",
        backgroundPosition: "right center",
        backgroundAttachment: "fixed",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          width: "100%",
          padding: "40px",
          borderRadius: "12px",
          color: "#00ffff",
          textShadow: "0 0 8px rgba(0,255,255,0.8)",
        }}
      >
        {/* TITLE */}
        <h1
          style={{
            fontSize: "42px",
            marginBottom: "16px",
          }}
        >
          Willkommen bei Valentinos Alien-Archiv
        </h1>

        {/* TEXT */}
        <div style={{ marginBottom: "50px", lineHeight: "1.7" }}>
          <p style={{ fontSize: "20px", marginTop: 0 }}>
            Alles begann nicht mit einer Antwort, sondern mit einer Frage. Einer
            Frage, die mich seit meiner Kindheit begleitet:
            <strong>
              {" "}
              Sind wir wirklich allein in diesem unendlichen Universum?
            </strong>
          </p>

          <p style={{ fontSize: "20px", marginTop: "18px" }}>
            Während andere Kinder einfach nur in den Himmel blickten, suchte ich
            nach Zeichen. Nach Bewegungen. Nach Hinweisen. Ich verschlang
            Dokumentationen, studierte Berichte und hörte Interviews – besonders
            die Aussagen von <strong>Bob Lazar</strong> haben meine Sicht für
            immer verändert.
          </p>

          <p style={{ fontSize: "20px", marginTop: "18px" }}>
            Immer wieder gibt es unerklärliche Sichtungen auf der ganzen Welt.
            Je tiefer ich recherchierte, desto klarer wurde mir:
            <strong> Hier stimmt etwas nicht.</strong>
          </p>

          <p style={{ fontSize: "20px", marginTop: "18px" }}>
            Dieses Archiv ist meine persönliche Reise.
          </p>

          <p
            style={{
              fontSize: "24px",
              marginTop: "24px",
              fontWeight: 800,
            }}
          >
            Ich bin überzeugt: Wir sind nicht allein.
          </p>
        </div>

        {/* EVENTS BUTTON */}
        <Link
          href="/events"
          style={{
            display: "inline-block",
            padding: "14px 20px",
            borderRadius: "12px",
            border: "1px solid #00ffff",
            background: "rgba(0,255,255,0.08)",
            color: "#00ffff",
            textDecoration: "none",
            fontWeight: 700,
            boxShadow: "0 0 10px rgba(0,255,255,0.6)",
            marginRight: "20px",
          }}
        >
          👉 Hier geht es zu den Ereignissen & Fälle
        </Link>


        {/* ⭐ NEUER BOB LAZAR BUTTON */}
        <Link
          href="/bob-lazar"
          style={{
            display: "inline-block",
            padding: "14px 20px",
            borderRadius: "12px",
            border: "1px solid #00ffff",
            background: "rgba(0,255,255,0.08)",
            color: "#00ffff",
            textDecoration: "none",
            fontWeight: 700,
            boxShadow: "0 0 10px rgba(0,255,255,0.6)",
            marginTop: "20px",
          }}
        >
          👤 Zur vollständigen Bob Lazar Akte
        </Link>


      </div>
    </main>
  );
}