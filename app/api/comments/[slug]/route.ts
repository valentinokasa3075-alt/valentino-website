import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const dynamic = "force-dynamic";

const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY!;

const supabase = createClient(supabaseUrl, supabaseAnonKey);


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

 if (error) {
  return NextResponse.json(
   { error: error.message },
   { status: 500 }
  );
 }

 return NextResponse.json(data);
}



// ✅ POST
export async function POST(
 req: Request,
 context: { params: Promise<{ slug: string }> }
) {

 const { slug } = await context.params;

 const body = await req.json();

 if (!body.name || !body.message) {
  return NextResponse.json(
   { error: "Missing fields" },
   { status: 400 }
  );
 }

 const { error } = await supabase
  .from("comments")
  .insert([
   {
    slug: slug,
    name: body.name,
    message: body.message,
   },
  ]);

 if (error) {
  return NextResponse.json(
   { error: error.message },
   { status: 500 }
  );
 }

 return NextResponse.json({ success: true });
}



// ✅ DELETE — FINAL FIX
export async function DELETE(
 req: Request,
 context: { params: Promise<{ slug: string }> }
) {

 const { slug } = await context.params;

 const body = await req.json();

 const id = body.id;
 const token = body.token;


 if (token !== process.env.ADMIN_DELETE_TOKEN) {

  return NextResponse.json(
   { error: "Unauthorized" },
   { status: 401 }
  );

 }


 // ⭐⭐⭐ DAS IST DER FIX ⭐⭐⭐

 const { error, data } = await supabase
  .from("comments")
  .delete()
  .eq("id", id)
  .eq("slug", slug)
  .select();   // ⭐ WICHTIG


 if (error) {

  return NextResponse.json(
   { error: error.message },
   { status: 500 }
  );

 }


 return NextResponse.json({
  success: true,
  deleted: data
 });

}