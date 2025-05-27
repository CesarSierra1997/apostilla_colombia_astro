export { renderers } from '../../renderers.mjs';

const API_KEY = "AIzaSyC-urnWhQrU5B-w6TjjraWzU2cQAFKCD3E";
const PLACE_ID = "ChIJTw_kYMebP44R69aCMAjpvWg";
const GET = async () => {
  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=name,rating,reviews&key=${API_KEY}&language=es`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    if (!data.result || !data.result.reviews) {
      return new Response(JSON.stringify({ reviews: [] }), { status: 200 });
    }
    return new Response(JSON.stringify({ reviews: data.result.reviews }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Error al obtener las reseñas" }), { status: 500 });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
