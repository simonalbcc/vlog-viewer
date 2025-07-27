module.exports = {
  content: ["./src/**/*.{html,ts}"],
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require("daisyui")
  ],
  daisyui: {
    theme: "customtheme",
  },
}
