export default {
    title: 'Components/Drawer',
  };
  
  export const Default = ({size, hasHeader, hasFooter, hasCloseIcon}) => {
    return (
      `<div class="drawer" style="width: ${size}px">
        ${hasHeader? `<div class="drawer-header">Title</div>`: ''}
        <div class="drawer-content">Content
        ${hasCloseIcon? `<a href="#close" class="close"><i class="d-icon d-close"></i></a>` : ''}
        </div>
        ${hasFooter? `<div class="drawer-footer">Footer</div>`: ''}
      </div>`
    );
  };
  
  Default.argTypes = {
    size: {
      defaultValue: 340,
      control: 'number',
    },
    hasHeader:{
        defaultValue: false,
        control: 'boolean',
    },
    hasFooter:{
        defaultValue: false,
        control: 'boolean',
    },
    hasCloseIcon:{
      defaultValue: false,
      control: 'boolean',
    }
  };