import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next";

function Home() {
  const { t, i18n } = useTranslation();
  return (
    <div className="min-h-screen bg-neutral-950 text-white">

      {/* HERO SECTION */}
      <section className="max-w-6xl mx-auto px-6 pt-32 pb-24">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            {t("home.title")}
          </h1>

          <p className="text-lg text-neutral-400 mb-8">
            {t("home.subtitle")}
          </p>

          <div className="flex gap-4">
            <Link
              to="/projects"
              className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-neutral-200 transition"
            >
              {t("home.viewProjects")}
            </Link>

            <Link
              to="/contact"
              className="border border-neutral-600 px-6 py-3 rounded-lg hover:border-white transition"
            >
              {t("home.contact")}
            </Link>
          </div>
        </div>
      </section>


      {/* PROJECTS SECTION */}
      <section className="max-w-6xl mx-auto px-6 pb-32">
        <h2 className="text-3xl font-semibold mb-12">
          {t("home.selectedProjects")}
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {/* CARD 1 */}
          <div className="bg-neutral-900 p-6 rounded-2xl hover:bg-neutral-800 transition">
            <h3 className="text-xl font-semibold mb-3">
              {t("home.portfolioDesc")}
            </h3>
            <p className="text-neutral-400 mb-4">
              {t("home.dashboardDesc")}
            </p>
            <Link
              to="/projects"
              className="text-sm underline hover:text-neutral-300"
            >
              {t("home.readMore")}
            </Link>
          </div>

          {/* CARD 2 */}
          <div className="bg-neutral-900 p-6 rounded-2xl hover:bg-neutral-800 transition">
            <h3 className="text-xl font-semibold mb-3">
              Dashboard UI
            </h3>
            <p className="text-neutral-400 mb-4">
              Modern admin dashboard interface with analytics components.
            </p>
            <Link
              to="/projects"
              className="text-sm underline hover:text-neutral-300"
            >
              Read more →
            </Link>
          </div>

          {/* CARD 3 */}
          <div className="bg-neutral-900 p-6 rounded-2xl hover:bg-neutral-800 transition">
            <h3 className="text-xl font-semibold mb-3">
              Mobile App
            </h3>
            <p className="text-neutral-400 mb-4">
              Cross-platform mobile app built with React Native.
            </p>
            <Link
              to="/projects"
              className="text-sm underline hover:text-neutral-300"
            >
              Read more →
            </Link>
          </div>

        </div>
      </section>

    </div>
  )
}

export default Home
