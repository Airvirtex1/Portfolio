import { useTranslation } from "react-i18next";
import Footer from "../components/Footer";

function About() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      
      {/* HERO SECTION */}
      <section className="max-w-6xl mx-auto px-6 pt-32 pb-16">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          {t("about.title")}
        </h1>
        <p className="text-xl text-neutral-400 max-w-3xl">
          {t("about.intro")}
        </p>
      </section>

      {/* WHO AM I SECTION */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="bg-neutral-900 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-semibold mb-6">
            {t("about.whoAmI")}
          </h2>
          <div className="space-y-4 text-neutral-400 leading-relaxed">
            <p>{t("about.bio1")}</p>
            <p>{t("about.bio2")}</p>
            <p>{t("about.bio3")}</p>
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <h2 className="text-3xl font-semibold mb-8">
          {t("about.experience")}
        </h2>

        <div className="space-y-6">
          
          {/* Experience 1 */}
          <div className="bg-neutral-900 rounded-2xl p-6 md:p-8 hover:bg-neutral-800 transition">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold mb-1">
                  {t("about.exp1.title")}
                </h3>
                <p className="text-neutral-400">
                  {t("about.exp1.company")}
                </p>
              </div>
              <span className="text-sm text-neutral-500 mt-2 md:mt-0">
                {t("about.exp1.date")}
              </span>
            </div>
            <ul className="space-y-2 text-neutral-400">
              <li className="flex items-start">
                <span className="text-white mr-2">•</span>
                {t("about.exp1.task1")}
              </li>
              <li className="flex items-start">
                <span className="text-white mr-2">•</span>
                {t("about.exp1.task2")}
              </li>
            </ul>
          </div>

          {/* Experience 2 */}
          <div className="bg-neutral-900 rounded-2xl p-6 md:p-8 hover:bg-neutral-800 transition">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold mb-1">
                  {t("about.exp2.title")}
                </h3>
                <p className="text-neutral-400">
                  {t("about.exp2.company")}
                </p>
              </div>
              <span className="text-sm text-neutral-500 mt-2 md:mt-0">
                {t("about.exp2.date")}
              </span>
            </div>
            <ul className="space-y-2 text-neutral-400">
              <li className="flex items-start">
                <span className="text-white mr-2">•</span>
                {t("about.exp2.task1")}
              </li>
              <li className="flex items-start">
                <span className="text-white mr-2">•</span>
                {t("about.exp2.task2")}
              </li>
              <li className="flex items-start">
                <span className="text-white mr-2">•</span>
                {t("about.exp2.task3")}
              </li>
            </ul>
          </div>

          {/* Experience 3 */}
          <div className="bg-neutral-900 rounded-2xl p-6 md:p-8 hover:bg-neutral-800 transition">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold mb-1">
                  {t("about.exp3.title")}
                </h3>
                <p className="text-neutral-400">
                  {t("about.exp3.company")}
                </p>
              </div>
              <span className="text-sm text-neutral-500 mt-2 md:mt-0">
                {t("about.exp3.date")}
              </span>
            </div>
            <ul className="space-y-2 text-neutral-400">
              <li className="flex items-start">
                <span className="text-white mr-2">•</span>
                {t("about.exp3.task1")}
              </li>
              <li className="flex items-start">
                <span className="text-white mr-2">•</span>
                {t("about.exp3.task2")}
              </li>
              <li className="flex items-start">
                <span className="text-white mr-2">•</span>
                {t("about.exp3.task3")}
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* SKILLS SECTION */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <h2 className="text-3xl font-semibold mb-8">
          {t("about.skills")}
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          
          {/* Hardware */}
          <div className="bg-neutral-900 rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <span className="mr-3">⚡</span>
              {t("about.hardware")}
            </h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-neutral-800 px-3 py-1 rounded-lg text-sm">STM32</span>
              <span className="bg-neutral-800 px-3 py-1 rounded-lg text-sm">ESP32</span>
              <span className="bg-neutral-800 px-3 py-1 rounded-lg text-sm">Arduino</span>
              <span className="bg-neutral-800 px-3 py-1 rounded-lg text-sm">Raspberry Pi</span>
            </div>
          </div>

          {/* Programming */}
          <div className="bg-neutral-900 rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <span className="mr-3">💻</span>
              {t("about.programming")}
            </h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-neutral-800 px-3 py-1 rounded-lg text-sm">C</span>
              <span className="bg-neutral-800 px-3 py-1 rounded-lg text-sm">C++</span>
              <span className="bg-neutral-800 px-3 py-1 rounded-lg text-sm">Python</span>
              <span className="bg-neutral-800 px-3 py-1 rounded-lg text-sm">Java</span>
              <span className="bg-neutral-800 px-3 py-1 rounded-lg text-sm">HTML</span>
            </div>
          </div>

          {/* Communication Protocols */}
          <div className="bg-neutral-900 rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <span className="mr-3">🔗</span>
              {t("about.protocols")}
            </h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-neutral-800 px-3 py-1 rounded-lg text-sm">UART</span>
              <span className="bg-neutral-800 px-3 py-1 rounded-lg text-sm">SPI</span>
              <span className="bg-neutral-800 px-3 py-1 rounded-lg text-sm">I2C</span>
              <span className="bg-neutral-800 px-3 py-1 rounded-lg text-sm">MQTT</span>
            </div>
          </div>

          {/* Tools */}
          <div className="bg-neutral-900 rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <span className="mr-3">🛠️</span>
              {t("about.tools")}
            </h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-neutral-800 px-3 py-1 rounded-lg text-sm">KiCad</span>
              <span className="bg-neutral-800 px-3 py-1 rounded-lg text-sm">LTspice</span>
              <span className="bg-neutral-800 px-3 py-1 rounded-lg text-sm">Scilab</span>
              <span className="bg-neutral-800 px-3 py-1 rounded-lg text-sm">MATLAB</span>
              <span className="bg-neutral-800 px-3 py-1 rounded-lg text-sm">Git</span>
            </div>
          </div>

          {/* Operating Systems */}
          <div className="bg-neutral-900 rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <span className="mr-3">🖥️</span>
              {t("about.systems")}
            </h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-neutral-800 px-3 py-1 rounded-lg text-sm">Linux</span>
              <span className="bg-neutral-800 px-3 py-1 rounded-lg text-sm">Bash</span>
              <span className="bg-neutral-800 px-3 py-1 rounded-lg text-sm">PowerShell</span>
              <span className="bg-neutral-800 px-3 py-1 rounded-lg text-sm">Virtual Machines</span>
            </div>
          </div>

          {/* Network */}
          <div className="bg-neutral-900 rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <span className="mr-3">🌐</span>
              {t("about.network")}
            </h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-neutral-800 px-3 py-1 rounded-lg text-sm">CCNA 1 Certified</span>
              <span className="bg-neutral-800 px-3 py-1 rounded-lg text-sm">Network Security</span>
            </div>
          </div>

        </div>
      </section>

      {/* EDUCATION SECTION */}
      <section className="max-w-6xl mx-auto px-6 pb-32">
        <h2 className="text-3xl font-semibold mb-8">
          {t("about.education")}
        </h2>

        <div className="space-y-6">
          
          {/* EFREI */}
          <div className="bg-neutral-900 rounded-2xl p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold mb-1">
                  EFREI Engineering School
                </h3>
                <p className="text-neutral-400">
                  {t("about.edu1.degree")}
                </p>
              </div>
              <span className="text-sm text-neutral-500 mt-2 md:mt-0">
                2025 - 2028
              </span>
            </div>
            <p className="text-neutral-400 text-sm">
              {t("about.edu1.focus")}
            </p>
          </div>

          {/* CESI */}
          <div className="bg-neutral-900 rounded-2xl p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold mb-1">
                  CESI Engineering School
                </h3>
                <p className="text-neutral-400">
                  {t("about.edu2.degree")}
                </p>
              </div>
              <span className="text-sm text-neutral-500 mt-2 md:mt-0">
                2022 - 2025
              </span>
            </div>
          </div>

        </div>
      </section>

      <Footer />

    </div>
  );
}

export default About;