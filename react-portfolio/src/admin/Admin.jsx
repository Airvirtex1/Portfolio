import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import ProjectBlock from "../components/ProjectBlocks";
import { resolveAsset } from "../data/projects";
import { BLOCK_TYPES, blockKeys, emptyBlock } from "../data/blockSchema";

const LANGS = ["fr", "en"];

const getIn = (obj, path) =>
  path.split(".").reduce((acc, key) => (acc == null ? undefined : acc[key]), obj);

/** Écriture immuable d'une clé pointée : setIn(o, "a.b.c", v). */
function setIn(obj, path, value) {
  const [head, ...rest] = path.split(".");
  const next = { ...(obj ?? {}) };
  next[head] = rest.length ? setIn(next[head], rest.join("."), value) : value;
  return next;
}

/** Champ long (textarea) vs court (input), d'après le suffixe de clé. */
const isShort = (key) =>
  /(\.title|\.caption|\.badge|\.hardware|\.software|\.design|\.management|\.frontend|\.features)$/.test(
    key
  );

const label = "block text-xs font-medium text-text-secondary mb-1";
const input =
  "w-full bg-surface-base border border-border-subtle rounded-lg px-3 py-2 text-sm " +
  "focus:outline-none focus:border-accent/50";
const button =
  "px-3 py-1.5 rounded-lg text-sm border border-border-subtle hover:border-accent/40 transition";

function Field({ children, title }) {
  return (
    <div>
      <span className={label}>{title}</span>
      {children}
    </div>
  );
}

/**
 * Une chaîne, éditée en FR et EN côte à côte.
 * Défini au niveau module : un composant créé dans le corps d'Admin serait
 * remonté à chaque frappe, et l'input perdrait le focus.
 */
function TextPair({ keyPath, title, translations, ns, setText }) {
  return (
    <Field title={title ?? keyPath}>
      <div className="grid grid-cols-2 gap-2">
        {LANGS.map((language) => {
          const value = getIn(translations[language], `${ns}.${keyPath}`) ?? "";
          const Tag = isShort(keyPath) ? "input" : "textarea";

          return (
            <div key={language}>
              <span className="font-mono text-[10px] uppercase text-text-secondary">
                {language}
              </span>
              <Tag
                className={`${input} ${Tag === "textarea" ? "min-h-[72px]" : ""}`}
                value={value}
                onChange={(e) => setText(language, keyPath, e.target.value)}
              />
            </div>
          );
        })}
      </div>
    </Field>
  );
}

function AssetPicker({ value, onChange, assets, onUpload }) {
  return (
    <div className="flex gap-2">
      <select
        className={input}
        value={value ?? ""}
        onChange={(e) => onChange(e.target.value || null)}
      >
        <option value="">— aucun —</option>
        {assets.map((file) => (
          <option key={file} value={file}>
            {file}
          </option>
        ))}
        {value && !assets.includes(value) && (
          <option value={value}>{value} (absent)</option>
        )}
      </select>
      <label className={`${button} cursor-pointer whitespace-nowrap`}>
        Importer
        <input
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => e.target.files[0] && onUpload(e.target.files[0], onChange)}
        />
      </label>
    </div>
  );
}

export default function Admin() {
  const [data, setData] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const [lang, setLang] = useState("fr");
  const [status, setStatus] = useState("");
  const [dirty, setDirty] = useState(false);

  useEffect(() => {
    fetch("/__content")
      .then((r) => r.json())
      .then((payload) => {
        setData(payload);
        setSelectedId(payload.projects[0]?.id ?? null);
      })
      .catch((error) => setStatus(`Chargement impossible : ${error.message}`));
  }, []);

  const project = useMemo(
    () => data?.projects.find((p) => p.id === selectedId) ?? null,
    [data, selectedId]
  );
  const ns = project ? project.ns ?? project.id : null;

  if (!data) {
    return (
      <div className="min-h-screen bg-surface-base text-text-primary grid place-items-center">
        <p className="text-text-secondary">{status || "Chargement du contenu…"}</p>
      </div>
    );
  }

  // — mutations —————————————————————————————————————————————

  const patchProject = (changes) =>
    setData((d) => {
      setDirty(true);
      return {
        ...d,
        projects: d.projects.map((p) => (p.id === selectedId ? { ...p, ...changes } : p)),
      };
    });

  const patchBlocks = (updater) =>
    patchProject({ blocks: updater(project.blocks) });

  const patchBlock = (index, changes) =>
    patchBlocks((blocks) =>
      blocks.map((b, i) => (i === index ? { ...b, ...changes } : b))
    );

  const moveBlock = (index, delta) =>
    patchBlocks((blocks) => {
      const target = index + delta;
      if (target < 0 || target >= blocks.length) return blocks;
      const next = [...blocks];
      [next[index], next[target]] = [next[target], next[index]];
      return next;
    });

  const setText = (language, key, value) =>
    setData((d) => {
      setDirty(true);
      return {
        ...d,
        translations: {
          ...d.translations,
          [language]: setIn(d.translations[language], `${ns}.${key}`, value),
        },
      };
    });

  const addProject = () => {
    const id = `projet-${Date.now().toString(36).slice(-4)}`;
    setData((d) => {
      setDirty(true);
      return {
        ...d,
        projects: [...d.projects, { id, image: null, tags: [], blocks: [] }],
        translations: {
          fr: { ...d.translations.fr, [id]: { title: "Nouveau projet", intro: "", heroTags: [] } },
          en: { ...d.translations.en, [id]: { title: "New project", intro: "", heroTags: [] } },
        },
      };
    });
    setSelectedId(id);
  };

  const uploadAsset = async (file, onDone) => {
    const dataUrl = await new Promise((done) => {
      const reader = new FileReader();
      reader.onload = () => done(reader.result);
      reader.readAsDataURL(file);
    });

    const response = await fetch("/__content/asset", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ filename: file.name, dataUrl }),
    });
    const result = await response.json();

    if (result.error) return setStatus(result.error);
    setData((d) => ({ ...d, assets: [...new Set([...d.assets, result.filename])].sort() }));
    onDone(result.filename);
  };

  const save = async () => {
    setStatus("Enregistrement…");
    const response = await fetch("/__content", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ projects: data.projects, translations: data.translations }),
    });
    const result = await response.json();

    if (result.error) return setStatus(`Erreur : ${result.error}`);
    setDirty(false);
    setStatus("Écrit dans src/data/projects.json et src/i18n/*.json — pense à commit.");
  };

  // Props communes, pour garder les appels courts côté rendu
  const textProps = { translations: data.translations, ns, setText };
  const assetProps = { assets: data.assets, onUpload: uploadAsset };

  // — preview ———————————————————————————————————————————————

  const translate = (key) => {
    const value = getIn(data.translations[lang], `${ns}.${key}`);
    return value === undefined ? `⟨${key}⟩` : value;
  };
  const heroTags = translate("heroTags");

  return (
    <div className="min-h-screen bg-surface-base text-text-primary pt-24">
      <div className="grid lg:grid-cols-2 gap-6 px-6 pb-16">

        {/* ————— ÉDITEUR ————— */}
        <div className="space-y-5 lg:max-h-[calc(100vh-8rem)] lg:overflow-y-auto lg:pr-3">

          <div className="flex flex-wrap items-center gap-2">
            <select
              className={`${input} max-w-xs`}
              value={selectedId ?? ""}
              onChange={(e) => setSelectedId(e.target.value)}
            >
              {data.projects.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.id}
                </option>
              ))}
            </select>
            <button className={button} onClick={addProject}>+ Projet</button>
            <button
              className={`${button} ${dirty ? "border-accent text-accent" : ""}`}
              onClick={save}
            >
              {dirty ? "Enregistrer •" : "Enregistrer"}
            </button>
            <Link className={button} to={`/projects/${selectedId}`}>Voir la page</Link>
          </div>

          {status && <p className="text-xs text-text-secondary">{status}</p>}

          {project && (
            <>
              <section className="bg-surface-raised rounded-2xl p-4 space-y-3">
                <h2 className="font-display font-semibold">Projet</h2>

                <div className="grid grid-cols-2 gap-3">
                  <Field title="id (URL)">
                    <input
                      className={input}
                      value={project.id}
                      onChange={(e) => {
                        const id = e.target.value;
                        patchProject({ id, ns: project.ns ?? project.id });
                        setSelectedId(id);
                      }}
                    />
                  </Field>
                  <Field title="namespace i18n">
                    <input
                      className={input}
                      value={project.ns ?? project.id}
                      onChange={(e) => patchProject({ ns: e.target.value })}
                    />
                  </Field>
                </div>

                <Field title="Date — classe la page Projets, plus récent en haut">
                  <input
                    className={input}
                    type="month"
                    value={project.date ?? ""}
                    onChange={(e) => patchProject({ date: e.target.value || null })}
                  />
                </Field>

                <Field title="Image de la carte">
                  <AssetPicker
                    {...assetProps}
                    value={project.image}
                    onChange={(image) => patchProject({ image })}
                  />
                </Field>

                <Field title="Tags de la carte (séparés par des virgules)">
                  <input
                    className={input}
                    value={project.tags.join(", ")}
                    onChange={(e) =>
                      patchProject({
                        tags: e.target.value.split(",").map((s) => s.trim()).filter(Boolean),
                      })
                    }
                  />
                </Field>

                <TextPair {...textProps} keyPath="title" title="Titre" />
                <TextPair {...textProps} keyPath="intro" title="Introduction" />

                <Field title="Tags du hero (séparés par des virgules)">
                  <div className="grid grid-cols-2 gap-2">
                    {LANGS.map((language) => (
                      <div key={language}>
                        <span className="font-mono text-[10px] uppercase text-text-secondary">
                          {language}
                        </span>
                        <input
                          className={input}
                          value={(getIn(data.translations[language], `${ns}.heroTags`) ?? []).join(", ")}
                          onChange={(e) =>
                            setText(
                              language,
                              "heroTags",
                              e.target.value.split(",").map((s) => s.trim()).filter(Boolean)
                            )
                          }
                        />
                      </div>
                    ))}
                  </div>
                </Field>
              </section>

              {project.blocks.map((block, index) => (
                <BlockEditor
                  key={index}
                  block={block}
                  index={index}
                  total={project.blocks.length}
                  onPatch={(changes) => patchBlock(index, changes)}
                  onMove={(delta) => moveBlock(index, delta)}
                  onRemove={() =>
                    patchBlocks((blocks) => blocks.filter((_, i) => i !== index))
                  }
                  textProps={textProps}
                  assetProps={assetProps}
                />
              ))}

              <div className="flex flex-wrap gap-2">
                {Object.entries(BLOCK_TYPES).map(([type, schema]) => (
                  <button
                    key={type}
                    className={button}
                    onClick={() =>
                      patchBlocks((blocks) => [...blocks, emptyBlock(type, ns)])
                    }
                  >
                    + {schema.label}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>

        {/* ————— PREVIEW ————— */}
        <div className="lg:max-h-[calc(100vh-8rem)] lg:overflow-y-auto border border-border-subtle rounded-2xl">
          <div className="sticky top-0 z-10 flex gap-2 bg-surface-raised/95 backdrop-blur px-4 py-2 border-b border-border-subtle">
            {LANGS.map((language) => (
              <button
                key={language}
                className={`${button} ${lang === language ? "border-accent text-accent" : ""}`}
                onClick={() => setLang(language)}
              >
                {language.toUpperCase()}
              </button>
            ))}
            <span className="text-xs text-text-secondary self-center">
              preview — rendu réel de la page
            </span>
          </div>

          {project && (
            <div className="bg-surface-base">
              <section className="max-w-6xl mx-auto px-6 pt-10 pb-8">
                <h1 className="font-display text-4xl font-bold mb-4">{translate("title")}</h1>
                <div className="flex flex-wrap gap-3 mb-6">
                  {(Array.isArray(heroTags) ? heroTags : []).map((tag) => (
                    <span key={tag} className="bg-surface-overlay px-4 py-2 rounded-lg text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-lg text-text-secondary leading-relaxed">
                  {translate("intro")}
                </p>
              </section>

              {project.blocks.map((block, index) => (
                <ProjectBlock
                  key={`${block.type}-${index}`}
                  block={block}
                  ns={ns}
                  translate={translate}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/** Éditeur d'un bloc : champs de structure + toutes ses chaînes FR/EN. */
function BlockEditor({ block, index, total, onPatch, onMove, onRemove, textProps, assetProps }) {
  const schema = BLOCK_TYPES[block.type];
  if (!schema) return null;

  const keys = blockKeys(block);

  const patchItem = (itemIndex, changes) =>
    onPatch({
      items: block.items.map((item, i) => (i === itemIndex ? { ...item, ...changes } : item)),
    });

  return (
    <section className="bg-surface-raised rounded-2xl p-4 space-y-3">
      <div className="flex items-center justify-between gap-2">
        <h2 className="font-display font-semibold">
          {index + 1}. {schema.label}
        </h2>
        <div className="flex gap-1">
          <button className={button} disabled={index === 0} onClick={() => onMove(-1)}>↑</button>
          <button className={button} disabled={index === total - 1} onClick={() => onMove(1)}>↓</button>
          <button className={button} onClick={onRemove}>Supprimer</button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {schema.fields.map((field) => (
          <Field key={field.name} title={field.label}>
            {field.type === "asset" ? (
              <AssetPicker
                {...assetProps}
                value={block[field.name]}
                onChange={(src) => onPatch({ [field.name]: src })}
              />
            ) : field.type === "boolean" ? (
              <input
                type="checkbox"
                checked={Boolean(block[field.name])}
                onChange={(e) => onPatch({ [field.name]: e.target.checked })}
              />
            ) : field.type === "select" ? (
              <select
                className={input}
                value={block[field.name] ?? field.options[0]}
                onChange={(e) => onPatch({ [field.name]: e.target.value })}
              >
                {field.options.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            ) : (
              <input
                className={input}
                type={field.type === "number" ? "number" : "text"}
                value={block[field.name] ?? ""}
                onChange={(e) =>
                  onPatch({
                    [field.name]:
                      field.type === "number"
                        ? Number(e.target.value)
                        : e.target.value || undefined,
                  })
                }
              />
            )}
          </Field>
        ))}
      </div>

      {schema.items && (
        <div className="space-y-2">
          <span className={label}>Items</span>
          {(block.items ?? []).map((item, itemIndex) => (
            <div key={itemIndex} className="flex gap-2 items-center">
              {schema.items.icon && (
                <input
                  className={`${input} w-16 text-center`}
                  value={item.icon ?? ""}
                  placeholder="🙂"
                  onChange={(e) => patchItem(itemIndex, { icon: e.target.value })}
                />
              )}
              {schema.items.value && (
                <input
                  className={`${input} w-24`}
                  value={item.value ?? ""}
                  placeholder="100%"
                  onChange={(e) => patchItem(itemIndex, { value: e.target.value })}
                />
              )}
              <input
                className={input}
                value={item.key ?? ""}
                placeholder="clé (ex. features.sensors)"
                onChange={(e) => patchItem(itemIndex, { key: e.target.value })}
              />
              <button
                className={button}
                onClick={() =>
                  onPatch({ items: block.items.filter((_, i) => i !== itemIndex) })
                }
              >
                ×
              </button>
            </div>
          ))}
          <button
            className={button}
            onClick={() =>
              onPatch({ items: [...(block.items ?? []), { key: `item${Date.now().toString(36).slice(-3)}` }] })
            }
          >
            + Item
          </button>
        </div>
      )}

      {block.type === "stack" && (
        <div className="space-y-2">
          <span className={label}>Colonnes — une clé par ligne</span>
          {(block.columns ?? []).map((column, columnIndex) => (
            <div key={columnIndex} className="space-y-1">
              <input
                className={input}
                value={column.labelKey}
                onChange={(e) =>
                  onPatch({
                    columns: block.columns.map((c, i) =>
                      i === columnIndex ? { ...c, labelKey: e.target.value } : c
                    ),
                  })
                }
              />
              <textarea
                className={`${input} min-h-[80px] font-mono text-xs`}
                value={column.items.map((i) => i.key).join("\n")}
                onChange={(e) =>
                  onPatch({
                    columns: block.columns.map((c, i) =>
                      i === columnIndex
                        ? {
                            ...c,
                            items: e.target.value
                              .split("\n")
                              .map((s) => s.trim())
                              .filter(Boolean)
                              .map((key) => ({ key })),
                          }
                        : c
                    ),
                  })
                }
              />
            </div>
          ))}
          <button
            className={button}
            onClick={() =>
              onPatch({
                columns: [
                  ...(block.columns ?? []),
                  { labelKey: `${block.titleKey}.colonne`, items: [] },
                ],
              })
            }
          >
            + Colonne
          </button>
        </div>
      )}

      {block.type === "challenges" && (
        <Field title="Préfixes des problèmes — un par ligne">
          <textarea
            className={`${input} min-h-[64px] font-mono text-xs`}
            value={(block.items ?? []).join("\n")}
            onChange={(e) =>
              onPatch({
                items: e.target.value.split("\n").map((s) => s.trim()).filter(Boolean),
              })
            }
          />
        </Field>
      )}

      {keys.length > 0 && (
        <details className="border-t border-border-subtle pt-3">
          <summary className="cursor-pointer text-xs text-text-secondary mb-2">
            Textes ({keys.length} chaînes × 2 langues)
          </summary>
          <div className="space-y-3 mt-3">
            {keys.map((key) => (
              <TextPair key={key} {...textProps} keyPath={key} />
            ))}
          </div>
        </details>
      )}

      {resolveAsset(block.src) === null && block.src && (
        <p className="text-xs text-yellow-500">
          ⚠ {block.src} absent de src/assets — le bloc ne s'affichera pas.
        </p>
      )}
    </section>
  );
}
