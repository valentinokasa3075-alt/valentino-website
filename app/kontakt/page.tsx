"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function KontaktPage() {

const [sent, setSent] = useState(false);

async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
e.preventDefault();

const form = e.currentTarget;

const name = (form.elements.namedItem("name") as HTMLInputElement).value;

const email = (form.elements.namedItem("email") as HTMLInputElement).value;

const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

const { error } = await supabase
.from("messages")
.insert([
{
name,
email,
message
}
])
.select(); // ✅ DIESE ZEILE IST NEU

if (!error) {
setSent(true);
form.reset();
} else {
alert("Fehler beim Senden");
console.error(error);
}
}

return (
<main
style={{
maxWidth: 900,
margin: "0 auto",
padding: "60px 20px",
color: "#00ffff",
}}
>

  <h1
    style={{
      fontSize: 36,
      marginBottom: 10,
      textShadow: "0 0 12px rgba(0,255,255,0.8)"
    }}
  >
    Kontaktaufnahme
  </h1>


  <p style={{ opacity: 0.85, marginBottom: 40 }}>
    Übermittle deine Nachricht an das Archiv. Selbst das kleinste Detail könnte ein fehlendes Puzzleteil sein.
  </p>


  {!sent ? (

    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 20,
      }}
    >

      {/* NAME */}
      <input
        name="name"
        placeholder="Dein Name"
        required
        style={{
          padding: "14px",
          background: "rgba(0,0,0,0.6)",
          border: "1px solid rgba(0,255,255,0.4)",
          borderRadius: "8px",
          color: "#00ffff",
          fontSize: 16,
          outline: "none",
          boxShadow: "0 0 10px rgba(0,255,255,0.3)",
        }}
      />

      {/* EMAIL */}
      <input
        name="email"
        type="email"
        placeholder="Deine Email"
        required
        style={{
          padding: "14px",
          background: "rgba(0,0,0,0.6)",
          border: "1px solid rgba(0,255,255,0.4)",
          borderRadius: "8px",
          color: "#00ffff",
          fontSize: 16,
          outline: "none",
          boxShadow: "0 0 10px rgba(0,255,255,0.3)",
        }}
      />


      {/* MESSAGE */}
      <textarea
        name="message"
        placeholder="Deine Nachricht..."
        required
        rows={6}
        style={{
          padding: "14px",
          background: "rgba(0,0,0,0.6)",
          border: "1px solid rgba(0,255,255,0.4)",
          borderRadius: "8px",
          color: "#00ffff",
          fontSize: 16,
          outline: "none",
          boxShadow: "0 0 10px rgba(0,255,255,0.3)",
          resize: "vertical",
        }}
      />


      {/* BUTTON */}
      <button
        type="submit"
        style={{
          padding: "14px",
          background: "transparent",
          border: "1px solid #00ffff",
          borderRadius: "8px",
          color: "#00ffff",
          fontSize: 16,
          cursor: "pointer",
          boxShadow: "0 0 15px rgba(0,255,255,0.5)",
        }}
      >
        Nachricht senden
      </button>

    </form>

  ) : (

    <div
      style={{
        marginTop: 40,
        padding: 20,
        border: "1px solid rgba(0,255,255,0.4)",
        borderRadius: "8px",
        boxShadow: "0 0 20px rgba(0,255,255,0.4)",
      }}
    >
      ✅ Nachricht erfolgreich übermittelt.
    </div>

  )}

</main>

);

}