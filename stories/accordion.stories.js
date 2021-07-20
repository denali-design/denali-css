// import './accordion.css';

export default {
    title: 'Components/Accordion',
  };
  


  export const Default = ({isOpen, hasIcon}) => {
    
    return (
      `<div class="accordion has-icon">
      <details>
       <summary>
        Title</summary>
        <div class="content">
       Epcot is a theme park at Walt Disney World Resort featuring exciting attractions, international pavilions, award-winning fireworks and seasonal special events.
       </div>
      </details>
      </div>`
    );
  };
  


  export const Playground = ({isOpen, hasIcon, isInverse}) => {
    
    return (
      `<div class="accordion ${hasIcon ? 'has-icon' : ''} ${isInverse ? 'is-inverse' : ''}">
      <details ${isOpen ? 'open' : ''}  >
       <summary>
        Title</summary>
        <div class="content">
       Epcot is a theme park at Walt Disney World Resort featuring exciting attractions, international pavilions, award-winning fireworks and seasonal special events.
       </div>
      </details>
      <details  >
       <summary>
        Title</summary>
        <div class="content">
       Epcot is a theme park at Walt Disney World Resort featuring exciting attractions, international pavilions, award-winning fireworks and seasonal special events.
       </div>
      </details>
      <details  >
       <summary>
        Title</summary>
        <div class="content">
       Epcot is a theme park at Walt Disney World Resort featuring exciting attractions, international pavilions, award-winning fireworks and seasonal special events.
       </div>
      </details>
      </div>`
    );
  };
  
  Playground.argTypes = {
    isOpen: {
      defaultValue: false,
      control: 'boolean',
    },
    hasIcon: {
      defaultValue : true,
      control: 'boolean',
    },
    isInverse: {
      defaultValue: false,
      control: 'boolean',
    }
  };