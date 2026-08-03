import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { getProject } from "../data/projects";
import ProjectBlock from "../components/ProjectBlocks";
import Footer from "../components/Footer";
import NotFound from "./NotFound";

function BackLink({ label }) {
  return (
    <Link
      to="/projects"
      className="inline-flex items-center text-text-secondary hover:text-text-primary transition mb-8"
    >
      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 19l-7-7m0 0l7-7m-7 7h18"
        />
      </svg>
      {label}
    </Link>
  );
}

/** `id` fixe une entrée hors grille (ex. /entreprise) ; sinon on lit l'URL. */
export default function ProjectDetail({ id: fixedId }) {
  const { id: routeId } = useParams();
  const id = fixedId ?? routeId;
  const { t } = useTranslation();
  const project = getProject(id);

  // Route partagée entre tous les projets : sans ça, on garde la position
  // de scroll de la page précédente en passant d'un projet à l'autre.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Un id de projet inconnu est une adresse morte comme une autre : même page.
  if (!project) return <NotFound />;

  const { ns } = project;
  const heroTags = t(`project.${ns}.heroTags`, { returnObjects: true });
  const tags = Array.isArray(heroTags) ? heroTags : project.tags;
  const inGrid = project.listed !== false;

  return (
    <div className="min-h-screen bg-surface-base text-text-primary transition-colors duration-300">

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 pt-32 pb-16">
        {inGrid && (
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <BackLink label={t("project.backToProjects")} />
          </motion.div>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-display text-5xl md:text-6xl font-bold mb-6"
        >
          {t(project.titleKey)}
        </motion.h1>

        <div className="flex flex-wrap gap-3 mb-8">
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-surface-overlay px-4 py-2 rounded-lg text-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="text-xl text-text-secondary leading-relaxed max-w-4xl">
          {t(project.descKey)}
        </p>
      </section>

      {/* BLOCS — dernière section : marge basse avant le footer */}
      <div className="[&>section:last-child]:pb-32">
        {project.blocks.map((block, i) => (
          <ProjectBlock key={`${block.type}-${i}`} block={block} ns={ns} />
        ))}
      </div>

      <Footer />
    </div>
  );
}
