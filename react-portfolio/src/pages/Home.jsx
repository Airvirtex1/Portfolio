import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Footer from "../components/Footer";

function Home() {
  const { t } = useTranslation();
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

      {/* ABOUT ME SECTION */}
      <section className="max-w-6xl mx-auto px-6 pb-32">
        <div className="bg-neutral-900 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-semibold mb-6">
                {t("home.aboutTitle")}
              </h2>
              <p className="text-neutral-400 leading-relaxed mb-4">
                {t("home.aboutText")}
              </p>
              <p className="text-neutral-400 leading-relaxed">
                {t("home.aboutText2")}
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="bg-neutral-800 p-4 rounded-lg">
                <h3 className="font-semibold mb-2 text-neutral-200">
                  {t("home.currentFocus")}
                </h3>
                <p className="text-sm text-neutral-400">
                  STM32 • ESP32 • IoT • Firmware Development
                </p>
              </div>
              
              <div className="bg-neutral-800 p-4 rounded-lg">
                <h3 className="font-semibold mb-2 text-neutral-200">
                  {t("home.education")}
                </h3>
                <p className="text-sm text-neutral-400">
                  EFREI Engineering School
                </p>
                <p className="text-xs text-neutral-500">
                  Master in Embedded Systems & IoT
                </p>
              </div>
              
              <div className="bg-neutral-800 p-4 rounded-lg">
                <h3 className="font-semibold mb-2 text-neutral-200">
                  {t("home.availability")}
                </h3>
                <p className="text-sm text-neutral-400">
                  {t("home.availabilityText")}
                </p>
              </div>
            </div>
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
              {t("portfolioProject.title")}
            </h3>
            <p className="text-neutral-400 mb-4">
              {t("portfolioProject.subtitle")}
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
              {t("meteo.title")}
            </h3>
            <p className="text-neutral-400 mb-4">
              {t("meteo.subtitle")}
            </p>
            <Link
              to="/projects"
              className="text-sm underline hover:text-neutral-300"
            >
              {t("home.readMore")}
            </Link>
          </div>

          {/* CARD 3 */}
          <div className="bg-neutral-900 p-6 rounded-2xl hover:bg-neutral-800 transition">
            <h3 className="text-xl font-semibold mb-3">
              {t("robotcrabe.title")}
            </h3>
            <p className="text-neutral-400 mb-4">
              {t("robotcrabe.subtitle")}
            </p>
            <Link
              to="/projects"
              className="text-sm underline hover:text-neutral-300"
            >
              {t("home.readMore")}
            </Link>
          </div>

        </div>
      </section>

      <Footer />

    </div>
  )
}

export default Home