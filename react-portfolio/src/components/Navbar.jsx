import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const NAV_LINKS = (t) => [
  { to: "/",         label: t("nav.home"),     end: true  },
  { to: "/about",    label: t("nav.about"),    end: false },
  { to: "/projects", label: t("nav.projects"), end: false },
  { to: "/contact",  label: t("nav.contact"),  end: false },
];

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const { isDark, toggle } = useTheme();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => { setIsOpen(false); }, [location.pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const links = NAV_LINKS(t);

  return (
    <>
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-surface-base/80 border-b border-border-subtle transition-colors duration-300">
        <div className="max-w-container mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">

          {/* Logo */}
          <NavLink
            to="/"
            className="font-display font-semibold text-text-primary tracking-tight text-lg shrink-0"
          >
            MR<span className="text-accent">.</span>
          </NavLink>

          {/* ── Desktop nav ──────────────────────────────── */}
          <div className="hidden md:flex items-center gap-6 text-sm">
            {links.map(({ to, label, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                className={({ isActive }) =>
                  isActive
                    ? "text-accent font-medium"
                    : "text-text-secondary hover:text-text-primary transition-colors duration-150"
                }
              >
                {label}
              </NavLink>
            ))}

            <button
              onClick={() => i18n.changeLanguage(i18n.language === "fr" ? "en" : "fr")}
              className="text-xs text-text-secondary hover:text-text-primary border border-border-strong px-2 py-1 rounded-md font-mono transition-colors"
            >
              {i18n.language.toUpperCase()}
            </button>

            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className="w-9 h-9 flex items-center justify-center rounded-lg border border-border-strong text-text-secondary hover:text-text-primary transition-colors"
            >
              <ThemeIcon isDark={isDark} />
            </button>
          </div>

          {/* ── Mobile: controls + hamburger ─────────────── */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => i18n.changeLanguage(i18n.language === "fr" ? "en" : "fr")}
              className="h-9 px-2 flex items-center text-xs text-text-secondary border border-border-strong rounded-md font-mono transition-colors"
              aria-label="Switch language"
            >
              {i18n.language.toUpperCase()}
            </button>

            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className="w-9 h-9 flex items-center justify-center rounded-lg border border-border-strong text-text-secondary transition-colors"
            >
              <ThemeIcon isDark={isDark} />
            </button>

            <button
              onClick={() => setIsOpen((v) => !v)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              className="w-9 h-9 flex items-center justify-center rounded-lg border border-border-strong text-text-secondary transition-colors"
            >
              <HamburgerIcon isOpen={isOpen} />
            </button>
          </div>

        </div>
      </nav>

      {/* ── Mobile dropdown menu ─────────────────────────────── */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-zinc-950/60 md:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu panel */}
            <motion.div
              key="menu"
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-16 left-0 right-0 z-50 md:hidden bg-surface-base/95 backdrop-blur-md border-b border-border-subtle"
            >
              <ul className="max-w-container mx-auto px-4 py-4 space-y-1">
                {links.map(({ to, label, end }) => (
                  <li key={to}>
                    <NavLink
                      to={to}
                      end={end}
                      className={({ isActive }) =>
                        `flex items-center w-full px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                          isActive
                            ? "text-accent bg-accent-bg"
                            : "text-text-secondary hover:text-text-primary hover:bg-surface-overlay"
                        }`
                      }
                    >
                      {label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

// ── Sub-components ──────────────────────────────────────────────
function ThemeIcon({ isDark }) {
  return isDark ? (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
    </svg>
  ) : (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
        d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
    </svg>
  );
}

function HamburgerIcon({ isOpen }) {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      {isOpen ? (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75}
          d="M6 18L18 6M6 6l12 12" />
      ) : (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75}
          d="M4 6h16M4 12h16M4 18h16" />
      )}
    </svg>
  );
}
