/* empty css                                              */
import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_iq5QsLf8.mjs';
import 'kleur/colors';
import 'html-escaper';
import { jsxs, jsx } from 'react/jsx-runtime';
import { $ as $$LayoutOpcional } from '../chunks/LayoutOpcional_DQSgFQG2.mjs';
export { renderers } from '../renderers.mjs';

const MapaWebsite = () => {
  return /* @__PURE__ */ jsxs("section", { className: "max-w-4xl mx-auto px-6 py-12 text-zinc-200", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold text-white mb-8", children: "🗺️ Mapa del Sitio" }),
    /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-6 space-y-3 text-zinc-300", children: [
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/", className: "text-blue-400 hover:underline", children: "Inicio" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/#quienes_somos", className: "text-blue-400 hover:underline", children: "Sobre Nosotros" }) }),
      /* @__PURE__ */ jsxs("li", { children: [
        /* @__PURE__ */ jsx("a", { href: "/servicios", className: "text-blue-400 hover:underline", children: "Servicios" }),
        /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-6 mt-1 space-y-1", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/apostilla", className: "hover:underline text-blue-300", children: "Apostilla" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/legalizacion", className: "hover:underline text-blue-300", children: "Legalización" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/traducciones", className: "hover:underline text-blue-300", children: "Traducciones oficiales" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/contacto", className: "text-blue-400 hover:underline", children: "Contacto" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/politica-de-privacidad", className: "text-blue-400 hover:underline", children: "Política de Privacidad" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/condiciones-de-uso", className: "text-blue-400 hover:underline", children: "Condiciones de Uso" }) })
    ] })
  ] });
};

const $$Astro = createAstro("https://apostillacolombia.com.co/v2");
const $$WebSiteMap = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$WebSiteMap;
  return renderTemplate`${renderComponent($$result, "LayoutOpcional", $$LayoutOpcional, { "title": "Apostilla Colombia", "description": "Apostilla Colombia Traducciones Oficiales" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="bg-[#0f172a] min-h-screen" class="mt-5"> ${renderComponent($$result2, "MapaWebsite", MapaWebsite, {})} </main> ` })}`;
}, "C:/Users/cesar/OneDrive/Escritorio/Astro/apostilla_colombia/src/pages/webSite-map.astro", void 0);

const $$file = "C:/Users/cesar/OneDrive/Escritorio/Astro/apostilla_colombia/src/pages/webSite-map.astro";
const $$url = "/v2/webSite-map";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$WebSiteMap,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
