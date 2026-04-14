import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Footer from "../../components/Footer";

function ArgentiqueProject() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-surface-base text-text-primary transition-colors duration-300">
      
      {/* HERO SECTION */}
      <section className="max-w-6xl mx-auto px-6 pt-32 pb-16">
        <motion.div initial={{ opacity:0, x:-12 }} animate={{ opacity:1, x:0 }} transition={{ duration:0.4 }}>
        <Link
          to="/projects"
          className="inline-flex items-center text-text-secondary hover:text-text-primary transition mb-8"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          {t("project.backToProjects")}
        </Link>
        </motion.div>

        <motion.h1 initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.5, delay:0.1 }} className="font-display text-5xl md:text-6xl font-bold mb-6">
          {t("project.argentique.title")}
        </motion.h1>

        <div className="flex flex-wrap gap-3 mb-8">
          <span className="bg-surface-overlay px-4 py-2 rounded-lg text-sm">ESP32</span>
          <span className="bg-surface-overlay px-4 py-2 rounded-lg text-sm">Impression 3D</span>
          <span className="bg-surface-overlay px-4 py-2 rounded-lg text-sm">433 MHz</span>
          <span className="bg-surface-overlay px-4 py-2 rounded-lg text-sm">Prototypage</span>
          <span className="bg-surface-overlay px-4 py-2 rounded-lg text-sm">Photographie</span>
        </div>

        <p className="text-xl text-text-secondary leading-relaxed max-w-4xl">
          {t("project.argentique.intro")}
        </p>
      </section>

      {/* MAIN IMAGE */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="rounded-2xl overflow-hidden bg-surface-raised">
          <img
            src="/images/argentique-hero.jpg"
            alt="Déclencheur Photo Argentique"
            className="w-full h-auto"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/1200x600/262626/ffffff?text=Film+Camera+Trigger'
            }}
          />
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-surface-raised p-6 rounded-2xl">
            <h3 className="text-lg font-semibold mb-2 flex items-center">
              <span className="mr-3">🎯</span>
              {t("project.argentique.objective.title")}
            </h3>
            <p className="text-text-secondary text-sm">
              {t("project.argentique.objective.text")}
            </p>
          </div>

          <div className="bg-surface-raised p-6 rounded-2xl">
            <h3 className="text-lg font-semibold mb-2 flex items-center">
              <span className="mr-3">📅</span>
              {t("project.argentique.timeline.title")}
            </h3>
            <p className="text-text-secondary text-sm">
              {t("project.argentique.timeline.text")}
            </p>
          </div>

          <div className="bg-surface-raised p-6 rounded-2xl">
            <h3 className="text-lg font-semibold mb-2 flex items-center">
              <span className="mr-3">💼</span>
              {t("project.argentique.type.title")}
            </h3>
            <p className="text-text-secondary text-sm">
              {t("project.argentique.type.text")}
            </p>
          </div>

        </div>
      </section>

      {/* CONTEXT */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="bg-surface-raised rounded-2xl p-8 md:p-12">
          <h2 className="font-display text-3xl font-semibold mb-6">
            {t("project.argentique.context.title")}
          </h2>
          <div className="space-y-4 text-text-secondary leading-relaxed">
            <p>{t("project.argentique.context.p1")}</p>
            <p>{t("project.argentique.context.p2")}</p>
          </div>
        </div>
      </section>

      {/* DEVICE OBJECTIVES */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <h2 className="font-display text-3xl font-semibold mb-8">
          {t("project.argentique.goals.title")}
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-surface-raised p-6 rounded-2xl">
            <div className="flex items-start mb-4">
              <span className="text-2xl mr-4">📷</span>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  {t("project.argentique.goals.trigger.title")}
                </h3>
                <p className="text-text-secondary text-sm">
                  {t("project.argentique.goals.trigger.text")}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-surface-raised p-6 rounded-2xl">
            <div className="flex items-start mb-4">
              <span className="text-2xl mr-4">⏱️</span>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  {t("project.argentique.goals.modes.title")}
                </h3>
                <p className="text-text-secondary text-sm">
                  {t("project.argentique.goals.modes.text")}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-surface-raised p-6 rounded-2xl">
            <div className="flex items-start mb-4">
              <span className="text-2xl mr-4">🔋</span>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  {t("project.argentique.goals.portable.title")}
                </h3>
                <p className="text-text-secondary text-sm">
                  {t("project.argentique.goals.portable.text")}
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* PROTOTYPE IMAGE */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <h2 className="font-display text-3xl font-semibold mb-8">
          {t("project.argentique.prototype.title")}
        </h2>
        <div className="bg-surface-raised rounded-2xl overflow-hidden">
          <img
            src="/images/argentique-prototype.jpg"
            alt="Prototype du déclencheur photo argentique"
            className="w-full h-auto"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/1200x800/262626/ffffff?text=Prototype+V1'
            }}
          />
          <div className="p-4 text-center text-sm text-text-secondary">
            {t("project.argentique.prototype.caption")}
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <h2 className="font-display text-3xl font-semibold mb-8">
          {t("project.argentique.approach.title")}
        </h2>

        <div className="space-y-6">

          <div className="bg-surface-raised rounded-2xl p-6 md:p-8">
            <div className="flex items-start">
              <span className="font-display text-3xl mr-4">1️⃣</span>
              <div>
                <h3 className="text-xl font-semibold mb-3">
                  {t("project.argentique.approach.step1.title")}
                </h3>
                <p className="text-text-secondary">
                  {t("project.argentique.approach.step1.text")}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-surface-raised rounded-2xl p-6 md:p-8">
            <div className="flex items-start">
              <span className="font-display text-3xl mr-4">2️⃣</span>
              <div>
                <h3 className="text-xl font-semibold mb-3">
                  {t("project.argentique.approach.step2.title")}
                </h3>
                <p className="text-text-secondary">
                  {t("project.argentique.approach.step2.text")}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-surface-raised rounded-2xl p-6 md:p-8">
            <div className="flex items-start">
              <span className="font-display text-3xl mr-4">3️⃣</span>
              <div>
                <h3 className="text-xl font-semibold mb-3">
                  {t("project.argentique.approach.step3.title")}
                </h3>
                <p className="text-text-secondary">
                  {t("project.argentique.approach.step3.text")}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-surface-raised rounded-2xl p-6 md:p-8">
            <div className="flex items-start">
              <span className="font-display text-3xl mr-4">4️⃣</span>
              <div>
                <h3 className="text-xl font-semibold mb-3">
                  {t("project.argentique.approach.step4.title")}
                </h3>
                <p className="text-text-secondary">
                  {t("project.argentique.approach.step4.text")}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-surface-raised rounded-2xl p-6 md:p-8">
            <div className="flex items-start">
              <span className="font-display text-3xl mr-4">5️⃣</span>
              <div>
                <h3 className="text-xl font-semibold mb-3">
                  {t("project.argentique.approach.step5.title")}
                </h3>
                <p className="text-text-secondary">
                  {t("project.argentique.approach.step5.text")}
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* PROJECT STATUS */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="bg-gradient-to-br from-yellow-950/30 to-surface-raised rounded-2xl p-8 md:p-12 border border-yellow-900/20">
          <h2 className="font-display text-3xl font-semibold mb-6 flex items-center gap-3">
            <span>⚗️</span>
            {t("project.argentique.status.title")}
          </h2>
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 px-4 py-2 rounded-full text-sm font-medium">
              {t("project.argentique.status.badge")}
            </span>
          </div>
          <p className="text-text-secondary leading-relaxed">
            {t("project.argentique.status.text")}
          </p>
        </div>
      </section>

      {/* TECHNICAL STACK */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <h2 className="font-display text-3xl font-semibold mb-8">
          {t("project.argentique.technical.title")}
        </h2>

        <div className="bg-surface-raised rounded-2xl p-8">
          <div className="grid md:grid-cols-2 gap-8">

            <div>
              <h3 className="text-xl font-semibold mb-4">
                {t("project.argentique.technical.hardware")}
              </h3>
              <ul className="space-y-2 text-text-secondary">
                <li className="flex items-start">
                  <span className="text-text-primary mr-2">•</span>
                  <span>{t("project.argentique.technical.esp32")}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-text-primary mr-2">•</span>
                  <span>{t("project.argentique.technical.servo")}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-text-primary mr-2">•</span>
                  <span>{t("project.argentique.technical.radio")}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-text-primary mr-2">•</span>
                  <span>{t("project.argentique.technical.battery")}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-text-primary mr-2">•</span>
                  <span>{t("project.argentique.technical.bms")}</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">
                {t("project.argentique.technical.software")}
              </h3>
              <ul className="space-y-2 text-text-secondary">
                <li className="flex items-start">
                  <span className="text-text-primary mr-2">•</span>
                  <span>{t("project.argentique.technical.programming")}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-text-primary mr-2">•</span>
                  <span>{t("project.argentique.technical.modes")}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-text-primary mr-2">•</span>
                  <span>{t("project.argentique.technical.signal")}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-text-primary mr-2">•</span>
                  <span>{t("project.argentique.technical.cad")}</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* SKILLS DEVELOPED */}
      <section className="max-w-6xl mx-auto px-6 pb-32">
        <div className="bg-gradient-to-br from-surface-raised to-surface-overlay border border-border-subtle rounded-2xl p-8 md:p-12">
          <h2 className="font-display text-3xl font-semibold mb-6">
            {t("project.argentique.skills.title")}
          </h2>
          <div className="space-y-4 text-text-secondary leading-relaxed">
            <p>{t("project.argentique.skills.p1")}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="bg-surface-base/50 rounded-xl p-6 text-center">
              <div className="text-2xl mb-2">📡</div>
              <div className="font-semibold mb-1">{t("project.argentique.skills.badge1.title")}</div>
              <div className="text-sm text-text-secondary">{t("project.argentique.skills.badge1.text")}</div>
            </div>
            <div className="bg-surface-base/50 rounded-xl p-6 text-center">
              <div className="text-2xl mb-2">🖨️</div>
              <div className="font-semibold mb-1">{t("project.argentique.skills.badge2.title")}</div>
              <div className="text-sm text-text-secondary">{t("project.argentique.skills.badge2.text")}</div>
            </div>
            <div className="bg-surface-base/50 rounded-xl p-6 text-center">
              <div className="text-2xl mb-2">🔋</div>
              <div className="font-semibold mb-1">{t("project.argentique.skills.badge3.title")}</div>
              <div className="text-sm text-text-secondary">{t("project.argentique.skills.badge3.text")}</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

    </div>
  )
}

export default ArgentiqueProject