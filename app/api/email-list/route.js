// import { NextResponse } from "next/server";
import { query } from "@/lib/db";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const limit = searchParams.get("limit") || 0;
  try {
    const result = await query(
      `(
    SELECT u.id, u.email
    FROM users u
    INNER JOIN subscribers s ON u.id = s.user_id
    WHERE s.website_id = 4
      AND u.source_id = 1
      AND s.status = 'subscribed'
    LIMIT ${limit}
)
UNION ALL
(
    SELECT u.id, u.email
    FROM users u
    INNER JOIN subscribers s ON u.id = s.user_id
    WHERE s.website_id = 4
      AND u.source_id = 2
      AND s.status = 'subscribed'
    LIMIT ${limit}
)
LIMIT ${limit};`,
      []
    );

    // Create an array of objects with id and email
    const users = result.rows.map((row) => ({ id: row.id, email: row.email }));

    // Return the array of objects
    return Response.json(users);
  } catch (err) {
    console.error(err);
    return Response.json({ message: "Error fetching users" }, { status: 500 });
  }
}
