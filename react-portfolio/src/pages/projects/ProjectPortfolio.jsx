import { useTranslation } from "react-i18next"

function ProjectPortfolio() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-neutral-950 text-white px-6 py-24">
      <div className="max-w-4xl mx-auto">

        {/* TITLE */}
        <h1 className="text-5xl font-bold mb-6">
          {t("portfolioProject.title")}
        </h1>

        {/* SUBTITLE */}
        <p className="text-neutral-400 text-lg mb-12">
          {t("portfolioProject.subtitle")}
        </p>

        {/* TECH STACK */}
        <div className="flex flex-wrap gap-3 mb-16">
          {["React", "Vite", "Tailwind CSS", "i18next"].map((tech) => (
            <span
              key={tech}
              className="bg-neutral-900 px-4 py-2 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* SECTION 1 */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">
            {t("portfolioProject.overviewTitle")}
          </h2>
          <p className="text-neutral-400 leading-relaxed">
            {t("portfolioProject.overviewText")}
          </p>
        </section>

        {/* SECTION 2 */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">
            {t("portfolioProject.challengeTitle")}
          </h2>
          <p className="text-neutral-400 leading-relaxed">
            {t("portfolioProject.challengeText")}
          </p>
        </section>

        {/* SECTION 3 */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">
            {t("portfolioProject.resultTitle")}
          </h2>
          <p className="text-neutral-400 leading-relaxed">
            {t("portfolioProject.resultText")}
          </p>
        </section>

      </div>
    </div>
  )
}

export default ProjectPortfolio
