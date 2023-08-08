/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },

      backgroundImage: {
        pattern: "url('/pattern/pattern.svg')",
        darkPattern: "url('/pattern/darkPattern.svg')",
      },

      fontFamily: {
        familjen: ['Familjen Grotesk', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },

      keyframes: {
        slideUpAndFade: {
          from: { opacity: 0, transform: 'translateY(2px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
      },

      animation: {
        slideUpAndFade: 'slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  darkMode: 'class',
  plugins: [require('tailwindcss-radix')()],
}
