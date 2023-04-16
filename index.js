import daisyui from 'daisyui';
import { install } from 'daisyui';

const DenaliCustomTheme = {
  themes: [
    {
      name: 'my-theme',
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

const myDesignSystem = daisyui.extend(DenaliCustomTheme);

// Automatically install the design system in the app
export function installDesignSystem(app) {
  if (!app) {
    app = createApp({});
  }
  app.use(install(myDesignSystem));
  return app;
}