/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Manrope", "ui-sans-serif", "system-ui"],
        mono: ["Fira Code", "ui-monospace", "monospace"]
      },
      colors: {
        base: {
          50: "#f4f8ff",
          100: "#dbe5f5",
          900: "#0b1020",
          950: "#070b16"
        },
        accent: {
          300: "#a5b4fc",
          400: "#5eead4",
          500: "#22d3ee",
          600: "#06b6d4"
        }
      },
      boxShadow: {
        soft: "0 10px 40px rgba(7, 11, 22, 0.3)",
        glow: "0 15px 30px rgba(99, 102, 241, 0.32)"
      }
    }
  },
  plugins: []
};
