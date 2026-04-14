import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Footer from "../../components/Footer";

function AqmProject() {
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
          {t("project.aqm.title")}
        </motion.h1>
        
        <div className="flex flex-wrap gap-3 mb-8">
          <span className="bg-surface-overlay px-4 py-2 rounded-lg text-sm">IoT</span>
          <span className="bg-surface-overlay px-4 py-2 rounded-lg text-sm">Industrialisation</span>
          <span className="bg-surface-overlay px-4 py-2 rounded-lg text-sm">Production Management</span>
          <span className="bg-surface-overlay px-4 py-2 rounded-lg text-sm">Fusion 360</span>
          <span className="bg-surface-overlay px-4 py-2 rounded-lg text-sm">CAO</span>
        </div>

        <p className="text-xl text-text-secondary leading-relaxed max-w-4xl">
          {t("project.aqm.intro")}
        </p>
      </section>

      {/* MAIN IMAGE */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="rounded-2xl overflow-hidden bg-surface-raised">
          <img 
            src="/images/aqm-hero.jpg" 
            alt="Boîtier AQM"
            className="w-full h-auto"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/1200x600/262626/ffffff?text=AQM+Device'
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
              {t("project.aqm.objective.title")}
            </h3>
            <p className="text-text-secondary text-sm">
              {t("project.aqm.objective.text")}
            </p>
          </div>

          <div className="bg-surface-raised p-6 rounded-2xl">
            <h3 className="text-lg font-semibold mb-2 flex items-center">
              <span className="mr-3">📅</span>
              {t("project.aqm.timeline.title")}
            </h3>
            <p className="text-text-secondary text-sm">
              {t("project.aqm.timeline.text")}
            </p>
          </div>

          <div className="bg-surface-raised p-6 rounded-2xl">
            <h3 className="text-lg font-semibold mb-2 flex items-center">
              <span className="mr-3">👥</span>
              {t("project.aqm.team.title")}
            </h3>
            <p className="text-text-secondary text-sm">
              {t("project.aqm.team.text")}
            </p>
          </div>

        </div>
      </section>

      {/* CONTEXT */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="bg-surface-raised rounded-2xl p-8 md:p-12">
          <h2 className="font-display text-3xl font-semibold mb-6">
            {t("project.aqm.context.title")}
          </h2>
          <div className="space-y-4 text-text-secondary leading-relaxed">
            <p>{t("project.aqm.context.p1")}</p>
            <p>{t("project.aqm.context.p2")}</p>
          </div>
        </div>
      </section>

      {/* TECHNICAL DRAWING */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <h2 className="font-display text-3xl font-semibold mb-8">
          {t("project.aqm.drawing.title")}
        </h2>
        <div className="bg-surface-raised rounded-2xl overflow-hidden">
          <img 
            src="..\src\assets\aqm.png" 
            alt="Dessin technique d'une vue éclaté du dispositif"
            className="w-1/2 h-auto mx-auto"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/1200x800/262626/ffffff?text=Technical+Drawing'
            }}
          />
          <div className="p-4 text-center text-sm text-text-secondary">
            {t("project.aqm.drawing.caption")}
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <h2 className="font-display text-3xl font-semibold mb-8">
          {t("project.aqm.approach.title")}
        </h2>

        <div className="space-y-6">
          
          <div className="bg-surface-raised rounded-2xl p-6 md:p-8">
            <div className="flex items-start mb-4">
              <span className="font-display text-3xl mr-4">1️⃣</span>
              <div>
                <h3 className="text-xl font-semibold mb-3">
                  {t("project.aqm.approach.step1.title")}
                </h3>
                <p className="text-text-secondary">
                  {t("project.aqm.approach.step1.text")}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-surface-raised rounded-2xl p-6 md:p-8">
            <div className="flex items-start mb-4">
              <span className="font-display text-3xl mr-4">2️⃣</span>
              <div>
                <h3 className="text-xl font-semibold mb-3">
                  {t("project.aqm.approach.step2.title")}
                </h3>
                <p className="text-text-secondary">
                  {t("project.aqm.approach.step2.text")}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-surface-raised rounded-2xl p-6 md:p-8">
            <div className="flex items-start mb-4">
              <span className="font-display text-3xl mr-4">3️⃣</span>
              <div>
                <h3 className="text-xl font-semibold mb-3">
                  {t("project.aqm.approach.step3.title")}
                </h3>
                <p className="text-text-secondary">
                  {t("project.aqm.approach.step3.text")}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-surface-raised rounded-2xl p-6 md:p-8">
            <div className="flex items-start mb-4">
              <span className="font-display text-3xl mr-4">4️⃣</span>
              <div>
                <h3 className="text-xl font-semibold mb-3">
                  {t("project.aqm.approach.step4.title")}
                </h3>
                <p className="text-text-secondary">
                  {t("project.aqm.approach.step4.text")}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-surface-raised rounded-2xl p-6 md:p-8">
            <div className="flex items-start mb-4">
              <span className="font-display text-3xl mr-4">5️⃣</span>
              <div>
                <h3 className="text-xl font-semibold mb-3">
                  {t("project.aqm.approach.step5.title")}
                </h3>
                <p className="text-text-secondary">
                  {t("project.aqm.approach.step5.text")}
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* KEY ASPECTS */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <h2 className="font-display text-3xl font-semibold mb-8">
          {t("project.aqm.aspects.title")}
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          
          <div className="bg-surface-raised p-6 rounded-2xl">
            <div className="flex items-start mb-4">
              <span className="text-2xl mr-4">🔧</span>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  {t("project.aqm.aspects.design.title")}
                </h3>
                <p className="text-text-secondary text-sm">
                  {t("project.aqm.aspects.design.text")}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-surface-raised p-6 rounded-2xl">
            <div className="flex items-start mb-4">
              <span className="text-2xl mr-4">🏭</span>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  {t("project.aqm.aspects.production.title")}
                </h3>
                <p className="text-text-secondary text-sm">
                  {t("project.aqm.aspects.production.text")}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-surface-raised p-6 rounded-2xl">
            <div className="flex items-start mb-4">
              <span className="text-2xl mr-4">💰</span>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  {t("project.aqm.aspects.financial.title")}
                </h3>
                <p className="text-text-secondary text-sm">
                  {t("project.aqm.aspects.financial.text")}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-surface-raised p-6 rounded-2xl">
            <div className="flex items-start mb-4">
              <span className="text-2xl mr-4">📈</span>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  {t("project.aqm.aspects.optimization.title")}
                </h3>
                <p className="text-text-secondary text-sm">
                  {t("project.aqm.aspects.optimization.text")}
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* TECHNICAL STACK */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <h2 className="font-display text-3xl font-semibold mb-8">
          {t("project.aqm.technical.title")}
        </h2>

        <div className="bg-surface-raised rounded-2xl p-8">
          <div className="grid md:grid-cols-2 gap-8">
            
            <div>
              <h3 className="text-xl font-semibold mb-4">
                {t("project.aqm.technical.design")}
              </h3>
              <ul className="space-y-2 text-text-secondary">
                <li className="flex items-start">
                  <span className="text-text-primary mr-2">•</span>
                  <span>{t("project.aqm.technical.fusion360")}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-text-primary mr-2">•</span>
                  <span>{t("project.aqm.technical.technical")}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-text-primary mr-2">•</span>
                  <span>{t("project.aqm.technical.assembly")}</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">
                {t("project.aqm.technical.management")}
              </h3>
              <ul className="space-y-2 text-text-secondary">
                <li className="flex items-start">
                  <span className="text-text-primary mr-2">•</span>
                  <span>{t("project.aqm.technical.productionManagement")}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-text-primary mr-2">•</span>
                  <span>{t("project.aqm.technical.costAnalysis")}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-text-primary mr-2">•</span>
                  <span>{t("project.aqm.technical.processOptimization")}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-text-primary mr-2">•</span>
                  <span>{t("project.aqm.technical.documentation")}</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* INDUSTRIALIZATION PROCESS */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="bg-gradient-to-br from-green-950/30 to-surface-raised rounded-2xl p-8 md:p-12 border border-green-900/20">
          <h2 className="font-display text-3xl font-semibold mb-6">
            {t("project.aqm.industrialization.title")}
          </h2>
          <div className="space-y-4 text-text-secondary leading-relaxed mb-6">
            <p>{t("project.aqm.industrialization.p1")}</p>
            <p>{t("project.aqm.industrialization.p2")}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-surface-base/50 rounded-xl p-6 text-center">
              <div className="text-green-400 font-semibold mb-2">{t("project.aqm.industrialization.phase1")}</div>
              <div className="text-sm text-text-secondary">{t("project.aqm.industrialization.phase1Text")}</div>
            </div>
            <div className="bg-surface-base/50 rounded-xl p-6 text-center">
              <div className="text-green-400 font-semibold mb-2">{t("project.aqm.industrialization.phase2")}</div>
              <div className="text-sm text-text-secondary">{t("project.aqm.industrialization.phase2Text")}</div>
            </div>
            <div className="bg-surface-base/50 rounded-xl p-6 text-center">
              <div className="text-green-400 font-semibold mb-2">{t("project.aqm.industrialization.phase3")}</div>
              <div className="text-sm text-text-secondary">{t("project.aqm.industrialization.phase3Text")}</div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS DEVELOPED */}
      <section className="max-w-6xl mx-auto px-6 pb-32">
        <div className="bg-gradient-to-br from-surface-raised to-surface-overlay border border-border-subtle rounded-2xl p-8 md:p-12">
          <h2 className="font-display text-3xl font-semibold mb-6">
            {t("project.aqm.skills.title")}
          </h2>
          <div className="space-y-4 text-text-secondary leading-relaxed">
            <p>{t("project.aqm.skills.p1")}</p>
            <p>{t("project.aqm.skills.p2")}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="bg-surface-base/50 rounded-xl p-6 text-center">
              <div className="text-2xl mb-2">🏭</div>
              <div className="font-semibold mb-1">{t("project.aqm.skills.badge1.title")}</div>
              <div className="text-sm text-text-secondary">{t("project.aqm.skills.badge1.text")}</div>
            </div>
            <div className="bg-surface-base/50 rounded-xl p-6 text-center">
              <div className="text-2xl mb-2">💼</div>
              <div className="font-semibold mb-1">{t("project.aqm.skills.badge2.title")}</div>
              <div className="text-sm text-text-secondary">{t("project.aqm.skills.badge2.text")}</div>
            </div>
            <div className="bg-surface-base/50 rounded-xl p-6 text-center">
              <div className="text-2xl mb-2">🎨</div>
              <div className="font-semibold mb-1">{t("project.aqm.skills.badge3.title")}</div>
              <div className="text-sm text-text-secondary">{t("project.aqm.skills.badge3.text")}</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

    </div>
  )
}

export default AqmProject