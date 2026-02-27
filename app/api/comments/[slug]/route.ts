import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
 process.env.SUPABASE_URL!,
 process.env.SUPABASE_ANON_KEY!
);

export async function GET(
 req: Request,
 context: { params: { slug: string } }
) {
 const { slug } = context.params;

 const { data, error } = await supabase
  .from("comments")
  .select("*")
  .eq("slug", slug)
  .order("created_at", { ascending: true });

 if (error)
  return NextResponse.json({ error: error.message }, { status: 500 });

 return NextResponse.json(data);
}

export async function POST(
 req: Request,
 context: { params: { slug: string } }
) {
 const { slug } = context.params;
 const body = await req.json();

 const { error } = await supabase.from("comments").insert([
  {
   slug,
   name: body.name,
   message: body.message,
  },
 ]);

 if (error)
  return NextResponse.json({ error: error.message }, { status: 500 });

 return NextResponse.json({ success: true });
}