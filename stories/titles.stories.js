export default {
  title: "Components/Title",
};

export const Default = ({ wide, bgStatus, titleStyle, titleStatus, upper }) => {
  return `<div class="title">
        <span class="bar ${wide ? "is-wide" : ""}    
                         ${bgStatus ? `has-bg-status-${bgStatus}` : ""}">
        </span>
        <div class="title-text">
            <h3 class="${titleStyle ? `is-${titleStyle}` : ""} 
                       ${titleStatus ? `is-status-${titleStatus}` : ""}">Title Element</h3>
            <h6 class="${upper ? "upper" : ""}">Caption</h6>
        </div>
      </div>`;
};

Default.argTypes = {
  wide: {
    defaultValue: false,
    control: "boolean",
  },
  upper: {
    defaultValue: false,
    control: "boolean",
  },
  bgStatus: {
    control: {
      type: "select",
      options: ["info", "success", "warning", "danger"],
    },
  },
  titleStyle: {
    control: {
      type: "select",
      options: ["regular", "italic", "light", "bold", "mono"],
    },
  },
  titleStatus: {
    control: {
      type: "select",
      options: ["info", "success", "warning", "danger"],
    },
  },
};
