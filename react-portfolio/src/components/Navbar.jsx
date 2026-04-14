import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const { isDark, toggle } = useTheme();

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-surface-base/75 border-b border-border-subtle transition-colors duration-300">
      <div className="max-w-container mx-auto px-6 h-16 flex items-center justify-between">

        <NavLink to="/" className="font-display font-semibold text-text-primary tracking-tight">
          MR<span className="text-accent">.</span>
        </NavLink>

        <div className="flex items-center gap-6 text-sm">
          {[
            { to: "/",        label: t("nav.home")     },
            { to: "/about",   label: t("nav.about")    },
            { to: "/projects",label: t("nav.projects") },
            { to: "/contact", label: t("nav.contact")  },
          ].map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              className={({ isActive }) =>
                isActive
                  ? "text-accent font-medium"
                  : "text-text-secondary hover:text-text-primary transition-colors duration-150"
              }
            >
              {label}
            </NavLink>
          ))}

          {/* Language switcher */}
          <button
            onClick={() => i18n.changeLanguage(i18n.language === "fr" ? "en" : "fr")}
            className="text-xs text-text-secondary hover:text-text-primary border border-border-strong px-2 py-1 rounded-md font-mono transition-colors"
          >
            {i18n.language.toUpperCase()}
          </button>

          {/* Dark / Light toggle */}
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="w-8 h-8 flex items-center justify-center rounded-lg border border-border-strong text-text-secondary hover:text-text-primary hover:border-border-strong/60 transition-colors"
          >
            {isDark ? (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
              </svg>
            )}
          </button>
        </div>

      </div>
    </nav>
  );
}
