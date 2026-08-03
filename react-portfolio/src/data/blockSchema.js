/**
 * Source unique de vérité sur la forme d'un bloc de contenu.
 *
 * Utilisé par :
 *   - l'éditeur /admin  → quels champs afficher, quelles chaînes FR/EN saisir
 *   - scripts/check-content.mjs → valider que toutes les clés existent
 *
 * Fichier volontairement en JS simple (ni JSX ni import Vite) pour être
 * importable aussi bien par le navigateur que par Node.
 */

const num = (name, label, def) => ({ name, label, type: "number", default: def });
const bool = (name, label) => ({ name, label, type: "boolean" });
const text = (name, label) => ({ name, label, type: "text" });
const asset = (name, label) => ({ name, label, type: "asset" });
const select = (name, label, options) => ({ name, label, type: "select", options });

export const ACCENT_OPTIONS = [
  "neutral",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "yellow",
];

/** Clés i18n d'un item, selon sa forme (voir itemText() dans ProjectBlocks). */
export function itemKeys(item) {
  if (item.label) return item.textKey ? [item.textKey] : [];
  return [item.titleKey ?? `${item.key}.title`, item.textKey ?? `${item.key}.text`];
}

/** Clés des paragraphes d'un bloc : soit explicites, soit `<titleKey>.pN`. */
export function paragraphKeys(block) {
  if (block.paragraphKeys) return block.paragraphKeys;
  const count = block.paragraphs ?? 0;
  return Array.from({ length: count }, (_, i) => `${block.titleKey}.p${i + 1}`);
}

export const BLOCK_TYPES = {
  image: {
    label: "Image pleine largeur",
    fields: [asset("src", "Fichier"), text("alt", "Texte alternatif")],
    keys: () => [],
  },

  figure: {
    label: "Figure légendée",
    fields: [
      text("titleKey", "Préfixe de clé"),
      asset("src", "Fichier"),
      bool("caption", "Légende"),
      select("width", "Largeur", ["full", "half"]),
    ],
    keys: (b) => [`${b.titleKey}.title`, ...(b.caption ? [`${b.titleKey}.caption`] : [])],
  },

  text: {
    label: "Bloc de texte",
    fields: [text("titleKey", "Préfixe de clé"), num("paragraphs", "Paragraphes", 2)],
    keys: (b) => [`${b.titleKey}.title`, ...paragraphKeys(b)],
  },

  cards: {
    label: "Grille de cartes",
    fields: [
      text("titleKey", "Préfixe de clé (vide = pas de titre)"),
      select("variant", "Style", ["default", "compact"]),
      num("cols", "Colonnes", 3),
    ],
    items: { icon: true },
    keys: (b) => [
      ...(b.titleKey ? [`${b.titleKey}.title`] : []),
      ...(b.items ?? []).flatMap(itemKeys),
    ],
  },

  steps: {
    label: "Étapes numérotées",
    fields: [text("titleKey", "Préfixe de clé"), num("count", "Nombre d'étapes", 4)],
    keys: (b) => [
      `${b.titleKey}.title`,
      ...Array.from({ length: b.count ?? 0 }, (_, i) => [
        `${b.titleKey}.step${i + 1}.title`,
        `${b.titleKey}.step${i + 1}.text`,
      ]).flat(),
    ],
  },

  stack: {
    label: "Stack technique (colonnes)",
    fields: [text("titleKey", "Préfixe de clé")],
    keys: (b) => [
      `${b.titleKey}.title`,
      ...(b.columns ?? []).flatMap((c) => [c.labelKey, ...c.items.map((i) => i.key)]),
    ],
  },

  highlight: {
    label: "Panneau mis en avant",
    fields: [
      text("titleKey", "Préfixe de clé"),
      select("accent", "Couleur", ACCENT_OPTIONS),
      text("icon", "Emoji de titre"),
      text("badgeKey", "Clé du badge"),
      num("paragraphs", "Paragraphes", 1),
      num("cols", "Colonnes", 3),
      bool("centered", "Items centrés"),
    ],
    items: { icon: true },
    keys: (b) => [
      `${b.titleKey}.title`,
      ...(b.badgeKey ? [b.badgeKey] : []),
      ...paragraphKeys(b),
      ...(b.items ?? []).flatMap(itemKeys),
    ],
  },

  challenges: {
    label: "Problèmes / solutions",
    fields: [text("titleKey", "Préfixe de clé"), text("solutionLabelKey", "Clé du label solution")],
    keys: (b) => [
      `${b.titleKey}.title`,
      b.solutionLabelKey,
      ...(b.items ?? []).flatMap((k) => [`${k}.title`, `${k}.problem`, `${k}.solution`]),
    ],
  },

  projects: {
    label: "Renvoi vers des projets",
    fields: [
      text("titleKey", "Préfixe de clé"),
      text("filter", "Champ filtrant (ex. venture)"),
      num("cols", "Colonnes", 2),
    ],
    keys: (b) => [`${b.titleKey}.title`],
  },

  stats: {
    label: "Chiffres clés",
    fields: [text("titleKey", "Préfixe de clé"), num("paragraphs", "Paragraphes", 2)],
    items: { value: true },
    keys: (b) => [
      `${b.titleKey}.title`,
      ...paragraphKeys(b),
      ...(b.items ?? []).map((i) => i.key),
    ],
  },
};

/** Toutes les clés i18n (relatives au projet) référencées par un bloc. */
export function blockKeys(block) {
  const schema = BLOCK_TYPES[block.type];
  return schema ? schema.keys(block).filter(Boolean) : [];
}

/** Toutes les clés i18n (relatives au projet) d'un projet, hero compris. */
export function projectKeys(project) {
  return [
    "title",
    "intro",
    "heroTags",
    ...(project.blocks ?? []).flatMap(blockKeys),
  ];
}

/** Noms de fichiers d'assets référencés par un projet. */
export function projectAssets(project) {
  return [
    project.image,
    ...(project.blocks ?? [])
      .filter((b) => b.type === "image" || b.type === "figure")
      .map((b) => b.src),
  ].filter(Boolean);
}

/** Bloc vierge prêt à être édité. */
export function emptyBlock(type, ns) {
  const base = { type };
  const prefix = type === "image" ? null : `${type}${Date.now().toString(36).slice(-4)}`;

  for (const field of BLOCK_TYPES[type].fields) {
    if (field.type === "number") base[field.name] = field.default;
    if (field.name === "titleKey" && prefix) base[field.name] = prefix;
    if (field.name === "accent") base[field.name] = "neutral";
  }
  if (BLOCK_TYPES[type].items) base.items = [];
  if (type === "stack") base.columns = [];
  if (type === "challenges") base.items = [];
  void ns;

  return base;
}
