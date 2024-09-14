// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class', 
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#f66b80",
          300: "#f66b80cc",
          dark: "#ff0051",
          600: "#ea2445",
        },
        secondary: {
          light: "#ffe4e8",
          300: "#fcd4da4a",
          dark: "#2b2626",
          600: "#4b4141",
        },
        blue: {
          light: "#b3cfd7",
          dark: "#1b163f"
        },
        gray: {
          100: "#fafafa",
          200: "#f2f2f2",
          300: "#e5e5e5",
          400: "#b2b2b2",
          500: "#757474",
          600: "#00000099",
          700: "#393939",
          800: "#1e1e1e",
        },
        alert: {
          danger: "#FF4E4E",
          success: "#90DA1",
          warning: "#FEB72F",
        },

        ringColor: ['focus', 'dark'],
  
      },
      fontWeight: {
        semiBold: '600',
        medium: '500',
        regular: '400',
      },
      fontSize: {
        '6xl': ['60px', { lineHeight: '60px', letterSpacing: '-1.5px' }],
        '5xl': ['40px', { lineHeight: '54px', letterSpacing: '-1px' }],
        '4xl': ['28px', { lineHeight: '44px', letterSpacing: '-1.2px' }],
        '3xl': ['24px', { lineHeight: '34px', letterSpacing: '-0.8px' }],
        '2xl': ['24px', { lineHeight: '30px', letterSpacing: '-1px' }],
        'xl': ['18px', { lineHeight: '30px', letterSpacing: '-1px' }],
        'lg': ['16px', { lineHeight: '30px', letterSpacing: '-0.8px' }],
        'base': ['16px', { lineHeight: '25px', letterSpacing: '-0.7px' }],
        'sm': ['14px', { lineHeight: '19px', letterSpacing: '-0.4px' }],
      },
      borderRadius: {
        DEFAULT: '10px',
        full: "9999px",
      },
      boxShadow: {
        DEFAULT: 'rgba(0, 0, 0, 0.15) 0px 2px 8px',
      },
      transitionProperty: {
        'height': 'height',
      },
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
      });
    },
  ],
}