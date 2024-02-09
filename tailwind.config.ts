import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "background-shine": "background-shine 3s linear infinite"
      },
      keyframes: {
        "background-shine": {
          "from": {
            "backgroundPosition": "0 0"
          },
          "to": {
            "backgroundPosition": "-200% 0"
          }
        }
      },
      colors: {
        brandPrimary: "#5C17E5",
        brandSecondary: "#7F77FF",
        brandTertiary: "#B3BEFF",
        bgPrimary: "#ffffff",
        bgSecondary: "#F6F8FB",
        bgOverlay: "#CBD4E1",
        bgPrimaryInverse: "#1A212B",
        bgSecondaryInverse: "#27313F",
        bgInformative: "#E0EDFF",
        bgPositive: "#E1FCDE",
        bgWarning: "#FFF2D2",
        bgNegative: "#FFD4D8",
        bgLightScrim: "#FFFFFFCC",
        bgDarkScrim: "#1A212B99",
        iconsPrimary: "#1A212B",
        iconsSecondary: "#728197",
        iconsPrimaryInverse: "#F6F8FB",
        iconsSecondaryInverse: "#9AA8BC",
        iconsInformative: "#5598F6",
        iconsPositive: "#17BF33",
        iconsWarning: "#F2930D",
        iconsNegative: "#F14A58",
        iconsDisabled: "#9AA8BC4C",
        textPrimary: "#1A212B",
        textSecondary: "#728197",
        textPrimaryInverse: "#F6F8FB",
        textSecondaryInverse: "#B6C2D3",
        textInformative: "#105FCE",
        textPositive: "#016A1C",
        textWarning: "#BA5900",
        textNegative: "#B1000F"
      },
    },
  },
  plugins: [],
};
export default config;
