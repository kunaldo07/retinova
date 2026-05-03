import { NextRequest, NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  let body: { restaurant_name?: string; email?: string; phone?: string };

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { restaurant_name, email, phone } = body;

  if (!restaurant_name?.trim() || !email?.trim()) {
    return NextResponse.json(
      { error: "Restaurant name and email are required." },
      { status: 422 }
    );
  }

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  if (!emailOk) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 422 });
  }

  const { error } = await getSupabase().from("leads").insert({
    restaurant_name: restaurant_name.trim(),
    email: email.trim().toLowerCase(),
    phone: phone?.trim() || null,
    source: "landing_page",
  });

  if (error) {
    // duplicate email — treat as success to avoid user confusion
    if (error.code === "23505") {
      return NextResponse.json({ ok: true, duplicate: true });
    }
    console.error("Supabase insert error:", error);
    return NextResponse.json(
      { error: "Failed to save. Please try again." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}
