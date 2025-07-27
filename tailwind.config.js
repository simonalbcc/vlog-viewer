module.exports = {
  content: ["./src/**/*.{html,ts,css,scss}"],
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require("daisyui")
  ]
}
