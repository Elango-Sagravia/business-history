import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const email = searchParams.get("email");

  try {
    if (!email) throw new Error("Email required");
    await sql`INSERT INTO Users (Email) VALUES (${email});`;
  } catch (error) {
    if ((error.code = "23505")) {
      return NextResponse.json({ status: 200 });
    }
    return NextResponse.json({ error }, { status: 500 });
  }

  return NextResponse.json({ status: 200 });
}
