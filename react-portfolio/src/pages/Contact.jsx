import { useState } from "react"
import emailjs from "@emailjs/browser"

function Contact() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  })

  const [status, setStatus] = useState("")

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    emailjs
      .send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        () => {
          setStatus("Message envoyé ✅")
          setForm({
            firstName: "",
            lastName: "",
            email: "",
            message: "",
          })
        },
        () => {
          setStatus("Erreur lors de l'envoi ❌")
        }
      )
  }

  return (
    <div className="min-h-screen bg-neutral-950 text-white px-6 py-24">
      <div className="max-w-2xl mx-auto">

        <h1 className="text-4xl font-bold mb-10">Contact</h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-neutral-900 p-8 rounded-2xl"
        >

          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              name="firstName"
              placeholder="Prénom"
              value={form.firstName}
              onChange={handleChange}
              required
              className="bg-neutral-800 p-3 rounded-lg outline-none"
            />

            <input
              type="text"
              name="lastName"
              placeholder="Nom"
              value={form.lastName}
              onChange={handleChange}
              required
              className="bg-neutral-800 p-3 rounded-lg outline-none"
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full bg-neutral-800 p-3 rounded-lg outline-none"
          />

          <textarea
            name="message"
            placeholder="Votre message"
            value={form.message}
            onChange={handleChange}
            required
            rows="5"
            className="w-full bg-neutral-800 p-3 rounded-lg outline-none"
          />

          <button
            type="submit"
            className="w-full bg-white text-black py-3 rounded-lg font-semibold hover:bg-neutral-200 transition"
          >
            Envoyer
          </button>

          {status && (
            <p className="text-center text-sm mt-4">{status}</p>
          )}
        </form>

      </div>
    </div>
  )
}

export default Contact
