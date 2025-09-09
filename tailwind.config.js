/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "Segoe UI", "Roboto", "Helvetica", "Arial", "sans-serif"],
      },
      colors: {
        brand: {
          50:  "#eef9ff",
          100: "#d9f3ff",
          200: "#b6e7fe",
          300: "#85d7fb",
          400: "#4cc2f5",
          500: "#0ea5e9", // sky-500-ish
          600: "#0891d2",
          700: "#0678b8",
          800: "#075985",
          900: "#0b1220", // deep slate for dark bg
        },
        accent: {
          500: "#06b6d4", // teal accent
        }
      }
    },
  },
  plugins: [],
};
