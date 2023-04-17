module.exports = {
  content: ['./public/*.html'],
  extends: '@tailwindcss/default',
  plugins: [require('daisyui')],
  safelist: [
    {
      pattern: /./,
      variants: ['sm', 'md', 'lg', 'xl', '2xl'],
    },
  ]
};
