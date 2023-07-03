/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
};

// module.exports = {
//   //...
//   daisyui: {
//     themes: ["light", "dark", "cupcake"],
//   },
// }
