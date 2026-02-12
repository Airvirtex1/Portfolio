import { useTranslation } from "react-i18next"

function About() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-neutral-950 text-white px-6 py-24">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl font-bold mb-10">
          {t("about.title")}
        </h1>

        <p className="text-neutral-400 leading-relaxed mb-8">
          {t("about.description")}
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-12">

          <div className="bg-neutral-900 p-6 rounded-2xl">
            <h3 className="text-xl font-semibold mb-3">
              {t("about.skillsTitle")}
            </h3>
            <p className="text-neutral-400">
              React, Tailwind CSS, JavaScript, Node.js
            </p>
          </div>

          <div className="bg-neutral-900 p-6 rounded-2xl">
            <h3 className="text-xl font-semibold mb-3">
              {t("about.goalTitle")}
            </h3>
            <p className="text-neutral-400">
              {t("about.goalText")}
            </p>
          </div>

        </div>

      </div>
    </div>
  )
}

export default About
