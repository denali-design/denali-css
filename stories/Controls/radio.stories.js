export default {
  title: "Components/Controls/Radio",
};

export const Default = ({ checked, disabled, text }) => {
  return `<div class="radio">
      <input type="radio" value="A" name="sample" id="radio-sample-a" 
      ${checked ? 'checked = ""' : ""}
      ${disabled ? 'disabled = ""' : ""} />
      <label for="radio-sample-a">${text}</label>
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
  text: {
    defaultValue: "Radio",
    control: "text",
  },
};

export const RadioGroup = ({ size, footerHtml }) => {
  return `<div class="input-group">
  <label>Radio Group</label>
  <div class="radio">
    <input type="radio" value="" name="sample-two" id="radio-sample-b">
    <label for="radio-sample-b">Radio 1</label>
  </div>
  <div class="radio">
    <input type="radio" value="" name="sample-two" id="radio-sample-c">
    <label for="radio-sample-c">Radio 2</label>
  </div>
</div>`;
};
