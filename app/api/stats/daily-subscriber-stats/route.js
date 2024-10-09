import { query } from "@/lib/db";

export async function GET(request) {
  const website_id = 4;
  const { searchParams } = new URL(request.url);
  const date = searchParams.get("date") || "2024-10-08"; // Replace with default or provided date

  try {
    // First query: country-wise count of subscribers
    const countryResult = await query(
      `SELECT users.country, CAST(COUNT(*) AS INTEGER) AS total_subscribers
       FROM users
       JOIN subscribers ON users.id = subscribers.user_id
       WHERE subscribers.website_id = ${website_id}
       AND DATE(subscribers.created_at) = $1
       GROUP BY users.country
       ORDER BY total_subscribers DESC;`,
      [date]
    );

    // Desktop: browser and platform counts
    const browserDesktopResult = await query(
      `SELECT users.browser, CAST(COUNT(*) AS INTEGER) AS total_subscribers
       FROM users
       JOIN subscribers ON users.id = subscribers.user_id
       WHERE subscribers.website_id = ${website_id}
       AND DATE(subscribers.created_at) = $1
       AND users.device = 'Desktop'
       GROUP BY users.browser
       ORDER BY total_subscribers DESC;`,
      [date]
    );

    const platformDesktopResult = await query(
      `SELECT users.platform, CAST(COUNT(*) AS INTEGER) AS total_subscribers
       FROM users
       JOIN subscribers ON users.id = subscribers.user_id
       WHERE subscribers.website_id = ${website_id}
       AND DATE(subscribers.created_at) = $1
       AND users.device = 'Desktop'
       GROUP BY users.platform
       ORDER BY total_subscribers DESC;`,
      [date]
    );

    // Mobile: browser and platform counts
    const browserMobileResult = await query(
      `SELECT users.browser, CAST(COUNT(*) AS INTEGER) AS total_subscribers
       FROM users
       JOIN subscribers ON users.id = subscribers.user_id
       WHERE subscribers.website_id = ${website_id}
       AND DATE(subscribers.created_at) = $1
       AND users.device = 'Mobile'
       GROUP BY users.browser
       ORDER BY total_subscribers DESC;`,
      [date]
    );

    const platformMobileResult = await query(
      `SELECT users.platform, CAST(COUNT(*) AS INTEGER) AS total_subscribers
       FROM users
       JOIN subscribers ON users.id = subscribers.user_id
       WHERE subscribers.website_id = ${website_id}
       AND DATE(subscribers.created_at) = $1
       AND users.device = 'Mobile'
       GROUP BY users.platform
       ORDER BY total_subscribers DESC;`,
      [date]
    );

    // Tablet: browser and platform counts
    const browserTabletResult = await query(
      `SELECT users.browser, CAST(COUNT(*) AS INTEGER) AS total_subscribers
       FROM users
       JOIN subscribers ON users.id = subscribers.user_id
       WHERE subscribers.website_id = ${website_id}
       AND DATE(subscribers.created_at) = $1
       AND users.device = 'Tablet'
       GROUP BY users.browser
       ORDER BY total_subscribers DESC;`,
      [date]
    );

    const platformTabletResult = await query(
      `SELECT users.platform, CAST(COUNT(*) AS INTEGER) AS total_subscribers
       FROM users
       JOIN subscribers ON users.id = subscribers.user_id
       WHERE subscribers.website_id = ${website_id}
       AND DATE(subscribers.created_at) = $1
       AND users.device = 'Tablet'
       GROUP BY users.platform
       ORDER BY total_subscribers DESC;`,
      [date]
    );

    // Helper function to sum up counts
    const sumCounts = (list) => list.reduce((acc, row) => acc + row.count, 0);

    // Structuring the result in a single response object with summed counts
    const countriesList = countryResult.rows.map((row) => ({
      country: row.country,
      count: row.total_subscribers,
    }));

    const desktopBrowsers = browserDesktopResult.rows.map((row) => ({
      browser: row.browser,
      count: row.total_subscribers,
    }));

    const desktopPlatforms = platformDesktopResult.rows.map((row) => ({
      platform: row.platform,
      count: row.total_subscribers,
    }));

    const mobileBrowsers = browserMobileResult.rows.map((row) => ({
      browser: row.browser,
      count: row.total_subscribers,
    }));

    const mobilePlatforms = platformMobileResult.rows.map((row) => ({
      platform: row.platform,
      count: row.total_subscribers,
    }));

    const tabletBrowsers = browserTabletResult.rows.map((row) => ({
      browser: row.browser,
      count: row.total_subscribers,
    }));

    const tabletPlatforms = platformTabletResult.rows.map((row) => ({
      platform: row.platform,
      count: row.total_subscribers,
    }));

    const result = {
      countries: {
        count: countriesList.length, // Sum of all country counts
        list: countriesList,
        total_subscribers: sumCounts(countriesList),
      },
      desktop: {
        count: sumCounts(desktopBrowsers), // Sum of browsers and platforms counts for desktop
        browsers: desktopBrowsers,
        platforms: desktopPlatforms,
      },
      mobile: {
        count: sumCounts(mobileBrowsers),
        browsers: mobileBrowsers,
        platforms: mobilePlatforms,
      },
      tablet: {
        count: sumCounts(tabletBrowsers), // Sum of browsers and platforms counts for tablet
        browsers: tabletBrowsers,
        platforms: tabletPlatforms,
      },
    };

    // Return the combined result
    return Response.json(result);
  } catch (err) {
    console.error(err);
    return Response.json({ message: "Error fetching data" }, { status: 500 });
  }
}
