import '@astrojs/internal-helpers/path';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { N as NOOP_MIDDLEWARE_HEADER, i as decodeKey } from './chunks/astro/server_iq5QsLf8.mjs';
import 'cookie';
import 'es-module-lexer';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/cesar/OneDrive/Escritorio/Astro/apostilla_colombia/","cacheDir":"file:///C:/Users/cesar/OneDrive/Escritorio/Astro/apostilla_colombia/node_modules/.astro/","outDir":"file:///C:/Users/cesar/OneDrive/Escritorio/Astro/apostilla_colombia/dist/","srcDir":"file:///C:/Users/cesar/OneDrive/Escritorio/Astro/apostilla_colombia/src/","publicDir":"file:///C:/Users/cesar/OneDrive/Escritorio/Astro/apostilla_colombia/public/","buildClientDir":"file:///C:/Users/cesar/OneDrive/Escritorio/Astro/apostilla_colombia/dist/client/","buildServerDir":"file:///C:/Users/cesar/OneDrive/Escritorio/Astro/apostilla_colombia/dist/server/","adapterName":"","routes":[{"file":"file:///C:/Users/cesar/OneDrive/Escritorio/Astro/apostilla_colombia/dist/api/resenas","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/resenas","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/resenas\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"resenas","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/resenas.ts","pathname":"/api/resenas","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/Users/cesar/OneDrive/Escritorio/Astro/apostilla_colombia/dist/api/test-api-key","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/test-api-key","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/test-api-key\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"test-api-key","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/test-api-key.ts","pathname":"/api/test-api-key","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/Users/cesar/OneDrive/Escritorio/Astro/apostilla_colombia/dist/condiciones-de-uso/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/condiciones-de-uso","isIndex":false,"type":"page","pattern":"^\\/condiciones-de-uso\\/?$","segments":[[{"content":"condiciones-de-uso","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/condiciones-de-uso.astro","pathname":"/condiciones-de-uso","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/Users/cesar/OneDrive/Escritorio/Astro/apostilla_colombia/dist/politica-de-privacidad/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/politica-de-privacidad","isIndex":false,"type":"page","pattern":"^\\/politica-de-privacidad\\/?$","segments":[[{"content":"politica-de-privacidad","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/politica-de-privacidad.astro","pathname":"/politica-de-privacidad","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/Users/cesar/OneDrive/Escritorio/Astro/apostilla_colombia/dist/webSite-map/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/website-map","isIndex":false,"type":"page","pattern":"^\\/webSite-map\\/?$","segments":[[{"content":"webSite-map","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/webSite-map.astro","pathname":"/webSite-map","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/Users/cesar/OneDrive/Escritorio/Astro/apostilla_colombia/dist/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://apostillacolombia.com.co/v2","base":"/v2/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/cesar/OneDrive/Escritorio/Astro/apostilla_colombia/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/cesar/OneDrive/Escritorio/Astro/apostilla_colombia/src/pages/condiciones-de-uso.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/cesar/OneDrive/Escritorio/Astro/apostilla_colombia/src/pages/politica-de-privacidad.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/cesar/OneDrive/Escritorio/Astro/apostilla_colombia/src/pages/webSite-map.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/cesar/OneDrive/Escritorio/Astro/apostilla_colombia/src/components/ThemeToggle.astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/cesar/OneDrive/Escritorio/Astro/apostilla_colombia/src/components/Header.astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/cesar/OneDrive/Escritorio/Astro/apostilla_colombia/src/layouts/Layout.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/cesar/OneDrive/Escritorio/Astro/apostilla_colombia/src/layouts/LayoutOpcional.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/condiciones-de-uso@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/politica-de-privacidad@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/webSite-map@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:src/pages/api/resenas@_@ts":"pages/api/resenas.astro.mjs","\u0000@astro-page:src/pages/api/test-api-key@_@ts":"pages/api/test-api-key.astro.mjs","\u0000@astro-page:src/pages/condiciones-de-uso@_@astro":"pages/condiciones-de-uso.astro.mjs","\u0000@astro-page:src/pages/politica-de-privacidad@_@astro":"pages/politica-de-privacidad.astro.mjs","\u0000@astro-page:src/pages/webSite-map@_@astro":"pages/website-map.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-manifest":"manifest_DeZARwHp.mjs","@astrojs/react/client.js":"_astro/client.bnNPSdWK.js","C:/Users/cesar/OneDrive/Escritorio/Astro/apostilla_colombia/src/components/Header.astro?astro&type=script&index=0&lang.ts":"_astro/Header.astro_astro_type_script_index_0_lang.oAg0SgEG.js","C:/Users/cesar/OneDrive/Escritorio/Astro/apostilla_colombia/src/components/Hero.astro?astro&type=script&index=0&lang.ts":"_astro/Hero.astro_astro_type_script_index_0_lang.3plwSJDJ.js","C:/Users/cesar/OneDrive/Escritorio/Astro/apostilla_colombia/src/components/Slider.astro?astro&type=script&index=0&lang.ts":"_astro/Slider.astro_astro_type_script_index_0_lang.ylE5C0vV.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/Users/cesar/OneDrive/Escritorio/Astro/apostilla_colombia/src/components/Header.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"astro:page-load\",()=>{const s=document.querySelectorAll(\"section\"),n=document.querySelectorAll(\"header nav a\"),r=e=>{e.forEach(c=>{c.isIntersecting&&n.forEach(o=>{o.getAttribute(\"aria-label\")==c.target.id?o.classList.add(\"text-blue-500\"):o.classList.remove(\"text-blue-500\")})})},t=new IntersectionObserver(r,{root:null,rootMargin:\"0px\",threshold:.3});s.forEach(e=>{t.observe(e)}),document.onvisibilitychange=()=>{document.visibilityState===\"hidden\"?t.disconnect():s.forEach(e=>{t.observe(e)})}});"]],"assets":["/v2/file:///C:/Users/cesar/OneDrive/Escritorio/Astro/apostilla_colombia/dist/api/resenas","/v2/file:///C:/Users/cesar/OneDrive/Escritorio/Astro/apostilla_colombia/dist/api/test-api-key","/v2/file:///C:/Users/cesar/OneDrive/Escritorio/Astro/apostilla_colombia/dist/condiciones-de-uso/index.html","/v2/file:///C:/Users/cesar/OneDrive/Escritorio/Astro/apostilla_colombia/dist/politica-de-privacidad/index.html","/v2/file:///C:/Users/cesar/OneDrive/Escritorio/Astro/apostilla_colombia/dist/webSite-map/index.html","/v2/file:///C:/Users/cesar/OneDrive/Escritorio/Astro/apostilla_colombia/dist/index.html"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"b/wtgMIneX6NWldI6iGXp3DyeSo+ZEgWxo356RqENm4="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
