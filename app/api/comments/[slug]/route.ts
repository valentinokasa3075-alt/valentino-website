import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const dynamic = "force-dynamic";

const supabase = createClient(
 process.env.SUPABASE_URL!,
 process.env.SUPABASE_ANON_KEY!
);

export async function GET(
 req: Request,
 { params }: { params: Promise<{ slug: string }> }
) {
 const { slug } = await params;

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
 { params }: { params: Promise<{ slug: string }> }
) {
 const { slug } = await params;
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
    slug,
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