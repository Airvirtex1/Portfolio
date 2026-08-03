import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Footer from "../components/Footer";

/**
 * Sert deux cas : une URL qui ne correspond à aucune route (`path="*"`) et un
 * `/projects/<id>` dont l'id n'existe pas. Le message reste volontairement
 * commun aux deux — dans les deux cas l'utilisateur est arrivé sur une adresse
 * qui ne mène nulle part, et les deux issues utiles sont les mêmes.
 */
export default function NotFound() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-surface-base text-text-primary transition-colors duration-300 flex flex-col">
      <section className="flex-1 max-w-container mx-auto w-full px-4 sm:px-6 pt-32 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <span className="font-mono text-sm bg-accent-bg text-accent border border-accent/20 px-3 py-1 rounded">
            {t("notFound.code")}
          </span>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mt-6 mb-4">
            {t("notFound.title")}
          </h1>

          <p className="text-base md:text-lg text-text-secondary leading-relaxed mb-10">
            {t("notFound.text")}
          </p>

          {/* Mêmes styles de bouton que les CTA de la page d'accueil */}
          <div className="flex flex-wrap gap-3">
            <Link
              to="/"
              className="bg-accent text-zinc-950 px-5 py-3 rounded-lg font-semibold text-sm sm:text-base hover:bg-accent-muted transition-colors duration-150"
            >
              {t("notFound.backHome")}
            </Link>
            <Link
              to="/projects"
              className="border border-border-strong px-5 py-3 rounded-lg text-sm sm:text-base text-text-primary hover:border-accent hover:text-accent transition-colors duration-150"
            >
              {t("notFound.seeProjects")}
            </Link>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
