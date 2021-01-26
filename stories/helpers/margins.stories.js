export default {
  title: 'Helpers/Margins',
};

export const AllSides = ({ margin }) => {
  return (
    `<div class="box m-${margin}">The margin is ${margin}</div>`
  );
};

AllSides.argTypes = {
  margin: {
    defaultValue: '50',
    control: { 
      type: 'range',
      min: 1, 
      max: 100,
    },
  },
};

export const SingleSide = ({ margin, side }) => {
  return (
    `<div class="box m-${side}-${margin}">The margin is ${margin}</div>`
  );
};

SingleSide.argTypes = {
  side : {
    defaultValue: 't',
    control: {
      type: 'select',
      options: ['t','b','l','r']
    }
  },
  margin: {
    defaultValue: '50',
    control: { 
      type: 'range',
      min: 1, 
      max: 100,
    },
  },
};

export const Horizontal = ({ margin }) => {
  return (
    `<div class="box m-x-${margin}">The horizontal margin is ${margin}</div>`
  );
};

Horizontal.argTypes = {
  margin: {
    defaultValue: '50',
    control: { 
      type: 'range',
      min: 1, 
      max: 100,
    },
  },
};

export const Vertical = ({ margin }) => {
  return (
    `<div class="box m-y-${margin}">The vertical margin is ${margin}</div>`
  );
};

Vertical.argTypes = {
  margin: {
    defaultValue: '50',
    control: { 
      type: 'range',
      min: 1, 
      max: 100,
    },
  },
};