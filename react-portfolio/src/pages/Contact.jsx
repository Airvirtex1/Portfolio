import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Footer from "../components/Footer";

// ─── Validation rules ──────────────────────────────────────────
const EMAIL_RE = /^[^\s@]{1,64}@[^\s@]{1,255}\.[^\s@]{2,}$/;

const LIMITS = {
  firstName: { min: 2,  max: 50  },
  lastName:  { min: 2,  max: 50  },
  email:     { min: 5,  max: 254 },
  message:   { min: 10, max: 2000 },
};

function validate(form) {
  const errors = {};

  const first = form.firstName.trim();
  if (first.length < LIMITS.firstName.min || first.length > LIMITS.firstName.max) {
    errors.firstName = `2–50 characters`;
  }

  const last = form.lastName.trim();
  if (last.length < LIMITS.lastName.min || last.length > LIMITS.lastName.max) {
    errors.lastName = `2–50 characters`;
  }

  if (!EMAIL_RE.test(form.email) || form.email.length > LIMITS.email.max) {
    errors.email = `Invalid email address`;
  }

  const msg = form.message.trim();
  if (msg.length < LIMITS.message.min) {
    errors.message = `Minimum 10 characters`;
  } else if (msg.length > LIMITS.message.max) {
    errors.message = `Maximum 2000 characters (${msg.length}/2000)`;
  }

  return errors;
}

const EMPTY_FORM = { firstName: "", lastName: "", email: "", message: "" };
// Cooldown in seconds after a successful send (prevents spam)
const SEND_COOLDOWN = 60;

// ─── Component ─────────────────────────────────────────────────
export default function Contact() {
  const { t } = useTranslation();

  const [form,      setForm     ] = useState(EMPTY_FORM);
  const [errors,    setErrors   ] = useState({});
  const [status,    setStatus   ] = useState({ type: "idle", message: "" });
  const [isSending, setIsSending] = useState(false);
  const [cooldown,  setCooldown ] = useState(0);
  // Honeypot — invisible to humans, bots fill it automatically
  const [honeypot,  setHoneypot ] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear field-level error on change
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const startCooldown = () => {
    setCooldown(SEND_COOLDOWN);
    const tick = setInterval(() => {
      setCooldown((prev) => {
        if (prev <= 1) { clearInterval(tick); return 0; }
        return prev - 1;
      });
    }, 1000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Anti-spam: if honeypot is filled, silently pretend success
    if (honeypot) {
      setStatus({ type: "success", message: t("contact.success") });
      return;
    }

    // Client-side validation
    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSending(true);
    setStatus({ type: "idle", message: "" });

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          firstName: form.firstName.trim(),
          lastName:  form.lastName.trim(),
          email:     form.email.trim(),
          message:   form.message.trim(),
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus({ type: "success", message: t("contact.success") });
      setForm(EMPTY_FORM);
      setErrors({});
      startCooldown();
    } catch {
      setStatus({ type: "error", message: t("contact.error") });
    } finally {
      setIsSending(false);
    }
  };

  const isDisabled = isSending || cooldown > 0;

  const inputCls = (field) =>
    `w-full bg-surface-overlay border ${
      errors[field] ? "border-red-500" : "border-border-strong"
    } text-text-primary placeholder:text-text-muted p-3 rounded-xl outline-none focus:border-accent transition-colors duration-150`;

  return (
    <div className="min-h-screen bg-surface-base text-text-primary transition-colors duration-300">
      <div className="px-4 sm:px-6 py-16 md:py-24">
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="font-display text-3xl sm:text-4xl font-bold mb-3">{t("contact.title")}</h1>
          <p className="text-text-secondary mb-8 md:mb-10">{t("contact.subtitle")}</p>

          <form
            onSubmit={handleSubmit}
            noValidate
            className="space-y-5 bg-surface-raised border border-border-subtle p-5 sm:p-8 rounded-2xl"
          >
            {/* ── Honeypot (invisible to real users) ─────────── */}
            <div aria-hidden="true" style={{ position: "absolute", left: "-9999px", top: "auto", width: "1px", height: "1px", overflow: "hidden" }}>
              <label htmlFor="_hp">Leave this field empty</label>
              <input
                id="_hp"
                type="text"
                name="_hp"
                tabIndex={-1}
                autoComplete="off"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
              />
            </div>

            {/* ── Name fields ─────────────────────────────────── */}
            <div className="grid md:grid-cols-2 gap-5">
              <Field
                label={t("contact.firstNameLabel")}
                error={errors.firstName}
              >
                <input
                  type="text" name="firstName" required
                  placeholder={t("contact.firstNamePlaceholder")}
                  value={form.firstName} onChange={handleChange}
                  maxLength={LIMITS.firstName.max}
                  className={inputCls("firstName")}
                  autoComplete="given-name"
                />
              </Field>

              <Field
                label={t("contact.lastNameLabel")}
                error={errors.lastName}
              >
                <input
                  type="text" name="lastName" required
                  placeholder={t("contact.lastNamePlaceholder")}
                  value={form.lastName} onChange={handleChange}
                  maxLength={LIMITS.lastName.max}
                  className={inputCls("lastName")}
                  autoComplete="family-name"
                />
              </Field>
            </div>

            {/* ── Email ───────────────────────────────────────── */}
            <Field label={t("contact.emailLabel")} error={errors.email}>
              <input
                type="email" name="email" required
                placeholder={t("contact.emailPlaceholder")}
                value={form.email} onChange={handleChange}
                maxLength={LIMITS.email.max}
                className={inputCls("email")}
                autoComplete="email"
              />
            </Field>

            {/* ── Message ─────────────────────────────────────── */}
            <Field
              label={t("contact.messageLabel")}
              error={errors.message}
              hint={`${form.message.length} / ${LIMITS.message.max}`}
            >
              <textarea
                name="message" required rows={6}
                placeholder={t("contact.messagePlaceholder")}
                value={form.message} onChange={handleChange}
                maxLength={LIMITS.message.max}
                className={`${inputCls("message")} resize-none`}
              />
            </Field>

            {/* ── Submit ──────────────────────────────────────── */}
            <motion.button
              type="submit"
              disabled={isDisabled}
              whileHover={!isDisabled ? { scale: 1.01 } : undefined}
              whileTap={!isDisabled  ? { scale: 0.98 } : undefined}
              className="w-full bg-accent text-zinc-950 py-3 rounded-xl font-semibold hover:bg-accent-muted transition-colors duration-150 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSending
                ? t("contact.sending")
                : cooldown > 0
                ? `${t("contact.send")} (${cooldown}s)`
                : t("contact.send")}
            </motion.button>

            {/* ── Status message ──────────────────────────────── */}
            {status.message && (
              <p
                role="status"
                aria-live="polite"
                className={`text-center text-sm ${
                  status.type === "success" ? "text-green-500" : "text-red-500"
                }`}
              >
                {status.message}
              </p>
            )}
          </form>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}

// ─── Field wrapper ─────────────────────────────────────────────
function Field({ label, error, hint, children }) {
  return (
    <div className="space-y-1.5">
      <div className="flex justify-between items-baseline">
        <label className="text-sm font-medium text-text-secondary">{label}</label>
        {hint && !error && (
          <span className="text-xs text-text-muted">{hint}</span>
        )}
      </div>
      {children}
      {error && (
        <p role="alert" className="text-xs text-red-500 mt-1">{error}</p>
      )}
    </div>
  );
}
