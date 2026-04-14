import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Footer from "../../components/Footer";

function AmplificationProject() {
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
          {t("project.amplification.title")}
        </h1>
        
        <div className="flex flex-wrap gap-3 mb-8">
          <span className="bg-neutral-800 px-4 py-2 rounded-lg text-sm">Électronique Analogique</span>
          <span className="bg-neutral-800 px-4 py-2 rounded-lg text-sm">Amplification</span>
          <span className="bg-neutral-800 px-4 py-2 rounded-lg text-sm">Filtrage</span>
          <span className="bg-neutral-800 px-4 py-2 rounded-lg text-sm">SIGFOX</span>
          <span className="bg-neutral-800 px-4 py-2 rounded-lg text-sm">IoT</span>
        </div>

        <p className="text-xl text-neutral-400 leading-relaxed max-w-4xl">
          {t("project.amplification.intro")}
        </p>
      </section>

      {/* MAIN IMAGE */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="rounded-2xl overflow-hidden bg-neutral-900">
          <img 
            src="/images/amplification-hero.jpg" 
            alt="Amplificateur Audio Connecté"
            className="w-full h-auto"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/1200x600/262626/ffffff?text=Audio+Amplifier'
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
              {t("project.amplification.objective.title")}
            </h3>
            <p className="text-neutral-400 text-sm">
              {t("project.amplification.objective.text")}
            </p>
          </div>

          <div className="bg-neutral-900 p-6 rounded-2xl">
            <h3 className="text-lg font-semibold mb-2 flex items-center">
              <span className="mr-3">📅</span>
              {t("project.amplification.timeline.title")}
            </h3>
            <p className="text-neutral-400 text-sm">
              {t("project.amplification.timeline.text")}
            </p>
          </div>

          <div className="bg-neutral-900 p-6 rounded-2xl">
            <h3 className="text-lg font-semibold mb-2 flex items-center">
              <span className="mr-3">👥</span>
              {t("project.amplification.team.title")}
            </h3>
            <p className="text-neutral-400 text-sm">
              {t("project.amplification.team.text")}
            </p>
          </div>

        </div>
      </section>

      {/* CONTEXT */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="bg-neutral-900 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-semibold mb-6">
            {t("project.amplification.context.title")}
          </h2>
          <div className="space-y-4 text-neutral-400 leading-relaxed">
            <p>{t("project.amplification.context.p1")}</p>
            <p>{t("project.amplification.context.p2")}</p>
          </div>
        </div>
      </section>

      {/* CIRCUIT DIAGRAM */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <h2 className="text-3xl font-semibold mb-8">
          {t("project.amplification.circuit.title")}
        </h2>
        <div className="bg-neutral-900 rounded-2xl overflow-hidden">
          <img 
            src="/images/amplification-circuit.jpg" 
            alt="Schéma d'un push pull avec des transistors"
            className="w-full h-auto"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/1200x800/262626/ffffff?text=Push+Pull+Circuit'
            }}
          />
          <div className="p-4 text-center text-sm text-neutral-400">
            {t("project.amplification.circuit.caption")}
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <h2 className="text-3xl font-semibold mb-8">
          {t("project.amplification.approach.title")}
        </h2>

        <div className="space-y-6">
          
          <div className="bg-neutral-900 rounded-2xl p-6 md:p-8">
            <div className="flex items-start mb-4">
              <span className="text-3xl mr-4">1️⃣</span>
              <div>
                <h3 className="text-xl font-semibold mb-3">
                  {t("project.amplification.approach.step1.title")}
                </h3>
                <p className="text-neutral-400">
                  {t("project.amplification.approach.step1.text")}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-neutral-900 rounded-2xl p-6 md:p-8">
            <div className="flex items-start mb-4">
              <span className="text-3xl mr-4">2️⃣</span>
              <div>
                <h3 className="text-xl font-semibold mb-3">
                  {t("project.amplification.approach.step2.title")}
                </h3>
                <p className="text-neutral-400">
                  {t("project.amplification.approach.step2.text")}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-neutral-900 rounded-2xl p-6 md:p-8">
            <div className="flex items-start mb-4">
              <span className="text-3xl mr-4">3️⃣</span>
              <div>
                <h3 className="text-xl font-semibold mb-3">
                  {t("project.amplification.approach.step3.title")}
                </h3>
                <p className="text-neutral-400">
                  {t("project.amplification.approach.step3.text")}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-neutral-900 rounded-2xl p-6 md:p-8">
            <div className="flex items-start mb-4">
              <span className="text-3xl mr-4">4️⃣</span>
              <div>
                <h3 className="text-xl font-semibold mb-3">
                  {t("project.amplification.approach.step4.title")}
                </h3>
                <p className="text-neutral-400">
                  {t("project.amplification.approach.step4.text")}
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* TECHNICAL FEATURES */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <h2 className="text-3xl font-semibold mb-8">
          {t("project.amplification.features.title")}
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          
          <div className="bg-neutral-900 p-6 rounded-2xl">
            <div className="flex items-start mb-4">
              <span className="text-2xl mr-4">🔊</span>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  {t("project.amplification.features.audio.title")}
                </h3>
                <p className="text-neutral-400 text-sm">
                  {t("project.amplification.features.audio.text")}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-neutral-900 p-6 rounded-2xl">
            <div className="flex items-start mb-4">
              <span className="text-2xl mr-4">⚡</span>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  {t("project.amplification.features.power.title")}
                </h3>
                <p className="text-neutral-400 text-sm">
                  {t("project.amplification.features.power.text")}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-neutral-900 p-6 rounded-2xl">
            <div className="flex items-start mb-4">
              <span className="text-2xl mr-4">📡</span>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  {t("project.amplification.features.iot.title")}
                </h3>
                <p className="text-neutral-400 text-sm">
                  {t("project.amplification.features.iot.text")}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-neutral-900 p-6 rounded-2xl">
            <div className="flex items-start mb-4">
              <span className="text-2xl mr-4">🔧</span>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  {t("project.amplification.features.robust.title")}
                </h3>
                <p className="text-neutral-400 text-sm">
                  {t("project.amplification.features.robust.text")}
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* TECHNICAL STACK */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <h2 className="text-3xl font-semibold mb-8">
          {t("project.amplification.technical.title")}
        </h2>

        <div className="bg-neutral-900 rounded-2xl p-8">
          <div className="grid md:grid-cols-2 gap-8">
            
            <div>
              <h3 className="text-xl font-semibold mb-4">
                {t("project.amplification.technical.hardware")}
              </h3>
              <ul className="space-y-2 text-neutral-400">
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  <span>{t("project.amplification.technical.amplifier")}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  <span>{t("project.amplification.technical.filters")}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  <span>{t("project.amplification.technical.sigfox")}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  <span>{t("project.amplification.technical.power")}</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">
                {t("project.amplification.technical.design")}
              </h3>
              <ul className="space-y-2 text-neutral-400">
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  <span>{t("project.amplification.technical.ltspice")}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  <span>{t("project.amplification.technical.pcb")}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  <span>{t("project.amplification.technical.analysis")}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  <span>{t("project.amplification.technical.optimization")}</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* AMPLIFIER TYPES */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="bg-gradient-to-br from-purple-950/30 to-neutral-900 rounded-2xl p-8 md:p-12 border border-purple-900/20">
          <h2 className="text-3xl font-semibold mb-6">
            {t("project.amplification.types.title")}
          </h2>
          <div className="space-y-4 text-neutral-400 leading-relaxed mb-6">
            <p>{t("project.amplification.types.intro")}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-neutral-950/50 rounded-xl p-6">
              <div className="text-purple-400 font-semibold mb-3">{t("project.amplification.types.passive.title")}</div>
              <div className="text-sm text-neutral-400">{t("project.amplification.types.passive.text")}</div>
            </div>
            <div className="bg-neutral-950/50 rounded-xl p-6">
              <div className="text-purple-400 font-semibold mb-3">{t("project.amplification.types.active.title")}</div>
              <div className="text-sm text-neutral-400">{t("project.amplification.types.active.text")}</div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS DEVELOPED */}
      <section className="max-w-6xl mx-auto px-6 pb-32">
        <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-semibold mb-6">
            {t("project.amplification.skills.title")}
          </h2>
          <div className="space-y-4 text-neutral-400 leading-relaxed">
            <p>{t("project.amplification.skills.p1")}</p>
            <p>{t("project.amplification.skills.p2")}</p>
            <p>{t("project.amplification.skills.p3")}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="bg-neutral-950/50 rounded-xl p-6 text-center">
              <div className="text-2xl mb-2">📡</div>
              <div className="font-semibold mb-1">{t("project.amplification.skills.badge1.title")}</div>
              <div className="text-sm text-neutral-400">{t("project.amplification.skills.badge1.text")}</div>
            </div>
            <div className="bg-neutral-950/50 rounded-xl p-6 text-center">
              <div className="text-2xl mb-2">💻</div>
              <div className="font-semibold mb-1">{t("project.amplification.skills.badge2.title")}</div>
              <div className="text-sm text-neutral-400">{t("project.amplification.skills.badge2.text")}</div>
            </div>
            <div className="bg-neutral-950/50 rounded-xl p-6 text-center">
              <div className="text-2xl mb-2">🌐</div>
              <div className="font-semibold mb-1">{t("project.amplification.skills.badge3.title")}</div>
              <div className="text-sm text-neutral-400">{t("project.amplification.skills.badge3.text")}</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

    </div>
  )
}

export default AmplificationProject