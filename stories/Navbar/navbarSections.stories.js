import denaliLogo from "./../../docs/images/denali-logo.svg";

export default {
  title: "Components/Navbar/Sections",
};

export const Left = () => {
  return `<nav class="nav">
  <div class="nav-left">
    <img class="nav-brand" src=${denaliLogo} alt="" />
  </div>
</nav>`;
};

export const Center = () => {
  return `<nav class="nav">
  <div class="nav-left">
    <img class="nav-brand" src=${denaliLogo} alt="" />
  </div>
  <div class="nav-responsive is-active">
    <div class="nav-center">
      <span class="nav-item is-active">Center</span>
    </div>
  </div>
</nav>`;
};

export const Right = () => {
  return `
  <nav class="nav">
  <div class="nav-left">
    <img class="nav-brand" src=${denaliLogo} alt="" />
  </div>
  <div class="nav-responsive is-active">
    <div class="nav-right">
      <span class="nav-item"><i class="d-icon d-user-profile-circle"></i></span>
    </div>
  </div>
</nav>`;
};
