export default {
  title: 'Aesthics/Typography',
};

export const Headline = ({ headline }) => {
  return (
    `<${headline}>Headline - ${headline}</${headline}>`
  );
};

Headline.argTypes = {
  headline: {
    defaultValue: 'h1',
    control: { 
      type: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    },
  },
};

export const Paragraph = () => {
  return (
    `Paragraph - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
  );
};