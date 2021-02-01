export default {
  title: "Components/Tooltip",
};

export const Default = ({ text }) => {
  return `<span class="link d-tooltip" data-tooltip="${text}">Tooltip Default</span>`;
};

Default.argTypes = {
  text: {
    defaultValue: `I’m the tooltip text.`,
    control: "text",
  },
};

export const Position = ({ position, small }) => {
  return `<div class="flex justify-content-center m-t-40">
      <span class="link ${
        small ? `d-tooltip-${position}-small` : `d-tooltip-${position}`
      }" data-tooltip="I’m the ${position} tooltip.">Tooltip ${position}</span>
  </div>`;
};

Position.argTypes = {
  position: {
    defaultValue: "right",
    control: {
      type: "select",
      options: ["right", "top", "left"],
    },
  },
  small: {
    defaultValue: false,
    control: "boolean",
  },
};

export const OtherElements = () => {
    return `<i class="d-icon d-user-profile-circle is-medium d-tooltip-small" data-tooltip="Profile"></i>`;
}
