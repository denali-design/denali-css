/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: "class",
  content: ["./public/*.html"], // turn off after testing
  theme: {
    extend: {
      colors: {
        primary: colors.blue[600],
        "primary-content": colors.neutral[50],
        secondary: colors.violet[600],
        "secondary-content": colors.neutral[50],
        base: colors.neutral[50],
        "base-dark": colors.neutral[950],
        "base-light": colors.neutral[300],
        success: colors.green[600],
        "success-light": colors.green[300],
        "success-dark": colors.green[900],
        danger: colors.red[600],
        "danger-light": colors.red[300],
        "danger-dark": colors.red[900],
        warning: colors.yellow[500],
        "warning-light": colors.yellow[200],
        "warning-dark": colors.yellow[600],
        info: colors.blue[600],
        "info-light": colors.blue[300],
        "info-dark": colors.blue[900],
      },
    },
  },
};
