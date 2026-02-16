import { useTranslation } from "react-i18next"

function ProjectTourelle() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-neutral-950 text-white px-6 py-24">
      <div className="max-w-4xl mx-auto">

        {/* HEADER */}
        <h1 className="text-5xl font-bold mb-6">
          {t("tourelle.title")}
        </h1>

        <p className="text-neutral-400 text-lg mb-12">
          {t("tourelle.subtitle")}
        </p>

        {/* TAGS */}
        <div className="flex flex-wrap gap-3 mb-16">
          {["Python", "Raspberry Pi", "Vision par Ordinateur", "Reconnaissance Faciale", "Impression 3D", "Stage"].map((tag) => (
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
            {t("tourelle.contextTitle")}
          </h2>
          <p className="text-neutral-400 leading-relaxed">
            {t("tourelle.contextText")}
          </p>
        </section>

        {/* IMAGE 1 - Reconnaissance faciale */}
        <figure className="mb-12">
          <img
            src="/assets/tourelle-reconnaissance.png"
            alt="Capture d'écran du retour vidéo de la reconnaissance faciale"
            className="w-full mx-auto rounded-2xl border border-neutral-800"
          />
          <figcaption className="mt-3 text-sm text-neutral-500 text-center">
            {t("tourelle.figcaption1")}
          </figcaption>
        </figure>

        {/* APPROACH */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">
            {t("tourelle.approachTitle")}
          </h2>

          <ul className="space-y-4 text-neutral-400 list-disc list-inside">
            <li>{t("tourelle.step1")}</li>
            <li>{t("tourelle.step2")}</li>
            <li>{t("tourelle.step3")}</li>
            <li>{t("tourelle.step4")}</li>
            <li>{t("tourelle.step5")}</li>
            <li>{t("tourelle.step6")}</li>
          </ul>
        </section>

        {/* IMAGE 2 - CAO système de tir */}
        <figure className="mb-12">
          <img
            src="/assets/tourelle-cao.png"
            alt="CAO du système de tir"
            className="w-full mx-auto rounded-2xl border border-neutral-800"
          />
          <figcaption className="mt-3 text-sm text-neutral-500 text-center">
            {t("tourelle.figcaption2")}
          </figcaption>
        </figure>

        {/* LEARNING */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            {t("tourelle.learningTitle")}
          </h2>
          <p className="text-neutral-400 leading-relaxed">
            {t("tourelle.learningText")}
          </p>
        </section>

      </div>
    </div>
  )
}

export default ProjectTourelle