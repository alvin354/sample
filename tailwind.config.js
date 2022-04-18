module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        fontFamily: {
          Nunito: ["Nunito Sans"],
          Roboto: ["Roboto"],
          Poppins: ["Poppins"],
        },
        colors: {
          transparent: "tranparent",
          current: "currentColor",
          White: "#ffffff",
          footer: "#0d1030",
          background: "#f0f1f7",
          metal: "#565584",
          tahiti: "#3ab7bf",
          silver: "#ecebff",
          "bubble-gum" : "ff77e9",
          bermuda: "#78dcca",
          bgAbout: "#19345E",
          larry: "#707070",
          bgFoo : "#19345E",
        },
        margins: {
          bottom50: "12.5rem"
        }
    },
  },
  plugins: [],
}