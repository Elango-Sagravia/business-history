// import { NextResponse } from "next/server";
import { query } from "@/lib/db";

export async function POST(request) {
  try {
    const body = await request.json(); // Parse the request body
    const { user_id, campaign_id, description, status } = body;

    // Insert data into emails_sent table
    const result = await query(
      `INSERT INTO emails_sent (user_id, campaign_id, description, status, created_at)
       VALUES ($1, $2, $3, $4, NOW())
       RETURNING *`,
      [user_id, campaign_id, description, status]
    );

    // Return the inserted row as a response
    return Response.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    return Response.json(
      { message: "Error adding row to emails_sent" },
      { status: 500 }
    );
  }
}
