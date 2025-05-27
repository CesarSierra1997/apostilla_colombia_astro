import { c as createAstro, a as createComponent, d as addAttribute, e as renderHead, r as renderComponent, f as renderSlot, b as renderTemplate } from './astro/server_iq5QsLf8.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Header, a as $$Footer } from './Footer_Cke3rpFL.mjs';
/* empty css                         */

const $$Astro = createAstro("https://apostillacolombia.com.co/v2");
const $$LayoutOpcional = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LayoutOpcional;
  const { description, title } = Astro2.props;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="description"${addAttribute(description, "content")}><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body id="theme-body" class="relative text-black dark:text-white min-h-screen flex flex-col"> ${renderComponent($$result, "Header", $$Header, {})} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/Users/cesar/OneDrive/Escritorio/Astro/apostilla_colombia/src/layouts/LayoutOpcional.astro", void 0);

export { $$LayoutOpcional as $ };
