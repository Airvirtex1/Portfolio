#!/usr/bin/env node
/**
 * Valide le contenu des projets avant commit :
 *   - toute clé i18n référencée par un bloc existe en FR et en EN
 *   - signale les assets absents (le bloc correspondant ne s'affichera pas)
 *   - signale les chaînes i18n que plus aucun bloc n'utilise
 *
 * Usage : npm run check:content
 */
import { readFileSync, readdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import { projectKeys, projectAssets } from "../src/data/blockSchema.js";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const read = (path) => JSON.parse(readFileSync(resolve(root, path), "utf8"));

const projects = read("src/data/projects.json");
const langs = { fr: read("src/i18n/fr.json"), en: read("src/i18n/en.json") };
const assets = new Set(readdirSync(resolve(root, "src/assets")));

const get = (obj, path) =>
  path.split(".").reduce((acc, key) => (acc == null ? undefined : acc[key]), obj);

const flatten = (obj, prefix = "") =>
  Object.entries(obj).flatMap(([key, value]) =>
    value && typeof value === "object" && !Array.isArray(value)
      ? flatten(value, `${prefix}${key}.`)
      : [`${prefix}${key}`]
  );

const missingKeys = [];
const missingAssets = [];
const unusedKeys = [];
const duplicateIds = [];
const undated = [];

const seen = new Set();

for (const project of projects) {
  const ns = project.ns ?? project.id;

  if (seen.has(project.id)) duplicateIds.push(project.id);
  seen.add(project.id);

  if (!project.date) {
    // Une entrée hors grille (listed: false) n'a pas besoin de date
    if (project.listed !== false) undated.push(project.id);
  } else if (!/^\d{4}-\d{2}$/.test(project.date)) {
    missingKeys.push(`${project.id} : date "${project.date}" — format attendu AAAA-MM`);
  }

  for (const file of projectAssets(project)) {
    if (!assets.has(file)) missingAssets.push(`${project.id} → ${file}`);
  }

  const used = new Set(projectKeys(project));

  for (const [lang, data] of Object.entries(langs)) {
    if (!data.project?.[ns]) {
      missingKeys.push(`${lang} : project.${ns} (namespace entier absent)`);
      continue;
    }
    for (const key of used) {
      if (get(data.project[ns], key) === undefined) {
        missingKeys.push(`${lang} : project.${ns}.${key}`);
      }
    }
  }

  const translations = langs.fr.project?.[ns];
  if (translations) {
    for (const key of flatten(translations)) {
      const covered = [...used].some((u) => key === u || key.startsWith(`${u}.`));
      if (!covered) unusedKeys.push(`project.${ns}.${key}`);
    }
  }
}

const report = (icon, label, list) => {
  if (!list.length) return;
  console.log(`\n${icon} ${label} (${list.length})`);
  list.forEach((line) => console.log(`   ${line}`));
};

report("❌", "CLÉS I18N MANQUANTES", missingKeys);
report("❌", "IDS DE PROJET EN DOUBLE", duplicateIds);
report("🖼️ ", "ASSETS ABSENTS — bloc ignoré au rendu", missingAssets);
report("🗑️ ", "CHAÎNES I18N PLUS UTILISÉES", unusedKeys);
report("📅", "SANS DATE — rejetés en fin de page Projets", undated);

const blocking = missingKeys.length + duplicateIds.length;
console.log(
  blocking
    ? `\n${blocking} erreur(s) bloquante(s).`
    : `\n✅ ${projects.length} projets valides — FR et EN complets.`
);

process.exit(blocking ? 1 : 0);
