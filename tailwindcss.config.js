/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'media', // or 'class'
  plugins: [ require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
        
      "primary": "red",
              
      "secondary": "#F000B8",
              
      "accent": "#37CDBE",
              
      "neutral": "#3D4451",
              
      "base-100": "#FFFFFF",
              
      "info": "#3ABFF8",
              
      "success": "#36D399",
              
      "warning": "#FBBD23",
              
      "error": "#F87272",
        },
      },
    ],
  },
}

