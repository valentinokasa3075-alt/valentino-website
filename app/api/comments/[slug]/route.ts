import { NextResponse } from "next/server"
import { supabase } from "@/lib/supabase"




// GET comments
export async function GET(
  req: Request,
  context: { params: { slug: string } }
) {

  const slug = context.params.slug

  const { data, error } = await supabase
    .from("comments")
    .select("*")
    .eq("slug", slug)
    .order("created_at", { ascending: false })


  if (error)
    return NextResponse.json({ error: error.message }, { status: 500 })


  return NextResponse.json(data)
}





// POST comment
export async function POST(
  req: Request,
  context: { params: { slug: string } }
) {

  const slug = context.params.slug

  const body = await req.json()


  const { error } = await supabase
    .from("comments")
    .insert({
      slug,
      name: body.name,
      message: body.message
    })


  if (error)
    return NextResponse.json({ error: error.message }, { status: 500 })


  return NextResponse.json({ success: true })
}