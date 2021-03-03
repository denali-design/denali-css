export default {
    title: "Components/Checkbox",
  };
  
  export const Default = ({ checked, disabled, partial, text }) => {
    return `
    <div class="checkbox">
    <input id="denali-checkbox-1" type="checkbox" value="value1"
    ${checked ? 'checked = ""' : ""}
    ${partial ? 'data-partial=""' : ""}
    ${disabled ? 'disabled = ""' : ""} />
    <label for="denali-checkbox-1">${text}</label>
    </div>`;
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
    partial: {
        defaultValue: false,
        control: "boolean",
      },
    text: {
      defaultValue: "Checkbox",
      control: "text",
    },
  };
  
  export const CheckboxGroup = ({ size, footerHtml }) => {
    return `<div class="input-group">
    <label>Checkbox Grouping</label>
    <div class="checkbox">
      <input id="denali-checkbox-2" type="checkbox" value="">
      <label for="denali-checkbox-2">Checkbox</label>
    </div>
    <div class="checkbox">
      <input id="denali-checkbox-3" type="checkbox" value="">
      <label for="denali-checkbox-3">Checkbox</label>
    </div>
  </div>`;
  };
  