import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"

function TourelleProject() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      
      {/* HERO SECTION */}
      <section className="max-w-6xl mx-auto px-6 pt-32 pb-16">
        <Link 
          to="/projects" 
          className="inline-flex items-center text-neutral-400 hover:text-white transition mb-8"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          {t("project.backToProjects")}
        </Link>

        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          {t("project.tourelle.title")}
        </h1>
        
        <div className="flex flex-wrap gap-3 mb-8">
          <span className="bg-neutral-800 px-4 py-2 rounded-lg text-sm">Python</span>
          <span className="bg-neutral-800 px-4 py-2 rounded-lg text-sm">Raspberry Pi</span>
          <span className="bg-neutral-800 px-4 py-2 rounded-lg text-sm">Vision par Ordinateur</span>
          <span className="bg-neutral-800 px-4 py-2 rounded-lg text-sm">Reconnaissance Faciale</span>
          <span className="bg-neutral-800 px-4 py-2 rounded-lg text-sm">Impression 3D</span>
        </div>

        <p className="text-xl text-neutral-400 leading-relaxed max-w-4xl">
          {t("project.tourelle.intro")}
        </p>
      </section>

      {/* MAIN IMAGE */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="rounded-2xl overflow-hidden bg-neutral-900">
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
          
          <div className="bg-neutral-900 p-6 rounded-2xl">
            <h3 className="text-lg font-semibold mb-2 flex items-center">
              <span className="mr-3">🎯</span>
              {t("project.tourelle.objective.title")}
            </h3>
            <p className="text-neutral-400 text-sm">
              {t("project.tourelle.objective.text")}
            </p>
          </div>

          <div className="bg-neutral-900 p-6 rounded-2xl">
            <h3 className="text-lg font-semibold mb-2 flex items-center">
              <span className="mr-3">📅</span>
              {t("project.tourelle.timeline.title")}
            </h3>
            <p className="text-neutral-400 text-sm">
              {t("project.tourelle.timeline.text")}
            </p>
          </div>

          <div className="bg-neutral-900 p-6 rounded-2xl">
            <h3 className="text-lg font-semibold mb-2 flex items-center">
              <span className="mr-3">👥</span>
              {t("project.tourelle.team.title")}
            </h3>
            <p className="text-neutral-400 text-sm">
              {t("project.tourelle.team.text")}
            </p>
          </div>

        </div>
      </section>

      {/* CONTEXT */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="bg-neutral-900 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-semibold mb-6">
            {t("project.tourelle.context.title")}
          </h2>
          <div className="space-y-4 text-neutral-400 leading-relaxed">
            <p>{t("project.tourelle.context.p1")}</p>
            <p>{t("project.tourelle.context.p2")}</p>
          </div>
        </div>
      </section>

      {/* DEMO IMAGE */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <h2 className="text-3xl font-semibold mb-8">
          {t("project.tourelle.demo.title")}
        </h2>
        <div className="bg-neutral-900 rounded-2xl overflow-hidden">
          <img 
            src="/images/tourelle-demo.jpg" 
            alt="Capture d'écran du retour vidéo de la reconnaissance faciale"
            className="w-full h-auto"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/1200x800/262626/ffffff?text=Demo+Reconnaissance+Faciale'
            }}
          />
          <div className="p-4 text-center text-sm text-neutral-400">
            {t("project.tourelle.demo.caption")}
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <h2 className="text-3xl font-semibold mb-8">
          {t("project.tourelle.approach.title")}
        </h2>

        <div className="space-y-6">
          
          <div className="bg-neutral-900 rounded-2xl p-6 md:p-8">
            <div className="flex items-start mb-4">
              <span className="text-3xl mr-4">1️⃣</span>
              <div>
                <h3 className="text-xl font-semibold mb-3">
                  {t("project.tourelle.approach.step1.title")}
                </h3>
                <p className="text-neutral-400">
                  {t("project.tourelle.approach.step1.text")}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-neutral-900 rounded-2xl p-6 md:p-8">
            <div className="flex items-start mb-4">
              <span className="text-3xl mr-4">2️⃣</span>
              <div>
                <h3 className="text-xl font-semibold mb-3">
                  {t("project.tourelle.approach.step2.title")}
                </h3>
                <p className="text-neutral-400">
                  {t("project.tourelle.approach.step2.text")}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-neutral-900 rounded-2xl p-6 md:p-8">
            <div className="flex items-start mb-4">
              <span className="text-3xl mr-4">3️⃣</span>
              <div>
                <h3 className="text-xl font-semibold mb-3">
                  {t("project.tourelle.approach.step3.title")}
                </h3>
                <p className="text-neutral-400">
                  {t("project.tourelle.approach.step3.text")}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-neutral-900 rounded-2xl p-6 md:p-8">
            <div className="flex items-start mb-4">
              <span className="text-3xl mr-4">4️⃣</span>
              <div>
                <h3 className="text-xl font-semibold mb-3">
                  {t("project.tourelle.approach.step4.title")}
                </h3>
                <p className="text-neutral-400">
                  {t("project.tourelle.approach.step4.text")}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-neutral-900 rounded-2xl p-6 md:p-8">
            <div className="flex items-start mb-4">
              <span className="text-3xl mr-4">5️⃣</span>
              <div>
                <h3 className="text-xl font-semibold mb-3">
                  {t("project.tourelle.approach.step5.title")}
                </h3>
                <p className="text-neutral-400">
                  {t("project.tourelle.approach.step5.text")}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-neutral-900 rounded-2xl p-6 md:p-8">
            <div className="flex items-start mb-4">
              <span className="text-3xl mr-4">6️⃣</span>
              <div>
                <h3 className="text-xl font-semibold mb-3">
                  {t("project.tourelle.approach.step6.title")}
                </h3>
                <p className="text-neutral-400">
                  {t("project.tourelle.approach.step6.text")}
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CAD IMAGE */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <h2 className="text-3xl font-semibold mb-8">
          {t("project.tourelle.cad.title")}
        </h2>
        <div className="bg-neutral-900 rounded-2xl overflow-hidden">
          <img 
            src="/images/tourelle-cad.jpg" 
            alt="CAO du système de tir"
            className="w-full h-auto"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/1200x800/262626/ffffff?text=CAO+Systeme'
            }}
          />
          <div className="p-4 text-center text-sm text-neutral-400">
            {t("project.tourelle.cad.caption")}
          </div>
        </div>
      </section>

      {/* TECHNICAL FEATURES */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <h2 className="text-3xl font-semibold mb-8">
          {t("project.tourelle.features.title")}
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          
          <div className="bg-neutral-900 p-6 rounded-2xl">
            <div className="flex items-start mb-4">
              <span className="text-2xl mr-4">👁️</span>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  {t("project.tourelle.features.recognition.title")}
                </h3>
                <p className="text-neutral-400 text-sm">
                  {t("project.tourelle.features.recognition.text")}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-neutral-900 p-6 rounded-2xl">
            <div className="flex items-start mb-4">
              <span className="text-2xl mr-4">🔄</span>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  {t("project.tourelle.features.motor.title")}
                </h3>
                <p className="text-neutral-400 text-sm">
                  {t("project.tourelle.features.motor.text")}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-neutral-900 p-6 rounded-2xl">
            <div className="flex items-start mb-4">
              <span className="text-2xl mr-4">🖨️</span>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  {t("project.tourelle.features.mechanical.title")}
                </h3>
                <p className="text-neutral-400 text-sm">
                  {t("project.tourelle.features.mechanical.text")}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-neutral-900 p-6 rounded-2xl">
            <div className="flex items-start mb-4">
              <span className="text-2xl mr-4">📹</span>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  {t("project.tourelle.features.communication.title")}
                </h3>
                <p className="text-neutral-400 text-sm">
                  {t("project.tourelle.features.communication.text")}
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* TECHNICAL STACK */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <h2 className="text-3xl font-semibold mb-8">
          {t("project.tourelle.technical.title")}
        </h2>

        <div className="bg-neutral-900 rounded-2xl p-8">
          <div className="grid md:grid-cols-2 gap-8">
            
            <div>
              <h3 className="text-xl font-semibold mb-4">
                {t("project.tourelle.technical.hardware")}
              </h3>
              <ul className="space-y-2 text-neutral-400">
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  <span>{t("project.tourelle.technical.raspberry")}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  <span>{t("project.tourelle.technical.camera")}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  <span>{t("project.tourelle.technical.motors")}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  <span>{t("project.tourelle.technical.print3d")}</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">
                {t("project.tourelle.technical.software")}
              </h3>
              <ul className="space-y-2 text-neutral-400">
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  <span>{t("project.tourelle.technical.python")}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  <span>{t("project.tourelle.technical.opencv")}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  <span>{t("project.tourelle.technical.motorControl")}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  <span>{t("project.tourelle.technical.cad")}</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* SKILLS DEVELOPED */}
      <section className="max-w-6xl mx-auto px-6 pb-32">
        <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-semibold mb-6">
            {t("project.tourelle.skills.title")}
          </h2>
          <div className="space-y-4 text-neutral-400 leading-relaxed">
            <p>{t("project.tourelle.skills.p1")}</p>
            <p>{t("project.tourelle.skills.p2")}</p>
            <p>{t("project.tourelle.skills.p3")}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="bg-neutral-950/50 rounded-xl p-6 text-center">
              <div className="text-2xl mb-2">🐍</div>
              <div className="font-semibold mb-1">{t("project.tourelle.skills.badge1.title")}</div>
              <div className="text-sm text-neutral-400">{t("project.tourelle.skills.badge1.text")}</div>
            </div>
            <div className="bg-neutral-950/50 rounded-xl p-6 text-center">
              <div className="text-2xl mb-2">🔧</div>
              <div className="font-semibold mb-1">{t("project.tourelle.skills.badge2.title")}</div>
              <div className="text-sm text-neutral-400">{t("project.tourelle.skills.badge2.text")}</div>
            </div>
            <div className="bg-neutral-950/50 rounded-xl p-6 text-center">
              <div className="text-2xl mb-2">🎥</div>
              <div className="font-semibold mb-1">{t("project.tourelle.skills.badge3.title")}</div>
              <div className="text-sm text-neutral-400">{t("project.tourelle.skills.badge3.text")}</div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-neutral-800">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            
            {/* Column 1 - About */}
            <div>
              <h3 className="font-semibold mb-4">Matéo Repulles</h3>
              <p className="text-sm text-neutral-400">
                Embedded Systems & IoT Engineering Student
              </p>
              <p className="text-sm text-neutral-400 mt-2">
                Paris, France
              </p>
            </div>

            {/* Column 2 - Quick Links */}
            <div>
              <h3 className="font-semibold mb-4">{t("footer.quickLinks")}</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/projects" className="text-sm text-neutral-400 hover:text-white transition">
                    {t("footer.projects")}
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-sm text-neutral-400 hover:text-white transition">
                    {t("footer.about")}
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-sm text-neutral-400 hover:text-white transition">
                    {t("footer.contact")}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3 - Social Links */}
            <div>
              <h3 className="font-semibold mb-4">{t("footer.connect")}</h3>
              <div className="flex gap-4">
                <a 
                  href="https://www.linkedin.com/in/mateo-repulles" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-neutral-800 p-3 rounded-lg hover:bg-neutral-700 transition"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                
                <a 
                  href="https://github.com/mateorepulles" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-neutral-800 p-3 rounded-lg hover:bg-neutral-700 transition"
                  aria-label="GitHub"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>

                <a 
                  href="mailto:mateo.repulles.perso@gmail.com"
                  className="bg-neutral-800 p-3 rounded-lg hover:bg-neutral-700 transition"
                  aria-label="Email"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-neutral-400">
              © 2025 Matéo Repulles. {t("footer.rights")}
            </p>
            <p className="text-sm text-neutral-400">
              {t("footer.madeWith")} React & Tailwind CSS
            </p>
          </div>
        </div>
      </footer>

    </div>
  )
}

export default TourelleProject