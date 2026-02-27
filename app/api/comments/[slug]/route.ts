import { NextResponse } from "next/server"
import { supabase } from "@/lib/supabase"

export async function GET(
  req: Request,
  { params }: { params: { slug: string } }
) {
  const { data, error } = await supabase
    .from("comments")
    .select("*")
    .eq("slug", params.slug)
    .order("created_at", { ascending: false })

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json(data)
}

export async function POST(
  req: Request,
  { params }: { params: { slug: string } }
) {
  const body = await req.json()

  const { error } = await supabase
    .from("comments")
    .insert([
      {
        slug: params.slug,
        name: body.name,
        message: body.message,
      },
    ])

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}