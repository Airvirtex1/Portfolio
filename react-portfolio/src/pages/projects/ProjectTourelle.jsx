import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Footer from "../../components/Footer";

function TourelleProject() {
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
          {t("project.tourelle.title")}
        </motion.h1>
        
        <div className="flex flex-wrap gap-3 mb-8">
          <span className="bg-surface-overlay px-4 py-2 rounded-lg text-sm">Python</span>
          <span className="bg-surface-overlay px-4 py-2 rounded-lg text-sm">Raspberry Pi</span>
          <span className="bg-surface-overlay px-4 py-2 rounded-lg text-sm">Vision par Ordinateur</span>
          <span className="bg-surface-overlay px-4 py-2 rounded-lg text-sm">Reconnaissance Faciale</span>
          <span className="bg-surface-overlay px-4 py-2 rounded-lg text-sm">Impression 3D</span>
        </div>

        <p className="text-xl text-text-secondary leading-relaxed max-w-4xl">
          {t("project.tourelle.intro")}
        </p>
      </section>

      {/* MAIN IMAGE */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="rounded-2xl overflow-hidden bg-surface-raised">
          <img 
            src="/images/tourelle-hero.jpg" 
            alt="Tourelle de Reconnaissance Faciale"
            className="w-full h-auto"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/1200x600/262626/ffffff?text=Tourelle+Reconnaissance+Faciale'
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
              {t("project.tourelle.objective.title")}
            </h3>
            <p className="text-text-secondary text-sm">
              {t("project.tourelle.objective.text")}
            </p>
          </div>

          <div className="bg-surface-raised p-6 rounded-2xl">
            <h3 className="text-lg font-semibold mb-2 flex items-center">
              <span className="mr-3">📅</span>
              {t("project.tourelle.timeline.title")}
            </h3>
            <p className="text-text-secondary text-sm">
              {t("project.tourelle.timeline.text")}
            </p>
          </div>

          <div className="bg-surface-raised p-6 rounded-2xl">
            <h3 className="text-lg font-semibold mb-2 flex items-center">
              <span className="mr-3">👥</span>
              {t("project.tourelle.team.title")}
            </h3>
            <p className="text-text-secondary text-sm">
              {t("project.tourelle.team.text")}
            </p>
          </div>

        </div>
      </section>

      {/* CONTEXT */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="bg-surface-raised rounded-2xl p-8 md:p-12">
          <h2 className="font-display text-3xl font-semibold mb-6">
            {t("project.tourelle.context.title")}
          </h2>
          <div className="space-y-4 text-text-secondary leading-relaxed">
            <p>{t("project.tourelle.context.p1")}</p>
            <p>{t("project.tourelle.context.p2")}</p>
          </div>
        </div>
      </section>

      {/* DEMO IMAGE */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <h2 className="font-display text-3xl font-semibold mb-8">
          {t("project.tourelle.demo.title")}
        </h2>
        <div className="bg-surface-raised rounded-2xl overflow-hidden">
          <img 
            src="/images/tourelle-demo.jpg" 
            alt="Capture d'écran du retour vidéo de la reconnaissance faciale"
            className="w-full h-auto"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/1200x800/262626/ffffff?text=Demo+Reconnaissance+Faciale'
            }}
          />
          <div className="p-4 text-center text-sm text-text-secondary">
            {t("project.tourelle.demo.caption")}
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <h2 className="font-display text-3xl font-semibold mb-8">
          {t("project.tourelle.approach.title")}
        </h2>

        <div className="space-y-6">
          
          <div className="bg-surface-raised rounded-2xl p-6 md:p-8">
            <div className="flex items-start mb-4">
              <span className="font-display text-3xl mr-4">1️⃣</span>
              <div>
                <h3 className="text-xl font-semibold mb-3">
                  {t("project.tourelle.approach.step1.title")}
                </h3>
                <p className="text-text-secondary">
                  {t("project.tourelle.approach.step1.text")}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-surface-raised rounded-2xl p-6 md:p-8">
            <div className="flex items-start mb-4">
              <span className="font-display text-3xl mr-4">2️⃣</span>
              <div>
                <h3 className="text-xl font-semibold mb-3">
                  {t("project.tourelle.approach.step2.title")}
                </h3>
                <p className="text-text-secondary">
                  {t("project.tourelle.approach.step2.text")}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-surface-raised rounded-2xl p-6 md:p-8">
            <div className="flex items-start mb-4">
              <span className="font-display text-3xl mr-4">3️⃣</span>
              <div>
                <h3 className="text-xl font-semibold mb-3">
                  {t("project.tourelle.approach.step3.title")}
                </h3>
                <p className="text-text-secondary">
                  {t("project.tourelle.approach.step3.text")}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-surface-raised rounded-2xl p-6 md:p-8">
            <div className="flex items-start mb-4">
              <span className="font-display text-3xl mr-4">4️⃣</span>
              <div>
                <h3 className="text-xl font-semibold mb-3">
                  {t("project.tourelle.approach.step4.title")}
                </h3>
                <p className="text-text-secondary">
                  {t("project.tourelle.approach.step4.text")}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-surface-raised rounded-2xl p-6 md:p-8">
            <div className="flex items-start mb-4">
              <span className="font-display text-3xl mr-4">5️⃣</span>
              <div>
                <h3 className="text-xl font-semibold mb-3">
                  {t("project.tourelle.approach.step5.title")}
                </h3>
                <p className="text-text-secondary">
                  {t("project.tourelle.approach.step5.text")}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-surface-raised rounded-2xl p-6 md:p-8">
            <div className="flex items-start mb-4">
              <span className="font-display text-3xl mr-4">6️⃣</span>
              <div>
                <h3 className="text-xl font-semibold mb-3">
                  {t("project.tourelle.approach.step6.title")}
                </h3>
                <p className="text-text-secondary">
                  {t("project.tourelle.approach.step6.text")}
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CAD IMAGE */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <h2 className="font-display text-3xl font-semibold mb-8">
          {t("project.tourelle.cad.title")}
        </h2>
        <div className="bg-surface-raised rounded-2xl overflow-hidden">
          <img 
            src="/images/tourelle-cad.jpg" 
            alt="CAO du système de tir"
            className="w-full h-auto"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/1200x800/262626/ffffff?text=CAO+Systeme'
            }}
          />
          <div className="p-4 text-center text-sm text-text-secondary">
            {t("project.tourelle.cad.caption")}
          </div>
        </div>
      </section>

      {/* TECHNICAL FEATURES */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <h2 className="font-display text-3xl font-semibold mb-8">
          {t("project.tourelle.features.title")}
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          
          <div className="bg-surface-raised p-6 rounded-2xl">
            <div className="flex items-start mb-4">
              <span className="text-2xl mr-4">👁️</span>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  {t("project.tourelle.features.recognition.title")}
                </h3>
                <p className="text-text-secondary text-sm">
                  {t("project.tourelle.features.recognition.text")}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-surface-raised p-6 rounded-2xl">
            <div className="flex items-start mb-4">
              <span className="text-2xl mr-4">🔄</span>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  {t("project.tourelle.features.motor.title")}
                </h3>
                <p className="text-text-secondary text-sm">
                  {t("project.tourelle.features.motor.text")}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-surface-raised p-6 rounded-2xl">
            <div className="flex items-start mb-4">
              <span className="text-2xl mr-4">🖨️</span>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  {t("project.tourelle.features.mechanical.title")}
                </h3>
                <p className="text-text-secondary text-sm">
                  {t("project.tourelle.features.mechanical.text")}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-surface-raised p-6 rounded-2xl">
            <div className="flex items-start mb-4">
              <span className="text-2xl mr-4">📹</span>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  {t("project.tourelle.features.communication.title")}
                </h3>
                <p className="text-text-secondary text-sm">
                  {t("project.tourelle.features.communication.text")}
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* TECHNICAL STACK */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <h2 className="font-display text-3xl font-semibold mb-8">
          {t("project.tourelle.technical.title")}
        </h2>

        <div className="bg-surface-raised rounded-2xl p-8">
          <div className="grid md:grid-cols-2 gap-8">
            
            <div>
              <h3 className="text-xl font-semibold mb-4">
                {t("project.tourelle.technical.hardware")}
              </h3>
              <ul className="space-y-2 text-text-secondary">
                <li className="flex items-start">
                  <span className="text-text-primary mr-2">•</span>
                  <span>{t("project.tourelle.technical.raspberry")}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-text-primary mr-2">•</span>
                  <span>{t("project.tourelle.technical.camera")}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-text-primary mr-2">•</span>
                  <span>{t("project.tourelle.technical.motors")}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-text-primary mr-2">•</span>
                  <span>{t("project.tourelle.technical.print3d")}</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">
                {t("project.tourelle.technical.software")}
              </h3>
              <ul className="space-y-2 text-text-secondary">
                <li className="flex items-start">
                  <span className="text-text-primary mr-2">•</span>
                  <span>{t("project.tourelle.technical.python")}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-text-primary mr-2">•</span>
                  <span>{t("project.tourelle.technical.opencv")}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-text-primary mr-2">•</span>
                  <span>{t("project.tourelle.technical.motorControl")}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-text-primary mr-2">•</span>
                  <span>{t("project.tourelle.technical.cad")}</span>
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
            {t("project.tourelle.skills.title")}
          </h2>
          <div className="space-y-4 text-text-secondary leading-relaxed">
            <p>{t("project.tourelle.skills.p1")}</p>
            <p>{t("project.tourelle.skills.p2")}</p>
            <p>{t("project.tourelle.skills.p3")}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="bg-surface-base/50 rounded-xl p-6 text-center">
              <div className="text-2xl mb-2">🐍</div>
              <div className="font-semibold mb-1">{t("project.tourelle.skills.badge1.title")}</div>
              <div className="text-sm text-text-secondary">{t("project.tourelle.skills.badge1.text")}</div>
            </div>
            <div className="bg-surface-base/50 rounded-xl p-6 text-center">
              <div className="text-2xl mb-2">🔧</div>
              <div className="font-semibold mb-1">{t("project.tourelle.skills.badge2.title")}</div>
              <div className="text-sm text-text-secondary">{t("project.tourelle.skills.badge2.text")}</div>
            </div>
            <div className="bg-surface-base/50 rounded-xl p-6 text-center">
              <div className="text-2xl mb-2">🎥</div>
              <div className="font-semibold mb-1">{t("project.tourelle.skills.badge3.title")}</div>
              <div className="text-sm text-text-secondary">{t("project.tourelle.skills.badge3.text")}</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

    </div>
  )
}

export default TourelleProject