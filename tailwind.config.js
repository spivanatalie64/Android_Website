module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        neonBlue: "#00CFFF",
        neonPink: "#FF3CF9",
        neonPurple: "#A855F7",
        auroraGreen: "#3BFFAB"
      },
      backgroundImage: {
        aurora:
          "radial-gradient(circle at 20% 30%, rgba(0,200,255,0.25), transparent 60%), radial-gradient(circle at 80% 70%, rgba(255,0,200,0.15), transparent 60%), radial-gradient(circle at 50% 50%, rgba(0,255,180,0.15), transparent 70%)"
      },
      boxShadow: {
        neon: "0 0 25px rgba(0, 200, 255, 0.35)"
      }
    }
  },
  plugins: []
};