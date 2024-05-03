import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import { corsHeaders } from "../_shared/cors.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { fetchPlausible } from "../helper.ts";

serve(async (req: Request) => {
  // This is needed if you're planning to invoke your function from a browser.
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  const supabaseClient = createClient(
    Deno.env.get("SUPABASE_URL") ?? "",
    Deno.env.get("SUPABASE_ANON_KEY") ?? "",
    {
      global: { headers: { Authorization: req.headers.get("Authorization")! } },
      auth: {
        persistSession: false,
      },
    },
  );

  const updateStatistics = async () => {
    const domains = [
      "kruidenpower.nl",
      "lxframes.com",
      "meesterproef.sjorsvanholst.nl",
      "nicoletrompetter.nl",
      "overworked.app",
      "presently.dev",
      "sjorsvanholst.nl",
      "toolenburgerplas.nl",
      "uwuifier.com",
      "wanneer-naar-terschelling.nl",
      "zonneveranda.nl",
    ];

    const domainsPromises = domains.map((domain) => fetchPlausible(domain));
    const domainsValues = await Promise.all(domainsPromises);

    const pageviews = domainsValues.reduce(
      (previous, current) => previous + current,
      0,
    );

    // If we call a unneeded update the websocket will trigger so we need to check if the data has changed
    const { data: totalData, error: totalError } = await supabaseClient
      .from("statistics")
      .select("pageviews")
      .eq("id", "c6fe3380-993e-42bf-91fb-a4806b4f8844")
      .single();

    if (totalError) {
      throw totalError;
    }

    if (
      totalData &&
      totalData.pageviews === pageviews
    ) {
      return;
    }

    const { error: updateError } = await supabaseClient
      .from("statistics")
      .update({
        pageviews,
      })
      .eq("id", "c6fe3380-993e-42bf-91fb-a4806b4f8844");

    if (updateError) {
      throw updateError;
    }
  };

  await updateStatistics();

  return new Response(JSON.stringify({}), {
    headers: { ...corsHeaders, "Content-Type": "application/json" },
    status: 200,
  });
});
