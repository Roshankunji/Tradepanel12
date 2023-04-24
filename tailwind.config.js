/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      //   'gradient-conic':
      //     'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      // },
      backgroundImage: {
        "gradient-custom-90.76deg":
          "linear-gradient(90.76deg, rgba(83, 81, 81, 0.1) 56.32%, rgba(58, 58, 58, 0) 178.8%)",
      },
      colors: {
        backgroundColor: "#0C1020",
        darkBlueBlack: "#161617",
        darkBlueBlack1: "#121212",
        darkBlue: "#131A2A",
        lightbluetext: "#98A1C0",
        lightBlue: "#293249",
        initialNavTextColor: "#666363",
        white: "#FFFFFF",
        borderColor: "#9C9C9C",
        borderColor1: "#98a1c03d",
        primary: "#2054A5",
        orange: "#E2726E",
        hoverBgColor: "#262626",
        lightGray: "#9C9C9C",
        secondary_text: "#516687",
        highlight: "#FFC529",
        primary_text: "#34435E",
        faded_text: "#A7B1C2",
      },
      fontFamily: {
        sora: "Sora-VariableFont_wght",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
