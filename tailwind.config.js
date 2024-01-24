/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "verde": "#285d56",
        "verde-claro": "#c4d446",
        "bege": "#e3ddd8",
        "seasalt": "#f8f6f4",
        "bege-50": "#f2eeea"
      }
    },
  },
  plugins: [],
}
