import { create } from '@storybook/theming';

export default create({
  base: 'light',

  colorPrimary: 'red',
  colorSecondary: '#016EFF',

  // UI
  appBg: '#f2f2f2',
  appContentBg: '#ffffff',
  appBorderColor: '#e8e8e8',
  appBorderRadius: 6,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#303030',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: '#606060',
  barSelectedColor: '#016EFF',
  barBg: 'white',

  // Form colors
  inputBg: '#f8f8f8',
  inputBorder: '#f8f8f8',
  inputTextColor: 'black',
  inputBorderRadius: 4,

  brandTitle: 'Link to the Denali CSS GitHub repo',
  brandUrl: 'https://github.com/denali-design/denali-css',
  brandImage: '/denali-storybook-css-logo.png',
});