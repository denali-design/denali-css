export default {
  title: "Components/InputGroup",
};

export const Default = ({ label, stackLabel, responsive, auto }) => {
  return `<div class="input-group 
            ${stackLabel ? "is-stacked" : ""} 
            ${responsive ? "responsive" : ""} 
            ${auto ? "auto" : ""}">
            <label>${label}</label>
             <div class="input">
                <input type="text" placeholder="Default field" />
             </div>
          </div>`;
};

Default.argTypes = {
  stackLabel: {
    defaultValue: false,
    control: "boolean",
  },
  responsive: {
    defaultValue: false,
    control: "boolean",
  },
  auto: {
    defaultValue: false,
    control: "boolean",
  },
  label: {
    defaultValue: "Label",
    control: "text",
  },
};
