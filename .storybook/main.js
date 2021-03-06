module.exports = {
  "stories": [
    "../scss/**/*.scss",
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-docs",
    "@storybook/addon-links",
    "@storybook/addon-viewport",
    // "@storybook/addon-backgrounds",
    // "@storybook/addon-essentials",
    "@storybook/addon-controls",
    "@storybook/addon-actions",
    '@whitespace/storybook-addon-html',
  ]
}