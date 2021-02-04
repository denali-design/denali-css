export default {
  title: "Components/Controls/Toggle",
};

export const Default = ({ checked, disabled }) => {
  return `
    <label class="switch">
    <input type="checkbox"
        ${checked ? 'checked = ""' : ""}
        ${disabled ? 'disabled = ""' : ""} />
    <span class="slider"></span>
    <span class="off label">Toggle off</span>
    <span class="on label">Toggle on</span>
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
