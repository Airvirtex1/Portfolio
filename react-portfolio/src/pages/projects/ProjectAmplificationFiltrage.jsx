import { useTranslation } from "react-i18next"

function ProjectAmplification() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-neutral-950 text-white px-6 py-24">
      <div className="max-w-4xl mx-auto">

        {/* HEADER */}
        <h1 className="text-5xl font-bold mb-6">
          {t("amplification.title")}
        </h1>

        <p className="text-neutral-400 text-lg mb-12">
          {t("amplification.subtitle")}
        </p>

        {/* TAGS */}
        <div className="flex flex-wrap gap-3 mb-16">
          {["Électronique Analogique", "Amplification", "Filtrage", "SIGFOX", "IoT", "Projet Scolaire"].map((tag) => (
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
            {t("amplification.contextTitle")}
          </h2>
          <p className="text-neutral-400 leading-relaxed">
            {t("amplification.contextText")}
          </p>
        </section>

        {/* IMAGE - Schéma Push-Pull */}
        <figure className="mb-12">
          <img
            src="/assets/push-pull-schema.png"
            alt="Schéma d'un push pull avec des transistors"
            className="w-full mx-auto rounded-2xl border border-neutral-800"
          />
          <figcaption className="mt-3 text-sm text-neutral-500 text-center">
            {t("amplification.figcaption1")}
          </figcaption>
        </figure>

        {/* APPROACH */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">
            {t("amplification.approachTitle")}
          </h2>

          <ul className="space-y-4 text-neutral-400 list-disc list-inside">
            <li>{t("amplification.step1")}</li>
            <li>{t("amplification.step2")}</li>
            <li>{t("amplification.step3")}</li>
            <li>{t("amplification.step4")}</li>
          </ul>
        </section>

        {/* LEARNING */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            {t("amplification.learningTitle")}
          </h2>
          <p className="text-neutral-400 leading-relaxed">
            {t("amplification.learningText")}
          </p>
        </section>

      </div>
    </div>
  )
}

export default ProjectAmplification