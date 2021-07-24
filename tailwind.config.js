module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: () => ({
        black: "#030813",
      }),
      backgroundImage: () => ({
        overlayGrad: "linear-gradient(to top, #13151d 0%, #13151d00 60%)",
        meGrad: "linear-gradient(to top, #030813, #03081300)",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
