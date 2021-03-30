export default {
  title: "Components/Menu",
};

export const Default = () => {
  return `<!-- Inline block is added due to the component inheriting the display block. -->
      <div class="menu" style="display:inline-block;">
          <a class="menu-trigger">Hover for default menu</a>
          <div class="menu-content">
              <a>Home</a>
              <a>About</a>
              <a>Contact</a>
              <a>Help</a>
              <hr>
              <a>Support</a>
          </div>
      </div>`;
};

export const Alignment = ({ position }) => {
  return `<!-- Inline block is added due to the component inheriting the display block. m-l-100, 
                margin is added only to distinguish between alignment -->
  <div class="menu m-l-100 
    ${position ? `is-${position}` : ""}" 
    style="display:inline-block;">
          <a class="menu-trigger">Hover for ${position ? position : ''} menu</a>
          <div class="menu-content">
              <ul>
                  <li><a>User guide</a></li>
                <li><a>Follow us on jive Lorem ipsum</a></li>
                  <li><a>Send Feedback</a></li>
                  <hr>
                  <li><a>Support</a></li>
              </ul>
          </div>
      </div>`;
};

Alignment.argTypes = {
  position: {
    control: {
      type: "select",
      options: ["left", "right"],
    },
  },
};

export const LinksSimulation = () => {
  return `<!-- Inline block is added due to the component inheriting the display block. -->
<div class="menu" style="display:inline-block;">
    <a class="menu-trigger">Hover for default menu</a>
    <div class="menu-content">
        <span class="link">Home</span>
        <span class="link">About</span>
        <span class="link">Contact</span>
        <span class="link">Help</span>
        <hr>
        <span class="link">Support</span>
    </div>
</div>`;
};

export const ManualTrigger = () => {
  return `<!-- Inline block is added due to the component inheriting the display block. -->
<div class="menu is-active" style="display:inline-block;">
    <a class="menu-trigger">Hover for default menu</a>
    <div class="menu-content">
        <span class="link">Home</span>
        <span class="link">About</span>
        <span class="link">Contact</span>
        <span class="link">Help</span>
        <hr>
        <span class="link">Support</span>
    </div>
</div>`;
};
