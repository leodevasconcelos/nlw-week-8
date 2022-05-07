module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: {
          100: "#495057",
          200: "#FFFAF1",
          300: "#DCE9E2",
          500: "#00856F",
        },
        brand: {
          300: "#996DFF",
          500: "#00856F",
        }
      },
      dropShadow: {
        "default": "0px 8px 24px rgba(130, 87, 229, 0.25)",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar'),
  ],
}
