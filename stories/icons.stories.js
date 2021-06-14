export default {
  title: 'Components/Icons',
};

export const Playground = ({ icon, size, inverse }) => {
  return (
    `<i class="d-icon d-${icon} is-${size}"></i>`
  );
};

Playground.argTypes = {
  icon: {
    defaultValue: "user-profile-circle",
    type: "string",
  },
  size: {
    defaultValue: 'large',
    control: { 
      type: 'select',
      options: ['extrasmall', 'small', 'default', 'medium', 'large'],
    },
  },
};