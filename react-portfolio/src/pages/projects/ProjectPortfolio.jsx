import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Footer from "../../components/Footer";

function PortfolioProject() {
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
          {t("project.portfolio.title")}
        </h1>
        
        <div className="flex flex-wrap gap-3 mb-8">
          <span className="bg-neutral-800 px-4 py-2 rounded-lg text-sm">React</span>
          <span className="bg-neutral-800 px-4 py-2 rounded-lg text-sm">Tailwind CSS</span>
          <span className="bg-neutral-800 px-4 py-2 rounded-lg text-sm">React Router</span>
          <span className="bg-neutral-800 px-4 py-2 rounded-lg text-sm">i18next</span>
        </div>

        <p className="text-xl text-neutral-400 leading-relaxed max-w-4xl">
          {t("project.portfolio.intro")}
        </p>
      </section>

      {/* MAIN IMAGE */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="rounded-2xl overflow-hidden bg-neutral-900">
          <img 
            src="/images/portfolio-hero.jpg" 
            alt="Portfolio Website"
            className="w-full h-auto"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/1200x600/262626/ffffff?text=Portfolio+Screenshot'
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
              {t("project.portfolio.objective.title")}
            </h3>
            <p className="text-neutral-400 text-sm">
              {t("project.portfolio.objective.text")}
            </p>
          </div>

          <div className="bg-neutral-900 p-6 rounded-2xl">
            <h3 className="text-lg font-semibold mb-2 flex items-center">
              <span className="mr-3">📅</span>
              {t("project.portfolio.timeline.title")}
            </h3>
            <p className="text-neutral-400 text-sm">
              {t("project.portfolio.timeline.text")}
            </p>
          </div>

          <div className="bg-neutral-900 p-6 rounded-2xl">
            <h3 className="text-lg font-semibold mb-2 flex items-center">
              <span className="mr-3">👤</span>
              {t("project.portfolio.role.title")}
            </h3>
            <p className="text-neutral-400 text-sm">
              {t("project.portfolio.role.text")}
            </p>
          </div>

        </div>
      </section>

      {/* CONTEXT */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="bg-neutral-900 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-semibold mb-6">
            {t("project.portfolio.context.title")}
          </h2>
          <div className="space-y-4 text-neutral-400 leading-relaxed">
            <p>{t("project.portfolio.context.p1")}</p>
            <p>{t("project.portfolio.context.p2")}</p>
            <p>{t("project.portfolio.context.p3")}</p>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <h2 className="text-3xl font-semibold mb-8">
          {t("project.portfolio.features.title")}
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          
          <div className="bg-neutral-900 p-6 rounded-2xl">
            <div className="flex items-start mb-4">
              <span className="text-2xl mr-4">🌐</span>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  {t("project.portfolio.features.multilingual.title")}
                </h3>
                <p className="text-neutral-400 text-sm">
                  {t("project.portfolio.features.multilingual.text")}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-neutral-900 p-6 rounded-2xl">
            <div className="flex items-start mb-4">
              <span className="text-2xl mr-4">📱</span>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  {t("project.portfolio.features.responsive.title")}
                </h3>
                <p className="text-neutral-400 text-sm">
                  {t("project.portfolio.features.responsive.text")}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-neutral-900 p-6 rounded-2xl">
            <div className="flex items-start mb-4">
              <span className="text-2xl mr-4">🎨</span>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  {t("project.portfolio.features.design.title")}
                </h3>
                <p className="text-neutral-400 text-sm">
                  {t("project.portfolio.features.design.text")}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-neutral-900 p-6 rounded-2xl">
            <div className="flex items-start mb-4">
              <span className="text-2xl mr-4">🚀</span>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  {t("project.portfolio.features.navigation.title")}
                </h3>
                <p className="text-neutral-400 text-sm">
                  {t("project.portfolio.features.navigation.text")}
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* TECHNICAL DETAILS */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <h2 className="text-3xl font-semibold mb-8">
          {t("project.portfolio.technical.title")}
        </h2>

        <div className="bg-neutral-900 rounded-2xl p-8">
          <div className="space-y-6">
            
            <div>
              <h3 className="text-xl font-semibold mb-3">
                {t("project.portfolio.technical.frontend")}
              </h3>
              <ul className="space-y-2 text-neutral-400">
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  <span><strong>React 18</strong> - {t("project.portfolio.technical.reactDesc")}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  <span><strong>React Router v6</strong> - {t("project.portfolio.technical.routerDesc")}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  <span><strong>Tailwind CSS</strong> - {t("project.portfolio.technical.tailwindDesc")}</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">
                {t("project.portfolio.technical.features")}
              </h3>
              <ul className="space-y-2 text-neutral-400">
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  <span><strong>i18next</strong> - {t("project.portfolio.technical.i18nDesc")}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  <span><strong>Responsive Design</strong> - {t("project.portfolio.technical.responsiveDesc")}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  <span><strong>Component Architecture</strong> - {t("project.portfolio.technical.componentDesc")}</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* CHALLENGES & SOLUTIONS */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <h2 className="text-3xl font-semibold mb-8">
          {t("project.portfolio.challenges.title")}
        </h2>

        <div className="space-y-6">
          
          <div className="bg-neutral-900 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-semibold mb-3 text-red-400">
              {t("project.portfolio.challenges.challenge1.title")}
            </h3>
            <p className="text-neutral-400 mb-4">
              {t("project.portfolio.challenges.challenge1.problem")}
            </p>
            <h4 className="text-lg font-semibold mb-2 text-green-400">
              {t("project.portfolio.challenges.solution")}
            </h4>
            <p className="text-neutral-400">
              {t("project.portfolio.challenges.challenge1.solution")}
            </p>
          </div>

          <div className="bg-neutral-900 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-semibold mb-3 text-red-400">
              {t("project.portfolio.challenges.challenge2.title")}
            </h3>
            <p className="text-neutral-400 mb-4">
              {t("project.portfolio.challenges.challenge2.problem")}
            </p>
            <h4 className="text-lg font-semibold mb-2 text-green-400">
              {t("project.portfolio.challenges.solution")}
            </h4>
            <p className="text-neutral-400">
              {t("project.portfolio.challenges.challenge2.solution")}
            </p>
          </div>

        </div>
      </section>

      {/* RESULTS */}
      <section className="max-w-6xl mx-auto px-6 pb-32">
        <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-semibold mb-6">
            {t("project.portfolio.results.title")}
          </h2>
          <div className="space-y-4 text-neutral-400 leading-relaxed">
            <p>{t("project.portfolio.results.p1")}</p>
            <p>{t("project.portfolio.results.p2")}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">3</div>
              <div className="text-sm text-neutral-400">{t("project.portfolio.results.languages")}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-sm text-neutral-400">{t("project.portfolio.results.responsive")}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">Fast</div>
              <div className="text-sm text-neutral-400">{t("project.portfolio.results.performance")}</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

    </div>
  )
}

export default PortfolioProject