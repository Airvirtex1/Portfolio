import { useTranslation } from "react-i18next"

function ProjectDecors() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-neutral-950 text-white px-6 py-24">
      <div className="max-w-4xl mx-auto">

        {/* HEADER */}
        <h1 className="text-5xl font-bold mb-6">
          {t("decors.title")}
        </h1>

        <p className="text-neutral-400 text-lg mb-12">
          {t("decors.subtitle")}
        </p>

        {/* TAGS */}
        <div className="flex flex-wrap gap-3 mb-16">
          {["Arduino", "Moteurs Pas à Pas", "Automatisation", "Spectacle", "Impression 3D", "Projet Professionnel"].map((tag) => (
            <span
              key={tag}
              className="bg-neutral-900 px-4 py-2 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CONTEXT */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">
            {t("decors.contextTitle")}
          </h2>
          <p className="text-neutral-400 leading-relaxed mb-6">
            {t("decors.contextText")}
          </p>
          
          <h3 className="text-xl font-semibold mb-4 text-neutral-300">
            {t("decors.objectivesTitle")}
          </h3>
          <ul className="space-y-3 text-neutral-400 list-disc list-inside">
            <li>{t("decors.objective1")}</li>
            <li>{t("decors.objective2")}</li>
            <li>{t("decors.objective3")}</li>
            <li>{t("decors.objective4")}</li>
          </ul>
        </section>

        {/* IMAGE - Décors */}
        <figure className="mb-12">
          <img
            src="/assets/decors-spectacle.png"
            alt="Décors automatisés pour spectacle"
            className="w-full mx-auto rounded-2xl border border-neutral-800"
          />
          <figcaption className="mt-3 text-sm text-neutral-500 text-center">
            {t("decors.figcaption1")}
          </figcaption>
        </figure>

        {/* APPROACH */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">
            {t("decors.approachTitle")}
          </h2>

          <ul className="space-y-4 text-neutral-400 list-disc list-inside">
            <li>{t("decors.step1")}</li>
            <li>{t("decors.step2")}</li>
            <li>{t("decors.step3")}</li>
            <li>{t("decors.step4")}</li>
            <li>{t("decors.step5")}</li>
            <li>{t("decors.step6")}</li>
          </ul>
        </section>

        {/* LEARNING */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            {t("decors.learningTitle")}
          </h2>
          <p className="text-neutral-400 leading-relaxed">
            {t("decors.learningText")}
          </p>
        </section>

      </div>
    </div>
  )
}

export default ProjectDecors