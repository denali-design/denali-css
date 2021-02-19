export default {
    title: 'Components/Fields',
  };
  
  export const Default = ({size, active, error, type, inverse}) => {
    return (
      `<div class="input ${size ? `is-${size}` : ''} ${active? 'is-active': ''} ${error? 'is-error':''} ${inverse? 'is-inverse' : ''}">
      <input class="" type=${type} placeholder="Just a field" />
      ${error ? '<p class="message">with an error</p>': ''}
    </div>`
    );
  };
  
  Default.argTypes = {
    size: {
        control: {
            type: 'select',
            options: ['default', 'large', 'medium', 'small'],
        }
    },
    type: {
        defaultValue: 'text',
        control: {
            type: 'select',
            options: ['text', 'email', 'number', 'password'],
        }
    },
    active:{
        defaultValue: false,
        control: "boolean",
    },
    error:{
        defaultValue: false,
        control: "boolean",
    },
    inverse:{
        defaultValue: false,
        control: "boolean",
    },
  };
  
  export const TextArea = () => {
    return (
      `<div class="input">
      <textarea type="text" placeholder="Text area"></textarea>
    </div>`
    );
  };
  
  export const IconAtFront = () => {
    return (
      `<div class="input has-icon-front">
      <span class="d-icon d-filter-horizontal is-brand-300"></span><input type="text" placeholder="Icon front" />
    </div>`
    );
  };

  export const IconAtBack = () => {
    return (
      `<div class="input has-icon-back">
      <input type="text" placeholder="Icon back" /><a class="d-icon d-close-circle-solid is-secondary is-sub"></a>
    </div>`
    );
  };

  export const FieldWithButton = () => {
    return (
      `<div class="input-group has-button">
      <div class="input">
        <input type="text" placeholder="Field with button" />
      </div>
      <button class="button is-solid has-icon"><i class="d-icon d-add is-small"></i></button>
    </div>`
    );
  };