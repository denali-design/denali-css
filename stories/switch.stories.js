export default {
  title: "Components/Switch",
};

export const Default = ({ checked, disabled, toggleOnLabel, toggleOffLabel }) => {
  return `
    <label class="switch">
    <input type="checkbox"
        ${checked ? 'checked = ""' : ""}
        ${disabled ? 'disabled = ""' : ""} />
    <span class="slider"></span>
    <span class="off label">${toggleOnLabel}</span>
    <span class="on label">${toggleOffLabel}</span>
    </label>`;
};

Default.argTypes = {
  disabled: {
    defaultValue: false,
    control: "boolean",
  },
  checked: {
    defaultValue: false,
    control: "boolean",
  },
  toggleOnLabel: {
    defaultValue: 'On',
    control: "text",
  },
  toggleOffLabel: {
    defaultValue: 'Off',
    control: "text",
  },
};

export const SwitchGroup = ({ size, footerHtml }) => {
  return `<div class="input-group">
  <label>Switch Group</label>
  <label class="switch">
    <input type="checkbox" checked="">
    <span class="slider"></span>
    <span class="label">Toggle in input group</span>
  </label>
</div>`;
};
