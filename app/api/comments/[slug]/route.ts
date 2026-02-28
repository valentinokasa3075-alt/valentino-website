import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const dynamic = "force-dynamic";

const supabase = createClient(
process.env.SUPABASE_URL!,
process.env.SUPABASE_ANON_KEY!
);

// ✅ GET
export async function GET(
req: Request,
context: { params: Promise<{ slug: string }> }
) {

const { slug } = await context.params;

const { data, error } = await supabase
.from("comments")
.select("*")
.eq("slug", slug)
.order("created_at", { ascending: true });

if (error)
return NextResponse.json({ error }, { status: 500 });

return NextResponse.json(data);

}




// ✅ POST
export async function POST(
req: Request,
context: { params: Promise<{ slug: string }> }
) {

const { slug } = await context.params;
const body = await req.json();

const { error } = await supabase
.from("comments")
.insert([
{
slug,
name: body.name,
message: body.message,
likes: 0
}
]);

if (error)
return NextResponse.json({ error }, { status: 500 });

return NextResponse.json({ success: true });

}




// ✅ LIKE (⭐⭐ FIX ⭐⭐)
export async function PUT(
req: Request
) {

const body = await req.json();
const id = body.id;

// aktuellen Wert holen
const { data: comment, error } = await supabase
.from("comments")
.select("likes")
.eq("id", id)
.single();

if (error)
return NextResponse.json({ error }, { status: 500 });

// neuen Wert speichern
const { error: updateError } = await supabase
.from("comments")
.update({
likes: (comment.likes || 0) + 1
})
.eq("id", id);

if (updateError)
return NextResponse.json({ error: updateError }, { status: 500 });

return NextResponse.json({ success: true });

}




// ✅ DELETE
export async function DELETE(
req: Request,
context: { params: Promise<{ slug: string }> }
) {

const { slug } = await context.params;
const body = await req.json();

if (body.token !== process.env.ADMIN_DELETE_TOKEN)
return NextResponse.json({}, { status: 401 });

await supabase
.from("comments")
.delete()
.eq("id", body.id)
.eq("slug", slug);

return NextResponse.json({ success: true });

}