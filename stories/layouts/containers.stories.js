export default {
  title: 'Layouts/Containers',
};

export const Playground = ({ type, marginless }) => {
  return (
    `<div class="${type === 'default' ? 'container': 'container-full'} ${marginless ? 'is-marginless' : ''} has-bg-blue-500 p-10 br-4">
      Container
    </div>`
  );
};

Playground.argTypes = {
  type: {
    defaultValue: 'default',
    control: { 
      type: 'select',
      options: ['default', 'full'],
    },
  },
  marginless: { 
    defaultValue: false,
    control: 'boolean',
  },
};
