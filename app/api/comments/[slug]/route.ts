import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";



// GET COMMENTS
export async function GET(
  req: NextRequest,
  context: { params: Promise<{ slug: string }> }
) {

  const { slug } = await context.params;

  const comments = db
    .prepare(`
      SELECT id, name, text, createdAt, likes
      FROM comments
      WHERE slug = ?
      ORDER BY id DESC
    `)
    .all(slug);

  return NextResponse.json(comments);

}




// POST COMMENT
export async function POST(
  req: NextRequest,
  context: { params: Promise<{ slug: string }> }
) {

  const { slug } = await context.params;

  const body = await req.json();

  db.prepare(`
    INSERT INTO comments (slug, name, text, createdAt)
    VALUES (?, ?, ?, ?)
  `).run(
    slug,
    body.name,
    body.text,
    new Date().toISOString()
  );

  return NextResponse.json({ success: true });

}




// DELETE COMMENT
export async function DELETE(
  req: NextRequest,
  context: { params: Promise<{ slug: string }> }
) {

  const body = await req.json();

  const id = body.id;
  const token = body.token;

  if (!id) {

    return NextResponse.json(
      { error: "ID fehlt" },
      { status: 400 }
    );

  }

  if (token !== process.env.ADMIN_DELETE_TOKEN) {

    return NextResponse.json(
      { error: "Falsches Passwort" },
      { status: 401 }
    );

  }

  db.prepare(`
    DELETE FROM comments
    WHERE id = ?
  `).run(id);

  return NextResponse.json({ success: true });

}




// 👍 LIKE COMMENT
export async function PUT(
  req: NextRequest,
  context: { params: Promise<{ slug: string }> }
) {

  const body = await req.json();

  const id = body.id;

  if (!id) {

    return NextResponse.json(
      { error: "ID fehlt" },
      { status: 400 }
    );

  }

  db.prepare(`
    UPDATE comments
    SET likes = likes + 1
    WHERE id = ?
  `).run(id);

  return NextResponse.json({ success: true });

}