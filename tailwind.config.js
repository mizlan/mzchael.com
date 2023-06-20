/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        theme: {
          light: "#e6e2dd",
          dark: "#302630"
        },
        rosePearl: {
          50: "#e9e4e0",
          100: "#ede7e2",
          200: "#f1eae6",
          300: "#f2e9e4",
          400: "#ece2dd",
          500: "#dfd2cd",
          600: "#c8b9b4",
          700: "#a99894",
          800: "#847270",
          900: "#5b4b4b",
        },
        stAugustine: {
          50: "#e2e9e0",
          100: "#e5ede2",
          200: "#e8f1e6",
          300: "#e7f2e4",
          400: "#e0ecdd",
          500: "#d1dfcd",
          600: "#bac8b4",
          700: "#9ca994",
          800: "#7a8470",
          900: "#555b4b",
        },
        wanBlue: {
          50: "#d7d9e1",
          100: "#d0d5dd",
          200: "#c3cbd3",
          300: "#b5c1c7",
          400: "#a6b4ba",
          500: "#94a5a9",
          600: "#809295",
          700: "#6a7b7e",
          800: "#546265",
          900: "#3d484b",
        },
        lavenderHaze: {
          50: "#e7dedc",
          100: "#dbd2d2",
          200: "#c4bcbe",
          300: "#aca3a8",
          400: "#958891",
          500: "#7e6b7b",
          600: "#674d66",
          700: "#4d3250",
          800: "#341b38",
          900: "#1c0b21",
        },
      },
    },
  },
  plugins: [],
}
