// import { NextResponse } from "next/server";
import { query } from "@/lib/db"; // Import fetch if using Node.js < 18

export async function GET(request) {
  try {
    // Get the query parameters from the URL
    const { searchParams } = new URL(request.url);
    const user_id = searchParams.get("user_id");
    const campaign_id = searchParams.get("campaign_id");

    if (!user_id || !campaign_id) {
      return new Response(
        JSON.stringify({ message: "Missing user_id or campaign_id" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Insert data into emails_open table with the detected country
    await query(
      `INSERT INTO emails_open (user_id, campaign_id, opened_at)
       VALUES ($1, $2, NOW())
       ON CONFLICT (user_id, campaign_id) DO NOTHING`, // Ensure uniqueness
      [user_id, campaign_id]
    );

    // Create a 1x1 pixel transparent PNG
    const oneByOnePixel = Buffer.from([
      0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a, 0x00, 0x00, 0x00, 0x0d,
      0x49, 0x48, 0x44, 0x52, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x01,
      0x08, 0x06, 0x00, 0x00, 0x00, 0x1f, 0x15, 0xc4, 0x89, 0x00, 0x00, 0x00,
      0x0a, 0x49, 0x44, 0x41, 0x54, 0x78, 0x9c, 0x63, 0x00, 0x01, 0x00, 0x00,
      0x05, 0x00, 0x01, 0x0d, 0x0a, 0x2d, 0xb4, 0x00, 0x00, 0x00, 0x00, 0x49,
      0x45, 0x4e, 0x44, 0xae, 0x42, 0x60, 0x82,
    ]);

    // Return the 1x1 transparent PNG image
    return new Response(oneByOnePixel, {
      headers: {
        "Content-Type": "image/png",
        "Content-Length": oneByOnePixel.length,
      },
    });
  } catch (err) {
    console.error(err);
    return new Response(
      JSON.stringify({ message: "Error adding row to emails_open" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
