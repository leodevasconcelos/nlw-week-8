module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          300: "#996DFF",
          500: "#8257E5",
        }
      },
      dropShadow: {
        "default": "0px 8px 24px rgba(130, 87, 229, 0.25)",
      },
    },
  },
  plugins: [],
}
