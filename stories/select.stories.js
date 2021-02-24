export default {
    title: 'Components/Select',
  };

  export const Default = () => {
      return (
          `<div class="input has-arrow">
          <select name="">
          <option value="" disabled="" selected="">Select your option</option>
          <option value="">Value 1</option>
          <option value="">Value 2</option>
          <option value="">Value 3</option>
          </select>
          </div>`
      );
  };
  
  export const Playground = ({size, inverse, disabled, selected}) => {
    return (
      `<div class="input ${size ? `is-${size}` : ''} ${inverse? 'is-inverse' : ''} has-arrow">
      <select name="" ${disabled ? 'disabled = ""' : ''}>
      <option value="" disabled="" >Select your option</option>
      <option value="" ${disabled ? 'disabled = ""' : ''}>Value 1</option>
      <option value="" ${selected ? 'selected = ""' : ''}>Value 2</option>
      <option value="">Value 3</option>
      </select>
      </div>`
    );
  };
  
  Playground.argTypes = {
    size: {
        control: {
            type: 'select',
            options: ['default', 'large', 'medium', 'small'],
        }
    },
    inverse:{
        defaultValue: false,
        control: "boolean",
    },
    disabled: {
        defaultValue: false,
        control: 'boolean'
    },
    selected: {
        defaultValue: false,
        control: 'boolean'
    },
  };