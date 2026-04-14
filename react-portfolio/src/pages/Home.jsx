import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Footer from "../components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

function Home() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-surface-base text-text-primary transition-colors duration-300">

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="max-w-container mx-auto px-6 pt-36 pb-24">
        <motion.div
          className="max-w-3xl"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          <motion.p variants={fadeUp} className="font-mono text-accent text-sm mb-4 tracking-widest uppercase">
            Embedded Systems · IoT
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="font-display text-5xl md:text-6xl font-bold leading-tight mb-6"
          >
            {t("home.title")}
          </motion.h1>

          <motion.p variants={fadeUp} className="text-lg text-text-secondary mb-10 leading-relaxed">
            {t("home.subtitle")}
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
            <Link
              to="/projects"
              className="bg-accent text-zinc-950 px-6 py-3 rounded-lg font-semibold hover:bg-accent-muted transition-colors duration-150"
            >
              {t("home.viewProjects")}
            </Link>
            <Link
              to="/contact"
              className="border border-border-strong px-6 py-3 rounded-lg text-text-primary hover:border-accent hover:text-accent transition-colors duration-150"
            >
              {t("home.contact")}
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* ── About snapshot ───────────────────────────────────── */}
      <motion.section
        className="max-w-container mx-auto px-6 pb-32"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="bg-surface-raised border border-border-subtle rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl font-semibold mb-6">{t("home.aboutTitle")}</h2>
              <p className="text-text-secondary leading-relaxed mb-4">{t("home.aboutText")}</p>
              <p className="text-text-secondary leading-relaxed">{t("home.aboutText2")}</p>
            </div>

            <div className="space-y-3">
              {[
                { title: t("home.currentFocus"), content: "STM32 · ESP32 · IoT · Firmware" },
                { title: t("home.education"), content: "EFREI — Master Embedded Systems & IoT" },
                { title: t("home.availability"), content: t("home.availabilityText") },
              ].map(({ title, content }) => (
                <div key={title} className="bg-surface-overlay border border-border-subtle p-4 rounded-xl">
                  <p className="font-medium text-text-primary mb-1 text-sm">{title}</p>
                  <p className="text-sm text-text-secondary font-mono">{content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* ── Selected projects ────────────────────────────────── */}
      <section className="max-w-container mx-auto px-6 pb-32">
        <motion.h2
          className="font-display text-3xl font-semibold mb-10"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          {t("home.selectedProjects")}
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { titleKey: "project.portfolio.title", subtitleKey: "project.portfolio.intro" },
            { titleKey: "project.meteo.title", subtitleKey: "project.meteo.intro" },
            { titleKey: "project.robotcrabe.title", subtitleKey: "project.crabe.intro" }

          ].map(({ titleKey, subtitleKey }, i) => (
            <motion.div
              key={titleKey}
              className="bg-surface-raised border border-border-subtle p-6 rounded-2xl cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ y: -5, transition: { type: "spring", stiffness: 400, damping: 22 } }}
            >
              <h3 className="font-display text-lg font-semibold mb-2">{t(titleKey)}</h3>
              <p className="text-text-secondary text-sm mb-4 leading-relaxed">{t(subtitleKey)}</p>
              <Link to="/projects" className="text-sm text-accent hover:text-accent-muted transition-colors">
                {t("home.readMore")} →
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
