// src/pages/api/reseñas.ts
import type { APIRoute } from 'astro';

const API_KEY = import.meta.env.GOOGLE_API_KEY;
const PLACE_ID = 'ChIJTw_kYMebP44R69aCMAjpvWg';

export const GET: APIRoute = async () => {
  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=name,rating,reviews&key=${API_KEY}&language=es`;
  
  try {
    const response = await fetch(url);
    const data = await response.json();

    if (!data.result || !data.result.reviews) {
      return new Response(JSON.stringify({ reviews: [] }), { status: 200 });
    }

    return new Response(JSON.stringify({ reviews: data.result.reviews }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Error al obtener las reseñas' }), { status: 500 });
  }
};
