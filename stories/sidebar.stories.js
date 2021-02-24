export default {
    title: 'Components/Sidebar',
  };

export const Default = () => {
    return(`<div class="tabs is-primary is-vertical">
    <ul>
        <li class="tabs__section-header">Section Header</li>
        <li><a>Tab 1</a></li>
        <li class="is-active"><a>Tab 2</a></li>
        <li><a>Tab 3</a></li>
        <li><a>Tab 4</a></li>
        <li class="is-disabled"><a>Tab 5</a></li>
    </ul>
</div>`);
};
  
  export const Playground = ({disabled, active}) => {
    return (
      `<div class="tabs is-primary is-vertical">
      <ul>
          <li class="tabs__section-header">Section Header</li>
          <li><a>Tab 1</a></li>
          <li class=${active? 'is-active' : ''}><a>Tab 2</a></li>
          <li><a>Tab 3</a></li>
          <li><a>Tab 4</a></li>
          <li class=${disabled? 'is-disabled' : ''}><a>Tab 5</a></li>
      </ul>
  </div>`
    );
  };

  Playground.argTypes = {
    active:{
        defaultValue: false,
        control: "boolean",
    },
    disabled: {
        defaultValue: false,
        control: 'boolean'
    },
  };