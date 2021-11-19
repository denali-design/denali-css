export default {
  title: 'Helpers/Padding',
};

export const AllSides = ({ padding }) => {
  return (
    `<div class="box p-${padding}">The padding is ${padding}</div>`
  );
};

AllSides.argTypes = {
  padding: {
    defaultValue: '50',
    control: { 
      type: 'range',
      min: 1, 
      max: 100,
      step:1,
    },
  },
};

export const SingleSide = ({ padding, side }) => {
  return (
    `<div class="box p-${side}-${padding}">The padding is ${padding}</div>`
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
  padding: {
    defaultValue: '50',
    control: { 
      type: 'range',
      min: 1, 
      max: 100,
      step:1,
    },
  },
};

export const Horizontal = ({ padding }) => {
  return (
    `<div class="box p-x-${padding}">The horizontal padding is ${padding}</div>`
  );
};

Horizontal.argTypes = {
  padding: {
    defaultValue: '50',
    control: { 
      type: 'range',
      min: 1, 
      max: 100,
      step:1,
    },
  },
};

export const Vertical = ({ padding }) => {
  return (
    `<div class="box p-y-${padding}">The vertical padding is ${padding}</div>`
  );
};

Vertical.argTypes = {
  padding: {
    defaultValue: '50',
    control: { 
      type: 'range',
      min: 1, 
      max: 100,
      step:1,
    },
  },
};