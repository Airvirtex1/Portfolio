import { useTranslation } from "react-i18next"
import aqmImg from "../../assets/aqm.png";

function ProjectAQM() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-neutral-950 text-white px-6 py-24">
      <div className="max-w-4xl mx-auto">

        {/* HEADER */}
        <h1 className="text-5xl font-bold mb-6">
          {t("aqm.title")}
        </h1>

        <p className="text-neutral-400 text-lg mb-12">
          {t("aqm.subtitle")}
        </p>

        {/* TAGS */}
        <div className="flex flex-wrap gap-3 mb-16">
          {["IoT", "Industrialisation", "Production Management", "Fusion 360","School Project"].map((tag) => (
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
            {t("aqm.contextTitle")}
          </h2>
          <p className="text-neutral-400 leading-relaxed">
            {t("aqm.contextText")}
          </p>
        </section>

       <figure className="mb-12">
            <img
                src={aqmImg}
                alt="Vue éclatée du dispositif AQM"
                className="w-1/2 mx-auto rounded-2xl border border-neutral-800"
            />
            <figcaption className="mt-3 text-sm text-neutral-500 text-center">
                {t("aqm.figcaption1")}
            </figcaption>
        </figure>
        {/* APPROACH */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">
            {t("aqm.approachTitle")}
          </h2>

          <ul className="space-y-4 text-neutral-400 list-disc list-inside">
            <li>{t("aqm.step1")}</li>
            <li>{t("aqm.step2")}</li>
            <li>{t("aqm.step3")}</li>
            <li>{t("aqm.step4")}</li>
            <li>{t("aqm.step5")}</li>
          </ul>
        </section>

        {/* LEARNING */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            {t("aqm.learningTitle")}
          </h2>
          <p className="text-neutral-400 leading-relaxed">
            {t("aqm.learningText")}
          </p>
        </section>

      </div>
    </div>
  )
}

export default ProjectAQM
