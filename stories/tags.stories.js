export default {
    title: 'Components/Tags',
  };
  
  export const Playground = ({text, style, active, disabled, small, frontIcon, backIcon}) => {
    return (
      `<span class="tag 
        ${style === 'default' ? '':  'outlined'} 
        ${active? `is-active`: ''} 
        ${disabled? 'is-disabled' : ''} 
        ${small? 'is-small' : ''}
        ${frontIcon? 'has-icon-front' : ''}
        ${backIcon? 'has-icon-back' : ''}"
      >
        ${frontIcon? '<i class="d-icon d-check"></i>' : ''}  
        ${text}
        ${backIcon? '<a class="d-icon d-close"></a>' : ''}
      </span>`
    );
  };
  
  Playground.argTypes = {
    text:{
      defaultValue: "This is a tag",
      type: "string",
    },
    style: {
      defaultValue: 'default',
      control: { 
        type: 'select',
        options: ['default', 'outlined'],
      },
    },
    active:{
        defaultValue: false,
        control: "boolean",
    },
    disabled:{
        defaultValue: false,
        control: "boolean",
    },
    small:{
      defaultValue: false,
      control: "boolean",
    },
    frontIcon:{
      defaultValue: false,
      control: "boolean",
    },
    backIcon:{
      defaultValue: false,
      control: "boolean",
    }
  };

  export const List = ({wrap}) => {
    return (
      `<div class="tags ${wrap? ``: 'nowrap'}">
        <span class="tag">Tag One</span>
        <span class="tag">Tag Two</span>
        <span class="tag">Tag Three</span>
        <span class="tag">Tag Four</span>
        <span class="tag">Tag Five</span>
        <span class="tag">Tag Six</span>
        <span class="tag">Tag Seven</span>
        <span class="tag">Tag Eight</span>
        <span class="tag">Tag Nine</span>
        <span class="tag">Tag Ten</span>
        <span class="tag">Tag Eleven</span>
      </div>
      `
    );
  };

  List.argTypes = {
    wrap: {
      defaultValue: true,
      control: "boolean",
    }
  };