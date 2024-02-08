/** @type {import('tailwindcss').Config} */
//eslint-disable-next-line
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { 
      fontFamily: {
        ///overwrite the standart font family of tailwind called sans
      sans: "Roboto Mono, monospace",
    },
  height:{
screen:"100dvh"
///h-screen is 100vh change to 100dvh
  },
  },
  },
  plugins: [],
}

