import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"

function Projects() {
  const { t } = useTranslation()

  const projects = [
    {
      id: "portfolio",
      title: "Portfolio Website",
      description: t("projects.portfolioDesc"),
    },
    {
      id: "meteo",
      title: "Station Meto",
      description: t("projects.descMeteo"),
    },
    {
      id: "tourrelle",
      title: "Tourelle de Reconnaissance Faciale",
      description: t("projectsdesctourrellet"),
    },
    {
      id: "asservissement",
      title: "Asservissement",
      description: t("projects.asservissement"),
    },
    {
      id: "amplification",
      title: "Amplification Filtrage",
      description: t("projects.amplification"),
    },
    {
      id: "boitier-aqm",
      title: "Boîtier AQM",
      description: t("projects.aqm.description"),
    },
    {
      id: "crabe",
      title: "Robot crabe",
      description: t("projects.desccrabe"),
    },
    {
      id: "argentique",
      title: "Declencheur argentique",
      description: t("projects.descargentique"),
    },
    {
      id: "decors",
      title: "Décors Automatisés de Spectacle ",
      description: t("projects.descdecors"),
    },
  ]

  return (
    <div className="min-h-screen bg-neutral-950 text-white px-6 py-24">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold mb-16">
          {t("projects.title")}
        </h1>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project) => (
            <Link
              key={project.id}
              to={`/projects/${project.id}`}
              className="bg-neutral-900 p-8 rounded-2xl hover:bg-neutral-800 transition"
            >
              <h2 className="text-2xl font-semibold mb-4">
                {project.title}
              </h2>
              <p className="text-neutral-400">
                {project.description}
              </p>
            </Link>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Projects
