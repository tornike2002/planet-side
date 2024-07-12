/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        antonio: ["Antonio", "sans-serif"],
        spartan: ["League Spartan", "sans-serif"],
      },
      fontSize: {
        "28px": "28px",
      },
      backgroundImage: {
        custom: "url('/assets/background-stars.svg')",
      },
      backgroundColor: {
        mainbg: "#070724",
      },
    },
  },
  plugins: [],
};
