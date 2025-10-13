import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { globSync } from "glob";

// export const prerender = false;

// __dirname en módulos ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Limpia el contenido para extraer solo texto legible
 * Elimina: frontmatter, imports, scripts, estilos, HTML, clases, etc.
 */
function cleanContent(content: string): string {
  let cleaned = content;

  // 1. Eliminar frontmatter (---...---)
  cleaned = cleaned.replace(/---[\s\S]*?---/g, " ");

  // 2. Eliminar imports y exports
  cleaned = cleaned.replace(/import\s+.*?from\s+["'].*?["'];?/g, " ");
  cleaned = cleaned.replace(
    /export\s+(default\s+)?(const|let|var|function|class)\s+.*?[{;]/g,
    " "
  );

  // 3. Eliminar bloques <script> y <style> completos
  cleaned = cleaned.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, " ");
  cleaned = cleaned.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, " ");

  // 4. Eliminar comentarios HTML y JavaScript
  cleaned = cleaned.replace(/<!--[\s\S]*?-->/g, " ");
  cleaned = cleaned.replace(/\/\*[\s\S]*?\*\//g, " ");
  cleaned = cleaned.replace(/\/\/.*/g, " ");

  // 5. Eliminar todas las etiquetas HTML pero preservar el contenido
  cleaned = cleaned.replace(/<[^>]+>/g, " ");

  // 6. Eliminar sintaxis de código y markdown
  cleaned = cleaned.replace(/```[\s\S]*?```/g, " ");
  cleaned = cleaned.replace(/`[^`]+`/g, " ");
  cleaned = cleaned.replace(/\*\*([^*]+)\*\*/g, "$1"); // **bold** → bold
  cleaned = cleaned.replace(/\*([^*]+)\*/g, "$1"); // *italic* → italic
  cleaned = cleaned.replace(/#{1,6}\s+/g, ""); // # headers

  // 7. Eliminar URLs y paths
  cleaned = cleaned.replace(/https?:\/\/[^\s]+/g, " ");
  cleaned = cleaned.replace(/src=["'][^"']+["']/g, " ");
  cleaned = cleaned.replace(/href=["'][^"']+["']/g, " ");

  // 8. Eliminar clases CSS y atributos
  cleaned = cleaned.replace(/class(Name)?=["'][^"']*["']/g, " ");
  cleaned = cleaned.replace(/id=["'][^"']*["']/g, " ");
  cleaned = cleaned.replace(/style=["'][^"']*["']/g, " ");

  // 9. Eliminar caracteres especiales y símbolos comunes en código
  cleaned = cleaned.replace(/[{}[\]()=><;:.,!?'"]/g, " ");
  cleaned = cleaned.replace(/[\\\/|@#$%^&*_+=~`]/g, " ");

  // 10. Normalizar espacios en blanco
  cleaned = cleaned.replace(/\s+/g, " ");
  cleaned = cleaned.trim();

  // 11. Eliminar números sueltos (opcional, descomenta si lo necesitas)
  // cleaned = cleaned.replace(/\b\d+\b/g, " ");

  // 12. Limpieza final: eliminar palabras muy cortas (1-2 letras)
  cleaned = cleaned
    .split(" ")
    .filter((word) => word.length > 2)
    .join(" ");

  return cleaned;
}

/**
 * Extrae el título de diferentes formatos
 */
function extractTitle(content: string, filePath: string): string {
  // Intentar encontrar título en diferentes formatos

  // 1. Tag <title>
  const titleTagMatch = content.match(/<title[^>]*>(.*?)<\/title>/i);
  if (titleTagMatch?.[1]) {
    return titleTagMatch[1].trim();
  }

  // 2. Frontmatter title
  const frontmatterMatch = content.match(
    /---[\s\S]*?title:\s*["']?(.*?)["']?\n[\s\S]*?---/
  );
  if (frontmatterMatch?.[1]) {
    return frontmatterMatch[1].trim();
  }

  // 3. Primera etiqueta <h1>
  const h1Match = content.match(/<h1[^>]*>(.*?)<\/h1>/i);
  if (h1Match?.[1]) {
    return h1Match[1].replace(/<[^>]+>/g, "").trim();
  }

  // 4. Markdown # Título
  const mdTitleMatch = content.match(/^#\s+(.+)$/m);
  if (mdTitleMatch?.[1]) {
    return mdTitleMatch[1].trim();
  }

  // 5. Fallback: nombre del archivo
  return path
    .basename(filePath)
    .replace(/\.(astro|md|mdx)$/, "")
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());
}

/**
 * Genera la URL limpia basada en la ruta del archivo
 */
function generateUrl(filePath: string): string {
  // Calcular ruta relativa desde src/pages
  const rel = filePath.includes("src/pages")
    ? filePath.split("src/pages")[1]
    : filePath.split("pages")[1] || filePath;

  if (!rel) {
    console.warn("⚠️ Ruta sin 'src/pages':", filePath);
    return "/";
  }

  // Normalizar la URL
  let url = rel
    .replace(/\\/g, "/") // Windows paths
    .replace(/index\.(astro|md|mdx)$/, "") // index.astro → /
    .replace(/\.(astro|md|mdx)$/, ""); // about.astro → /about

  // Asegurar que empiece con /
  if (!url.startsWith("/")) {
    url = "/" + url;
  }

  // Remover trailing slash excepto para root
  if (url.length > 1 && url.endsWith("/")) {
    url = url.slice(0, -1);
  }

  return url;
}

export async function GET() {
  const pagesDir = path.join(__dirname, ".."); // /src/pages/..
  console.log("📁 Buscando en:", pagesDir);

  // Buscar .astro, .md, .mdx recursivamente
  const pattern = path.join(pagesDir, "**/*.{astro,md,mdx}");
  const files = globSync(pattern, {
    windowsPathsNoEscape: true,
    ignore: [
      "**/buscar.astro",
      "**/search*.astro",
      "**/404.astro",
      "**/500.astro",
      "**/Layout*.astro",
      "**/_*.astro",
      "**/api/**",
      // "**/components/**",
      "**/layouts/**",
    ],
  });

  console.log("🧾 Archivos encontrados:", files.length);

  if (files.length === 0) {
    console.warn("⚠️ No se encontraron archivos para indexar");
    return new Response(JSON.stringify([]), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }

  const pages = files
    .map((filePath) => {
      try {
        // Validar archivo
        if (!filePath || !fs.existsSync(filePath)) {
          console.warn("⚠️ Archivo inválido o no encontrado:", filePath);
          return null;
        }

        // Leer contenido
        const content = fs.readFileSync(filePath, "utf-8");

        // Extraer título
        const title = extractTitle(content, filePath);

        // Limpiar contenido para búsqueda
        const cleanedContent = cleanContent(content);

        // Validar que haya contenido útil
        if (!cleanedContent || cleanedContent.length < 20) {
          console.warn("⚠️ Contenido insuficiente en:", filePath);
          return null;
        }

        // Generar URL
        const url = generateUrl(filePath);

        // Limitar longitud del contenido (opcional)
        const maxLength = 1500;
        const finalContent =
          cleanedContent.length > maxLength
            ? cleanedContent.slice(0, maxLength) + "..."
            : cleanedContent;

        return {
          title,
          url,
          content: finalContent,
          words: finalContent.split(" ").length,
        };
      } catch (err) {
        console.error("❌ Error procesando archivo:", filePath, err);
        return null;
      }
    })
    .filter(Boolean); // Elimina nulos

  console.log("✅ Páginas procesadas:", pages.length);
  console.log(
    "📊 Total de palabras indexadas:",
    pages.reduce((sum, p) => sum + (p?.words || 0), 0)
  );

  return new Response(JSON.stringify(pages, null, 2), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=3600", // Cache por 1 hora
    },
  });
}
