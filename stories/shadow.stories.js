export default {
  title: "Components/Shadow",
};

export const Default = ({ type }) => {
  return `<div class="row">
            <div class="col br-8 ${type}" style="height: 100px;"></div>
      </div>`;
};

Default.argTypes = {
  type: {
    defaultValue: "shadow-1",
    control: {
      type: "select",
      options: ["shadow-1", "shadow-2", "shadow-3", "shadow-4", "shadow-5"],
    },
  },
};
