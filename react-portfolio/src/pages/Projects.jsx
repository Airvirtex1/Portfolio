import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import meteoImg from "../assets/station_meteo.png";
import opencvImg from "../assets/opencv.png";
import asservissementImg from "../assets/asservissement.png";
import amplificationImg from "../assets/amplification_filtrage.png";
import aqmImg from "../assets/aqm.png";
import crabeImg from "../assets/crabe.png";
import decorsImg from "../assets/decors1.png";
import Footer from "../components/Footer";

function Projects() {
  const { t } = useTranslation()

  const projects = [
    {
      id: "portfolio",
      title: t("project.portfolio.title"),
      description: t("project.portfolio.intro"),
      image: meteoImg,
    },
    {
      id: "meteo",
      title: t("project.meteo.title"),
      description: t("project.meteo.intro"),
      image: meteoImg,
    },
    {
      id: "tourrelle",
      title: t("project.tourelle.title"),
      description: t("project.tourelle.intro"),
      image: opencvImg,
    },
    {
      id: "asservissement",
      title: t("project.asservissement.title"),
      description: t("project.asservissement.intro"),
      image: asservissementImg,
    },
    {
      id: "amplification",
      title: t("project.amplification.title"),
      description: t("project.amplification.intro"),
      image: amplificationImg,
    },
    {
      id: "boitier-aqm",
      title: t("project.aqm.title"),
      description: t("project.aqm.intro"),
      image: aqmImg,
    },
    {
      id: "crabe",
      title: t("project.crabe.title"),
      description: t("project.crabe.intro"),
      image: crabeImg,
    },
    {
      id: "argentique",
      title: t("project.argentique.title"),
      description: t("project.argentique.intro"),
      image: "/assets/argentique.png",
    },
    {
      id: "decors",
      title: t("project.decors.title"),
      description: t("project.decors.intro"),
      image: decorsImg,
    },
  ]

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <div className="max-w-6xl mx-auto px-6 py-24">

        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          {t("project.title")}
        </h1>
        <p className="text-xl text-neutral-400 mb-16 max-w-3xl">
          {t("project.subtitle")}
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Link
              key={project.id}
              to={`/projects/${project.id}`}
              className="bg-neutral-900 rounded-2xl overflow-hidden hover:bg-neutral-800 transition group"
            >
              {/* Image */}
              <div className="aspect-video w-full overflow-hidden bg-neutral-800">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/600x400/262626/ffffff?text=Project+Image'
                  }}
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-3">
                  {project.title}
                </h2>
                <p className="text-neutral-400 line-clamp-3">
                  {project.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

      </div>

      <Footer />

    </div>
  );
}

export default Projects;