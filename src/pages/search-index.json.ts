// import fs from "fs";
// import path from "path";
// import { fileURLToPath } from "url";
// import { globSync } from "glob";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// /**
//  * Mapeo manual de rutas a títulos y URLs correctas
//  */
// const PAGE_CONFIG: Record<string, { title: string; url: string; keywords?: string }> = {
//   // Páginas principales
//   "index.astro": {
//     title: "Inicio Apostilla Colombia",
//     url: "/index",
//     keywords: "apostilla colombia tramites documentos legalizacion empresa quienes somos contacto"
//   },
//   "condiciones-de-uso.astro": {
//     title: "Condiciones de Uso",
//     url: "/condiciones-de-uso"
//   },
//   "politica-de-privacidad.astro": {
//     title: "Política de Privacidad",
//     url: "/politica-de-privacidad"
//   },
//   "webSite-map.astro": {
//     title: "Mapa del Sitio",
//     url: "/website-map"
//   },

//   // Servicios
//   "servicios/apostilla_legalizacion.astro": {
//     title: "Apostilla y Legalización",
//     url: "/servicios/apostilla_legalizacion",
//     keywords: "apostilla legalizacion documentos tramite"
//   },
//   "servicios/universidad.astro": {
//     title: "Apostillar Documentos Universitarios",
//     url: "/servicios/universidad",
//     keywords: "universidad titulos diploma grado acta notas"
//   },
//   "servicios/bachiller.astro": {
//     title: "Apostillar Documentos de Colegio",
//     url: "/servicios/bachiller",
//     keywords: "colegio bachiller diploma secundaria"
//   },
//   "servicios/registroCivil.astro": {
//     title: "Apostillar Registro Civil",
//     url: "/servicios/registroCivil",
//     keywords: "registro civil nacimiento matrimonio defuncion"
//   },
//   "servicios/antecedentes.astro": {
//     title: "Apostillar Antecedentes",
//     url: "/servicios/antecedentes",
//     keywords: "antecedentes judiciales penales policia"
//   },
//   "servicios/otros-documentos.astro": {
//     title: "Apostillar Otros Documentos",
//     url: "/servicios/otros-documentos",
//     keywords: "documentos poder notarial carta"
//   },
//   // "servicios/hijosVen.astro": {
//   //   title: "Documentos para Hijos de Venezolanos",
//   //   url: "/servicios/hijosVen",
//   //   keywords: "hijos venezolanos nacionalidad registro"
//   // },

//   // Traducciones
//   "traduccion/traduccionOficial.astro": {
//     title: "Traducciones Oficiales",
//     url: "/traduccion/traduccionOficial",
//     keywords: "traduccion oficial certificada traductor idiomas ingles italiano frances"
//   }
// };

// /**
//  * Limpia el contenido para búsqueda
//  */
// function cleanContent(content: string): string {
//   let cleaned = content;

//   // Eliminar frontmatter, imports, scripts, estilos
//   cleaned = cleaned.replace(/---[\s\S]*?---/g, " ");
//   cleaned = cleaned.replace(/import\s+.*?from\s+["'].*?["'];?/g, " ");
//   cleaned = cleaned.replace(/export\s+(default\s+)?(const|let|var|function|class)\s+.*?[{;]/g, " ");
//   cleaned = cleaned.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, " ");
//   cleaned = cleaned.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, " ");
//   cleaned = cleaned.replace(/<!--[\s\S]*?-->/g, " ");
//   cleaned = cleaned.replace(/\/\*[\s\S]*?\*\//g, " ");
//   cleaned = cleaned.replace(/\/\/.*/g, " ");

//   // Eliminar etiquetas HTML preservando contenido
//   cleaned = cleaned.replace(/<[^>]+>/g, " ");

//   // Eliminar markdown
//   cleaned = cleaned.replace(/```[\s\S]*?```/g, " ");
//   cleaned = cleaned.replace(/`[^`]+`/g, " ");
//   cleaned = cleaned.replace(/\*\*([^*]+)\*\*/g, "$1");
//   cleaned = cleaned.replace(/\*([^*]+)\*/g, "$1");
//   cleaned = cleaned.replace(/#{1,6}\s+/g, "");

//   // Eliminar URLs y atributos
//   cleaned = cleaned.replace(/https?:\/\/[^\s]+/g, " ");
//   cleaned = cleaned.replace(/(src|href|class|id|style)=["'][^"']*["']/g, " ");

//   // Eliminar símbolos
//   cleaned = cleaned.replace(/[{}[\]()=><;:.,!?'"]/g, " ");
//   cleaned = cleaned.replace(/[\\\/|@#$%^&*_+=~`]/g, " ");

//   // Normalizar espacios
//   cleaned = cleaned.replace(/\s+/g, " ").trim();

//   // Eliminar palabras muy cortas
//   cleaned = cleaned
//     .split(" ")
//     .filter((word) => word.length > 2)
//     .join(" ");

//   return cleaned;
// }

// /**
//  * Extrae descripción del contenido
//  */
// function extractDescription(content: string, cleanedContent: string): string {
//   // Buscar meta description
//   const metaMatch = content.match(/<meta\s+name=["']description["']\s+content=["']([^"']+)["']/i);
//   if (metaMatch?.[1]) {
//     return metaMatch[1].trim();
//   }

//   // Buscar description en frontmatter
//   const frontmatterMatch = content.match(/---[\s\S]*?description:\s*["']?([^"'\n]+)["']?\n[\s\S]*?---/);
//   if (frontmatterMatch?.[1]) {
//     return frontmatterMatch[1].trim();
//   }

//   // Usar primeras palabras del contenido limpio
//   const words = cleanedContent.split(" ").slice(0, 25).join(" ");
//   return words + (cleanedContent.split(" ").length > 25 ? "..." : "");
// }

// /**
//  * Obtiene la configuración de la página
//  */
// function getPageConfig(filePath: string): { title: string; url: string; keywords: string } | null {
//   // Extraer ruta relativa
//   const relativePath = filePath
//     .split("pages/")[1]
//     ?.replace(/\\/g, "/");

//   if (!relativePath) return null;

//   // Buscar en configuración
//   const config = PAGE_CONFIG[relativePath];
//   if (!config) return null;

//   return {
//     title: config.title,
//     url: config.url,
//     keywords: config.keywords || ""
//   };
// }

// export async function GET() {
//   try {
//     const pagesDir = path.join(__dirname, "..");
//     console.log("📁 Directorio base:", pagesDir);

//     // Buscar SOLO en pages/ (excluir components)
//     const pattern = path.join(pagesDir, "pages/**/*.{astro,md,mdx}");
//     const files = globSync(pattern, {
//       windowsPathsNoEscape: true,
//       ignore: [
//         "**/search-index.json.ts",
//         "**/buscar.astro",
//         "**/404.astro",
//         "**/500.astro",
//         "**/api/**"
//       ],
//     });

//     console.log(`🔍 Archivos encontrados: ${files.length}`);

//     const pages = files
//       .map((filePath) => {
//         try {
//           // Obtener configuración
//           const config = getPageConfig(filePath);
//           if (!config) {
//             console.warn(`⚠️ Sin configuración: ${filePath}`);
//             return null;
//           }

//           // Leer y limpiar contenido
//           const content = fs.readFileSync(filePath, "utf-8");
//           const cleanedContent = cleanContent(content);

//           // Validar contenido mínimo
//           if (!cleanedContent || cleanedContent.length < 10) {
//             console.warn(`⚠️ Contenido insuficiente: ${filePath}`);
//             return null;
//           }

//           const description = extractDescription(content, cleanedContent);

//           // Combinar contenido + keywords para búsqueda
//           const searchableContent = `${cleanedContent} ${config.keywords}`.toLowerCase();

//           return {
//             title: config.title,
//             url: config.url,
//             description,
//             content: searchableContent,
//             originalPath: filePath.replace(/\\/g, "/")
//           };
//         } catch (err) {
//           console.error(`❌ Error procesando: ${filePath}`, err);
//           return null;
//         }
//       })
//       .filter(Boolean);

//     console.log(`✅ Páginas indexadas: ${pages.length}`);

//     // Log detallado
//     pages.forEach(page => {
//       console.log(`  📄 ${page?.title}: ${page?.url}`);
//     });

//     return new Response(JSON.stringify(pages, null, 2), {
//       status: 200,
//       headers: {
//         "Content-Type": "application/json",
//         "Cache-Control": "public, max-age=3600",
//       },
//     });
//   } catch (error) {
//     console.error("❌ Error generando índice:", error);
//     return new Response(
//       JSON.stringify({ error: "Error generando índice de búsqueda" }),
//       {
//         status: 500,
//         headers: { "Content-Type": "application/json" },
//       }
//     );
//   }
// }