import { query } from "@/lib/db";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const email = searchParams.get("email").toLowerCase().trim();
  const browser = searchParams.get("browser");
  const device = searchParams.get("device");
  const platform = searchParams.get("platform");

  if (!email) {
    return new Response("Email is required", { status: 400 });
  }

  try {
    // Begin transaction
    await query("BEGIN");

    // Step 3: Get the user's IP and determine country using the ip-api.com service
    const ip =
      request.headers.get("x-forwarded-for") ||
      request.connection.remoteAddress;

    console.log("IP address: ", ip);

    // Fetch the geolocation data based on the IP address
    const geoResponse = await fetch(`http://ip-api.com/json/${ip}`);
    const geoData = await geoResponse.json();
    const country = geoData.country || "Unknown";

    // Step 4: Check if the user already exists in the database
    const findUserQuery = `SELECT id FROM users WHERE email = $1`;
    const userResult = await query(findUserQuery, [email]);

    let userId;

    if (userResult.rows.length > 0) {
      // User exists, get the user_id
      userId = userResult.rows[0].id;

      const updateUserQuery = `
        UPDATE users
        SET browser = $1, device = $2, platform = $3, country = $4, updated_at = NOW()
        WHERE id = $5;
      `;
      await query(updateUserQuery, [
        browser,
        device,
        platform,
        country,
        userId,
      ]);
    } else {
      // User doesn't exist, insert a new user
      const insertUserQuery = `
        INSERT INTO users (email, source_id, browser, device, platform, country, created_at, updated_at)
        VALUES ($1, $2, $3, $4, $5, $6, NOW(), NOW())
        RETURNING id;
      `;
      const insertResult = await query(insertUserQuery, [
        email,
        1,
        browser,
        device,
        platform,
        country,
      ]);
      userId = insertResult.rows[0].id;
    }

    // Step 5: Check if the user is already subscribed to website_id 4
    const checkSubscriberQuery = `
      SELECT * FROM subscribers WHERE user_id = $1 AND website_id = 4;
    `;
    const subscriberResult = await query(checkSubscriberQuery, [userId]);

    if (subscriberResult.rows.length > 0) {
      // The user is already in the subscribers table for website_id = 4, update the status to 'subscribed'
      const updateSubscriberQuery = `
        UPDATE subscribers
        SET status = 'subscribed'
        WHERE user_id = $1 AND website_id = 4;
      `;
      await query(updateSubscriberQuery, [userId]);
    } else {
      // The user is not subscribed to website_id 4, insert a new row with created_at
      const insertSubscriberQuery = `
        INSERT INTO subscribers (user_id, website_id, status, created_at)
        VALUES ($1, 4, 'subscribed', NOW());
      `;
      await query(insertSubscriberQuery, [userId]);
    }

    // Commit transaction
    await query("COMMIT");

    return new Response(JSON.stringify({ success: true, userId }), {
      status: 201,
    });
  } catch (error) {
    console.error("Error inserting/updating user or subscriber:", error);

    // Rollback transaction in case of error
    await query("ROLLBACK");

    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500 }
    );
  }
}
