import projectsData from "./projects.json";

// Toutes les images de src/assets, indexées par nom de fichier.
// Vite les bundle (hash + optimisation) : projects.json ne stocke qu'un nom.
const assetModules = import.meta.glob("../assets/*", {
  eager: true,
  query: "?url",
  import: "default",
});

const assets = Object.fromEntries(
  Object.entries(assetModules).map(([path, url]) => [path.split("/").pop(), url])
);

/** Nom de fichier -> URL bundlée, ou null si l'asset n'existe pas encore. */
export function resolveAsset(filename) {
  return filename ? assets[filename] ?? null : null;
}

/**
 * Plus récent en premier. `date` est une chaîne "YYYY-MM" : la comparaison
 * lexicographique suffit. Un projet sans date passe en fin de liste, en
 * conservant son rang dans projects.json (le tri de JS est stable).
 */
function byMostRecent(a, b) {
  if (!a.date && !b.date) return 0;
  if (!a.date) return 1;
  if (!b.date) return -1;
  return b.date.localeCompare(a.date);
}

const all = projectsData.map((project) => {
  const ns = project.ns ?? project.id;
  return {
    ...project,
    ns,
    image: resolveAsset(project.image),
    titleKey: `project.${ns}.title`,
    descKey: `project.${ns}.intro`,
  };
});

/** Entrées affichées dans la grille /projects, plus récente en premier. */
export const projects = all.filter((p) => p.listed !== false).sort(byMostRecent);

/** Cherche par id, y compris les entrées non listées (ex. /entreprise). */
export function getProject(id) {
  return all.find((project) => project.id === id) ?? null;
}
