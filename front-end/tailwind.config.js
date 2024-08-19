/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      white: "#fff",
      black: "#080808",
      primary: {
        light: "#f66b80",
        300: "rgba(246, 107, 128, 0.8)",
        dark: "#ff0051",
        600: "rgba(234, 36, 69, 1)",
      },
      secondary: {
        light: "#ffe4e8",
        300: "rgba(252, 212, 218, 0.29)",
        dark: "#e1c5c9",
        600: "rgba(225, 197, 201, 0.6)",
      },
      blue: "#b3cfd7",
      gray: {
        100: "#fafafa",
        200: "#f2f2f2",
        300: "#e5e5e5",
        400: "#b2b2b2",
        500: "#757474",
        600: "#393939",
        linearGradient: "rgba(0,0,0,0.6)"
      },
    },

    fontWeight: {
      semiBold: '600',
      medium: '500',
      regular: '400',
    },

    fontSize: {
      '6xl': ['60px', {
        lineHeight: '60px',
        letterSpacing: '-1.5px',
      }],
      '5xl': ['40px', {
        lineHeight: '54px',
        letterSpacing: '-1px',
      }],
      '4xl': ['28px', {
        lineHeight: '44px',
        letterSpacing: '-1.2px',
      }],
      '3xl': ['24px', {
        lineHeight: '34px',
        letterSpacing: '-0.8px',
      }],
      '2xl': ['24px', {
        lineHeight: '30px',
        letterSpacing: '-1px',
      }],
      'xl': ['18px', {
        lineHeight: '30px',
        letterSpacing: '-1px',
      }],
      'lg': ['16px', {
        lineHeight: '30px',
        letterSpacing: '-0.8px',
      }],
      'base': ['14px', {
        lineHeight: '25px',
        letterSpacing: '-0.7px',
      }],
      'sm': ['12px', {
        lineHeight: '18px',
        letterSpacing: '-0.6px',
      }],
    },

    borderRadius: {
      DEFAULT: '10px',
      full: "9999px"
    },

    boxShadow: {
      DEFAULT: 'rgba(0, 0, 0, 0.15) 0px 2px 8px;',
    },

    transitionProperty: {
      'height': 'height',
    },
    extend: {
      // Ajoutez des propriétés étendues ici si nécessaire
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.text-shadow-md': {
          textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)',
        },
        '.text-shadow-none': {
          textShadow: 'none',
        },
      },);
    },
  ],
}