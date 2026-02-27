import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const dynamic = "force-dynamic";

// ✅ FIX 1: sichere Prüfung der ENV Variablen
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
 throw new Error("Supabase environment variables are missing");
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);


// ✅ FIX 2: params ohne Promise
export async function GET(
 req: Request,
 { params }: { params: { slug: string } }
) {

 const slug = params.slug;

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



export async function POST(
 req: Request,
 { params }: { params: { slug: string } }
) {

 const slug = params.slug;

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