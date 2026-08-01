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

export const projects = projectsData.map((project) => {
  const ns = project.ns ?? project.id;
  return {
    ...project,
    ns,
    image: resolveAsset(project.image),
    titleKey: `project.${ns}.title`,
    descKey: `project.${ns}.intro`,
  };
});

export function getProject(id) {
  return projects.find((project) => project.id === id) ?? null;
}
