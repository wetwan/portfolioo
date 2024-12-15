/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      content: {
        mobile: "url('./assets/mobile-development.png')", 
        ux: "url('./assets/ux-design.png')",
        web: "url('./assets/web-programming.png')",
      },
    },
  },
  plugins: [],
};
