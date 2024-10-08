/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }

      // '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }
    },
    extend: {
      colors: {
        primary: "white",
        secondary: "whitesmoke"
      },
      fontFamily: {
        'body': [
          'Roboto',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'system-ui',
          'Segoe UI',
          'Roboto',
        ],
        a: "'Open Sans'",
      },
      fontSize: {
        base: "1rem",
        xl: "1.25rem",
        lg: "1.125rem",
        sm: "0.875rem",
        xs: "0.75rem",
        "9xl": "1.75rem",
        "10xl": "1.813rem",
        "11xl": "1.875rem",
        "13xl": "2rem",
        "15xl": "2.125rem",
        "29xl": "3rem",
        "31xl": "3.125rem",
        "55xl": "4.625rem",
        inherit: "inherit",
      },
      backgroundImage: {
        'hero-brand': "url('/background@2x.png')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
    },
  },
  plugins: [
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/typography'),
    // require('@tailwindcss/aspect-ratio'),
  ],
}