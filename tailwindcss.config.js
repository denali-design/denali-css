/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: "class",
  content: ["./public/*.html"], // turn off after testing
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms"), require('postcss-nested')],
  theme: {
    extend: {
      colors: {
        "color-background-primary-light": colors.white,
        "color-background-secondary-light": colors.slate[50],
        "color-border-primary-light": colors.slate[200],
        "color-text-primary-light": colors.slate[800],
        "color-text-secondary-light": colors.slate[500],

        "color-action-text-default-light": colors.white,
        "color-action-text-hover-light": colors.white,
        "color-action-text-pressed-light": colors.white,
        "color-action-text-disabled-light": colors.slate[500],

        "color-action-primary-default-light": colors.blue[600],
        "color-action-primary-hover-light": colors.blue[800],
        "color-action-primary-pressed-light": colors.blue[900],
        "color-action-primary-disabled-light": colors.slate[300],

        "color-action-secondary-default-light": colors.slate[600],
        "color-action-secondary-hover-light": colors.slate[800],
        "color-action-secondary-pressed-light": colors.slate[900],
        "color-action-secondary-disabled-light": colors.slate[300],

        "color-status-success-light": colors.green[500],
        "color-status-success-icon-light": colors.green[700],
        "color-status-success-background-light": colors.green[100],

        "color-status-danger-light": colors.red[500],
        "color-status-danger-icon-light": colors.red[700],
        "color-status-danger-background-light": colors.red[100],

        "color-status-warning-light": colors.yellow[500],
        "color-status-warning-icon-light": colors.yellow[700],
        "color-status-warning-background-light": colors.yellow[100],

        "color-status-info-light": colors.blue[500],
        "color-status-info-icon-light": colors.blue[700],
        "color-status-info-background-light": colors.blue[100],

        "color-background-primary-dark": colors.slate[900],
        "color-background-secondary-dark": colors.slate[950],
        "color-border-primary-dark": colors.slate[800],
        "color-text-primary-dark": colors.slate[200],
        "color-text-secondary-dark": colors.slate[400],

        "color-action-text-default-dark": colors.slate[950],
        "color-action-text-hover-dark": colors.slate[950],
        "color-action-text-pressed-dark": colors.slate[950],
        "color-action-text-disabled-dark": colors.slate[400],

        "color-action-primary-default-dark": colors.blue[400],
        "color-action-primary-hover-dark": colors.blue[200],
        "color-action-primary-pressed-dark": colors.blue[100],
        "color-action-primary-disabled-dark": colors.slate[700],

        "color-action-secondary-default-dark": colors.slate[400],
        "color-action-secondary-hover-dark": colors.slate[200],
        "color-action-secondary-pressed-dark": colors.slate[100],
        "color-action-secondary-disabled-dark": colors.slate[700],

        "color-status-success-dark": colors.green[800],
        "color-status-success-icon-dark": colors.green[600],
        "color-status-success-background-dark": colors.green[950],

        "color-status-danger-dark": colors.red[800],
        "color-status-danger-icon-dark": colors.red[600],
        "color-status-danger-background-dark": colors.red[950],

        "color-status-warning-dark": colors.yellow[800],
        "color-status-warning-icon-dark": colors.yellow[600],
        "color-status-warning-background-dark": colors.yellow[950],

        "color-status-info-dark": colors.blue[800],
        "color-status-info-icon-dark": colors.blue[600],
        "color-status-info-background-dark": colors.blue[950],
      },
      spacing: {
        none: "0px",
        squeezed: "2px",
        compressed: "4px",
        tight: "8px",
        snug: "16px",
        normal: "24px",
        relaxed: "32px",
        loose: "40px",
      },
    },
  },
};
