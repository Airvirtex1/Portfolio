/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: {
          base:    "#030712", // neutral-950
          raised:  "#111827", // neutral-900
          overlay: "#1f2937", // neutral-800
          hover:   "#374151", // neutral-700
        },
        content: {
          primary:   "#ffffff",
          secondary: "#9ca3af", // neutral-400
          muted:     "#6b7280", // neutral-500
        },
      },
      maxWidth: {
        container: "72rem", // 6xl — main layout width used everywhere
      },
    },
  },
  plugins: [],
}
