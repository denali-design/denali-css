const denaliLogo = "denali-logo.svg";
const paasLogo = "/paas-logo.png";

export default {
  title: "Components/Navbar/Elements",
};

export const Brand = () => {
  return `<nav class="nav">
  <div class="nav-left">
    <img class="nav-brand" src=${denaliLogo} alt="" />
  </div>
</nav>`;
};

export const Items = () => {
  return `<nav class="nav">
  <div class="nav-left">
    <img class="nav-brand" src=${denaliLogo} alt="" />
  </div>
  <div class="nav-responsive ">
    <div class="nav-right">
      <a class="nav-item is-active">Home</a>
      <a class="nav-item">About</a>
      <a class="nav-item">Contact</a>
    </div>
  </div>
</nav>`;
};



export const Icons = () => {
  return `<nav class="nav">
  <div class="nav-left">
    <img class="nav-brand" src= ${denaliLogo} alt="" />
  </div>
  <div class="nav-responsive">
    <div class="nav-right">
      <span class="nav-item"><i class="d-icon d-dashboard"></i></span>
      <span class="nav-item"><i class="d-icon d-menu-dialpad"></i></span>
      <span class="nav-item"><i class="d-icon d-user-profile-circle"></i></span>
    </div>
  </div>
</nav>`;
};


export const Control = () => {
  return `
  <nav class="nav">
  <div class="nav-left">
    <img class="nav-brand" src=${denaliLogo} alt="" />
  </div>
  <div class="nav-responsive">
    <div class="nav-right">
      <div class="nav-control">
        <div class="input has-icon-back is-inverse">
          <input type="text" placeholder="Search" /><a class="d-icon d-search"></a>
        </div>
      </div>
    </div>
  </div>
</nav>
    `;
};

export const Menu = () => {
  return`
  <nav class="nav">
  <div class="nav-left">
    <img class="nav-brand" src=${denaliLogo} alt="" />
  </div>
  <div class="nav-responsive">
    <div class="nav-right">
      <div class="menu menu--nav is-right">
        <div class="nav-item menu-trigger">Menu<i class="d-icon d-arrowhead-down is-small"></i></div>
        <div class="menu-content">
          <a>Menu Item #1</a>
          <a>Menu Item #2</a>
          <a>Menu Item #3</a>
        </div>
      </div>
    </div>
  </div>
</nav>`;
};

export const BackgroundModifier = () =>{
  return`
  <nav class="nav" style="background:#0C301E;">
  <div class="nav-left">
    <img class="nav-brand" src=${paasLogo} alt="" />
  </div>
</nav>
  `;
};
