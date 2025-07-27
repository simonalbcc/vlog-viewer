module.exports = {
  content: ["./src/**/*.{html,ts}"],
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require("daisyui")
  ],
  daisyui: {
    themes: [{
      custom: {
        "primary": "#152a65",
        "primary-hover": "#1e40af",
        // ... autres couleurs
      }
    }]
  }
}
