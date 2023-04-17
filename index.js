import daisyui from 'daisyui';
import { install } from 'daisyui';

const DenaliCustomTheme = {
  themes: [
    {
      name: 'Denali',
      background: '#F0F4F8',
      foreground: '#1F2937',
      primary: '#2563EB',
      'primary-focus': '#1D4ED8',
      'primary-content': '#F0F4F8',
      secondary: '#6B7280',
      'secondary-focus': '#4B5563',
      'secondary-content': '#F0F4F8',
    },
  ],
};


install(DenaliCustomTheme);

const css = `
  @import 'tailwindcss/base';
  @import 'tailwindcss/components';
  @import 'tailwindcss/utilities';
  @import 'daisyui/dist/full.css';
`;

export default css;