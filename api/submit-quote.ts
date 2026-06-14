export const config = { runtime: "edge" };

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxojJ4SUimFVEJGWgQhugj6Pr6mYU_xpnuEGlQKEg-aGT6zE96tuXWWGdTj1UCKOqbF0Q/exec";

export default async function handler(req: Request): Promise<Response> {
  // Allow CORS from any origin so the browser can call this endpoint
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };

  // Handle preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405, headers: corsHeaders });
  }

  try {
    const payload = await req.json();

    // Server-side fetch to Apps Script — no CORS restrictions here
    await fetch(SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

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
