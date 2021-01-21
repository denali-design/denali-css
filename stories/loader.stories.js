export default {
  title: "Components/Loader",
};

export const Default = ({ inverse }) => {
  return `<div class="loader 
        ${inverse ? "loader--inverse" : ""} ">
      </div>`;
};

Default.argTypes = {
  inverse: {
    defaultValue: false,
    control: "boolean",
  },
};

export const LoaderButton = ({ style, inverse }) => {
  return `<a class="button ${style ? `is-${style}` : ""}">
      <div class="loader loader--button ${inverse ? "loader--inverse" : ""}">
      </div>
      </a>`;
};

LoaderButton.argTypes = {
  style: {
    control: {
      type: "select",
      options: ["default", "solid", "outline", "ghost", "text", "danger"],
    },
  },
  inverse: {
    defaultValue: false,
    control: "boolean",
  },
};
