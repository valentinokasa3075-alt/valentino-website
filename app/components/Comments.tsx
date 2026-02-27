"use client";

import { useEffect, useState } from "react";

export default function Comments({ slug }: { slug: string }) {

  const [comments, setComments] = useState<any[]>([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState(""); // ✅ FIX
  const [liked, setLiked] = useState<number[]>([]);



  async function load() {

    const res = await fetch(`/api/comments/${slug}`, {
      cache: "no-store"
    });

    const data = await res.json();

    setComments(data);

  }



  useEffect(() => {

    load();

    const saved = localStorage.getItem("likedComments");

    if (saved) {

      setLiked(JSON.parse(saved));

    }

  }, [slug]);



  async function submit() {

    if (!name || !message) return;

    await fetch(`/api/comments/${slug}`, {

      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        name,
        message, // ✅ FIX
      }),

    });

    setName("");
    setMessage(""); // ✅ FIX

    load();

  }



  async function deleteComment(id: number) {

    const token = prompt("Admin Passwort eingeben:");

    if (!token) return;

    const res = await fetch(`/api/comments/${slug}`, {

      method: "DELETE",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        id,
        token,
      }),

    });

    if (res.ok) {

      alert("Kommentar gelöscht ✅");

      load();

    } else {

      alert("Falsches Passwort ❌");

    }

  }



  async function likeComment(id: number) {

    if (liked.includes(id)) return;



    await fetch(`/api/comments/${slug}`, {

      method: "PUT",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        id,
      }),

    });



    const newLiked = [...liked, id];

    setLiked(newLiked);

    localStorage.setItem(
      "likedComments",
      JSON.stringify(newLiked)
    );



    load();

  }



  return (

    <div style={{ marginTop: 60 }}>



      <h2 style={{ color: "#00ffff" }}>
        Kommentare ({comments.length})
      </h2>



      <input
        placeholder="Dein Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{
          width: "100%",
          padding: 10,
          marginTop: 10,
          background: "black",
          color: "#00ffff",
          border: "1px solid #00ffff",
        }}
      />



      <textarea
        placeholder="Dein Kommentar..."
        value={message} // ✅ FIX
        onChange={(e) => setMessage(e.target.value)} // ✅ FIX
        style={{
          width: "100%",
          padding: 10,
          marginTop: 10,
          height: 100,
          background: "black",
          color: "#00ffff",
          border: "1px solid #00ffff",
        }}
      />



      <button
        onClick={submit}
        style={{
          marginTop: 10,
          padding: "10px 20px",
          background: "black",
          color: "#00ffff",
          border: "1px solid #00ffff",
          cursor: "pointer",
        }}
      >
        Kommentar senden
      </button>



      <div style={{ marginTop: 40 }}>



        {comments.map((c) => {

          const alreadyLiked = liked.includes(c.id);

          return (

            <div
              key={c.id}
              style={{
                marginBottom: 20,
                padding: 12,
                border: "1px solid rgba(0,255,255,0.3)",
                borderRadius: 10,
              }}
            >



              <b style={{ color: "#00ffff" }}>
                {c.name}
              </b>



              <p>
                {c.message} {/* ✅ FIX */}
              </p>



              <small>
                {new Date(c.created_at).toLocaleString()} {/* ✅ FIX */}
              </small>



              <br />
              <br />



              <button
                onClick={() => likeComment(c.id)}
                disabled={alreadyLiked}
                style={{
                  marginRight: 10,
                  cursor: alreadyLiked ? "default" : "pointer",
                  opacity: alreadyLiked ? 0.5 : 1
                }}
              >
                👍 {c.likes || 0}
              </button>



              <button
                onClick={() => deleteComment(c.id)}
                style={{
                  cursor: "pointer"
                }}
              >
                Löschen
              </button>



            </div>

          );

        })}



      </div>



    </div>

  );

}