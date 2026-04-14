import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { projects } from "../data/projects";
import Footer from "../components/Footer";

function Projects() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-surface-base text-text-primary transition-colors duration-300">
      <div className="max-w-container mx-auto px-4 sm:px-6 py-16 md:py-24">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            {t("project.title")}
          </h1>
          <p className="text-base md:text-lg text-text-secondary mb-8 md:mb-16 max-w-2xl">
            {t("project.subtitle")}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -5, transition: { type: "spring", stiffness: 380, damping: 22 } }}
            >
              <Link
                to={`/projects/${project.id}`}
                className="block bg-surface-raised border border-border-subtle rounded-2xl overflow-hidden hover:border-accent/30 transition-colors duration-200 group"
              >
                <div className="aspect-video w-full overflow-hidden bg-surface-overlay">
                  <img
                    src={project.image}
                    alt={t(project.titleKey)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => { e.target.style.display = "none"; }}
                  />
                </div>

                <div className="p-4 sm:p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-xs bg-accent-bg text-accent border border-accent/20 px-2 py-0.5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="font-display text-xl font-semibold mb-2">
                    {t(project.titleKey)}
                  </h2>
                  <p className="text-text-secondary text-sm line-clamp-2 leading-relaxed">
                    {t(project.descKey)}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Projects;
