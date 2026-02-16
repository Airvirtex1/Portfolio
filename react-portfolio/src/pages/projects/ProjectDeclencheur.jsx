import { useTranslation } from "react-i18next"

function ProjectDeclencheur() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-neutral-950 text-white px-6 py-24">
      <div className="max-w-4xl mx-auto">

        {/* HEADER */}
        <h1 className="text-5xl font-bold mb-6">
          {t("declencheur.title")}
        </h1>

        <p className="text-neutral-400 text-lg mb-12">
          {t("declencheur.subtitle")}
        </p>

        {/* TAGS */}
        <div className="flex flex-wrap gap-3 mb-16">
          {["ESP32", "Impression 3D", "433 MHz", "Prototypage", "Photographie", "Projet Professionnel"].map((tag) => (
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
            {t("declencheur.contextTitle")}
          </h2>
          <p className="text-neutral-400 leading-relaxed mb-6">
            {t("declencheur.contextText")}
          </p>
          
          <h3 className="text-xl font-semibold mb-4 text-neutral-300">
            {t("declencheur.objectivesTitle")}
          </h3>
          <ul className="space-y-3 text-neutral-400 list-disc list-inside">
            <li>{t("declencheur.objective1")}</li>
            <li>{t("declencheur.objective2")}</li>
            <li>{t("declencheur.objective3")}</li>
          </ul>
        </section>

        {/* IMAGE - Prototype */}
        <figure className="mb-12">
          <img
            src="/assets/declencheur-photo.png"
            alt="Prototype du déclencheur photo"
            className="w-full mx-auto rounded-2xl border border-neutral-800"
          />
          <figcaption className="mt-3 text-sm text-neutral-500 text-center">
            {t("declencheur.figcaption1")}
          </figcaption>
        </figure>

        {/* APPROACH */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">
            {t("declencheur.approachTitle")}
          </h2>

          <ul className="space-y-4 text-neutral-400 list-disc list-inside">
            <li>{t("declencheur.step1")}</li>
            <li>{t("declencheur.step2")}</li>
            <li>{t("declencheur.step3")}</li>
            <li>{t("declencheur.step4")}</li>
            <li>{t("declencheur.step5")}</li>
          </ul>
        </section>

        {/* STATUS */}
        <section className="mb-16 bg-neutral-900 p-6 rounded-2xl border border-neutral-800">
          <h2 className="text-2xl font-semibold mb-4">
            {t("declencheur.statusTitle")}
          </h2>
          <p className="text-neutral-400 leading-relaxed">
            {t("declencheur.statusText")}
          </p>
        </section>

        {/* LEARNING */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            {t("declencheur.learningTitle")}
          </h2>
          <p className="text-neutral-400 leading-relaxed">
            {t("declencheur.learningText")}
          </p>
        </section>

      </div>
    </div>
  )
}

export default ProjectDeclencheur