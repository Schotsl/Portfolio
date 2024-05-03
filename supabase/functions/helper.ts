// Bit of a hacky way to fetch Plausible but I couldn't get it too work in my Plausible package
export async function fetchPlausible(domain: string) {
  const plausibleKey = Deno.env.get("PLAUSIBLE_KEY");
  const plausibleHost = Deno.env.get("PLAUSIBLE_HOST");

  if (!plausibleKey || !plausibleHost) {
    throw new Error("Missing required environment variables");
  }

  const plausibleUrl =
    `${plausibleHost}/api/v1/stats/aggregate?site_id=${domain}&period=30d&metrics=pageviews`;

  const plausibleResponse = await fetch(plausibleUrl, {
    headers: {
      Authorization: `Bearer ${plausibleKey}`,
    },
  });

  if (!plausibleResponse.ok) {
    throw new Error(`API responded with status: ${plausibleResponse.status}`);
  }

  const plausibleParsed = await plausibleResponse.json();
  const plausibleValue = plausibleParsed.results.pageviews.value;

  return plausibleValue;
}
