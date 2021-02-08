module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === "production",
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        "22": "20rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
