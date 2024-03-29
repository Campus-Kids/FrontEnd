/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js, jsx, ts, tsx}'],
  theme: {
    extend: {
      colors:{
        formularioColor: '#F411CF'
      }
    },
  },
  plugins: [
    // require('@tailwindcss/forms')
  ],
}

