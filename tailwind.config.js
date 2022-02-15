module.exports = {
  content: ["./src/**/*.{tsx,ts,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          100: "#12188E",
          200: "#12188E",
          300: "#12188E",
          400: "#12188E",
          500: "#12188E",
          600: "#12188E",
          700: "#12188E",
          800: "#12188E",
          900: "#12188E",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
