module.exports = {
  darkMode: 'media',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        main: {
          100: "#495057",
          200: "#FFFAF1",
          300: "#DCE9E2",
          500: "#00856F",
        },
        brand: {
          100: "#F7F9F9",
          200: "#DCE9E2",
          300: "#996DFF",
          500: "#00856F",
        },
        brand_alt: {
          500: "#FFFAF1",
          900: "#00453A"
        }
      },
      dropShadow: {
        "default": "0px 8px 24px rgba(0, 133, 111, 0.25)",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar'),
  ],
}
