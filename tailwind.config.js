/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        uaeSand: "#F7F3E9",
        uaeSandDark: "#EBE3D0",
        uaeGold: "#D4AF37",
        uaeGoldLight: "#F3E5AB",
        uaeGoldDark: "#AA820A",
        uaeNavy: "#0B1D3A",
        uaeNavyLight: "#162D59",
        uaeNavyDark: "#060F1E",
        uaeRed: "#CE1126",
        darkBg: "#0B0F17",
        darkCard: "#111827",
        darkBorder: "#1F2937",
        darkAccent: "#1E293B",
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', '"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'gold-glow': '0 0 25px -5px rgba(212, 175, 55, 0.35)',
        'gold-glow-lg': '0 0 40px -5px rgba(212, 175, 55, 0.5)',
        'navy-glow': '0 10px 30px -10px rgba(11, 29, 58, 0.5)',
        'card-hover': '0 20px 35px -10px rgba(0, 0, 0, 0.3)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
};