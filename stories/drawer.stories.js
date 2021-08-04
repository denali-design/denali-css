export default {
  title: "Components/Drawer",
};

export const Default = () => {
  return `<div class="drawer is-left" >
        <div class="drawer-content">Content
        </div>
      </div>`;
};

export const Playground = ({
  isInverse,
  position,
  hasHeader,
  hasFooter,
  hasCloseIcon,
}) => {
  return `<div class="drawer ${isInverse ? "is-inverse" : ""} ${
    position ? `is-${position}` : ""
  }" >
        ${hasHeader ? `<div class="drawer-header">Title</div>` : ""}
        <div class="drawer-content">Content
        ${
          hasCloseIcon
            ? `<a href="#close" class="close"><i class="d-icon d-close"></i></a>`
            : ""
        }
        </div>
        ${hasFooter ? `<div class="drawer-footer">Footer</div>` : ""}
      </div>`;
};

Playground.argTypes = {
  isInverse: {
    defaultValue: false,
    control: "boolean",
  },
  position: {
    defaultValue: "left",
    control: {
      type: "select",
      options: ["left", "right", "top", "bottom"],
    },
  },
  hasHeader: {
    defaultValue: false,
    control: "boolean",
  },
  hasFooter: {
    defaultValue: false,
    control: "boolean",
  },
  hasCloseIcon: {
    defaultValue: false,
    control: "boolean",
  },
};
