const path = require('path');

module.exports = {
  theme: {
    denali: {
        primary: "#016EFF",
        secondary: "#f6d860",
        accent: "#37cdbe",
        neutral: "#3d4451",
        "base-100": "#ffffff",
        // ...other properties
      },
  },
  cssPath: path.join(__dirname, 'theme.css'),
};