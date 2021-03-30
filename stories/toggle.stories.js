export default {
  title: "Components/Toggle",
};

export const List = () => {
  return `
    <div class="toggle">
    <ul>
        <li><a>Toggle 1</a></li>
        <li class="is-active"><a>Toggle 2</a></li>
        <li><a>Toggle 3</a></li>
        <li><a>Toggle 4</a></li>
        <li class="is-disabled"><a>Toggle 5</a></li>
    </ul>
</div>`;
};

export const Radio = () => {
  return `
  <div class="toggle">
	<input type="radio" id="radio-three" name="switch-two" value="" checked/>
	<label for="radio-three">One</label>
	<input type="radio" id="radio-four" name="switch-two" value="" />
	<label for="radio-four">Two</label>
	<input type="radio" id="radio-five" name="switch-two" value="" disabled/>
	<label for="radio-five">Three</label>
</div>`;
};

export const Small = () => {
  return `<div class="toggle is-small">
  <ul>
  <li class="is-active"><a>Toggle 1</a></li>
  <li><a>Toggle 2</a></li>
  </ul>
  </div>`;
};

export const IconList = () => {
  return `<div class="toggle is-small">
  <ul>
      <li class="is-active"><a><span class="d-icon d-add"></span></a></li>
      <li><a><span class="d-icon d-minus"></span></a></li>
  </ul>
</div>`;
};

export const IconRadio = () => {
  return `<div class="toggle has-icons">
  <input type="radio" id="radio-eight" name="switch-four" value="" checked />
  <label for="radio-eight">
    <span class="d-icon d-add"></span>
  </label>
  <input type="radio" id="radio-nine" name="switch-four" value="" />
  <label for="radio-nine">
    <span class="d-icon d-minus"></span>
  </label>
</div>`;
};