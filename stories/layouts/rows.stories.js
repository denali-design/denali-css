export default {
  title: 'Layouts/Rows',
};

export const Playground = ({ reversed }) => {
  return (
    `<div class="container">
      <p>This is a row</p>
      <div class="row ${reversed ? 'reversed' : ''} has-bg-grey-400 p-10 br-4">
        <div class="col has-bg-violet-300 p-10 br-4">Column 1</div>
        <div class="col has-bg-violet-700 p-10 br-4">Column 2</div>
      </div>
    </div>`
  );
};

Playground.argTypes = {
  reversed: { 
    defaultValue: false,
    control: 'boolean',
  },
};
