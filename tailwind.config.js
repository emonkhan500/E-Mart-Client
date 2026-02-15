import { green } from "@mui/material/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        small: "375px",
        tab: "580px",
        xxl: "1400px",
        "2xl": "1540px",
        "3xl": "1800px",
      },
      colors: {
        "primary-green": "#3BB77E",
        "primary-text": "#253D4E",
        "secondary-text": "#424242",
        "primary-gray": "#7E7E7E",
        "secondary-gray": "#ADADAD",
        "bg-honeydew": "#F2FCE4",
        glory: "#658878",
        pinks: "#FFF3FF",
        "light-gray": "#F4F6FA",
        cream: "#FFFCEB",
        orangee: "#FEEFEA",
        orange: "#fb923c",
        "primary-border": "#DEF9EC",
        border: "#ECECEC",
        "border-gray": "#383844",
        pink: "#FB2E86",
        offNavyBlue: "#3F509E",
        navyBlue: "#151875",
        purple: "#7E33E0",
        offPurple: "#9F63B5",
        pantonePurple: "#E0D3F5",
        lightPurple: "#F6F7FB",
        red: "#FB2448",
        blue: "#2F1AC4",
        softGreen: "#EBF4F3",
        gray: "#8A8FB9",
        lightGray: "rgba(26, 11, 91, 0.30)",
      },
    },
  },
  plugins: [
    require("daisyui"),
    function ({ addBase }) {
      addBase({
        ".table th, .table td": {
          padding: "6px",
          verticalAlign: "middle",
        },
      });
    },
  ],
};
