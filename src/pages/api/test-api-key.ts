// src/pages/api/test-api-key.ts
import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
  const apiKey = import.meta.env.GOOGLE_API_KEY;

  return new Response(JSON.stringify({
    message: "Clave cargada correctamente",
    apiKey: apiKey ? "✅ Presente" : "❌ No encontrada",
  }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
};
