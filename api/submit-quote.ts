export const config = { runtime: "edge" };

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxojJ4SUimFVEJGWgQhugj6Pr6mYU_xpnuEGlQKEg-aGT6zE96tuXWWGdTj1UCKOqbF0Q/exec";

export default async function handler(req: Request): Promise<Response> {
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };

  if (req.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405, headers: corsHeaders });
  }

  try {
    const payload = await req.json();

    // Server-side fetch to Apps Script — no CORS restrictions here
    const scriptRes = await fetch(SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const scriptBody = await scriptRes.text();

    // If Apps Script returned an error status, propagate it
    if (!scriptRes.ok) {
      return new Response(
        JSON.stringify({
          status: "error",
          message: `Apps Script HTTP ${scriptRes.status}: ${scriptBody}`,
        }),
        { status: 502, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    // Check if Apps Script returned an error in the body
    try {
      const parsed = JSON.parse(scriptBody);
      if (parsed.status === "error") {
        return new Response(JSON.stringify({ status: "error", message: parsed.message }), {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
    } catch {
      // scriptBody wasn't JSON — that's fine (Apps Script can return redirect HTML)
    }

    return new Response(JSON.stringify({ status: "ok" }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ status: "error", message: String(err) }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
}
