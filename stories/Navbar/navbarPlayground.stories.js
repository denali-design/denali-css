import denaliLogo from "./../../docs/images/denali-logo.svg";

export default {
  title: "Components/Navbar",
};

export const Playground = ({ active, fixedTop }) => {
  return `<nav class="nav ${fixedTop ? "is-fixed-top" : ""} ">
    <div class="nav-left">
      <img class="nav-brand" src=${denaliLogo} alt="" />
      <div class="float-right hide-small-desktop-up">
        <a class="nav-item" id="navToggle"><i class="d-icon d-more-vertical"></i></a>
      </div>
    </div>
    <div class="nav-responsive ${active ? "is-active" : ""}">
      <div class="nav-center">
        <a class="nav-item is-active">Home</a>
        <a class="nav-item">About</a>
        <a class="nav-item">Contact</a>
      </div>
      <div class="nav-right">
        <div class="menu menu--nav is-right">
          <div class="nav-item menu-trigger">Menu<i class="d-icon d-arrowhead-down is-small"></i></div>
          <div class="menu-content">
            <a>Menu Item #1</a>
            <a>Menu Item #2</a>
            <a>Menu Item #3</a>
          </div>
        </div>
        <a class="nav-item hide-tablet-down"><i class="d-icon d-dashboard"></i><span class="icon-name">Dashboard</span></a>
        <a class="nav-item"><i class="d-icon d-menu-dialpad"></i><span class="icon-name">Apps</span></a>
        <a class="nav-item"><i class="d-icon d-user-profile-circle"></i><span class="icon-name">Profile</span></a>
      </div>
    </div>
  </nav>`;
};

Playground.argTypes = {
  active: {
    defaultValue: false,
    control: "boolean",
  },
  fixedTop: {
    defaultValue: false,
    control: "boolean",
  },
};
