export default {
    title: 'Components/Toggle',
  };
  
  export const Default = ({small, inverse}) => {
    return (
      `<div class="toggle ${small ? 'is-small' : ''} ${inverse ? 'is-inverse' : ''}">
      <ul>
          <li><a>Toggle 1</a></li>
          <li class="is-active"><a>Toggle 2</a></li>
          <li><a>Toggle 3</a></li>
          <li><a>Toggle 4</a></li>
          <li class="is-disabled"><a>Toggle 5</a></li>
      </ul>
  </div>`
    );
  };
  
  Default.argTypes = {
    small: {
        defaultValue: false,
        control: 'boolean',
    },
    inverse: {
        defaultValue: false,
        control: 'boolean',
    },
  };
  
  export const RadioToggles = ({size, footerHtml}) => {
    return (
      `<div class="toggle">
      <input type="radio" id="radio-three" name="switch-two" value="" checked/>
      <label for="radio-three">One</label>
      <input type="radio" id="radio-four" name="switch-two" value="" />
      <label for="radio-four">Two</label>
      <input type="radio" id="radio-five" name="switch-two" value="" />
      <label for="radio-five">Three</label>
  </div>`
    );
  };

  export const IconToggles = ({size, footerHtml}) => {
    return (
      `<div class="toggle has-icons">
      <input type="radio" id="radio-eight" name="switch-four" value="" checked />
      <label for="radio-eight">
        <span class="d-icon d-add"></span>
      </label>
      <input type="radio" id="radio-nine" name="switch-four" value="" />
      <label for="radio-nine">
        <span class="d-icon d-minus"></span>
      </label>
    </div>`
    );
  };
  
