import { c as createAstro, a as createComponent, m as maybeRenderHead, s as spreadAttributes, b as renderTemplate, d as addAttribute, h as createTransitionScope, r as renderComponent, g as renderScript } from './astro/server_iq5QsLf8.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                         */

const $$Astro$2 = createAstro("https://apostillacolombia.com.co/v2");
const $$Sun = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Sun;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path> <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"></path> </svg>`;
}, "C:/Users/cesar/OneDrive/Escritorio/Astro/apostilla_colombia/src/components/icons/Sun.astro", void 0);

const $$Astro$1 = createAstro("https://apostillacolombia.com.co/v2");
const $$Moon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Moon;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path> </svg>`;
}, "C:/Users/cesar/OneDrive/Escritorio/Astro/apostilla_colombia/src/components/icons/Moon.astro", void 0);

const $$Astro = createAstro("https://apostillacolombia.com.co/v2");
const $$System = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$System;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M3 5a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-10z"></path> <path d="M7 20h10"></path> <path d="M9 16v4"></path> <path d="M15 16v4"></path> </svg>`;
}, "C:/Users/cesar/OneDrive/Escritorio/Astro/apostilla_colombia/src/components/icons/System.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$ThemeToggle = createComponent(($$result, $$props, $$slots) => {
  const THEMES = ["Light", "Dark", "System"];
  return renderTemplate(_a || (_a = __template(["", '<div class="relative ml-1 mr-1" data-astro-cid-x3pjskd3> <button id="theme-toggle-btn" class="appearance-none border-none flex hover:scale-125 transition" data-astro-cid-x3pjskd3', '> <span class="sr-only" data-astro-cid-x3pjskd3>Elige el tema</span> ', " ", " ", ' </button> <div id="themes-menu" class="absolute hidden scale-80 top-8 right-0 text-sm p-1 min-w-[8rem] rounded-md border border-gray-100 bg-gray-800/90 text-gray-200 dark:bg-gray-900/90 dark:border-gray-500/20 shadow-[0_3px_10px_rgb(0,0,0,0.2)] backdrop-blur-md" data-astro-cid-x3pjskd3', "> <ul data-astro-cid-x3pjskd3> ", ` </ul> </div> </div>  <script>
  let remove = null
  const matchMedia = window.matchMedia("(prefers-color-scheme: dark)")
  const themesMenu = document.getElementById("themes-menu")

  const getThemePreference = () => {
    if (typeof localStorage !== "undefined") {
      return localStorage.getItem("theme") ?? "system"
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light"
  }

  const updateIcon = (themePreference) => {
    document.querySelectorAll(".theme-toggle-icon").forEach((element) => {
      element.style.scale = element.id === themePreference ? "1" : "0"
    })
  }

  const updateTheme = () => {
    if (remove != null) {
      remove()
    }
    matchMedia.addEventListener("change", updateTheme)
    remove = () => {
      matchMedia.removeEventListener("change", updateTheme)
    }

    const themePreference = getThemePreference()
    const isDark =
      themePreference === "dark" ||
      (themePreference === "system" && matchMedia.matches)

    updateIcon(themePreference)
    document.documentElement.classList[isDark ? "add" : "remove"]("dark")
  }

  updateTheme()

  document.addEventListener("click", () => themesMenu.classList.remove("open"))

  document.getElementById("theme-toggle-btn").addEventListener("click", (e) => {
    e.stopPropagation()
    const isClosed = !themesMenu.classList.contains("open")
    themesMenu.classList[isClosed ? "add" : "remove"]("open")
  })

  document.querySelectorAll(".themes-menu-option").forEach((element) => {
    element.addEventListener("click", (e) => {
      localStorage.setItem("theme", e.target.innerText.toLowerCase().trim())
      updateTheme()
    })
  })

  document.addEventListener('astro:after-swap', () => {
    updateTheme();
    window.scrollTo({ left: 0, top: 0, behavior: 'instant' });
  })
<\/script>`])), maybeRenderHead(), addAttribute(createTransitionScope($$result, "ko5uysgj"), "data-astro-transition-persist"), renderComponent($$result, "SunIcon", $$Sun, { "id": "light", "class": "theme-toggle-icon size-5 transition-all", "data-astro-cid-x3pjskd3": true }), renderComponent($$result, "MoonIcon", $$Moon, { "id": "dark", "class": "theme-toggle-icon absolute size-5 transition-all", "data-astro-cid-x3pjskd3": true }), renderComponent($$result, "SystemIcon", $$System, { "id": "system", "class": "theme-toggle-icon absolute size-5 transition-all", "data-astro-cid-x3pjskd3": true }), addAttribute(createTransitionScope($$result, "d5hlxqxh"), "data-astro-transition-persist"), THEMES.map((theme) => renderTemplate`<li class="themes-menu-option px-2 py-1.5 cursor-default hover:bg-neutral-400/40 dark:hover:bg-gray-500/50 rounded-sm" data-astro-cid-x3pjskd3> ${theme} </li>`));
}, "C:/Users/cesar/OneDrive/Escritorio/Astro/apostilla_colombia/src/components/ThemeToggle.astro", "self");

const $$Header = createComponent(($$result, $$props, $$slots) => {
  const navItems = [
    {
      title: "Inicio",
      label: "Inicio",
      url: "/#home"
    },
    {
      title: "Apostilla",
      label: "apostilla",
      url: "/#apostilla"
    },
    {
      title: "Traducci\xF3n",
      label: "traduccion",
      url: "/#traduccion"
    },
    {
      title: "Otros servicios",
      label: "otros_servicios",
      url: "/#otros_servicios"
    },
    {
      title: "Quienes somos",
      label: "quienes_somos",
      url: "/#quienes_somos"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<header class="fixed top-0 z-10 flex items-center justify-center w-full mx-auto mt-2" data-astro-cid-3ef6ksr2> <nav class="flex px-3 text-sm font-medium rounded-full text-gray-100 dark:text-gray-200 justify-center items-center" data-astro-cid-3ef6ksr2> <!-- <img src={apostillaLogo.src} alt="ApostillaCol" class="h-8 left-10 top-2 "> --> ${navItems.map((link) => renderTemplate`<a class="relative block px-2 py-2 transition hover:text-blue-500 dark:hover:text-blue-500"${addAttribute(link.label, "aria-label")}${addAttribute(link.url, "href")} data-astro-cid-3ef6ksr2> ${link.title} </a>`)} ${renderComponent($$result, "ThemeToggle", $$ThemeToggle, { "data-astro-cid-3ef6ksr2": true })} </nav> </header> ${renderScript($$result, "C:/Users/cesar/OneDrive/Escritorio/Astro/apostilla_colombia/src/components/Header.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/cesar/OneDrive/Escritorio/Astro/apostilla_colombia/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="flex-grow"> <!-- empuja el footer hacia abajo --> </div> <!-- Footer --> <footer class="bg-zinc-100 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 pt-12 px-6 lg:px-0"> <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-zinc-300 dark:border-zinc-700 pb-8"> <!-- Información de la empresa --> <div> <h2 class="text-lg font-semibold mb-4">Apostilla Colombia Traducciones Oficiales</h2> <!-- Mapa de ubicación --> <div class="mt-2 max-w-6xl mx-auto"> <div class="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden border border-zinc-300 dark:border-zinc-700 shadow-lg mx-6 md:mx-0"> <iframe title="Ubicación Apostilla Colombia" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.801306700781!2d-74.2311556852369!3d4.705733396574047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f85cc777e0b4f%3A0x9d5428c260bb1dd4!2sCra.%2010%20%2312-32%2C%20Mosquera%2C%20Cundinamarca%2C%20Colombia!5e0!3m2!1ses!2sco!4v1716575956541!5m2!1ses!2sco" width="100%" height="130" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> </div> </div> <p class="text-sm leading-relaxed">
Empresa legalmente constituida ante la Cámara de Comercio de Bogotá.<br>
Matrícula Mercantil No. 2133438.<br>
Verificable en el RUES: <a href="https://www.rues.org.co" class="text-blue-600 hover:underline">www.rues.org.co</a> </p> </div> <!-- Información de contacto --> <div> <h2 class="text-lg font-semibold mb-4">Contacto</h2> <ul class="text-sm space-y-2"> <li><strong>Dirección:</strong> Carrera 10 No. 12-32, Mosquera, Cundinamarca (Correspondencia)</li> <li><strong>Código Postal:</strong> 111321, Colombia</li> <li><strong>Teléfonos:</strong> <a href="tel:+573213254326" class="hover:underline">321 325 4326</a>, <a href="tel:+573125082845" class="hover:underline">312 508 2845</a></li> <li><strong>Correo:</strong> <a href="mailto:apostillamos@gmail.com" class="hover:underline">apostillamos@gmail.com</a></li> <li><strong>Chat de atención:</strong> 7:00 a.m. - 7:00 p.m.</li> </ul> </div> <!-- Enlaces útiles --> <div> <h2 class="text-lg font-semibold mb-4">Enlaces útiles</h2> <ul class="text-sm space-y-2"> <li><a href="/#quienes_somos" class="hover:underline">Sobre nosotros</a></li> <li><a href="/politica-de-privacidad" class="hover:underline">Política de privacidad</a></li> <li><a href="/condiciones-de-uso" class="hover:underline">Condiciones de uso</a></li> <li><a href="/webSite-map" class="hover:underline">Mapa del sitio</a></li> <li><a href="https://apostillacolombia.com.co/" class="hover:underline">Versión anterior (finaliza dic/25)</a></li> </ul> </div> </div> <!-- Pie final --> <div class="mt-6 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between py-4 text-sm text-zinc-600 dark:text-zinc-400"> <span>© <span id="current-year">${(/* @__PURE__ */ new Date()).getFullYear()}</span> Apostilla Colombia Traducciones Oficiales. Todos los derechos reservados.</span> <span>Horario de atención: Lunes a jueves de 8:00 a.m. a 5:00 p.m. / Viernes de 7:00 a.m. a 4:00 p.m.</span> </div> </footer>`;
}, "C:/Users/cesar/OneDrive/Escritorio/Astro/apostilla_colombia/src/components/Footer.astro", void 0);

export { $$Header as $, $$Footer as a };
