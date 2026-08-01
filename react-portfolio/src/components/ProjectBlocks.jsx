import { useTranslation } from "react-i18next";
import { resolveAsset } from "../data/projects";

// Classes Tailwind écrites en entier : jamais de nom de classe construit
// dynamiquement, sinon le purge de Tailwind les supprime au build.
const ACCENTS = {
  neutral: {
    panel: "bg-gradient-to-br from-surface-raised to-surface-overlay border-border-subtle",
    title: "text-text-primary",
    badge: "bg-surface-base/50 text-text-primary border-border-subtle",
  },
  blue: {
    panel: "bg-gradient-to-br from-blue-950/30 to-surface-raised border-blue-900/20",
    title: "text-blue-400",
    badge: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  },
  green: {
    panel: "bg-gradient-to-br from-green-950/30 to-surface-raised border-green-900/20",
    title: "text-green-400",
    badge: "bg-green-500/20 text-green-400 border-green-500/30",
  },
  orange: {
    panel: "bg-gradient-to-br from-orange-950/30 to-surface-raised border-orange-900/20",
    title: "text-orange-400",
    badge: "bg-orange-500/20 text-orange-400 border-orange-500/30",
  },
  purple: {
    panel: "bg-gradient-to-br from-purple-950/30 to-surface-raised border-purple-900/20",
    title: "text-purple-400",
    badge: "bg-purple-500/20 text-purple-400 border-purple-500/30",
  },
  red: {
    panel: "bg-gradient-to-br from-red-950/30 to-surface-raised border-red-900/20",
    title: "text-red-400",
    badge: "bg-red-500/20 text-red-400 border-red-500/30",
  },
  yellow: {
    panel: "bg-gradient-to-br from-yellow-950/30 to-surface-raised border-yellow-900/20",
    title: "text-yellow-400",
    badge: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  },
};

const COLS = {
  2: "md:grid-cols-2",
  3: "md:grid-cols-3",
  4: "md:grid-cols-4",
};

const STEP_ICONS = ["1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣", "🔟"];

const Section = ({ children }) => (
  <section className="max-w-6xl mx-auto px-6 pb-16">{children}</section>
);

const Heading = ({ icon, children }) => (
  <h2 className="font-display text-3xl font-semibold mb-8 flex items-center gap-3">
    {icon && <span>{icon}</span>}
    {children}
  </h2>
);

/** Liste de clés i18n `<prefix>.p1` … `<prefix>.pN`. */
function paragraphKeys(block) {
  if (block.paragraphKeys) return block.paragraphKeys;
  const count = block.paragraphs ?? 0;
  return Array.from({ length: count }, (_, i) => `${block.titleKey}.p${i + 1}`);
}

/**
 * Un item accepte trois formes :
 *   { key: "features.sensors" }                  -> .title / .text
 *   { titleKey: "…phase1", textKey: "…phase1Text" }
 *   { label: "Proportionnel (P)", textKey: "…" } -> titre littéral, non traduit
 */
function itemText(t, item) {
  return {
    title: item.label ?? t(item.titleKey ?? `${item.key}.title`),
    text: t(item.textKey ?? `${item.key}.text`),
  };
}

function ImageBlock({ block, t }) {
  const src = resolveAsset(block.src);
  if (!src) return null;

  return (
    <Section>
      <div className="rounded-2xl overflow-hidden bg-surface-raised">
        <img src={src} alt={block.alt ?? t("title")} className="w-full h-auto" />
      </div>
    </Section>
  );
}

function FigureBlock({ block, t }) {
  const src = resolveAsset(block.src);
  if (!src) return null;

  return (
    <Section>
      <Heading>{t(`${block.titleKey}.title`)}</Heading>
      <div className="bg-surface-raised rounded-2xl overflow-hidden">
        <img
          src={src}
          alt={block.alt ?? t(`${block.titleKey}.title`)}
          className={
            block.width === "half"
              ? "w-full md:w-1/2 h-auto mx-auto"
              : "w-full h-auto"
          }
        />
        {block.caption && (
          <div className="p-4 text-center text-sm text-text-secondary">
            {t(`${block.titleKey}.caption`)}
          </div>
        )}
      </div>
    </Section>
  );
}

function CardsBlock({ block, t }) {
  const compact = block.variant === "compact";

  return (
    <Section>
      {block.titleKey && <Heading>{t(`${block.titleKey}.title`)}</Heading>}

      <div className={`grid ${COLS[block.cols] ?? COLS[3]} ${compact ? "gap-8" : "gap-6"}`}>
        {block.items.map((item) => {
          const { title, text } = itemText(t, item);

          return compact ? (
            <div key={item.key} className="bg-surface-raised p-6 rounded-2xl">
              <h3 className="text-lg font-semibold mb-2 flex items-center">
                <span className="mr-3">{item.icon}</span>
                {title}
              </h3>
              <p className="text-text-secondary text-sm">{text}</p>
            </div>
          ) : (
            <div key={item.key} className="bg-surface-raised p-6 rounded-2xl">
              <div className="flex items-start">
                <span className="text-2xl mr-4">{item.icon}</span>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{title}</h3>
                  <p className="text-text-secondary text-sm">{text}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

function TextBlock({ block, t }) {
  return (
    <Section>
      <div className="bg-surface-raised rounded-2xl p-8 md:p-12">
        <h2 className="font-display text-3xl font-semibold mb-6">
          {t(`${block.titleKey}.title`)}
        </h2>
        <div className="space-y-4 text-text-secondary leading-relaxed">
          {paragraphKeys(block).map((key) => (
            <p key={key}>{t(key)}</p>
          ))}
        </div>
      </div>
    </Section>
  );
}

function StepsBlock({ block, t }) {
  const steps = Array.from({ length: block.count }, (_, i) => i + 1);

  return (
    <Section>
      <Heading>{t(`${block.titleKey}.title`)}</Heading>

      <div className="space-y-6">
        {steps.map((n) => (
          <div key={n} className="bg-surface-raised rounded-2xl p-6 md:p-8">
            <div className="flex items-start">
              <span className="font-display text-3xl mr-4">{STEP_ICONS[n - 1]}</span>
              <div>
                <h3 className="text-xl font-semibold mb-3">
                  {t(`${block.titleKey}.step${n}.title`)}
                </h3>
                <p className="text-text-secondary">
                  {t(`${block.titleKey}.step${n}.text`)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function StackBlock({ block, t }) {
  return (
    <Section>
      <Heading>{t(`${block.titleKey}.title`)}</Heading>

      <div className="bg-surface-raised rounded-2xl p-8">
        <div className={`grid ${COLS[block.columns.length] ?? COLS[2]} gap-8`}>
          {block.columns.map((column) => (
            <div key={column.labelKey}>
              <h3 className="text-xl font-semibold mb-4">{t(column.labelKey)}</h3>
              <ul className="space-y-2 text-text-secondary">
                {column.items.map((item) => (
                  <li key={item.key} className="flex items-start">
                    <span className="text-text-primary mr-2">•</span>
                    <span>
                      {item.label && <strong>{item.label}</strong>}
                      {item.label && " — "}
                      {t(item.key)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function HighlightBlock({ block, t }) {
  const accent = ACCENTS[block.accent] ?? ACCENTS.neutral;

  return (
    <Section>
      <div className={`${accent.panel} border rounded-2xl p-8 md:p-12`}>
        <h2 className="font-display text-3xl font-semibold mb-6 flex items-center gap-3">
          {block.icon && <span>{block.icon}</span>}
          {t(`${block.titleKey}.title`)}
        </h2>

        {block.badgeKey && (
          <div className="mb-4">
            <span
              className={`${accent.badge} border px-4 py-2 rounded-full text-sm font-medium`}
            >
              {t(block.badgeKey)}
            </span>
          </div>
        )}

        <div className="space-y-4 text-text-secondary leading-relaxed">
          {paragraphKeys(block).map((key) => (
            <p key={key}>{t(key)}</p>
          ))}
        </div>

        {block.items && (
          <div className={`grid ${COLS[block.cols] ?? COLS[3]} gap-4 mt-8`}>
            {block.items.map((item) => {
              const { title, text } = itemText(t, item);

              return (
                <div
                  key={item.key ?? item.textKey}
                  className={`bg-surface-base/50 rounded-xl p-6 ${
                    block.centered ? "text-center" : ""
                  }`}
                >
                  {item.icon && <div className="text-2xl mb-2">{item.icon}</div>}
                  <div className={`${accent.title} font-semibold mb-2`}>{title}</div>
                  <div className="text-sm text-text-secondary">{text}</div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </Section>
  );
}

function ChallengesBlock({ block, t }) {
  return (
    <Section>
      <Heading>{t(`${block.titleKey}.title`)}</Heading>

      <div className="space-y-6">
        {block.items.map((key) => (
          <div key={key} className="bg-surface-raised rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-semibold mb-3 text-red-400">
              {t(`${key}.title`)}
            </h3>
            <p className="text-text-secondary mb-4">{t(`${key}.problem`)}</p>
            <h4 className="text-lg font-semibold mb-2 text-green-400">
              {t(block.solutionLabelKey)}
            </h4>
            <p className="text-text-secondary">{t(`${key}.solution`)}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function StatsBlock({ block, t }) {
  return (
    <Section>
      <div className="bg-gradient-to-br from-surface-raised to-surface-overlay border border-border-subtle rounded-2xl p-8 md:p-12">
        <h2 className="font-display text-3xl font-semibold mb-6">
          {t(`${block.titleKey}.title`)}
        </h2>
        <div className="space-y-4 text-text-secondary leading-relaxed">
          {paragraphKeys(block).map((key) => (
            <p key={key}>{t(key)}</p>
          ))}
        </div>

        <div className={`grid ${COLS[block.items.length] ?? COLS[3]} gap-6 mt-8`}>
          {block.items.map((item) => (
            <div key={item.key} className="text-center">
              <div className="font-display text-3xl font-bold mb-2">{item.value}</div>
              <div className="text-sm text-text-secondary">{t(item.key)}</div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

const RENDERERS = {
  image: ImageBlock,
  figure: FigureBlock,
  cards: CardsBlock,
  text: TextBlock,
  steps: StepsBlock,
  stack: StackBlock,
  highlight: HighlightBlock,
  challenges: ChallengesBlock,
  stats: StatsBlock,
};

/**
 * Rend un bloc de `projects.json`, en résolvant les clés i18n dans `ns`.
 * `translate` permet à la preview de /admin de brancher un brouillon non
 * enregistré à la place d'i18next, sans dupliquer le rendu.
 */
export default function ProjectBlock({ block, ns, translate }) {
  const { t } = useTranslation();
  const Renderer = RENDERERS[block.type];

  if (!Renderer) {
    if (import.meta.env.DEV) {
      console.warn(`[projects] type de bloc inconnu : "${block.type}"`);
    }
    return null;
  }

  // Toutes les clés d'un bloc sont relatives au projet : project.<ns>.<clé>
  const scoped = translate ?? ((key) => t(`project.${ns}.${key}`));

  return <Renderer block={block} t={scoped} />;
}
