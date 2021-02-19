export default {
    title: 'Components/Tabs',
  };
  
  export const Default = ({type, vertical, hide}) => {
    return (
      `<div class="tabs ${type? `is-${type}`: ''} ${vertical? `is-${vertical}`: ''} ${hide? 'tablet-down-hide-left' : ''}">
      <ul>
          <li class="is-active"><a>Tab 1</a></li>
          <li><a>Tab 2</a></li>
          <li><a>Tab 3</a></li>
          <li><a>Tab 4</a></li>
          <li class="is-disabled"><a>Tab 5</a></li>
      </ul>
  </div>`
    );
  };
  
  Default.argTypes = {
    type: {
        defaultValue: 'primary',
        control: {
            type: 'select',
            options: ['primary', 'secondary'],
        }
    },
    vertical:{
        defaultValue: false,
        control: "boolean",
    },
    hide:{
        defaultValue: false,
        control: "boolean",
    }
  };