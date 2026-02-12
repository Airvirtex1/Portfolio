import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({ type: "idle", message: "" });
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus({ type: "idle", message: "" });

    try {
      // ✅ Remplace par TES identifiants EmailJS
      await emailjs.send(
        "service_u0icd1w",
        "template_zzkqc5o",
        {
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          message: form.message,
        },
        "lca6wfuXSPLfuxpym"
      );

      setStatus({ type: "success", message: t("contact.success") });
      setForm({ firstName: "", lastName: "", email: "", message: "" });
    } catch (err) {
      setStatus({ type: "error", message: t("contact.error") });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white px-6 py-24">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{t("contact.title")}</h1>
        <p className="text-neutral-400 mb-10">{t("contact.subtitle")}</p>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-neutral-900 border border-neutral-800 p-8 rounded-2xl"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm text-neutral-300">
                {t("contact.firstNameLabel")}
              </label>
              <input
                type="text"
                name="firstName"
                placeholder={t("contact.firstNamePlaceholder")}
                value={form.firstName}
                onChange={handleChange}
                required
                className="w-full bg-neutral-800 border border-neutral-700 p-3 rounded-lg outline-none focus:border-neutral-500"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm text-neutral-300">
                {t("contact.lastNameLabel")}
              </label>
              <input
                type="text"
                name="lastName"
                placeholder={t("contact.lastNamePlaceholder")}
                value={form.lastName}
                onChange={handleChange}
                required
                className="w-full bg-neutral-800 border border-neutral-700 p-3 rounded-lg outline-none focus:border-neutral-500"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm text-neutral-300">
              {t("contact.emailLabel")}
            </label>
            <input
              type="email"
              name="email"
              placeholder={t("contact.emailPlaceholder")}
              value={form.email}
              onChange={handleChange}
              required
              className="w-full bg-neutral-800 border border-neutral-700 p-3 rounded-lg outline-none focus:border-neutral-500"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm text-neutral-300">
              {t("contact.messageLabel")}
            </label>
            <textarea
              name="message"
              placeholder={t("contact.messagePlaceholder")}
              value={form.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full bg-neutral-800 border border-neutral-700 p-3 rounded-lg outline-none focus:border-neutral-500 resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={isSending}
            className="w-full bg-white text-black py-3 rounded-lg font-semibold hover:bg-neutral-200 transition disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isSending ? t("contact.sending") : t("contact.send")}
          </button>

          {status.message && (
            <p
              className={`text-center text-sm ${
                status.type === "success"
                  ? "text-green-400"
                  : status.type === "error"
                  ? "text-red-400"
                  : "text-neutral-300"
              }`}
            >
              {status.message}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
