export default function About() {
  return (

    <div className="about-background"> {/* 👈 ERGÄNZUNG */}

      <main
        style={{
          minHeight: "100vh",
          padding: "60px 20px",
          maxWidth: "900px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >

        <div className="alien-text">

          <h1
            className="alien-title"
            style={{ marginBottom: "20px" }}
          >
            Über mich 👽
          </h1>

          <p>
            Hi, ich bin Valentino – Wirtschaftsinformatik-Student, Web-Enthusiast und neugieriger Entdecker des Unbekannten.
          </p>

          <p style={{ marginTop: "18px" }}>
            Dieses Alien-Archiv ist mehr als nur eine Website. Es ist meine persönliche Mission.
            Einerseits nutze ich dieses Projekt, um meine Skills in Webentwicklung, Design und Programmierung auf das nächste Level zu bringen.
            Andererseits ist es ein Ort, an dem ich meine Faszination für Aliens, Sichtungen und ungelöste Geheimnisse festhalte.
          </p>

          <p style={{ marginTop: "18px" }}>
            Jede Seite, jede Funktion und jedes Detail ist Teil meiner Lernreise – und gleichzeitig Teil dieses Archivs.
          </p>

          <p style={{ marginTop: "18px" }}>
            Wer weiß… vielleicht sind wir nicht allein.
            <br />
            Und vielleicht ist dies erst der Anfang.
          </p>

        </div>


        <img
          src="/alien/alien.jpg"
          alt="Valentino mit Aliens auf dem Mars"
          style={{
            width: "100%",
            maxWidth: "400px",
            borderRadius: "12px",
            marginTop: "40px",
            boxShadow: "0 0 20px rgba(0,255,255,0.6)",
          }}
        />

      </main>

    </div>  

  );
}