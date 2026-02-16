import { useTranslation } from "react-i18next"

function ProjectMeteo() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-neutral-950 text-white px-6 py-24">
      <div className="max-w-4xl mx-auto">

        {/* HEADER */}
        <h1 className="text-5xl font-bold mb-6">
          {t("meteo.title")}
        </h1>

        <p className="text-neutral-400 text-lg mb-12">
          {t("meteo.subtitle")}
        </p>

        {/* TAGS */}
        <div className="flex flex-wrap gap-3 mb-16">
          {["Systèmes Embarqués", "Capteurs", "Acquisition de Données", "Maritime", "Météorologie", "Projet Scolaire"].map((tag) => (
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
            {t("meteo.contextTitle")}
          </h2>
          <p className="text-neutral-400 leading-relaxed">
            {t("meteo.contextText")}
          </p>
        </section>

        {/* IMAGE - Schéma de fonctionnement */}
        <figure className="mb-12">
          <img
            src="/assets/station-meteo-schema.png"
            alt="Schéma du fonctionnement de la station météo"
            className="w-full mx-auto rounded-2xl border border-neutral-800"
          />
          <figcaption className="mt-3 text-sm text-neutral-500 text-center">
            {t("meteo.figcaption1")}
          </figcaption>
        </figure>

        {/* APPROACH */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">
            {t("meteo.approachTitle")}
          </h2>

          <ul className="space-y-4 text-neutral-400 list-disc list-inside">
            <li>{t("meteo.step1")}</li>
            <li>{t("meteo.step2")}</li>
            <li>{t("meteo.step3")}</li>
            <li>{t("meteo.step4")}</li>
          </ul>
        </section>

        {/* LEARNING */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            {t("meteo.learningTitle")}
          </h2>
          <p className="text-neutral-400 leading-relaxed">
            {t("meteo.learningText")}
          </p>
        </section>

      </div>
    </div>
  )
}

export default ProjectMeteo