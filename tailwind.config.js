/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },

      fontFamily: {
        newake: ['Newake', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },

      keyframes: {
        scaleIn: {
          '0%': { transform: 'scale(0)', opacity: 0 },
          '100%': { transform: 'scale(1)', opacity: 1 },
        },
      },

      animation: {
        scaleIn: 'scaleIn 0.2s ease-out',
      },
    },
  },
  darkMode: 'class',
  plugins: [require('tailwindcss-radix')()],
}
