import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { skills } from "../data/skills";
import Footer from "../components/Footer";

const slideIn = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

function Section({ children, delay = 0 }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className="max-w-container mx-auto px-4 sm:px-6 pb-12 md:pb-16"
    >
      {children}
    </motion.section>
  );
}

function About() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-surface-base text-text-primary transition-colors duration-300">

      {/* Hero */}
      <motion.section
        className="max-w-container mx-auto px-4 sm:px-6 pt-28 sm:pt-32 pb-12 md:pb-16"
        variants={slideIn}
        initial="hidden"
        animate="visible"
      >
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-5 md:mb-6">{t("about.title")}</h1>
        <p className="text-base md:text-xl text-text-secondary max-w-3xl leading-relaxed">{t("about.intro")}</p>
      </motion.section>

      {/* Bio */}
      <Section>
        <div className="bg-surface-raised border border-border-subtle rounded-2xl p-8 md:p-12">
          <h2 className="font-display text-3xl font-semibold mb-6">{t("about.whoAmI")}</h2>
          <div className="space-y-4 text-text-secondary leading-relaxed">
            <p>{t("about.bio1")}</p>
            <p>{t("about.bio2")}</p>
            <p>{t("about.bio3")}</p>
          </div>
        </div>
      </Section>

      {/* Experience */}
      <Section>
        <h2 className="font-display text-2xl md:text-3xl font-semibold mb-6 md:mb-8">{t("about.experience")}</h2>
        <div className="space-y-4">
          {[
            {
              key: "exp1",
              tasks: ["task1", "task2"],
            },
            {
              key: "exp2",
              tasks: ["task1", "task2", "task3"],
            },
            {
              key: "exp3",
              tasks: ["task1", "task2", "task3"],
            },
          ].map(({ key, tasks }) => (
            <motion.div
              key={key}
              className="bg-surface-raised border border-border-subtle rounded-2xl p-6 md:p-8"
              whileHover={{ borderColor: "var(--accent)", transition: { duration: 0.2 } }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="font-display text-xl font-semibold mb-1">{t(`about.${key}.title`)}</h3>
                  <p className="text-text-secondary">{t(`about.${key}.company`)}</p>
                </div>
                <span className="font-mono text-xs text-accent bg-accent-bg border border-accent/20 px-3 py-1 rounded-full mt-2 md:mt-0 self-start">
                  {t(`about.${key}.date`)}
                </span>
              </div>
              <ul className="space-y-2 text-text-secondary">
                {tasks.map((task) => (
                  <li key={task} className="flex items-start gap-2">
                    <span className="text-accent mt-0.5 shrink-0">›</span>
                    {t(`about.${key}.${task}`)}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Skills */}
      <Section>
        <h2 className="font-display text-2xl md:text-3xl font-semibold mb-6 md:mb-8">{t("about.skills")}</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {skills.map(({ id, labelKey, emoji, items }) => (
            <motion.div
              key={id}
              className="bg-surface-raised border border-border-subtle rounded-2xl p-6"
              whileHover={{ borderColor: "var(--accent)", transition: { duration: 0.2 } }}
            >
              <h3 className="font-display text-base font-semibold mb-4 flex items-center gap-2">
                <span>{emoji}</span>
                {t(labelKey)}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="font-mono text-xs bg-accent-bg text-accent border border-accent/20 px-2.5 py-1 rounded-md"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Education */}
      <Section>
        <h2 className="font-display text-2xl md:text-3xl font-semibold mb-6 md:mb-8">{t("about.education")}</h2>
        <div className="space-y-4">
          {[
            { school: "EFREI Engineering School", degreeKey: "about.edu1.degree", focusKey: "about.edu1.focus", years: "2025–2028" },
            { school: "CESI Engineering School",  degreeKey: "about.edu2.degree", focusKey: null,                years: "2022–2025" },
          ].map(({ school, degreeKey, focusKey, years }) => (
            <div key={school} className="bg-surface-raised border border-border-subtle rounded-2xl p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                <div>
                  <h3 className="font-display text-xl font-semibold mb-1">{school}</h3>
                  <p className="text-text-secondary">{t(degreeKey)}</p>
                </div>
                <span className="font-mono text-xs text-accent bg-accent-bg border border-accent/20 px-3 py-1 rounded-full mt-2 md:mt-0 self-start">
                  {years}
                </span>
              </div>
              {focusKey && <p className="text-text-secondary text-sm mt-2">{t(focusKey)}</p>}
            </div>
          ))}
        </div>
      </Section>

      <Footer />
    </div>
  );
}

export default About;
