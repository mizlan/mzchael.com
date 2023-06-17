/** @type {import('tailwindcss').Config} */
module.exports = {
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
          50: "#e0e2e9",
          100: "#e2e6ed",
          200: "#e6ebf1",
          300: "#e4edf2",
          400: "#dde8ec",
          500: "#cddbdf",
          600: "#b4c4c8",
          700: "#94a5a9",
          800: "#708084",
          900: "#4b575b",
        },
        lavenderHaze: {
          50: "#e7e0e9",
          100: "#e9e2ed",
          200: "#ece6f1",
          300: "#ebe4f2",
          400: "#e3ddec",
          500: "#d3cddf",
          600: "#bab4c8",
          700: "#9a94a9",
          800: "#757084",
          900: "#4f4b5b",
        },
      },
    },
  },
  plugins: [],
}
