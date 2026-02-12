import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { t, i18n } = useTranslation();

  return (
    <nav className="fixed top-0 w-full bg-zinc-900 border-b border-zinc-800 z-50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="text-white font-bold text-lg">Portfolio</span>

        <div className="flex items-center gap-6 text-sm">
          <NavLink to="/" className={({ isActive }) =>
            isActive ? "text-white" : "text-zinc-400 hover:text-white"
          }>
            {t("nav.home")}
          </NavLink>

          <NavLink to="/about" className={({ isActive }) =>
            isActive ? "text-white" : "text-zinc-400 hover:text-white"
          }>
            {t("nav.about")}
          </NavLink>

          <NavLink to="/projects" className={({ isActive }) =>
            isActive ? "text-white" : "text-zinc-400 hover:text-white"
          }>
            {t("nav.projects")}
          </NavLink>

          <NavLink to="/contact" className={({ isActive }) =>
            isActive ? "text-white" : "text-zinc-400 hover:text-white"
          }>
            {t("nav.contact")}
          </NavLink>

          {/* Switch langue */}
          <button
            onClick={() =>
              i18n.changeLanguage(i18n.language === "fr" ? "en" : "fr")
            }
            className="ml-4 text-xs text-zinc-400 hover:text-white border border-zinc-700 px-2 py-1 rounded"
          >
            {i18n.language.toUpperCase()}
          </button>
        </div>
      </div>
    </nav>
  );
}
