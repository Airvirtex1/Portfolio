import { readFile, writeFile, readdir } from "node:fs/promises";
import { resolve } from "node:path";

/**
 * API de contenu du mode édition (/admin).
 *
 * `apply: "serve"` : ce plugin n'existe que dans le dev server. Rien de tout
 * ceci n'est inclus dans le build de production : le site déployé reste un
 * SPA statique, sans backend ni surface d'écriture.
 */

const PROJECTS = "src/data/projects.json";
const ABOUT = "src/data/about.json";
const LOCALES = { fr: "src/i18n/fr.json", en: "src/i18n/en.json" };
const ASSETS = "src/assets";

/**
 * Les namespaces i18n des pages fixes = tout sauf `project`, qui a son propre
 * éditeur. Déduit du fichier plutôt qu'écrit en dur : un namespace ajouté à la
 * main dans fr.json apparaît tout seul dans /admin.
 */
const pageNamespaces = (locale) =>
  Object.fromEntries(Object.entries(locale).filter(([key]) => key !== "project"));

// Premier caractère alphanumérique ou `_` : interdit les noms commençant par
// un point, et le `/` absent de la classe interdit toute traversée de chemin.
const SAFE_FILENAME = /^[a-zA-Z0-9_][a-zA-Z0-9._-]*\.(png|jpe?g|webp|gif|svg|avif)$/i;
const MAX_BODY = 25 * 1024 * 1024;

const json = (res, status, payload) => {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(payload));
};

function readBody(req) {
  return new Promise((done, fail) => {
    const chunks = [];
    let size = 0;

    req.on("data", (chunk) => {
      size += chunk.length;
      if (size > MAX_BODY) {
        fail(new Error("Corps de requête trop volumineux"));
        req.destroy();
        return;
      }
      chunks.push(chunk);
    });
    req.on("end", () => {
      try {
        done(JSON.parse(Buffer.concat(chunks).toString("utf8")));
      } catch {
        fail(new Error("JSON invalide"));
      }
    });
    req.on("error", fail);
  });
}

export default function contentApi() {
  return {
    name: "portfolio-content-api",
    apply: "serve",

    configureServer(server) {
      const root = server.config.root;
      const path = (relative) => resolve(root, relative);
      const readJson = async (relative) => JSON.parse(await readFile(path(relative), "utf8"));
      const writeJson = (relative, data) =>
        writeFile(path(relative), JSON.stringify(data, null, 2) + "\n", "utf8");

      server.middlewares.use(async (req, res, next) => {
        if (!req.url?.startsWith("/__content")) return next();

        try {
          // État courant : projets + tranches i18n + assets disponibles
          if (req.method === "GET") {
            const [projects, about, fr, en, files] = await Promise.all([
              readJson(PROJECTS),
              readJson(ABOUT),
              readJson(LOCALES.fr),
              readJson(LOCALES.en),
              readdir(path(ASSETS)),
            ]);

            return json(res, 200, {
              projects,
              about,
              translations: { fr: fr.project, en: en.project },
              pages: { fr: pageNamespaces(fr), en: pageNamespaces(en) },
              assets: files.filter((f) => SAFE_FILENAME.test(f)).sort(),
            });
          }

          // Upload d'image dans src/assets
          if (req.method === "POST" && req.url.startsWith("/__content/asset")) {
            const { filename, dataUrl } = await readBody(req);

            if (!SAFE_FILENAME.test(filename ?? "")) {
              return json(res, 400, { error: `Nom de fichier refusé : ${filename}` });
            }
            const base64 = String(dataUrl ?? "").split(",")[1];
            if (!base64) return json(res, 400, { error: "Image illisible" });

            await writeFile(path(`${ASSETS}/${filename}`), Buffer.from(base64, "base64"));
            return json(res, 200, { filename });
          }

          // Écriture du contenu
          if (req.method === "PUT") {
            const { projects, translations, pages, about } = await readBody(req);

            if (!Array.isArray(projects) || !translations?.fr || !translations?.en) {
              return json(res, 400, { error: "Charge utile incomplète" });
            }
            if (pages && (!pages.fr || !pages.en)) {
              return json(res, 400, { error: "Pages : il faut les deux langues" });
            }
            if (about && !Array.isArray(about.experiences)) {
              return json(res, 400, { error: "about.json : experiences manquant" });
            }

            await writeJson(PROJECTS, projects);
            if (about) await writeJson(ABOUT, about);

            for (const [lang, relative] of Object.entries(LOCALES)) {
              const data = await readJson(relative);
              data.project = { ...data.project, ...translations[lang] };
              // Les namespaces de pages sont remplacés, pas fusionnés : c'est
              // ce qui permet de supprimer une expérience et ses chaînes.
              if (pages) Object.assign(data, pages[lang]);
              await writeJson(relative, data);
            }

            server.config.logger.info(
              `  ✏️  contenu enregistré : ${projects.length} projets` +
                (pages ? `, ${Object.keys(pages.fr).length} namespaces de pages` : ""),
              { timestamp: true }
            );
            return json(res, 200, { ok: true });
          }

          return json(res, 405, { error: `Méthode ${req.method} non gérée` });
        } catch (error) {
          server.config.logger.error(`[content-api] ${error.message}`);
          return json(res, 500, { error: error.message });
        }
      });
    },
  };
}
